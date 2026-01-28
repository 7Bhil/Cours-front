<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-gray-800 dark:text-gray-200">404</h1>
      <p class="text-2xl text-gray-600 dark:text-gray-400 mt-4">Page non trouvée</p>
      <p class="text-gray-500 dark:text-gray-500 mt-2">La page que vous cherchez n'existe pas.</p>
      <router-link 
        to="/" 
        class="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Retour à l'accueil
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>