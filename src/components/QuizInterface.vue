<!-- QuizInterface.vue - Mise à jour -->
<template>
  <div class="p-6 md:p-8 animate-fade-in">
    <!-- En-tête du quiz -->
    <div class="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h3 class="text-xl font-bold text-gray-900">Quiz: {{ chapterTitle }}</h3>
          <p class="text-gray-600 mt-1">Question {{ currentQuestion + 1 }} sur {{ quiz.length }}</p>
        </div>
        <div class="text-lg font-bold text-blue-600">
          Score: {{ score }}/{{ quiz.length }}
        </div>
      </div>
      
      <!-- Barre de progression -->
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div 
          class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
          :style="{ width: ((currentQuestion + 1) / quiz.length * 100) + '%' }"
        ></div>
      </div>
    </div>

    <!-- Question actuelle -->
    <div class="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-6">
      <div class="mb-2">
        <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
          Question {{ currentQuestion + 1 }}
        </span>
      </div>
      
      <h4 class="text-xl font-bold text-gray-900 mb-6 leading-relaxed">
        {{ currentQuestionObj.question }}
      </h4>

      <!-- Options -->
      <div class="space-y-3">
        <button
          v-for="(option, idx) in currentQuestionObj.options"
          :key="idx"
          @click="selectAnswer(idx)"
          :disabled="selectedAnswer !== null"
          :class="[
            'w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium',
            getOptionClass(idx)
          ]"
        >
          <div class="flex items-center">
            <div :class="[
              'w-10 h-10 rounded-lg border flex items-center justify-center mr-4 font-bold text-lg',
              getOptionIconClass(idx)
            ]">
              {{ String.fromCharCode(65 + idx) }}
            </div>
            <span class="text-gray-900">{{ option }}</span>
          </div>
        </button>
      </div>

      <!-- Feedback -->
      <div v-if="selectedAnswer !== null" class="mt-8 animate-fade-in">
        <div :class="[
          'rounded-xl p-6 mb-6',
          isCorrect ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'
        ]">
          <div class="flex items-start gap-4">
            <div :class="[
              'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
              isCorrect ? 'bg-green-500' : 'bg-red-500'
            ]">
              <span class="text-white text-2xl">{{ isCorrect ? '✓' : '✗' }}</span>
            </div>
            <div>
              <h5 class="font-bold text-lg mb-2" :class="isCorrect ? 'text-green-900' : 'text-red-900'">
                {{ isCorrect ? 'Bonne réponse !' : 'À retravailler' }}
              </h5>
              <p :class="isCorrect ? 'text-green-800' : 'text-red-800'">
                {{ currentQuestionObj.explanation }}
              </p>
            </div>
          </div>
        </div>

        <button 
          @click="nextQuestion"
          class="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
        >
          {{ currentQuestion < quiz.length - 1 ? 'Question suivante →' : 'Voir les résultats' }}
        </button>
      </div>
    </div>
    
    <!-- Résultats -->
    <div v-if="showResults" class="bg-white rounded-2xl border border-gray-200 p-8 text-center">
      <div class="mb-6">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" 
             :class="finalScore >= 70 ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'">
          <span class="text-3xl">{{ finalScore >= 70 ? '🎉' : '📚' }}</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">
          {{ finalScore >= 70 ? 'Félicitations !' : 'Presque !' }}
        </h3>
        <div class="text-3xl font-bold mb-2" 
             :class="finalScore >= 70 ? 'text-green-600' : 'text-yellow-600'">
          {{ finalScore }}%
        </div>
        <p class="text-gray-600">
          Score: {{ score }}/{{ quiz.length }}
        </p>
      </div>
      
      <div class="grid grid-cols-2 gap-4 mb-8">
        <button @click="$emit('retry')" 
                class="py-3 px-6 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium">
          Réessayer
        </button>
        <button @click="$emit('complete', finalScore)" 
                class="py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all font-medium">
          Continuer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  quiz: {
    type: Array,
    default: () => []
  },
  chapterTitle: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['complete', 'retry'])

const currentQuestion = ref(0)
const selectedAnswer = ref(null)
const score = ref(0)
const showResults = ref(false)

const currentQuestionObj = computed(() => props.quiz[currentQuestion.value] || {})
const isCorrect = computed(() => selectedAnswer.value === currentQuestionObj.value.correct)
const finalScore = computed(() => Math.round((score.value / props.quiz.length) * 100))

function getOptionClass(idx) {
  if (selectedAnswer.value === null) {
    return 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
  }
  
  if (idx === currentQuestionObj.value.correct) {
    return 'border-green-500 bg-green-50 text-green-900'
  }
  
  if (selectedAnswer.value === idx && idx !== currentQuestionObj.value.correct) {
    return 'border-red-500 bg-red-50 text-red-900'
  }
  
  return 'border-gray-200 bg-gray-50 text-gray-400'
}

function getOptionIconClass(idx) {
  if (selectedAnswer.value === null) {
    return 'border-gray-300 bg-white text-gray-700'
  }
  
  if (idx === currentQuestionObj.value.correct) {
    return 'border-green-500 bg-green-500 text-white'
  }
  
  if (selectedAnswer.value === idx && idx !== currentQuestionObj.value.correct) {
    return 'border-red-500 bg-red-500 text-white'
  }
  
  return 'border-gray-200 bg-gray-200 text-gray-400'
}

function selectAnswer(idx) {
  if (selectedAnswer.value === null) {
    selectedAnswer.value = idx
    if (idx === currentQuestionObj.value.correct) {
      score.value++
    }
  }
}

function nextQuestion() {
  if (currentQuestion.value < props.quiz.length - 1) {
    currentQuestion.value++
    selectedAnswer.value = null
  } else {
    showResults.value = true
  }
}
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
</style>