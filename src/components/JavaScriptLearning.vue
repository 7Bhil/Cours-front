<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header avec accent color -->
    <header class="bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-sm">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <span class="text-white font-bold">JS</span>
              </div>
              <div>
                <h1 class="text-xl font-bold">JavaScript Masterclass</h1>
                <p class="text-sm text-blue-200">Formation complète - 38 chapitres</p>
              </div>
            </div>
            
            <div class="hidden md:flex items-center space-x-1">
              <div class="px-3 py-1 bg-white/10 rounded-lg text-sm">Progression</div>
              <div class="w-32 bg-white/20 rounded-full h-2">
                <div 
                  class="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-700"
                  :style="{ width: progressPercentage + '%' }"
                ></div>
              </div>
              <span class="text-sm font-medium">{{ progressPercentage }}%</span>
            </div>
          </div>
          
          <!-- Stats rapides -->
          <div class="hidden lg:flex items-center space-x-4">
            <div class="text-center">
              <div class="text-lg font-bold">{{ completedCount }}</div>
              <div class="text-xs text-blue-200">Terminés</div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold">{{ totalChapters }}</div>
              <div class="text-xs text-blue-200">Chapitres</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-6 py-8">
      <div class="grid grid-cols-12 gap-6">
        <!-- Sidebar colorée -->
        <aside class="col-span-12 lg:col-span-4 xl:col-span-3">
          <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <!-- En-tête avec couleur -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-blue-100">
              <h2 class="text-lg font-bold text-gray-800 mb-1">Parcours d'apprentissage</h2>
              <p class="text-sm text-gray-600">Niveau {{ selectedLevel + 1 }} sur {{ levels.length }}</p>
            </div>

            <!-- Navigation -->
            <div class="p-4 max-h-[calc(100vh-16rem)] overflow-y-auto">
              <div v-for="(level, levelIndex) in levels" :key="levelIndex" class="mb-6">
                <!-- Niveau avec badge de progression -->
                <div 
                  @click="selectLevel(levelIndex)"
                  :class="[
                    'flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 mb-3',
                    selectedLevel === levelIndex 
                      ? 'bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200' 
                      : 'hover:bg-gray-50'
                  ]"
                >
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                         :style="{ background: getLevelColor(levelIndex) }">
                      {{ levelIndex + 1 }}
                    </div>
                    <div>
                      <h3 class="text-sm font-semibold text-gray-800">{{ level.name }}</h3>
                      <p class="text-xs text-gray-500">{{ level.chapters.length }} chapitres</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-sm font-bold" :style="{ color: getLevelColor(levelIndex) }">
                      {{ getLevelProgress(levelIndex) }}%
                    </div>
                  </div>
                </div>

                <!-- Chapitres -->
                <div class="space-y-2 ml-4">
                  <div
                    v-for="(chapter, chapterIndex) in level.chapters"
                    :key="chapterIndex"
                    @click="selectChapter(levelIndex, chapterIndex)"
                    :class="[
                      'group p-3 rounded-lg border cursor-pointer transition-all duration-200',
                      isSelected(levelIndex, chapterIndex) 
                        ? 'border-blue-300 bg-gradient-to-r from-blue-50 to-white shadow-sm' 
                        : chapter.unlocked 
                          ? 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/50' 
                          : 'border-gray-100 bg-gray-50/50',
                      !chapter.unlocked && 'cursor-not-allowed'
                    ]"
                  >
                    <div class="flex items-center space-x-3">
                      <!-- Indicateur d'état avec couleur -->
                      <div class="flex-shrink-0">
                        <div v-if="chapter.completed" 
                             class="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div v-else-if="chapter.unlocked" 
                             class="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                          {{ getChapterNumber(levelIndex, chapterIndex) }}
                        </div>
                        <div v-else 
                             class="w-7 h-7 bg-gray-300 rounded-lg flex items-center justify-center">
                          <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                      </div>

                      <!-- Contenu -->
                      <div class="flex-1 min-w-0">
                        <h4 class="text-sm font-medium text-gray-800 mb-1 group-hover:text-blue-700 transition-colors">
                          {{ chapter.title }}
                        </h4>
                        <div class="flex items-center space-x-3 text-xs text-gray-500">
                          <span class="flex items-center">
                            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                            </svg>
                            {{ chapter.readTime }}
                          </span>
                          <span>•</span>
                          <span>{{ chapter.quiz.length }} quiz</span>
                        </div>
                      </div>

                      <!-- Indicateur de sélection -->
                      <div v-if="isSelected(levelIndex, chapterIndex)" class="flex-shrink-0">
                        <div class="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Actions rapides -->
            <div class="p-4 border-t border-gray-100 bg-gray-50/50">
              <div class="grid grid-cols-2 gap-3">
                <button
                  @click="previousChapter"
                  :disabled="!hasPreviousChapter"
                  :class="[
                    'px-4 py-2.5 text-sm font-medium rounded-lg border transition-all duration-200 flex items-center justify-center',
                    hasPreviousChapter
                      ? 'text-gray-700 border-gray-300 hover:bg-white hover:border-gray-400'
                      : 'text-gray-400 border-gray-200 cursor-not-allowed'
                  ]"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Précédent
                </button>
                <button
                  @click="nextChapter"
                  :disabled="!hasNextChapter"
                  :class="[
                    'px-4 py-2.5 text-sm font-medium rounded-lg border transition-all duration-200 flex items-center justify-center',
                    hasNextChapter
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-600 hover:from-blue-700 hover:to-blue-800'
                      : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white border-gray-400 cursor-not-allowed'
                  ]"
                >
                  Suivant
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </aside>

        <!-- Contenu principal -->
        <main class="col-span-12 lg:col-span-8 xl:col-span-9">
          <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <!-- En-tête du chapitre avec couleur -->
            <div class="bg-gradient-to-r from-gray-50 to-blue-50/30 p-8 border-b border-gray-200">
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div class="flex-1">
                  <!-- Breadcrumb avec couleur -->
                  <div class="flex items-center space-x-3 mb-4">
                    <span class="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-medium rounded-lg">
                      {{ currentLevel.name }}
                    </span>
                    <span class="text-gray-400">/</span>
                    <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                      Chapitre {{ currentChapterNumber }}
                    </span>
                  </div>
                  
                  <!-- Titre et description -->
                  <div class="mb-6">
                    <div class="flex items-start space-x-4">
                      <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                        {{ currentChapterNumber }}
                      </div>
                      <div>
                        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{{ currentChapter.title }}</h1>
                        <p class="text-gray-600">{{ currentChapter.description }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Métriques avec couleurs -->
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                      <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div class="font-bold text-gray-900">{{ currentChapter.readTime }}</div>
                          <div class="text-xs text-gray-600">Durée estimée</div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                      <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div class="font-bold text-gray-900">{{ currentChapter.quiz.length }}</div>
                          <div class="text-xs text-gray-600">Questions</div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border border-yellow-200">
                      <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <div class="font-bold text-gray-900">{{ currentChapter.examplesCount || 0 }}</div>
                          <div class="text-xs text-gray-600">Exemples</div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                      <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div class="font-bold text-gray-900 capitalize">{{ currentChapter.difficulty || 'Débutant' }}</div>
                          <div class="text-xs text-gray-600">Difficulté</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Boutons d'action -->
                <div class="flex flex-col space-y-3">
                  <button
                    v-if="!currentChapter.completed && !showQuiz"
                    @click="startQuiz"
                    class="px-5 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>🎯</span>
                    <span>Passer le quiz</span>
                  </button>
                  <button
                    @click="markAsCompleted"
                    :class="[
                      'px-5 py-3 font-semibold rounded-lg border transition-all duration-300 flex items-center justify-center space-x-2',
                      currentChapter.completed
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-600 hover:shadow-lg'
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300'
                    ]"
                  >
                    <span v-if="currentChapter.completed">✓</span>
                    <span>{{ currentChapter.completed ? 'Terminé' : 'Marquer terminé' }}</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Interface Quiz -->
            <QuizInterface 
              v-if="showQuiz"
              :quiz="currentChapter.quiz"
              :chapter-title="currentChapter.title"
              @complete="handleQuizComplete"
              @retry="retryQuiz"
            />

            <!-- Contenu pédagogique -->
            <div v-else class="p-8">
              <div class="max-w-4xl mx-auto space-y-10">
                <!-- Section théorique -->
                <section>
                  <div class="flex items-center mb-6">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-2xl font-bold text-gray-900">Contenu pédagogique</h2>
                      <p class="text-gray-600 mt-1">Apprenez les concepts fondamentaux</p>
                    </div>
                  </div>
                  <div v-html="currentChapter.content" class="content-prose"></div>
                </section>

                <!-- Exemples pratiques -->
                <section v-if="currentChapter.examples" class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                  <div class="flex items-center mb-6">
                    <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-2xl font-bold text-gray-900">Exemples pratiques</h2>
                      <p class="text-gray-600 mt-1">Mettez en pratique vos connaissances</p>
                    </div>
                  </div>
                  <div v-html="currentChapter.examples" class="content-prose"></div>
                </section>

                <!-- Points clés -->
                <section v-if="currentChapter.keyPoints" class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
                  <div class="flex items-center mb-6">
                    <div class="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-2xl font-bold text-gray-900">Points clés à retenir</h2>
                      <p class="text-gray-600 mt-1">Les concepts essentiels du chapitre</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      v-for="(point, idx) in currentChapter.keyPoints" 
                      :key="idx"
                      class="bg-white p-5 rounded-xl border border-amber-200 hover:border-amber-300 transition-all duration-200 hover:shadow-md"
                    >
                      <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                          {{ idx + 1 }}
                        </div>
                        <div class="text-gray-700 leading-relaxed">{{ point }}</div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- CTA Quiz avec couleur -->
                <section class="text-center py-10">
                  <div class="max-w-2xl mx-auto">
                    <div class="mb-8">
                      <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <span class="text-3xl">🎯</span>
                      </div>
                      <h3 class="text-2xl font-bold text-gray-900 mb-3">Validation des connaissances</h3>
                      <p class="text-gray-600 mb-2">
                        Testez votre compréhension avec {{ currentChapter.quiz.length }} questions.
                      </p>
                      <p class="text-sm text-blue-600 font-medium">
                        ✓ Score minimum requis : 70% pour débloquer la suite
                      </p>
                    </div>
                    
                    <!-- AUTO-SCROLL EN HAUT QUAND ON CLIQUE ! -->
                    <button
                      @click="startQuiz"
                      class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                      <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                      Commencer le quiz
                    </button>
                    
                    <p v-if="currentChapter.completed" class="mt-4 text-sm text-green-600 font-medium">
                      ✅ Vous avez déjà réussi ce quiz avec succès !
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import QuizInterface from './QuizInterface.vue'
import { COURSE_LEVELS, getProgress } from '@/data/javascript-courses'

