<template>
  <div class="home bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white min-h-screen flex items-center">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>
      
      <div class="container mx-auto px-4 py-20 relative z-10 w-full">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Titre principal -->
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Maîtrisez la
            <span class="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              programmation moderne
            </span>
          </h1>
          
          <!-- Sous-titre -->
          <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ressources pédagogiques gratuites, exercices pratiques et corrigés détaillés pour devenir un développeur compétent.
          </p>
          
          <!-- CTA buttons -->
          <div v-if="!isAuthenticated" class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <router-link to="/langages" class="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center">
              <span class="mr-2">🚀</span> Commencer à apprendre
            </router-link>
            <router-link to="/login" class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center">
              <span class="mr-2">🔑</span> Se connecter
            </router-link>
          </div>
          <div v-else class="flex flex-col sm:flex-row gap-4 justify-center mb-20">
             <router-link to="/langages" class="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center">
              <span class="mr-2">📚</span> Reprendre les cours
            </router-link>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div class="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div class="text-gray-300 text-sm">Ressources PDF</div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div class="text-4xl font-bold text-green-400 mb-2">200+</div>
              <div class="text-gray-300 text-sm">Exercices pratiques</div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div class="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div class="text-gray-300 text-sm">Gratuit</div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div class="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div class="text-gray-300 text-sm">Accès illimité</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Catégories principales -->
    <section class="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Parcours d'apprentissage
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choisissez votre domaine et progressez à votre rythme avec nos ressources structurées
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Langages -->
          <router-link 
            to="/langages" 
            class="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 relative overflow-hidden"
          >
            <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <span class="text-3xl">💻</span>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Langages de programmation
              </h3>
              
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Python, JavaScript, Java, C++, PHP et plus encore. Guides complets, exercices et corrigés.
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Python</span>
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">JavaScript</span>
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Java</span>
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">C++</span>
              </div>
              
              <div class="flex items-center text-blue-600 dark:text-blue-400 font-bold">
                <span>Explorer</span>
                <span class="ml-2 transform group-hover:translate-x-3 transition-transform duration-300">→</span>
              </div>
            </div>
          </router-link>

          <!-- Web -->
          <router-link 
            to="/web" 
            class="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 relative overflow-hidden"
          >
            <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/5 to-green-600/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <span class="text-3xl">🌐</span>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Développement Web
              </h3>
              
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Frontend, backend, frameworks modernes. Parcours complet du débutant à l'expert.
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">React</span>
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">Vue.js</span>
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">Node.js</span>
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">Laravel</span>
              </div>
              
              <div class="flex items-center text-green-600 dark:text-green-400 font-bold">
                <span>Découvrir</span>
                <span class="ml-2 transform group-hover:translate-x-3 transition-transform duration-300">→</span>
              </div>
            </div>
          </router-link>

          <!-- Cybersécurité -->
          <router-link 
            to="/cybersecurite" 
            class="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 relative overflow-hidden"
          >
            <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/5 to-red-600/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <span class="text-3xl">🛡️</span>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                Cybersécurité
              </h3>
              
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Pentesting, sécurité réseau, cryptographie. Protégez vos applications et systèmes.
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">Pentesting</span>
                <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">OWASP</span>
                <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">Réseaux</span>
                <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">Crypto</span>
              </div>
              
              <div class="flex items-center text-red-600 dark:text-red-400 font-bold">
                <span>Se former</span>
                <span class="ml-2 transform group-hover:translate-x-3 transition-transform duration-300">→</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section Remerciements à l'équipe -->
    <section class="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              L'équipe derrière cette aventure
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Cette plateforme n'existerait pas sans le soutien et l'expertise de cette incroyable équipe
          </p>
        </div>

        

        <!-- Section "L'Équipe" pour les potes -->
        <div class="mb-16 text-center">
          <h3 class="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">L'Équipe Incroyable</h3>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mes collaborateurs et amis qui contribuent à rendre cette plateforme exceptionnelle
          </p>
        </div>

        <!-- Grille des potes - 5 par ligne sur grand écran -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          <div 
            v-for="friend in teamData.friends" 
            :key="friend.id"
            class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 group"
          >
            <div class="flex flex-col items-center text-center">
              <!-- Image en noir et blanc -->
              <div class="w-28 h-28 rounded-full overflow-hidden mb-5 border-3 border-gray-50 dark:border-gray-700 shadow-md group-hover:border-blue-100 dark:group-hover:border-blue-900 transition-colors duration-300">
                <img 
                  :src="friend.image" 
                  :alt="friend.name" 
                  class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  :style="{ objectPosition: friend.objectPosition || 'center' }"
                />
              </div>
              
              <h4 class="font-bold text-gray-900 dark:text-white text-lg mb-1">{{ friend.name }}</h4>
              <p class="text-gray-500 dark:text-gray-400 text-xs mb-2">{{ friend.username }}</p>
              
              <div class="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                {{ friend.role }}
              </div>
              
              <p class="text-gray-600 dark:text-gray-400 text-xs mb-3">
                <span class="font-medium">Skills:</span> {{ friend.skill }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Message de remerciement -->
        <div class="text-center mt-20 pt-10 border-t border-gray-200 dark:border-gray-700">
        <!-- Créateur (Bhil$ - Vous) - Centré et mis en avant -->
        <div class="max-w-3xl mx-auto mb-20">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <div class="flex flex-col items-center text-center">
              <div class="relative mb-6">
                <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                  <img 
                    :src="teamData.creator.image" 
                    :alt="teamData.creator.name" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Créateur & Fondateur
                </div>
              </div>
              
              <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ teamData.creator.name }}</h3>
              <p class="text-blue-600 dark:text-blue-400 font-semibold mb-3">{{ teamData.creator.role }}</p>
              <p class="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed max-w-2xl">
                {{ teamData.creator.bio }}
              </p>
              <div class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 px-6 py-3 rounded-full border border-blue-100 dark:border-gray-600">
                <span class="font-medium text-gray-800 dark:text-gray-200">{{ teamData.creator.username }}</span>
              </div>
            </div>
          </div>
        </div>
          <p class="text-2xl text-gray-700 dark:text-gray-300 italic max-w-3xl mx-auto">
            "Merci à toute l'équipe pour votre travail acharné, votre créativité et votre engagement. 
            Ensemble, nous construisons quelque chose d'extraordinaire !"
          </p>
          <p class="mt-6 text-gray-500 dark:text-gray-400">- {{ teamData.creator.name }}</p>
          <p class="mt-2 text-gray-500 dark:text-gray-400">Créateur & Fondateur</p>
        </div>
        
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full -translate-y-36 translate-x-36 blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full translate-y-36 -translate-x-36 blur-3xl"></div>
          
          <div class="relative z-10">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à accélérer votre apprentissage ?
            </h2>
            <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoignez des milliers d'apprenants qui développent leurs compétences avec Bhil$ chaque jour.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <router-link to="/langages" class="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center">
                <span class="mr-2">🎯</span> Commencer l'apprentissage
              </router-link>
              <router-link to="/contact" class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center">
                <span class="mr-2">💬</span> Nous contacter
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { apiService } from '../services/api';
import { teamData } from '../data/team';

const isAuthenticated = computed(() => apiService.isAuthenticated());
</script>