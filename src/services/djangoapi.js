// frontend/src/services/djangoApi.js
const API_BASE_URL = 'http://localhost:8000/api';

export const djangoApi = {
  // Sauvegarder la progression
  async saveProgress(language, progressData) {
    try {
      const response = await fetch(`${API_BASE_URL}/progress/save/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: language,
          progress_data: progressData
        })
      });
      
      return await response.json();
    } catch (error) {
      console.error('Erreur sauvegarde API:', error);
      return { success: false, error: error.message };
    }
  },
  
  // Charger la progression
  async loadProgress(language) {
    try {
      const response = await fetch(`${API_BASE_URL}/progress/load/${language}/`);
      return await response.json();
    } catch (error) {
      console.error('Erreur chargement API:', error);
      return { success: false, error: error.message };
    }
  },
  
  // Récupérer les langages
  async getLanguages() {
    try {
      const response = await fetch(`${API_BASE_URL}/languages/`);
      return await response.json();
    } catch (error) {
      console.error('Erreur chargement langages:', error);
      return [];
    }
  },
  
  // Tester la connexion
  async testConnection() {
    try {
      const response = await fetch(`${API_BASE_URL}/test/`);
      return response.ok;
    } catch (error) {
      return false;
    }
  }
};