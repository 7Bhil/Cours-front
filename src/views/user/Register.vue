<!-- Register.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Inscription</h1>
        <p class="text-gray-600">Créez votre compte pour commencer !</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <!-- Username -->
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-1">
            Nom d'utilisateur
          </label>
          <input
            id="username"
            v-model="formData.username"
            type="text"
            placeholder="johndoe"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            :class="{ 'border-red-500': errors.username }"
          />
          <p v-if="errors.username" class="text-red-500 text-xs mt-1">{{ errors.username }}</p>
        </div>

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
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Mot de passe
          </label>
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

        <!-- Confirm Password -->
        <div>
          <label for="password_confirm" class="block text-sm font-medium text-gray-700 mb-1">
            Confirmer le mot de passe
          </label>
          <div class="relative">
            <input
              id="password_confirm"
              v-model="formData.password_confirm"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition pr-10"
              :class="{ 'border-red-500': errors.password_confirm }"
            />
          </div>
          <p v-if="errors.password_confirm" class="text-red-500 text-xs mt-1">{{ errors.password_confirm }}</p>
        </div>

        <!-- Message d'erreur/succès -->
        <div v-if="registerError" class="p-3 rounded-lg" :class="(typeof registerError === 'string' && registerError.startsWith('✅')) ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <p class="text-sm font-medium" :class="(typeof registerError === 'string' && registerError.startsWith('✅')) ? 'text-green-600' : 'text-red-600'">
            {{ registerError }}
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
            Inscription...
          </span>
          <span v-else>
            S'inscrire
          </span>
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-gray-600 text-sm">
          Déjà un compte ?
          <RouterLink to="/login" class="text-indigo-600 hover:text-indigo-700 font-medium">Se connecter</RouterLink>
        </p>
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
  username: '',
  email: '',
  password: '',
  password_confirm: ''
});

const errors = reactive({});
const showPassword = ref(false);
const isLoading = ref(false);
const registerError = ref('');

const validateForm = () => {
  Object.keys(errors).forEach(key => delete errors[key]);
  registerError.value = '';
  
  let isValid = true;
  
  if (!formData.username.trim()) {
    errors.username = "Le nom d'utilisateur est requis";
    isValid = false;
  }

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

  if (formData.password !== formData.password_confirm) {
    errors.password_confirm = 'Les mots de passe ne correspondent pas';
    isValid = false;
  }
  
  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isLoading.value = true;
  registerError.value = '';
  
  try {
    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      password_confirm: formData.password_confirm
    };
    
    console.log('Envoi inscription:', userData);
    const response = await apiService.register(userData);
    console.log('Réponse inscription:', response);
    
    if (response.success === false) {
      // Ensure registerError is always a string
      if (typeof response.error === 'string') {
        registerError.value = response.error;
      } else if (response.error && typeof response.error === 'object') {
        registerError.value = JSON.stringify(response.error);
      } else {
        registerError.value = 'Erreur lors de l\'inscription';
      }
      
      if (response.errors) {
        if (response.errors.username) errors.username = response.errors.username[0];
        if (response.errors.email) errors.email = response.errors.email[0];
        if (response.errors.password) errors.password = response.errors.password[0];
        if (response.errors.password_confirm) errors.password_confirm = response.errors.password_confirm[0];
        if (response.errors.detail) registerError.value = response.errors.detail;
      }
    } else {
      registerError.value = '✅ Inscription réussie ! Redirection...';
      setTimeout(() => {
        router.push('/');  // On redirige vers Home car l'API connecte automatiquement
      }, 1500);
    }
    
  } catch (error) {
    console.error('❌ Erreur:', error);
    registerError.value = 'Une erreur est survenue. Réessayez.';
  } finally {
    isLoading.value = false;
  }
};
</script>