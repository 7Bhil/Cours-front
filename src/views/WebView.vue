<template>
  <div class="web-technologies bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
    <!-- En-tête -->
    <div class="text-center mb-12">
      <div class="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/40 rounded-2xl mb-4 text-blue-600 dark:text-blue-400">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
      </div>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Écosystème Web
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Découvrez les principaux langages, frameworks et outils du développement web moderne.
      </p>
    </div>

    <!-- Navigation par catégorie -->
    <div class="mb-12">
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <button 
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          :class="[
            'px-6 py-2 rounded-full font-medium transition-all',
            activeCategory === category.id 
              ? 'bg-blue-500 text-white shadow-md' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          ]"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <!-- Contenu par catégorie -->
    <div class="space-y-16">
      <!-- Frontend -->
      <section v-if="activeCategory === 'frontend' || activeCategory === 'all'" class="fade-in">
        <div class="flex items-center mb-8">
          <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-3 text-blue-600 dark:text-blue-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Frontend</h2>
        </div>
        
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
          Le frontend est la partie visible d'un site web, celle que l'utilisateur voit et avec laquelle il interagit.
          Il combine design, interactivité et expérience utilisateur.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechnologyCard 
            v-for="tech in frontendTech"
            :key="tech.name"
            :tech="tech"
          />
        </div>
      </section>

      <!-- Backend -->
      <section v-if="activeCategory === 'backend' || activeCategory === 'all'" class="fade-in">
        <div class="flex items-center mb-8">
          <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mr-3 text-green-600 dark:text-green-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Backend</h2>
        </div>
        
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
          Le backend gère la logique métier, les bases de données et l'authentification.
          C'est le moteur invisible qui fait fonctionner les applications web.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechnologyCard 
            v-for="tech in backendTech"
            :key="tech.name"
            :tech="tech"
          />
        </div>
      </section>

      <!-- Full-Stack & Frameworks -->
      <section v-if="activeCategory === 'fullstack' || activeCategory === 'all'" class="fade-in">
        <div class="flex items-center mb-8">
          <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-3 text-purple-600 dark:text-purple-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Frameworks Full-Stack</h2>
        </div>
        
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
          Ces frameworks permettent de développer à la fois le frontend et le backend avec une seule technologie,
          offrant une meilleure cohérence et productivité.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechnologyCard 
            v-for="tech in fullstackTech"
            :key="tech.name"
            :tech="tech"
          />
        </div>
      </section>

      <!-- Bases de données -->
      <section v-if="activeCategory === 'database' || activeCategory === 'all'" class="fade-in">
        <div class="flex items-center mb-8">
          <div class="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mr-3 text-yellow-600 dark:text-yellow-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s-8-1.79-8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Bases de données</h2>
        </div>
        
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
          Le stockage et la gestion des données sont essentiels pour toute application web.
          Chaque type de base de données a ses avantages spécifiques.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechnologyCard 
            v-for="tech in databaseTech"
            :key="tech.name"
            :tech="tech"
          />
        </div>
      </section>
    </div>

    <!-- Comparaison -->
    <div class="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-2">
        <svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        Guide de choix
      </h3>
      
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th class="py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300">Technologie</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300">Type</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300">Cas d'usage</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300">Courbe d'apprentissage</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="item in comparisonTable" :key="item.name" class="border-t border-gray-200 dark:border-gray-700">
              <td class="py-3 px-4">
                <div class="font-medium text-gray-900 dark:text-white">{{ item.name }}</div>
              </td>
              <td class="py-3 px-4">
                <span :class="[
                  'px-3 py-1 rounded-full text-xs font-medium',
                  item.type === 'Frontend' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' :
                  item.type === 'Backend' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                  'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
                ]">
                  {{ item.type }}
                </span>
              </td>
              <td class="py-3 px-4 text-gray-600 dark:text-gray-400 text-sm">{{ item.useCase }}</td>
              <td class="py-3 px-4">
                <div class="flex items-center">
                  <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      :class="[
                        'h-full',
                        item.difficulty === 'Facile' ? 'bg-green-500' :
                        item.difficulty === 'Moyenne' ? 'bg-yellow-500' :
                        'bg-red-500'
                      ]"
                      :style="{ width: item.difficulty === 'Facile' ? '25%' : item.difficulty === 'Moyenne' ? '50%' : '75%' }"
                    ></div>
                  </div>
                  <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">{{ item.difficulty }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Conseils -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border-l-4 border-blue-500 dark:border-blue-500">
        <div class="text-blue-500 mb-4">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
        </div>
        <h4 class="font-bold text-gray-900 dark:text-white mb-2">Pour débuter</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
          Commencez par HTML/CSS puis JavaScript. Une fois les bases maîtrisées, explorez un framework frontend comme Vue.js ou React.
        </p>
      </div>
      
      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border-l-4 border-green-500 dark:border-green-500">
        <div class="text-green-500 mb-4">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        </div>
        <h4 class="font-bold text-gray-900 dark:text-white mb-2">Pour un projet professionnel</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
          Considérez l'écosystème complet : React/Next.js pour le front, Node.js/Python pour le back, PostgreSQL/MySQL pour la base.
        </p>
      </div>
      
      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border-l-4 border-purple-500 dark:border-purple-500">
        <div class="text-purple-500 mb-4">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        <h4 class="font-bold text-gray-900 dark:text-white mb-2">Pour les performances</h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
          Next.js/Nuxt.js pour le SSR, Go/Rust pour les APIs haute performance, Redis pour le cache, PostgreSQL pour les données relationnelles.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TechnologyCard from './TechnologyCard.vue'

