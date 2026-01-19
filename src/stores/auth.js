// stores/auth.js
import { defineStore } from 'pinia';
import { apiService } from '../services/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
  }),

  actions: {
    async initialize() {
      // Vérifier l'authentification au démarrage
      const token = localStorage.getItem('access_token');
      const userStr = localStorage.getItem('user');
      
      if (token && userStr) {
        try {
          this.user = JSON.parse(userStr);
          this.isAuthenticated = true;
          
          // Optionnel: Vérifier la validité du token
          await apiService.getProfile();
        } catch (error) {
          this.logout();
        }
      }
    },

    async register(userData) {
      this.loading = true;
      this.error = null;
      
      try {
        const result = await apiService.register(userData);
        
        if (result.success) {
          this.user = result.data.user;
          this.isAuthenticated = true;
          return { success: true };
        } else {
          this.error = result.error;
          return { success: false, error: result.error, errors: result.errors };
        }
      } catch (error) {
        this.error = 'Erreur lors de l\'inscription';
        return { success: false, error: 'Erreur lors de l\'inscription' };
      } finally {
        this.loading = false;
      }
    },

    async login(credentials) {
      this.loading = true;
      this.error = null;
      
      try {
        const result = await apiService.login(credentials);
        
        if (result.success) {
          this.user = result.data.user;
          this.isAuthenticated = true;
          return { success: true };
        } else {
          this.error = result.error;
          return { success: false, error: result.error };
        }
      } catch (error) {
        this.error = 'Erreur lors de la connexion';
        return { success: false, error: 'Erreur lors de la connexion' };
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      await apiService.logout();
      this.user = null;
      this.isAuthenticated = false;
      this.error = null;
    },

    async updateProfile(profileData) {
      try {
        const result = await apiService.updateProfile(profileData);
        
        if (result.success) {
          this.user = result.data.user;
          return { success: true, user: this.user };
        } else {
          return { success: false, error: result.error };
        }
      } catch (error) {
        return { success: false, error: 'Erreur lors de la mise à jour du profil' };
      }
    }
  },

  getters: {
    getUser: (state) => state.user,
    getIsAuthenticated: (state) => state.isAuthenticated,
    getLoading: (state) => state.loading,
    getError: (state) => state.error
  }
});