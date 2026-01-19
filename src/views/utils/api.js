// frontend/src/utils/api.js (crée ce fichier)
const API_BASE = 'http://localhost:8000/api';

export const apiService = {
  // Teste si l'API Django est disponible
  async testConnection() {
    try {
      const response = await fetch(`${API_BASE}/test/`);
      return response.ok;
    } catch (error) {
      return false;
    }
  },

  // Récupère les langages depuis Django
  async getLanguagesFromDjango() {
    try {
      const response = await fetch(`${API_BASE}/languages/`);
      if (!response.ok) throw new Error('API error');
      return await response.json();
    } catch (error) {
      console.warn('API Django non disponible, utilisation des données locales');
      return null;
    }
  },

  // Formatte les données Django pour correspondre à ton frontend
  formatLanguageForFrontend(djangoLang) {
    return {
      id: djangoLang.id,
      name: djangoLang.name,
      slug: djangoLang.slug,
      description: djangoLang.description,
      icon: djangoLang.icon,
      color: djangoLang.color,
      difficulty: djangoLang.difficulty,
      // Ajoute d'autres propriétés si nécessaire
    };
  }
};