<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Créer un compte</h1>
        <p class="text-gray-600">Rejoignez-nous dès aujourd'hui</p>
      </div>

      <!-- OAuth Buttons -->
      <div class="space-y-3 mb-6">
        <button
          @click="handleGoogleSignup"
          type="button"
          class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span class="font-medium text-gray-700">Continuer avec Google</span>
        </button>

        <button
          @click="handleGithubSignup"
          type="button"
          class="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-200"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
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
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">
              Prénom
            </label>
            <input
              id="firstName"
              v-model="formData.firstName"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              :class="{ 'border-red-500': errors.firstName }"
            />
            <p v-if="errors.firstName" class="text-red-500 text-xs mt-1">{{ errors.firstName }}</p>
          </div>

          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">
              Nom
            </label>
            <input
              id="lastName"
              v-model="formData.lastName"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              :class="{ 'border-red-500': errors.lastName }"
            />
            <p v-if="errors.lastName" class="text-red-500 text-xs mt-1">{{ errors.lastName }}</p>
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Mot de passe
            <span class="text-xs text-gray-500 font-normal">
              (min. 8 caractères, majuscule, minuscule, chiffre)
            </span>
          </label>
          <div class="relative">
            <input
              id="password"
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              @input="checkPasswordStrength"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition pr-10"
              :class="{ 
                'border-red-500': errors.password || passwordStrength.score < 2,
                'border-yellow-500': passwordStrength.score === 2,
                'border-green-500': passwordStrength.score >= 3
              }"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
          
          <!-- Indicateur de force du mot de passe -->
          <div v-if="formData.password" class="mt-2">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-medium" :class="passwordStrength.color">
                {{ passwordStrength.text }}
              </span>
              <span class="text-xs text-gray-500">
                {{ passwordStrength.score }}/4
              </span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                class="h-full transition-all duration-300"
                :class="passwordStrength.barColor"
                :style="{ width: passwordStrength.percentage + '%' }"
              ></div>
            </div>
            
            <!-- Conseils -->
            <div v-if="passwordStrength.score < 3" class="mt-2 text-xs text-gray-600">
              <p class="font-medium mb-1">Pour renforcer votre mot de passe :</p>
              <ul class="list-disc list-inside space-y-1">
                <li :class="{ 'text-green-500': hasMinLength }">
                  ✓ Au moins 8 caractères
                </li>
                <li :class="{ 'text-green-500': hasUpperCase }">
                  ✓ Une lettre majuscule
                </li>
                <li :class="{ 'text-green-500': hasLowerCase }">
                  ✓ Une lettre minuscule
                </li>
                <li :class="{ 'text-green-500': hasNumber }">
                  ✓ Un chiffre
                </li>
                <li :class="{ 'text-green-500': hasSpecialChar }">
                  ✓ Un caractère spécial (!@#$%^&*)
                </li>
              </ul>
            </div>
          </div>
          
          <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
        </div>

        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
            Confirmer le mot de passe
          </label>
          <div class="relative">
            <input
              id="confirmPassword"
              v-model="formData.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition pr-10"
              :class="{ 
                'border-red-500': errors.confirmPassword || (formData.confirmPassword && formData.password !== formData.confirmPassword),
                'border-green-500': formData.confirmPassword && formData.password === formData.confirmPassword
              }"
            />
            <button
              type="button"
              @click="showConfirmPassword = !showConfirmPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {{ showConfirmPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
          <p v-if="errors.confirmPassword" class="text-red-500 text-xs mt-1">{{ errors.confirmPassword }}</p>
          <p v-if="formData.confirmPassword && formData.password !== formData.confirmPassword" 
             class="text-red-500 text-xs mt-1">
            ❌ Les mots de passe ne correspondent pas
          </p>
          <p v-if="formData.confirmPassword && formData.password === formData.confirmPassword" 
             class="text-green-500 text-xs mt-1">
            ✅ Les mots de passe correspondent
          </p>
        </div>

        <div class="flex items-center">
          <input
            id="terms"
            v-model="formData.acceptTerms"
            type="checkbox"
            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label for="terms" class="ml-2 text-sm text-gray-600">
            J'accepte les <a href="#" class="text-indigo-600 hover:text-indigo-700 font-medium">conditions d'utilisation</a>
          </label>
        </div>
        <p v-if="errors.acceptTerms" class="text-red-500 text-xs -mt-3">{{ errors.acceptTerms }}</p>

        <button
          type="submit"
          :disabled="isLoading || passwordStrength.score < 2"
          class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{ 'opacity-50 cursor-not-allowed': passwordStrength.score < 2 }"
        >
          <span v-if="isLoading">
            <svg class="animate-spin h-5 w-5 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Inscription en cours...
          </span>
          <span v-else>
            <span v-if="passwordStrength.score < 2">
              ❌ Mot de passe trop faible
            </span>
            <span v-else>
              S'inscrire
            </span>
          </span>
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-gray-600 text-sm">
          Vous avez déjà un compte ?
          <RouterLink to="/login" class="text-indigo-600 hover:text-indigo-700 font-medium">Se connecter</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { apiService } from '../../services/api';

