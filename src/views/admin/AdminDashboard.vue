<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white">Tableau de bord Administrateur</h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Gérez les utilisateurs et suivez leur progression dans les différents cours.
        </p>
      </div>

      <!-- Stats Overview -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-colors">
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Utilisateurs</dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">{{ users.length }}</dd>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-colors">
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Cours Suivis</dt>
            <dd class="mt-1 text-3xl font-semibold text-blue-600 dark:text-blue-400">{{ totalProgressRecords }}</dd>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-colors">
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Dernière Activité</dt>
            <dd class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{{ lastActivityDate }}</dd>
          </div>
        </div>
      </div>

      <!-- Users Table -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden transition-colors">
        <div class="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Liste des Utilisateurs</h2>
          <button @click="fetchData" class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600">
            Actualiser
          </button>
        </div>
        
        <div v-if="loading" class="p-8 text-center">
          <svg class="animate-spin h-8 w-8 text-blue-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>

        <div v-else-if="error" class="p-8 text-center text-red-600">
          {{ error }}
        </div>

        <div v-else class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Utilisateur</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Progression</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rôle</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date d'inscription</th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="user in users" :key="user.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900 dark:text-white">{{ user.username }}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">{{ user.first_name }} {{ user.last_name }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {{ user.email }}
                </td>
                <td class="px-6 py-4">
                  <div class="flex flex-wrap gap-2">
                    <div v-for="prog in user.progress" :key="prog.language" 
                         class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      {{ prog.language }}: {{ getPercentage(prog.progress_data) }}%
                    </div>
                    <span v-if="user.progress.length === 0" class="text-xs text-gray-400">Aucun cours commencé</span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span v-if="user.is_superuser" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                    Admin
                  </span>
                  <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Étudiant
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {{ formatDate(user.date_joined) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { apiService } from '@/services/api';

const users = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchData = async () => {
  loading.value = true;
  error.value = null;
  const result = await apiService.getUsersProgress();
  if (result.success) {
    users.value = result.data;
  } else {
    error.value = result.error;
  }
  loading.value = false;
};

const totalProgressRecords = computed(() => {
  return users.value.reduce((acc, user) => acc + user.progress.length, 0);
});

const lastActivityDate = computed(() => {
  if (users.value.length === 0) return 'N/A';
  
  let latest = null;
  users.value.forEach(user => {
    user.progress.forEach(prog => {
      const date = new Date(prog.updated_at);
      if (!latest || date > latest) latest = date;
    });
  });
  
  return latest ? latest.toLocaleDateString() : 'N/A';
});

const getPercentage = (data) => {
  if (typeof data === 'number') return data;
  if (data && typeof data.percentage === 'number') return data.percentage;
  return 0;
};

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

onMounted(fetchData);
</script>
