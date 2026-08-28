<template>
  <div class="tech-card">
    <div class="flex items-start mb-4">
      <div 
        :class="[
          'w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0',
          `bg-${tech.color}-100 dark:bg-${tech.color}-900/30`
        ]"
      >
        <div class="flex items-center justify-center" v-html="tech.icon"></div>
      </div>
      <div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ tech.name }}</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ tech.description }}</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-1.5">
        <svg class="w-4 h-4 text-amber-500 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
        Caractéristiques :
      </h4>
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