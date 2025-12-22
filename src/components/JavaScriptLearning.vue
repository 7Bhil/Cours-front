<!-- JavaScriptLearning.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Bannière d'entête -->
    <header class="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div class="container mx-auto px-4 py-8 md:py-12">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div class="mb-6 lg:mb-0">
            <div class="inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm md:text-base mb-4">
              <span class="text-lg md:text-xl font-black mr-2">JS</span>
              <span>JavaScript</span>
            </div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Masterclass JavaScript</h1>
            <p class="text-gray-300 text-base md:text-lg">De débutant à expert à travers 38 chapitres structurés</p>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 md:gap-6 max-w-md">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div class="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">{{ completedCount }}</div>
              <div class="text-xs md:text-sm text-gray-300">Chapitres complétés</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div class="text-2xl md:text-3xl font-bold text-white mb-1">{{ totalChapters }}</div>
              <div class="text-xs md:text-sm text-gray-300">Chapitres total</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div class="text-2xl md:text-3xl font-bold text-green-400 mb-1">{{ progressPercentage }}%</div>
              <div class="text-xs md:text-sm text-gray-300">Progression</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-4 py-6">
      <!-- Menu mobile -->
      <div class="lg:hidden mb-6">
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="w-full flex items-center justify-between bg-white p-4 rounded-xl shadow-md border border-gray-200"
        >
          <span class="font-semibold text-gray-900">
            {{ currentLevel.name }} - Chapitre {{ currentChapterNumber }}
          </span>
          <svg 
            :class="{'rotate-180': isMobileMenuOpen}" 
            class="w-5 h-5 text-gray-500 transition-transform"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <!-- Menu déroulant mobile -->
        <div v-if="isMobileMenuOpen" class="mt-2 bg-white rounded-xl shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          <div class="p-4">
            <div v-for="(level, levelIndex) in levels" :key="levelIndex" class="mb-6">
              <div class="flex items-center mb-3">
                <span class="text-lg mr-2">{{ level.icon }}</span>
                <h3 class="font-bold text-gray-900">{{ level.name }}</h3>
                <span class="ml-auto text-sm font-semibold px-2 py-1 bg-gray-100 rounded">
                  {{ getLevelProgress(levelIndex) }}%
                </span>
              </div>
              
              <div class="space-y-2 ml-2">
                <button
                  v-for="(chapter, chapterIndex) in level.chapters"
                  :key="chapterIndex"
                  @click="selectChapter(levelIndex, chapterIndex)"
                  :disabled="!chapter.unlocked"
                  :class="[
                    'w-full text-left p-3 rounded-lg transition-all flex items-center',
                    isSelected(levelIndex, chapterIndex) ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50',
                    !chapter.unlocked && 'opacity-50 cursor-not-allowed'
                  ]"
                >
                  <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
                    <div 
                      v-if="chapter.completed"
                      class="w-full h-full bg-green-500 text-white rounded-lg flex items-center justify-center"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div 
                      v-else-if="!chapter.unlocked"
                      class="w-full h-full bg-gray-300 text-gray-600 rounded-lg flex items-center justify-center"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div 
                      v-else
                      class="w-full h-full bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold"
                    >
                      {{ getChapterNumber(levelIndex, chapterIndex) }}
                    </div>
                  </div>
                  
                  <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-sm text-gray-900 truncate">{{ chapter.title }}</h4>
                    <div class="flex items-center text-xs text-gray-500 mt-1">
                      <span class="flex items-center mr-3">
                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                        </svg>
                        {{ chapter.readTime }}
                      </span>
                      <span>{{ chapter.quiz.length }} quiz</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Navigation latérale (Desktop) -->
        <aside class="hidden lg:block lg:w-80 xl:w-96 flex-shrink-0">
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 sticky top-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div class="p-6">
              <div v-for="(level, levelIndex) in levels" :key="levelIndex" class="mb-8 last:mb-0">
                <!-- En-tête niveau -->
                <div class="flex items-center mb-4 p-3 bg-gray-50 rounded-xl border border-gray-200">
                  <span class="text-2xl mr-3">{{ level.icon }}</span>
                  <div class="flex-1">
                    <h3 class="font-bold text-gray-900">{{ level.name }}</h3>
                    <p class="text-sm text-gray-600">{{ level.subtitle }}</p>
                  </div>
                  <span class="text-sm font-semibold px-3 py-1 bg-white rounded-full border border-gray-300">
                    {{ getLevelProgress(levelIndex) }}%
                  </span>
                </div>
                
                <!-- Liste des chapitres -->
                <div class="space-y-2 pl-4">
                  <div
                    v-for="(chapter, chapterIndex) in level.chapters"
                    :key="chapterIndex"
                    @click="selectChapter(levelIndex, chapterIndex)"
                    :class="[
                      'group cursor-pointer p-4 rounded-xl border-2 transition-all duration-200',
                      isSelected(levelIndex, chapterIndex) 
                        ? 'border-blue-500 bg-blue-50 shadow-sm' 
                        : 'border-transparent hover:border-blue-200 hover:bg-gray-50',
                      !chapter.unlocked && 'opacity-50 cursor-not-allowed'
                    ]"
                  >
                    <div class="flex items-start">
                      <!-- Indicateur d'état -->
                      <div class="flex-shrink-0 mr-4">
                        <div 
                          v-if="chapter.completed"
                          class="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center"
                        >
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div 
                          v-else-if="!chapter.unlocked"
                          class="w-10 h-10 bg-gray-300 text-gray-600 rounded-xl flex items-center justify-center"
                        >
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div 
                          v-else
                          class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg"
                        >
                          {{ getChapterNumber(levelIndex, chapterIndex) }}
                        </div>
                      </div>
                      
                      <!-- Contenu du chapitre -->
                      <div class="flex-1 min-w-0">
                        <h4 class="font-bold text-gray-900 mb-1">{{ chapter.title }}</h4>
                        <p class="text-sm text-gray-600 mb-2">{{ chapter.description }}</p>
                        
                        <div class="flex items-center text-xs text-gray-500">
                          <span class="flex items-center mr-4">
                            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                            </svg>
                            {{ chapter.readTime }}
                          </span>
                          <span class="flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                              <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                            </svg>
                            {{ chapter.quiz.length }} quiz
                          </span>
                        </div>
                      </div>
                      
                      <!-- Indicateur de sélection -->
                      <div v-if="isSelected(levelIndex, chapterIndex)" class="flex-shrink-0 ml-4">
                        <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <!-- Contenu principal -->
        <main class="flex-1">
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <!-- En-tête du chapitre -->
            <div class="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white p-6 md:p-8">
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div class="flex-1">
                  <!-- Fil d'Ariane -->
                  <div class="flex items-center text-sm text-gray-600 mb-4 flex-wrap gap-2">
                    <span 
                      class="px-3 py-1 rounded-full font-semibold"
                      :style="{ backgroundColor: `${getLevelColor(selectedLevel)}20`, color: getLevelColor(selectedLevel) }"
                    >
                      {{ currentLevel.name }}
                    </span>
                    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span class="font-medium text-gray-900">Chapitre {{ currentChapterNumber }}</span>
                  </div>
                  
                  <!-- Titre et description -->
                  <div class="flex items-start gap-4 mb-6">
                    <div 
                      class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                      :style="{ background: `linear-gradient(135deg, ${getLevelColor(selectedLevel)}, ${getLevelColor(selectedLevel)}CC)` }"
                    >
                      {{ currentChapterNumber }}
                    </div>
                    <div class="flex-1">
                      <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{{ currentChapter.title }}</h1>
                      <p class="text-lg text-gray-600">{{ currentChapter.description }}</p>
                    </div>
                  </div>
                  
                  <!-- Stats du chapitre -->
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
                    <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <div class="flex items-center">
                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <div class="font-bold text-gray-900">{{ currentChapter.readTime }}</div>
                          <div class="text-sm text-gray-600">Durée estimée</div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <div class="flex items-center">
                        <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                          <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <div class="font-bold text-gray-900">{{ currentChapter.quiz.length }}</div>
                          <div class="text-sm text-gray-600">Questions</div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <div class="flex items-center">
                        <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                          <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <div class="font-bold text-gray-900">{{ currentChapter.examplesCount }}</div>
                          <div class="text-sm text-gray-600">Exemples</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contenu pédagogique -->
            <div v-if="!showQuiz" class="p-6 md:p-8">
              <!-- Contenu principal -->
              <div class="max-w-4xl mx-auto space-y-8">
                <!-- Théorie -->
                <section class="prose prose-lg max-w-none">
                  <div class="flex items-center gap-3 mb-6">
                    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span class="text-2xl">📚</span>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-900 m-0">Contenu pédagogique</h2>
                  </div>
                  <div v-html="currentChapter.content" class="prose-headings:font-bold prose-p:text-gray-700 prose-li:text-gray-700"></div>
                </section>

                <!-- Exemples pratiques -->
                <section v-if="currentChapter.examples" class="bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 p-6 md:p-8">
                  <div class="flex items-center gap-3 mb-6">
                    <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span class="text-2xl">💡</span>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-900">Exemples pratiques</h2>
                  </div>
                  <div v-html="currentChapter.examples" class="prose max-w-none"></div>
                </section>

                <!-- Points clés -->
                <section v-if="currentChapter.keyPoints" class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200 p-6 md:p-8">
                  <div class="flex items-center gap-3 mb-6">
                    <div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <span class="text-2xl">⭐</span>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-900">Points clés à retenir</h2>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      v-for="(point, idx) in currentChapter.keyPoints" 
                      :key="idx"
                      class="bg-white p-5 rounded-xl border border-yellow-200 hover:border-yellow-300 transition-colors"
                    >
                      <div class="flex items-start gap-4">
                        <div class="flex-shrink-0 w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                          {{ idx + 1 }}
                        </div>
                        <div class="text-gray-700 leading-relaxed">{{ point }}</div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- CTA Quiz -->
                <section class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-300 p-8 text-center">
                  <div class="max-w-md mx-auto">
                    <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Validation des connaissances</h3>
                    <p class="text-gray-600 mb-6">
                      Testez votre compréhension avec {{ currentChapter.quiz.length }} questions pratiques.
                      Un score minimum de 70% est requis pour débloquer le chapitre suivant.
                    </p>
                    <button 
                      @click="startQuiz"
                      class="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                    >
                      <span>Commencer le quiz</span>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                      </svg>
                    </button>
                  </div>
                </section>
              </div>
            </div>

            <!-- Interface Quiz -->
            <QuizInterface 
              v-else
              :quiz="currentChapter.quiz"
              :chapter-title="currentChapter.title"
              @complete="handleQuizComplete"
              @retry="showQuiz = false"
            />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import QuizInterface from './QuizInterface.vue'