// État
const selectedLevel = ref(0)
const selectedChapterIndex = ref(0)
const showQuiz = ref(false)
const toast = ref({ visible: false, message: '', type: 'info' })
const levels = ref(COURSE_LEVELS)

// Computed
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

const progress = computed(() => getProgress(levels.value))
const progressPercentage = computed(() => progress.value.percentage)

const hasPreviousChapter = computed(() => {
  return selectedChapterIndex.value > 0 || selectedLevel.value > 0
})

const hasNextChapter = computed(() => {
  const nextInLevel = selectedChapterIndex.value < currentLevel.value.chapters.length - 1
  const nextLevel = selectedLevel.value < levels.value.length - 1
  return (nextInLevel && currentChapter.value.unlocked) || nextLevel
})

// Méthodes
function getLevelColor(levelIndex) {
  const colors = [
    'linear-gradient(135deg, #10B981, #059669)',  // Vert émeraude
    'linear-gradient(135deg, #3B82F6, #2563EB)',  // Bleu
    'linear-gradient(135deg, #F59E0B, #D97706)',  // Ambre
    'linear-gradient(135deg, #8B5CF6, #7C3AED)',  // Violet
    'linear-gradient(135deg, #EF4444, #DC2626)',  // Rouge
    'linear-gradient(135deg, #06B6D4, #0891B2)'   // Cyan
  ]
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
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll en haut
    saveProgress()
  } else {
    showToast('Terminez le chapitre précédent pour débloquer celui-ci', 'info')
  }
}

