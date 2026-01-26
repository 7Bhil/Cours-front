// services/api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Gestion des erreurs
const handleApiError = (error, defaultMessage = 'Une erreur est survenue') => {
  console.error('API Error:', error);
  
  let message = defaultMessage;
  let errors = {};
  
  if (error.response) {
    if (error.response.data) {
      if (error.response.data.detail) {
        message = error.response.data.detail;
      } else if (error.response.data.message) {
        message = error.response.data.message;
      }
      errors = error.response.data;
    }
  }
  
  return {
    success: false,
    error: message,
    errors: errors
  };
};

// Fonctions API
export const apiService = {
  // AUTH
  async register(userData) {
    try {
      const response = await apiClient.post('/auth/register/', userData);
      
      if (response.data.access) {
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      return {
        success: true,
        data: response.data,
        message: response.data.message || 'Inscription réussie !'
      };
    } catch (error) {
      return handleApiError(error, 'Erreur lors de l\'inscription');
    }
  },

  async login(credentials) {
    try {
      const response = await apiClient.post('/auth/login/', credentials);
      
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      return {
        success: true,
        data: response.data,
        message: response.data.message || 'Connexion réussie !'
      };
    } catch (error) {
      return handleApiError(error, 'Identifiants incorrects');
    }
  },

  async logout() {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        await apiClient.post('/auth/logout/', { refresh: refreshToken });
      }
    } catch (error) {
      // Ignorer les erreurs de déconnexion
    } finally {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
    }
    
    return { success: true, message: 'Déconnecté' };
  },

  async getProfile() {
    try {
      const response = await apiClient.get('/auth/profile/');
      localStorage.setItem('user', JSON.stringify(response.data));
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error, 'Impossible de récupérer le profil');
    }
  },

  async getAllProgress() {
    try {
      // Endpoint that returns list of all progress items
      const response = await apiClient.get('/progress/save/'); 
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error, 'Erreur lors de la récupération de la progression');
    }
  },

  // TASKS
  async getTasks() {
    try {
      const response = await apiClient.get('/tasks/');
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error, 'Erreur lors de la récupération des tâches');
    }
  },

  async createTask(taskData) {
    try {
      const response = await apiClient.post('/tasks/', taskData);
      return {
        success: true,
        data: response.data,
        message: 'Tâche créée avec succès'
      };
    } catch (error) {
      return handleApiError(error, 'Erreur lors de la création de la tâche');
    }
  },

  // UTILS
  isAuthenticated() {
    return !!localStorage.getItem('access_token');
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
};

// Export par défaut (optionnel)
export default apiService;