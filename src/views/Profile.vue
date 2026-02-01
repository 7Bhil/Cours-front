<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 transition-colors duration-300">
    <div class="max-w-4xl mx-auto">
      <!-- Guest Warning Banner -->
      <div v-if="!user" class="mb-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-xl shadow-sm">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-bold text-yellow-800 dark:text-yellow-200">
              Attention : Compte invité
            </h3>
            <div class="mt-2 text-yellow-700 dark:text-yellow-300">
              <p>
                Si vous ne créez pas de compte, votre niveau de progression sera 
                <span class="font-bold underline">réinitialisé définitivement</span> 
                à la prochaine reconnexion ou fermeture du navigateur.
              </p>
            </div>
            <div class="mt-4">
              <div class="-mx-2 -my-1.5 flex">
                <router-link 
                  to="/register" 
                  class="px-4 py-2 bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 rounded-lg font-bold hover:bg-yellow-200 dark:hover:bg-yellow-700 transition"
                >
                  Créer un compte maintenant
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Header -->
      <div class="flex justify-between items-center mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow transition-colors">
        <div>
          <h1 class="text-3xl font-bold text-gray-800 dark:text-white">👤 Mon Profil</h1>
          <p class="text-gray-600 dark:text-gray-400 mt-1">Gérez vos informations personnelles</p>
        </div>
        <div class="flex gap-3">
          <RouterLink 
            to="/" 
            class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            ← Dashboard
          </RouterLink>
          <button 
            v-if="user"
            @click="logout"
            class="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition"
          >
            Déconnexion
          </button>
          <RouterLink 
            v-else
            to="/login"
            class="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition"
          >
            Se connecter
          </RouterLink>
        </div>
      </div>

      <div v-if="user" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Carte Info Utilisateur -->
        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-colors">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <span class="text-3xl text-indigo-600 dark:text-indigo-400">
                  {{ userInitials }}
                </span>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white">{{ fullName }}</h2>
                <p class="text-gray-600 dark:text-gray-400">{{ user?.email }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Membre depuis {{ formattedDate }}
                </p>
              </div>
            </div>

            <!-- Informations -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">Prénom</label>
                  <p class="mt-1 text-lg text-gray-900 dark:text-white">{{ user?.first_name || 'Non renseigné' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">Nom</label>
                  <p class="mt-1 text-lg text-gray-900 dark:text-white">{{ user?.last_name || 'Non renseigné' }}</p>
                </div>
              </div>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
                  <p class="mt-1 text-lg text-gray-900 dark:text-white">{{ user?.email }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">Username</label>
                  <p class="mt-1 text-lg text-gray-900 dark:text-white">{{ user?.username }}</p>
                </div>
              </div>
            </div>

            <!-- Bouton Édition -->
            <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
              <button 
                @click="editMode = !editMode"
                class="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
              >
                {{ editMode ? 'Annuler' : 'Modifier mon profil' }}
              </button>
            </div>
          </div>

          <!-- Formulaire Édition (optionnel) -->
          <div v-if="editMode" class="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-colors">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Modifier les informations</h3>
            <form @submit.prevent="updateProfile" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prénom</label>
                  <input 
                    v-model="editForm.first_name"
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                  <input 
                    v-model="editForm.last_name"
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  v-model="editForm.email"
                  type="email"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <button 
                type="submit"
                class="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
              >
                Enregistrer les modifications
              </button>
            </form>
          </div>
        </div>

        <!-- Section Progression -->
        <div class="lg:col-span-3">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-colors">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-6">🏆 Mes Compétences</h3>
            
            <div v-if="userProgress.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <transition-group name="list">
              <div v-for="(item, index) in userProgress" :key="item.language || index" 
                   class="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-700 flex flex-col items-center relative overflow-hidden group hover:shadow-lg transition">
                
                <!-- Badge de complétion -->
                <div v-if="item.progress_data.score >= 100" class="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-xl shadow-sm z-10">
                  MAÎTRISÉ
                </div>

                <!-- Cercle de progression -->
                <div class="relative w-32 h-32 mb-4">
                  <!-- SVG Circle -->
                  <svg class="w-full h-full transform -rotate-90">
                    <circle
                      cx="64" cy="64" r="56"
                      stroke="currentColor" stroke-width="8"
                      fill="transparent"
                      class="text-gray-200 dark:text-gray-700"
                    />
                    <circle
                      cx="64" cy="64" r="56"
                      stroke="currentColor" stroke-width="8"
                      fill="transparent"
                      :class="item.progress_data.score >= 100 ? 'text-yellow-500' : 'text-blue-600 dark:text-blue-500'"
                      :stroke-dasharray="2 * Math.PI * 56"
                      :stroke-dashoffset="2 * Math.PI * 56 * (1 - item.progress_data.score / 100)"
                      class="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  
                  <!-- Icone centrée -->
                  <div class="absolute inset-0 flex items-center justify-center flex-col">
                    <span class="text-3xl mb-1 filter drop-shadow-sm">
                      {{ getLanguageIcon(item.language) }}
                    </span>
                    <span class="text-sm font-bold text-gray-700 dark:text-gray-300">
                      {{ Math.round(item.progress_data.percentage || item.progress_data.score || 0) }}%
                    </span>
                  </div>
                </div>

                <h4 class="font-bold text-gray-800 dark:text-white text-lg mb-1">{{ item.language }}</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                  {{ item.progress_data.chapter }}
                </p>

                <div v-if="item.progress_data.score >= 100" class="mt-auto flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-bold text-sm bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full">
                  <span>🏅 Badge obtenu</span>
                </div>
                <router-link v-else :to="'/langages/' + item.language.toLowerCase()" class="mt-auto text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm">
                  Continuer →
                </router-link>
              </div>
              </transition-group>
            </div>
            <div v-else class="text-center py-10 bg-gray-50 dark:bg-gray-900 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
               <span class="text-4xl block mb-2">🎓</span>
               <p class="text-gray-500 dark:text-gray-400">Aucune progression enregistrée pour le moment.</p>
               <router-link to="/langages" class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition lg:text-sm">
                 Commencer un cours
               </router-link>
            </div>
          </div>
        </div>

        <!-- Carte Token & Sécurité -->
        <div v-if="user" class="space-y-6">
          <!-- Token Info -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-colors">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">🔐 Sécurité</h3>
            
            <div class="space-y-4">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Statut de connexion</p>
                <p class="font-medium text-green-600 dark:text-green-400">✅ Connecté</p>
              </div>
              
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Token JWT (extrait)</p>
                <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-mono text-xs break-all text-gray-600 dark:text-gray-400">
                  {{ tokenPreview }}
                </div>
              </div>
              
              <div class="space-y-2">
                <button 
                  @click="refreshToken"
                  class="w-full px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-900/50 transition text-sm font-medium"
                >
                  🔄 Rafraîchir le token
                </button>
                
                <button 
                  @click="testProfileAPI"
                  class="w-full px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition text-sm font-medium"
                >
                  🧪 Tester l'API Profile
                </button>
              </div>
            </div>
          </div>

          <!-- Informations Compte -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-colors">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">📊 Compte</h3>
            
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">ID Utilisateur</span>
                <span class="font-medium text-gray-900 dark:text-white">#{{ user?.id }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">Type de compte</span>
                <span class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded text-xs font-medium">
                  {{ user?.is_superuser ? 'Administrateur' : 'Utilisateur' }}
                </span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">Dernière connexion</span>
                <span class="font-medium text-gray-900 dark:text-white">À l'instant</span>
              </div>
            </div>
          </div>

          <!-- Actions Rapides -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-colors">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">⚡ Actions</h3>
            
            <div class="space-y-3">
              <RouterLink 
                to="/" 
                class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition"
              >
                <span class="text-2xl">📊</span>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">Tableau de bord</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Retour au dashboard</p>
                </div>
              </RouterLink>
              
              <button 
                @click="makeTestPrediction"
                class="w-full flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition text-left"
              >
                <span class="text-2xl">🤖</span>
                <div>
                  <p class="font-medium text-green-900 dark:text-green-100">Tester ML</p>
                  <p class="text-sm text-green-700 dark:text-green-300">Faire une prédiction test</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Debug Info (optionnel) -->
      <div v-if="debugInfo" class="mt-6 bg-gray-900 text-gray-100 rounded-2xl p-6">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-lg font-mono">🛠️ Debug Information</h3>
          <button @click="debugInfo = null" class="text-sm text-gray-400">× Fermer</button>
        </div>
        <pre class="text-sm overflow-auto max-h-96">{{ JSON.stringify(debugInfo, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { apiService } from '../services/api';

const router = useRouter();

// Données
const user = ref(null);
const userProgress = ref([]);
const editMode = ref(false);
const debugInfo = ref(null);
const editForm = reactive({
  first_name: '',
  last_name: '',
  email: ''
});

// Computed properties
const userInitials = computed(() => {
  if (!user.value) return '?';
  const first = user.value.first_name?.[0] || '';
  const last = user.value.last_name?.[0] || '';
  return (first + last).toUpperCase() || user.value.email?.[0].toUpperCase() || 'U';
});

const fullName = computed(() => {
  if (!user.value) return 'Utilisateur';
  return `${user.value.first_name || ''} ${user.value.last_name || ''}`.trim() || user.value.email;
});

const formattedDate = computed(() => {
  if (!user.value?.date_joined) return '';
  const date = new Date(user.value.date_joined);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

const tokenPreview = computed(() => {
  const token = localStorage.getItem('token');
  if (!token) return 'Aucun token';
  return `${token.substring(0, 25)}...${token.substring(token.length - 25)}`;
});



const getLanguageIcon = (lang) => {
  const map = {
    'JavaScript': '⚡',
    'Python': '🐍',
    'Java': '☕',
    'C': '🇨',
    'C++': '➕',
    'Ruby': '💎',
    'HTML/CSS': '🎨'
  };
  return map[lang] || '📘';
};
const loadUserProfile = async () => {
  try {
    const response = await apiService.getProfile();
    if (response.success) {
      user.value = response.data;
      // Pré-remplir le formulaire d'édition
      editForm.first_name = response.data.first_name || '';
      editForm.last_name = response.data.last_name || '';
      editForm.email = response.data.email || '';
    } else {
      console.warn('Utilisateur non connecté (Guest Mode)');
      user.value = null;
      // Ne pas rediriger vers login pour afficher le warning guest
    }

    // Charger la progression
    const progressResponse = await apiService.getAllProgress();
    
    if (progressResponse.success) {
      // Filter to only show valid languages
      const validLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'C', 'Ruby'];
      userProgress.value = progressResponse.data.filter(item => {
        const lang = item.language;
        return validLanguages.includes(lang) || validLanguages.some(vl => vl.toLowerCase() === lang.toLowerCase());
      });
    }

  } catch (error) {
    console.warn('Mode invité :', error);
    user.value = null;
    // Ne pas rediriger vers login
  }
};

const updateProfile = async () => {
  try {
    // ICI TU DEVRAIS CRÉER UNE API PATCH /api/auth/update/
    // Pour l'instant, simulation
    alert('⚠️ Fonctionnalité à implémenter : API de mise à jour du profil');
    editMode.value = false;
  } catch (error) {
    console.error('Erreur mise à jour:', error);
  }
};

const refreshToken = async () => {
  try {
    const refreshed = await apiService.refreshTokens();
    if (refreshed) {
      alert('✅ Token rafraîchi avec succès !');
      debugInfo.value = { 
        message: 'Token rafraîchi',
        newToken: localStorage.getItem('token')?.substring(0, 30) + '...'
      };
    }
  } catch (error) {
    alert('❌ Erreur rafraîchissement token');
    console.error(error);
  }
};

const testProfileAPI = async () => {
  try {
    const response = await apiService.getProfile();
    debugInfo.value = {
      endpoint: '/api/auth/profile/',
      status: 'success',
      data: response,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    debugInfo.value = {
      endpoint: '/api/auth/profile/',
      status: 'error',
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
};

const makeTestPrediction = async () => {
  try {
    const response = await apiService.makePrediction([5.1, 3.5, 1.4, 0.2], 'iris_classifier');
    debugInfo.value = {
      endpoint: '/api/predict/',
      status: 'success',
      data: response,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    debugInfo.value = {
      endpoint: '/api/predict/',
      status: 'error',
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
};

const logout = async () => {
  try {
    await apiService.logout();
  } catch (error) {
    console.error('Erreur déconnexion:', error);
  } finally {
    router.push('/login');
  }
};

// Lifecycle
onMounted(() => {
  loadUserProfile();
});
</script>