function selectLevel(levelIndex) {
  selectedLevel.value = levelIndex
  selectedChapterIndex.value = 0
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// AUTO-SCROLL EN HAUT QUAND ON COMMENCE LE QUIZ !
function startQuiz() {
  showQuiz.value = true
  // Scroll automatique vers le haut
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function retryQuiz() {
  showQuiz.value = false
  setTimeout(() => {
    showQuiz.value = true
  }, 300)
}

function handleQuizComplete(score) {
  const success = score >= 70
  
  if (success) {
    levels.value[selectedLevel.value].chapters[selectedChapterIndex.value].completed = true
    
    // Débloquer le prochain chapitre
    const nextInLevel = selectedChapterIndex.value + 1
    if (nextInLevel < currentLevel.value.chapters.length) {
      levels.value[selectedLevel.value].chapters[nextInLevel].unlocked = true
    } else {
      const nextLevel = selectedLevel.value + 1
      if (nextLevel < levels.value.length) {
        levels.value[nextLevel].chapters[0].unlocked = true
      }
    }
    
    saveProgress()
    showToast(`Quiz réussi ! Score: ${score}%`, 'success')
    
    // Auto-avancement après 1.5s
    setTimeout(() => {
      showQuiz.value = false
      window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll en haut après quiz
      if (nextInLevel < currentLevel.value.chapters.length) {
        selectChapter(selectedLevel.value, nextInLevel)
      } else if (selectedLevel.value + 1 < levels.value.length) {
        selectChapter(selectedLevel.value + 1, 0)
      }
    }, 1500)
  } else {
    showToast(`Score: ${score}%. 70% minimum requis`, 'error')
    setTimeout(() => {
      showQuiz.value = false
      window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll en haut même si échec
    }, 2000)
  }
}

function markAsCompleted() {
  if (!currentChapter.value.completed) {
    levels.value[selectedLevel.value].chapters[selectedChapterIndex.value].completed = true
    saveProgress()
    showToast('Chapitre marqué comme terminé', 'success')
  }
}

function nextChapter() {
  const nextInLevel = selectedChapterIndex.value + 1
  const nextLevel = selectedLevel.value + 1
  
  if (nextInLevel < currentLevel.value.chapters.length && currentLevel.value.chapters[nextInLevel].unlocked) {
    selectChapter(selectedLevel.value, nextInLevel)
  } else if (nextLevel < levels.value.length && levels.value[nextLevel].chapters[0].unlocked) {
    selectChapter(nextLevel, 0)
  }
}

function previousChapter() {
  const prevInLevel = selectedChapterIndex.value - 1
  const prevLevel = selectedLevel.value - 1
  
  if (prevInLevel >= 0) {
    selectChapter(selectedLevel.value, prevInLevel)
  } else if (prevLevel >= 0) {
    const chapters = levels.value[prevLevel].chapters
    selectChapter(prevLevel, chapters.length - 1)
  }
}

function showToast(message, type = 'info') {
  toast.value = { visible: true, message, type }
  setTimeout(() => {
    toast.value.visible = false
  }, 3000)
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

onMounted(() => {
  loadProgress()
  
  if (levels.value[0]?.chapters[0]) {
    levels.value[0].chapters[0].unlocked = true
  }
})
</script>

<style scoped>
/* Styles pour le contenu markdown */
.content-prose {
  color: #374151;
  line-height: 1.75;
}

.content-prose :deep(h1) {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.content-prose :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
}

.content-prose :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.content-prose :deep(p) {
  margin-bottom: 1rem;
}

.content-prose :deep(ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.content-prose :deep(ol) {
  list-style-type: decimal;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.content-prose :deep(li) {
  margin-bottom: 0.5rem;
}

.content-prose :deep(code) {
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: ui-monospace, monospace;
  font-size: 0.875em;
}

.content-prose :deep(pre) {
  background: linear-gradient(135deg, #1f2937, #111827);
  color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin: 1.5rem 0;
  border: 1px solid #374151;
}

.content-prose :deep(pre code) {
  background: transparent;
  padding: 0;
  font-size: 0.875rem;
}

.content-prose :deep(blockquote) {
  border-left: 4px solid #3b82f6;
  padding-left: 1.5rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: #4b5563;
  background: linear-gradient(to right, #f0f9ff, transparent);
}

/* Animations */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #1d4ed8);
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #1e40af);
}
</style>