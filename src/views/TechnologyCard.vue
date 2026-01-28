<template>
  <div class="tech-card">
    <div class="flex items-start mb-4">
      <div 
        :class="[
          'w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0',
          `bg-${tech.color}-100 dark:bg-${tech.color}-900/30`
        ]"
      >
        <span class="text-2xl">{{ tech.icon }}</span>
      </div>
      <div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ tech.name }}</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ tech.description }}</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-2 text-sm">⭐ Caractéristiques :</h4>
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="feature in tech.features"
          :key="feature"
          class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
        >
          {{ feature }}
        </span>
      </div>
    </div>
    
    <div class="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
      <div>
        <span class="text-sm text-gray-500 dark:text-gray-400">Usage : </span>
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ tech.useCase }}</span>
      </div>
      <div>
        <span :class="[
          'px-3 py-1 rounded-full text-xs font-medium',
          tech.difficulty === 'Facile' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
          tech.difficulty === 'Moyenne' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
          'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
        ]">
          {{ tech.difficulty }}
        </span>
      </div>
    </div>
    
    <router-link 
      :to="`/web/${tech.name.toLowerCase().replace('/', '-')}`"
      class="block mt-4 text-center py-2 rounded-lg font-medium transition-all hover:opacity-90"
      :class="`bg-${tech.color}-500 text-white`"
    >
      Voir les ressources
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TechnologyCard',
  props: {
    tech: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.tech-card {
  @apply bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all duration-300 border border-gray-100 dark:border-gray-700;
}

.tech-card:hover {
  @apply shadow-lg transform -translate-y-1;
}
</style>