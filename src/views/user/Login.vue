<!-- Login.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Connexion</h1>
        <p class="text-gray-600">Content de vous revoir !</p>
      </div>

      <!-- OAuth Buttons -->
      <div class="space-y-3 mb-6">
        <button
          @click="handleGoogleLogin"
          class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
        >
          <!-- SVG Google -->
          <span class="font-medium text-gray-700">Continuer avec Google</span>
        </button>

        <button
          @click="handleGithubLogin"
          class="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-200"
        >
          <!-- SVG GitHub -->
          <span class="font-medium">Continuer avec GitHub</span>
        </button>
      </div>

      <div class="relative mb-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-4 bg-white text-gray-500">Ou avec email</span>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="john@example.com"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
        </div>

        <!-- Password -->
        <div>
          <div class="flex justify-between items-center mb-1">
            <label for="password" class="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <RouterLink 
              to="/forgot-password" 
              class="text-xs text-indigo-600 hover:text-indigo-700"
            >
              Mot de passe oublié ?
            </RouterLink>
          </div>
          <div class="relative">
            <input
              id="password"
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition pr-10"
              :class="{ 'border-red-500': errors.password }"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
          <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
        </div>

        <!-- Remember me -->
        <div class="flex items-center">
          <input
            id="remember"
            v-model="formData.remember"
            type="checkbox"
            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label for="remember" class="ml-2 text-sm text-gray-600">
            Se souvenir de moi
          </label>
        </div>

        <!-- Message d'erreur/succès -->
        <div v-if="loginError" class="p-3 rounded-lg" :class="loginError.startsWith('✅') ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <p class="text-sm font-medium" :class="loginError.startsWith('✅') ? 'text-green-600' : 'text-red-600'">
            {{ loginError }}
          </p>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isLoading">
            <svg class="animate-spin h-5 w-5 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Connexion...
          </span>
          <span v-else>
            Se connecter
          </span>
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-gray-600 text-sm">
          Pas encore de compte ?
          <RouterLink to="/register" class="text-indigo-600 hover:text-indigo-700 font-medium">S'inscrire</RouterLink>
        </p>
      </div>

      <!-- Section test -->
      <div class="mt-4 p-3 bg-gray-50 rounded-lg">
        <p class="text-xs text-gray-500 mb-2">💡 Pour tester :</p>
        <button 
          @click="fillTestData"
          class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded text-xs hover:bg-indigo-200 mr-2"
        >
          Utilisateur test
        </button>
        <button 
          @click="fillAdminData"
          class="px-3 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200"
        >
          Administrateur
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { apiService } from '../../services/api';

const router = useRouter();

const formData = reactive({
  email: '',
  password: '',
  remember: false
});

const errors = reactive({});
const showPassword = ref(false);
const isLoading = ref(false);
const loginError = ref('');

const validateForm = () => {
  Object.keys(errors).forEach(key => delete errors[key]);
  loginError.value = '';
  
  let isValid = true;
  
  if (!formData.email.trim()) {
    errors.email = "L'email est requis";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email invalide';
    isValid = false;
  }
  
  if (!formData.password) {
    errors.password = 'Le mot de passe est requis';
    isValid = false;
  }
  
  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isLoading.value = true;
  loginError.value = '';
  
  try {
    const credentials = {
      email: formData.email,
      password: formData.password
    };
    
    const response = await apiService.login(credentials);
    
    if (response.success === false) {
      // Ensure loginError is always a string
      if (typeof response.error === 'string') {
        loginError.value = response.error;
      } else if (response.error && typeof response.error === 'object') {
        loginError.value = JSON.stringify(response.error);
      } else {
        loginError.value = 'Identifiants incorrects';
      }
      
      if (response.errors) {
        if (response.errors.email) {
          errors.email = Array.isArray(response.errors.email) 
            ? response.errors.email.join(', ') 
            : response.errors.email;
        }
        if (response.errors.password) {
          errors.password = Array.isArray(response.errors.password) 
            ? response.errors.password.join(', ') 
            : response.errors.password;
        }
        if (response.errors.detail) {
          loginError.value = response.errors.detail;
        }
      }
    } else {
      loginError.value = '✅ Connexion réussie ! Redirection...';
      
      setTimeout(() => {
        // Redirection vers la page d'accueil ou dashboard
        router.push('/');
      }, 1500);
    }
    
  } catch (error) {
    console.error('❌ Erreur:', error);
    loginError.value = 'Une erreur est survenue. Réessayez.';
  } finally {
    isLoading.value = false;
  }
};

const handleGoogleLogin = () => {
  console.log('Google login (à implémenter)');
};

const handleGithubLogin = () => {
  console.log('GitHub login (à implémenter)');
};

const fillTestData = () => {
  formData.email = 'user@test.com';
  formData.password = 'Test123!';
};

const fillAdminData = () => {
  formData.email = 'admin@example.com';
  formData.password = 'admin123';
};
</script>