export default {
  name: 'WebTechnologiesView',
  components: {
    TechnologyCard
  },
  data() {
    return {
      activeCategory: 'all',
      categories: [
        { id: 'all', name: 'Tout voir' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'fullstack', name: 'Full-Stack' },
        { id: 'database', name: 'Bases de données' }
      ],
      frontendTech: [
        {
          name: 'HTML/CSS',
          description: 'Les fondations du web. HTML structure le contenu, CSS le style.',
          icon: '<svg class="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
          color: 'orange',
          features: ['Structure sémantique', 'Responsive Design', 'Animations CSS'],
          useCase: 'Tous les sites web',
          difficulty: 'Facile'
        },
        {
          name: 'JavaScript',
          description: 'Le langage de programmation du web pour l\'interactivité.',
          icon: '<svg class="w-7 h-7 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm10.7 13.8c.4.7.9 1.2 1.8 1.2.8 0 1.3-.4 1.3-1 0-.6-.4-.9-1.4-1.3l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.8 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.4l-1.3.9c-.3-.5-.7-.8-1.4-.8-.6 0-1 .4-1 .8 0 .5.3.8 1.2 1.2l.5.2c1.7.7 2.6 1.4 2.6 2.9 0 1.7-1.3 2.6-3.2 2.6-1.8 0-2.9-.8-3.4-1.8l1.4-.8zm-4.7.2c.3.5.7.8 1.3.8.6 0 1-.3 1-1.2v-6.3h2v6.4c0 2.1-1.2 3-2.9 3-1.5 0-2.5-.7-3-1.7l1.6-1z"/></svg>',
          color: 'yellow',
          features: ['Manipulation DOM', 'Async/Await', 'ES6+ Features'],
          useCase: 'Interactivité, animations, APIs',
          difficulty: 'Moyenne'
        },
        {
          name: 'React',
          description: 'Bibliothèque JavaScript pour construire des interfaces utilisateur.',
          icon: '<svg class="w-7 h-7 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="9" ry="3.8" stroke-width="1.8"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" stroke-width="1.8"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" stroke-width="1.8"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',
          color: 'blue',
          features: ['Components', 'Virtual DOM', 'Hooks'],
          useCase: 'SPAs, applications complexes',
          difficulty: 'Moyenne'
        },
        {
          name: 'Vue.js',
          description: 'Framework progressif pour construire des interfaces utilisateur.',
          icon: '<svg class="w-7 h-7 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M2 3h3.5L12 15 20.5 3H24L12 21 2 3z"/><path d="M6.5 3h3L12 9l2.5-6h3L12 14 6.5 3z" fill="#35495e"/></svg>',
          color: 'green',
          features: ['Réactivité', 'Single File Components', 'Vue Router'],
          useCase: 'Applications modulables',
          difficulty: 'Facile à moyenne'
        },
        {
          name: 'TypeScript',
          description: 'Superset de JavaScript avec typage statique.',
          icon: '<svg class="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm9.5 7.5h-2v7.5h-2V10.5h-2V9h6v1.5zm6.8 5.4c0 1.2-.9 1.9-2.4 1.9-1.3 0-2.3-.5-2.8-1.2l1.2-1c.4.5 1 1 1.7 1 .7 0 1-.3 1-.7 0-.5-.3-.7-1.3-1.1-1.3-.4-2.2-1-2.2-2.3 0-1.3 1-2.1 2.3-2.1 1.2 0 2 .4 2.6 1.1l-1.1 1c-.3-.4-.8-.7-1.5-.7-.6 0-.9.3-.9.6 0 .4.3.6 1.2 1 1.5.5 2.3 1 2.3 2.3z"/></svg>',
          color: 'blue',
          features: ['Typage statique', 'Meilleur autocomplétion', 'Moins de bugs'],
          useCase: 'Projets complexes en équipe',
          difficulty: 'Moyenne'
        },
        {
          name: 'Sass/SCSS',
          description: 'Préprocesseur CSS avec des fonctionnalités avancées.',
          icon: '<svg class="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>',
          color: 'pink',
          features: ['Variables', 'Mixins', 'Nesting'],
          useCase: 'Styles complexes, maintenabilité',
          difficulty: 'Facile'
        }
      ],
      backendTech: [
        {
          name: 'Node.js',
          description: 'JavaScript côté serveur avec une architecture événementielle.',
          icon: '<svg class="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>',
          color: 'green',
          features: ['Non-bloquant', 'NPM ecosystem', 'Fast I/O'],
          useCase: 'APIs, applications temps réel',
          difficulty: 'Moyenne'
        },
        {
          name: 'Python',
          description: 'Langage polyvalent avec une syntaxe claire et de nombreux frameworks web.',
          icon: '<svg class="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
          color: 'green',
          features: ['Syntaxe claire', 'Large écosystème', 'Data Science'],
          useCase: 'APIs, scripts, IA, automatisation',
          difficulty: 'Facile'
        },
        {
          name: 'PHP',
          description: 'Langage serveur spécialement conçu pour le web.',
          icon: '<svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
          color: 'purple',
          features: ['Intégration facile', 'WordPress/Drupal', 'Large hébergement'],
          useCase: 'Sites web traditionnels, CMS',
          difficulty: 'Facile'
        },
        {
          name: 'Java',
          description: 'Langage orienté objet robuste pour les applications d\'entreprise.',
          icon: '<svg class="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
          color: 'red',
          features: ['Performance', 'Multi-threading', 'Sécurité'],
          useCase: 'Applications d\'entreprise, bancaires',
          difficulty: 'Difficile'
        },
        {
          name: 'Go',
          description: 'Langage compilé simple et efficace pour le backend.',
          icon: '<svg class="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
          color: 'blue',
          features: ['Performance', 'Simplicité', 'Concurrence native'],
          useCase: 'APIs haute performance, microservices',
          difficulty: 'Moyenne'
        },
        {
          name: 'Ruby',
          description: 'Langage orienté objet avec une syntaxe élégante.',
          icon: '<svg class="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l9 4.9v10.2L12 22l-9-4.9V6.9L12 2z"/></svg>',
          color: 'red',
          features: ['Ruby on Rails', 'Syntaxe élégante', 'Convention over configuration'],
          useCase: 'Prototypage rapide, startups',
          difficulty: 'Moyenne'
        }
      ],
      fullstackTech: [
        {
          name: 'Next.js',
          description: 'Framework React avec rendu côté serveur et génération de sites statiques.',
          icon: '<svg class="w-7 h-7 text-slate-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg>',
          color: 'gray',
          features: ['SSR/SSG', 'File-based routing', 'API Routes'],
          useCase: 'Applications React performantes',
          difficulty: 'Moyenne'
        },
        {
          name: 'Nuxt.js',
          description: 'Framework Vue.js pour des applications universelles.',
          icon: '<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>',
          color: 'green',
          features: ['SSR/SSG', 'Modular architecture', 'Auto-imports'],
          useCase: 'Applications Vue.js performantes',
          difficulty: 'Moyenne'
        },
        {
          name: 'Laravel',
          description: 'Framework PHP élégant avec une syntaxe expressive.',
          icon: '<svg class="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/></svg>',
          color: 'red',
          features: ['Eloquent ORM', 'Blade templates', 'Artisan CLI'],
          useCase: 'Applications web complètes en PHP',
          difficulty: 'Moyenne'
        },
        {
          name: 'Django',
          description: 'Framework Python "batteries included" pour le web.',
          icon: '<svg class="w-7 h-7 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
          color: 'green',
          features: ['ORM puissant', 'Admin interface', 'Sécurité intégrée'],
          useCase: 'Applications data-driven, startups',
          difficulty: 'Moyenne'
        },
        {
          name: 'Spring Boot',
          description: 'Framework Java pour créer des applications standalone.',
          icon: '<svg class="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>',
          color: 'green',
          features: ['Dependency Injection', 'Auto-configuration', 'Microservices ready'],
          useCase: 'Applications d\'entreprise, microservices',
          difficulty: 'Difficile'
        }
      ],
      databaseTech: [
        {
          name: 'PostgreSQL',
          description: 'Base de données relationnelle avancée et open source.',
          icon: '<svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s-8-1.79-8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>',
          color: 'blue',
          features: ['ACID compliant', 'JSON support', 'Full-text search'],
          useCase: 'Applications complexes, données relationnelles',
          difficulty: 'Moyenne'
        },
        {
          name: 'MySQL',
          description: 'SGBD relationnel populaire et performant.',
          icon: '<svg class="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s-8-1.79-8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>',
          color: 'orange',
          features: ['Performance', 'Large adoption', 'Replication'],
          useCase: 'Web applications, WordPress',
          difficulty: 'Facile à moyenne'
        },
        {
          name: 'MongoDB',
          description: 'Base de données NoSQL orientée documents.',
          icon: '<svg class="w-7 h-7 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',
          color: 'green',
          features: ['Documents JSON', 'Scalabilité horizontale', 'Flexible schema'],
          useCase: 'Données non-structurées, applications temps réel',
          difficulty: 'Moyenne'
        },
        {
          name: 'Redis',
          description: 'Base de données clé-valeur en mémoire.',
          icon: '<svg class="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>',
          color: 'red',
          features: ['In-memory', 'Pub/Sub', 'Caching'],
          useCase: 'Cache, sessions, files d\'attente',
          difficulty: 'Facile'
        }
      ],
      comparisonTable: [
        { name: 'Vue.js', type: 'Frontend', useCase: 'Applications modulables', difficulty: 'Moyenne' },
        { name: 'React', type: 'Frontend', useCase: 'Applications complexes', difficulty: 'Moyenne' },
        { name: 'Node.js', type: 'Backend', useCase: 'APIs, temps réel', difficulty: 'Moyenne' },
        { name: 'Python/Django', type: 'Backend', useCase: 'Rapid development', difficulty: 'Moyenne' },
        { name: 'Laravel', type: 'Full-Stack', useCase: 'Applications PHP complètes', difficulty: 'Moyenne' },
        { name: 'PostgreSQL', type: 'Database', useCase: 'Données relationnelles', difficulty: 'Moyenne' }
      ]
    }
  }
}
</script>

<style scoped>
.web-technologies {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>