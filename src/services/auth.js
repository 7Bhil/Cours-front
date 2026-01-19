// services/auth.js
import { apiService } from './api';

export const authService = {
  // Vérification rapide de l'authentification
  checkAuth() {
    return apiService.isAuthenticated();
  },
  
  // Récupérer l'utilisateur courant
  getCurrentUser() {
    return apiService.getCurrentUser();
  },
  
  // Inscription avec validation avancée
  async register(userData) {
    // Validation côté frontend
    const validation = this.validateRegisterData(userData);
    if (!validation.valid) {
      return {
        success: false,
        error: validation.message,
        errors: validation.errors
      };
    }
    
    return await apiService.register(userData);
  },
  
  // Connexion avec validation
  async login(email, password) {
    if (!email || !password) {
      return {
        success: false,
        error: 'Email et mot de passe requis'
      };
    }
    
    return await apiService.login({ email, password });
  },
  
  // Déconnexion
  async logout() {
    return await apiService.logout();
  },
  
  // Validation des données d'inscription
  validateRegisterData(userData) {
    const errors = {};
    
    // Validation username
    if (!userData.username || userData.username.length < 3) {
      errors.username = 'Le nom d\'utilisateur doit contenir au moins 3 caractères';
    }
    
    // Validation email
    if (!userData.email || !/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = 'Email invalide';
    }
    
    // Validation password
    if (!userData.password) {
      errors.password = 'Mot de passe requis';
    } else if (userData.password.length < 8) {
      errors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(userData.password)) {
      errors.password = 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre';
    }
    
    // Validation confirmation password
    if (userData.password !== userData.password2) {
      errors.password2 = 'Les mots de passe ne correspondent pas';
    }
    
    return {
      valid: Object.keys(errors).length === 0,
      errors,
      message: Object.keys(errors).length > 0 ? 'Données invalides' : ''
    };
  }
};