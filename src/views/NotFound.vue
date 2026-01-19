<!-- views/NotFound.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-gray-800">404</h1>
      <p class="text-2xl text-gray-600 mt-4">Page non trouvée</p>
      <p class="text-gray-500 mt-2">La page que vous cherchez n'existe pas.</p>
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