import { COURSE_LEVELS, getProgress } from '@/data/javascript-courses'

const isMobileMenuOpen = ref(false)
const selectedLevel = ref(0)
const selectedChapterIndex = ref(0)
const showQuiz = ref(false)

// Utilisation directe des données importées
const levels = ref(COURSE_LEVELS)

// Computed properties
const currentChapter = computed(() => {
  return levels.value[selectedLevel.value]?.chapters[selectedChapterIndex.value] || {}
})

const currentLevel = computed(() => {
  return levels.value[selectedLevel.value] || {}
})

const currentChapterNumber = computed(() => {
  let count = 0
  for (let i = 0; i < selectedLevel.value; i++) {
    count += levels.value[i]?.chapters.length || 0
  }
  return count + selectedChapterIndex.value + 1
})

const totalChapters = computed(() => {
  return levels.value.reduce((sum, level) => sum + level.chapters.length, 0)
})

const completedCount = computed(() => {
  return levels.value.reduce((sum, level) => 
    sum + level.chapters.filter(ch => ch.completed).length, 0
  )
})

// Utilisation de la fonction getProgress importée
const progress = computed(() => getProgress(levels.value))

// Pour compatibilité avec le template existant
const progressPercentage = computed(() => progress.value.percentage)

// Methods
function getLevelColor(levelIndex) {
  const colors = ['#48BB78', '#4299E1', '#ED8936', '#9F7AEA', '#F56565', '#4FD1C7']
  return colors[levelIndex % colors.length]
}

