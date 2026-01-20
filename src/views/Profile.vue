<!-- src/views/Profile.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8 p-6 bg-white rounded-2xl shadow">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">👤 Mon Profil</h1>
          <p class="text-gray-600 mt-1">Gérez vos informations personnelles</p>
        </div>
        <div class="flex gap-3">
          <RouterLink 
            to="/" 
            class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
          >
            ← Dashboard
          </RouterLink>
          <button 
            @click="logout"
            class="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
          >
            Déconnexion
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Carte Info Utilisateur -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow p-6">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
                <span class="text-3xl text-indigo-600">
                  {{ userInitials }}
                </span>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-800">{{ fullName }}</h2>
                <p class="text-gray-600">{{ user?.email }}</p>
                <p class="text-sm text-gray-500 mt-1">
                  Membre depuis {{ formattedDate }}
                </p>
              </div>
            </div>

            <!-- Informations -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-500">Prénom</label>
                  <p class="mt-1 text-lg">{{ user?.first_name || 'Non renseigné' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-500">Nom</label>
                  <p class="mt-1 text-lg">{{ user?.last_name || 'Non renseigné' }}</p>
                </div>
              </div>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-500">Email</label>
                  <p class="mt-1 text-lg">{{ user?.email }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-500">Username</label>
                  <p class="mt-1 text-lg">{{ user?.username }}</p>
                </div>
              </div>
            </div>

            <!-- Bouton Édition -->
            <div class="mt-8 pt-6 border-t border-gray-100">
              <button 
                @click="editMode = !editMode"
                class="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
              >
                {{ editMode ? 'Annuler' : 'Modifier mon profil' }}
              </button>
            </div>
          </div>

          <!-- Formulaire Édition (optionnel) -->
          <div v-if="editMode" class="mt-6 bg-white rounded-2xl shadow p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Modifier les informations</h3>
            <form @submit.prevent="updateProfile" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input 
                    v-model="editForm.first_name"
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input 
                    v-model="editForm.last_name"
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  v-model="editForm.email"
                  type="email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg"
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

        <!-- Section Progression (Nouvelle) -->
        <div class="lg:col-span-3">
          <div class="bg-white rounded-2xl shadow p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-6">🏆 Mes Compétences</h3>
            
            <div v-if="userProgress.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div v-for="(item, index) in userProgress" :key="index" 
                   class="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col items-center relative overflow-hidden group hover:shadow-lg transition">
                
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
                      class="text-gray-200"
                    />
                    <circle
                      cx="64" cy="64" r="56"
                      stroke="currentColor" stroke-width="8"
                      fill="transparent"
                      :class="item.progress_data.score >= 100 ? 'text-yellow-500' : 'text-blue-600'"
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
                    <span class="text-sm font-bold text-gray-700">
                      {{ item.progress_data.percentage || item.progress_data.score || 0 }}%
                    </span>
                  </div>
                </div>

                <h4 class="font-bold text-gray-800 text-lg mb-1">{{ item.language }}</h4>
                <p class="text-sm text-gray-500 mb-4 text-center">
                  {{ item.progress_data.chapter }}
                </p>

                <div v-if="item.progress_data.score >= 100" class="mt-auto flex items-center gap-2 text-yellow-600 font-bold text-sm bg-yellow-50 px-3 py-1 rounded-full">
                  <span>🏅 Badge obtenu</span>
                </div>
                <router-link v-else :to="'/langages/' + item.language.toLowerCase()" class="mt-auto text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Continuer →
                </router-link>
              </div>
            </div>
            <div v-else class="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300">
               <span class="text-4xl block mb-2">🎓</span>
               <p class="text-gray-500">Aucune progression enregistrée pour le moment.</p>
               <router-link to="/langages" class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition lg:text-sm">
                 Commencer un cours
               </router-link>
            </div>
          </div>
        </div>

        <!-- Carte Token & Sécurité -->
        <div class="space-y-6">
          <!-- Token Info -->
          <div class="bg-white rounded-2xl shadow p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">🔐 Sécurité</h3>
            
            <div class="space-y-4">
              <div>
                <p class="text-sm text-gray-500">Statut de connexion</p>
                <p class="font-medium text-green-600">✅ Connecté</p>
              </div>
              
              <div>
                <p class="text-sm text-gray-500 mb-1">Token JWT (extrait)</p>
                <div class="p-3 bg-gray-50 rounded-lg font-mono text-xs break-all">
                  {{ tokenPreview }}
                </div>
              </div>
              
              <div class="space-y-2">
                <button 
                  @click="refreshToken"
                  class="w-full px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition text-sm font-medium"
                >
                  🔄 Rafraîchir le token
                </button>
                
                <button 
                  @click="testProfileAPI"
                  class="w-full px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition text-sm font-medium"
                >
                  🧪 Tester l'API Profile
                </button>
              </div>
            </div>
          </div>

          <!-- Informations Compte -->
          <div class="bg-white rounded-2xl shadow p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">📊 Compte</h3>
            
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">ID Utilisateur</span>
                <span class="font-medium">#{{ user?.id }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600">Type de compte</span>
                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs font-medium">
                  {{ user?.is_superuser ? 'Administrateur' : 'Utilisateur' }}
                </span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600">Dernière connexion</span>
                <span class="font-medium">À l'instant</span>
              </div>
            </div>
          </div>

          <!-- Actions Rapides -->
          <div class="bg-white rounded-2xl shadow p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">⚡ Actions</h3>
            
            <div class="space-y-3">
              <RouterLink 
                to="/" 
                class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition"
              >
                <span class="text-2xl">📊</span>
                <div>
                  <p class="font-medium">Tableau de bord</p>
                  <p class="text-sm text-gray-500">Retour au dashboard</p>
                </div>
              </RouterLink>
              
              <button 
                @click="makeTestPrediction"
                class="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition text-left"
              >
                <span class="text-2xl">🤖</span>
                <div>
                  <p class="font-medium">Tester ML</p>
                  <p class="text-sm text-gray-500">Faire une prédiction test</p>
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
        <pre class="text-sm overflow-auto">{{ JSON.stringify(debugInfo, null, 2) }}</pre>
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
      console.error('Erreur chargement profil:', response);
      router.push('/login');
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
    console.error('Erreur API:', error);
    router.push('/login');
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