const router = useRouter();

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false
});

const errors = reactive({});
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const isLoading = ref(false);

// Variables pour la force du mot de passe
const hasMinLength = computed(() => formData.password.length >= 8);
const hasUpperCase = computed(() => /[A-Z]/.test(formData.password));
const hasLowerCase = computed(() => /[a-z]/.test(formData.password));
const hasNumber = computed(() => /[0-9]/.test(formData.password));
const hasSpecialChar = computed(() => /[!@#$%^&*]/.test(formData.password));

// Calcul de la force du mot de passe
const passwordStrength = computed(() => {
  let score = 0;
  const password = formData.password;
  
  if (!password) {
    return {
      score: 0,
      text: 'Entrez un mot de passe',
      color: 'text-gray-500',
      barColor: 'bg-gray-300',
      percentage: 0
    };
  }
  
  // Critères de score
  if (hasMinLength.value) score++;
  if (hasUpperCase.value) score++;
  if (hasLowerCase.value) score++;
  if (hasNumber.value) score++;
  if (hasSpecialChar.value) score++;
  
  // Évite le score maximum pour les mots de passe courts
  if (password.length < 8 && score > 3) score = 3;
  
  // Détermine le niveau
  let text, color, barColor;
  const percentage = (score / 5) * 100;
  
  switch (score) {
    case 0:
    case 1:
      text = 'Très faible';
      color = 'text-red-500';
      barColor = 'bg-red-500';
      break;
    case 2:
      text = 'Faible';
      color = 'text-orange-500';
      barColor = 'bg-orange-500';
      break;
    case 3:
      text = 'Moyen';
      color = 'text-yellow-500';
      barColor = 'bg-yellow-500';
      break;
    case 4:
      text = 'Fort';
      color = 'text-green-500';
      barColor = 'bg-green-500';
      break;
    case 5:
      text = 'Très fort';
      color = 'text-emerald-600';
      barColor = 'bg-emerald-600';
      break;
    default:
      text = 'Très faible';
      color = 'text-red-500';
      barColor = 'bg-red-500';
  }
  
  return {
    score,
    text,
    color,
    barColor,
    percentage
  };
});

const checkPasswordStrength = () => {
  // Cette fonction est appelée à chaque changement du mot de passe
  // Les computed properties se mettent à jour automatiquement
};

const validateForm = () => {
  // Nettoie les erreurs précédentes
  Object.keys(errors).forEach(key => delete errors[key]);
  
  // Validation
  if (!formData.firstName.trim()) {
    errors.firstName = 'Le prénom est requis';
  }
  
  if (!formData.lastName.trim()) {
    errors.lastName = 'Le nom est requis';
  }
  
  if (!formData.email.trim()) {
    errors.email = "L'email est requis";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email invalide';
  }
  
  if (!formData.password) {
    errors.password = 'Le mot de passe est requis';
  } else if (formData.password.length < 8) {
    errors.password = 'Le mot de passe doit contenir au moins 8 caractères';
  } else if (passwordStrength.value.score < 2) {
    errors.password = 'Le mot de passe est trop faible. Ajoutez des majuscules, minuscules et chiffres.';
  } else if (/^[0-9]+$/.test(formData.password)) {
    errors.password = 'Le mot de passe ne peut pas être uniquement numérique';
  } else if (formData.password.toLowerCase() === 'password' || 
             formData.password.toLowerCase() === '12345678' ||
             formData.password.toLowerCase() === 'qwerty') {
    errors.password = 'Ce mot de passe est trop commun';
  }
  
  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Veuillez confirmer le mot de passe';
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Les mots de passe ne correspondent pas';
  }
  
  if (!formData.acceptTerms) {
    errors.acceptTerms = 'Vous devez accepter les conditions';
  }
  
  return Object.keys(errors).length === 0;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    // Si le mot de passe est faible, affiche un message plus clair
    if (passwordStrength.value.score < 2) {
      alert('Veuillez renforcer votre mot de passe avant de continuer.');
    }
    return;
  }

  isLoading.value = true;
  
  try {
    console.log("📤 Envoi des données à Django:", formData);
    
    const response = await apiService.register(formData);
    
    console.log("📥 Réponse de Django:", response);
    
    if (response.success) {
      router.push('/');
    } else {
      console.error("❌ Erreurs Django:", response.errors);
      
      if (response.errors) {
        Object.keys(response.errors).forEach(key => {
          errors[key] = response.errors[key].join(', ');
        });
      } else if (response.error) {
        alert(`Erreur: ${response.error}`);
      }
    }
  } catch (error) {
    console.error('Erreur inscription:', error);
    alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
  } finally {
    isLoading.value = false;
  }
};

const handleGoogleSignup = () => {
  console.log('Inscription avec Google');
};

const handleGithubSignup = () => {
  console.log('Inscription avec GitHub');
};
</script>