function getLevelProgress(levelIndex) {
  const level = levels.value[levelIndex]
  const completed = level.chapters.filter(ch => ch.completed).length
  return Math.round((completed / level.chapters.length) * 100) || 0
}

function isSelected(levelIndex, chapterIndex) {
  return selectedLevel.value === levelIndex && selectedChapterIndex.value === chapterIndex
}

function getChapterNumber(levelIndex, chapterIndex) {
  let count = 0
  for (let i = 0; i < levelIndex; i++) {
    count += levels.value[i]?.chapters.length || 0
  }
  return count + chapterIndex + 1
}

function selectChapter(levelIndex, chapterIndex) {
  const chapter = levels.value[levelIndex].chapters[chapterIndex]
  if (chapter.unlocked) {
    selectedLevel.value = levelIndex
    selectedChapterIndex.value = chapterIndex
    showQuiz.value = false
    isMobileMenuOpen.value = false // Fermer le menu mobile
    
    // Animation
    const content = document.querySelector('.learning-content')
    if (content) {
      content.style.opacity = '0.5'
      setTimeout(() => {
        content.style.opacity = '1'
      }, 150)
    }
  }
}

function startQuiz() {
  showQuiz.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleQuizComplete(score) {
  if (score >= 70) {
    // Marquer le chapitre comme complété
    levels.value[selectedLevel.value].chapters[selectedChapterIndex.value].completed = true
    
    // Débloquer le prochain chapitre
    const nextChapterIndex = selectedChapterIndex.value + 1
    if (nextChapterIndex < currentLevel.value.chapters.length) {
      levels.value[selectedLevel.value].chapters[nextChapterIndex].unlocked = true
    } else {
      // Débloquer le premier chapitre du niveau suivant
      const nextLevelIndex = selectedLevel.value + 1
      if (nextLevelIndex < levels.value.length) {
        levels.value[nextLevelIndex].chapters[0].unlocked = true
      }
    }
    
    // Sauvegarder la progression
    saveProgress()
    
    // Afficher une notification
    showNotification('🎉 Chapitre validé avec succès !')
    
    setTimeout(() => {
      showQuiz.value = false
    }, 2000)
  }
}

function saveProgress() {
  const progress = {
    levels: levels.value.map(level => ({
      chapters: level.chapters.map(chapter => ({
        completed: chapter.completed,
        unlocked: chapter.unlocked
      }))
    })),
    lastChapter: {
      level: selectedLevel.value,
      chapter: selectedChapterIndex.value
    },
    timestamp: new Date().toISOString()
  }
  
  localStorage.setItem('js-learning-progress', JSON.stringify(progress))
}

function loadProgress() {
  const saved = localStorage.getItem('js-learning-progress')
  if (saved) {
    try {
      const progress = JSON.parse(saved)
      
      progress.levels.forEach((levelData, levelIndex) => {
        if (levels.value[levelIndex]) {
          levelData.chapters.forEach((chapterData, chapterIndex) => {
            if (levels.value[levelIndex].chapters[chapterIndex]) {
              levels.value[levelIndex].chapters[chapterIndex].completed = chapterData.completed
              levels.value[levelIndex].chapters[chapterIndex].unlocked = chapterData.unlocked
            }
          })
        }
      })
      
      if (progress.lastChapter) {
        selectedLevel.value = progress.lastChapter.level
        selectedChapterIndex.value = progress.lastChapter.chapter
      }
    } catch (error) {
      console.error('Erreur chargement progression:', error)
    }
  }
}

function showNotification(message) {
  const notification = document.createElement('div')
  notification.className = 'fixed top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 transform transition-all duration-300 animate-in slide-in-from-right-5'
  notification.innerHTML = `
    <div class="flex items-center gap-3">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span class="font-semibold">${message}</span>
    </div>
  `
  document.body.appendChild(notification)
  
  setTimeout(() => {
    notification.style.opacity = '0'
    notification.style.transform = 'translateX(100%)'
    setTimeout(() => notification.remove(), 300)
  }, 3000)
}

function handleKeydown(event) {
  if (event.ctrlKey && event.key === 'ArrowRight') {
    event.preventDefault()
    nextChapter()
  }
  if (event.ctrlKey && event.key === 'ArrowLeft') {
    event.preventDefault()
    previousChapter()
  }
  if (event.key === 'Escape' && showQuiz.value) {
    showQuiz.value = false
  }
}

function nextChapter() {
  const nextIndex = selectedChapterIndex.value + 1
  if (nextIndex < currentLevel.value.chapters.length) {
    selectChapter(selectedLevel.value, nextIndex)
  } else {
    const nextLevel = selectedLevel.value + 1
    if (nextLevel < levels.value.length) {
      selectChapter(nextLevel, 0)
    }
  }
}

function previousChapter() {
  const prevIndex = selectedChapterIndex.value - 1
  if (prevIndex >= 0) {
    selectChapter(selectedLevel.value, prevIndex)
  } else {
    const prevLevel = selectedLevel.value - 1
    if (prevLevel >= 0) {
      const prevChapters = levels.value[prevLevel].chapters
      selectChapter(prevLevel, prevChapters.length - 1)
    }
  }
}

// Lifecycle hooks
onMounted(() => {
  loadProgress()
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  saveProgress()
})
</script>
<style>
/* Animations personnalisées */
@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-in {
  animation: slideInFromRight 0.3s ease-out;
}

/* Styles pour le contenu markdown/prose */
.prose {
  color: #374151;
  max-width: none;
}

.prose h1, .prose h2, .prose h3, .prose h4 {
  color: #111827;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h1 { font-size: 2.25rem; }
.prose h2 { font-size: 1.875rem; }
.prose h3 { font-size: 1.5rem; }

.prose p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.75;
}

.prose ul, .prose ol {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose li {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose code {
  background-color: #f3f4f6;
  color: #1f2937;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875em;
}

.prose pre {
  background-color: #1f2937;
  color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.prose pre code {
  background-color: transparent;
  color: inherit;
  padding: 0;
  border-radius: 0;
  font-size: 0.875rem;
}

/* Personnalisation de la scrollbar */
.learning-sidebar::-webkit-scrollbar {
  width: 6px;
}

.learning-sidebar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.learning-sidebar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.learning-sidebar::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* Transitions */
.chapter-item {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive */
@media (max-width: 768px) {
  .platform-header {
    text-align: center;
  }
  
  .header-stats {
    justify-content: center;
  }
}
</style>