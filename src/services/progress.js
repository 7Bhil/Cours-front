// src/services/progressService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';
const apiClient = axios.create({ baseURL: API_BASE_URL });

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const progressService = {
  // Méthode pour synchroniser la progression
  async syncAll() {
    console.log('🔁 Synchronisation de la progression...');
    
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
         console.log('Utilisateur non connecté, synchronisation ignorée');
         return { success: true, synced: false };
      }

      // Récupérer la progression locale
      const localProgress = this.loadProgress() || {};
      
      // Sauvegarder chaque langage sur le serveur
      // Note: Idéalement, on aurait un endpoint pour tout envoyer d'un coup,
      // mais ici on itère sur les clés (langages)
      const promises = Object.keys(localProgress).map(async (lang) => {
         try {
             await apiClient.post('/progress/save/', {
                 language: lang,
                 progress_data: localProgress[lang]
             });
         } catch (e) {
             console.error(`Echec sauvegarde ${lang}:`, e);
         }
      });

      await Promise.all(promises);
      
      console.log('✅ Progression synchronisée avec le serveur');
      return { success: true, synced: true };
      
    } catch (error) {
      console.error('❌ Erreur de synchronisation:', error);
      return { success: false, error: error.message };
    }
  },
  
  // Sauvegarder la progression
  async saveProgress(data, language = 'global') {
    try {
      // 1. Sauvegarde locale
      let currentProgress = this.loadProgress() || {};
      currentProgress[language] = data;
      localStorage.setItem('userProgress', JSON.stringify(currentProgress));

      // 2. Sauvegarde distante si connecté
      const token = localStorage.getItem('access_token');
      if (token) {
          apiClient.post('/progress/save/', {
            language: language,
            progress_data: data
          }).catch(err => console.error('Erreur sauvegarde cloud:', err));
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
  
  // Charger la progression locale
  loadProgress() {
    try {
      const progress = localStorage.getItem('userProgress');
      return progress ? JSON.parse(progress) : null;
    } catch (error) {
      console.error('Erreur de chargement:', error);
      return null;
    }
  },
  
  // Réinitialiser la progression
  resetProgress() {
    localStorage.removeItem('userProgress');
    return { success: true };
  }
};

export default progressService;