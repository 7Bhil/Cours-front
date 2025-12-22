<template>
  <div class="javascript-page bg-white">
    <!-- Hero Section identique -->
    <section class="relative bg-gradient-to-b from-yellow-50 to-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Logo identique -->
          <div class="flex-shrink-0">
            <div class="w-24 h-24 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-16 h-16 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
              </svg>
            </div>
          </div>

          <!-- Texte amélioré -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              JavaScript Masterclass
            </h1>
            <p class="text-xl text-gray-600 mb-6">
              Apprenez JavaScript de A à Z avec un parcours structuré et interactif. De la syntaxe de base aux concepts avancés.
            </p>
            
            <!-- Bouton d'accès au cours -->
            <router-link 
              to="/javascript/cours"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 mb-6"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              Démarrer le cours interactif
            </router-link>

            <!-- Badges identiques -->
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                Frontend
              </span>
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                Backend (Node.js)
              </span>
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                Full Stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation rapide identique -->
    <section class="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex space-x-8 overflow-x-auto py-4">
          <button @click="scrollTo('installation')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Installation
          </button>
          <button @click="scrollTo('bases')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Les bases
          </button>
          <button @click="scrollTo('concepts')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Concepts clés
          </button>
          <button @click="scrollTo('ressources')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Ressources
          </button>
          <button @click="scrollTo('quiz')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Quiz rapide
          </button>
        </nav>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contenu principal identique -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Installation - Version simplifiée -->
          <section id="installation" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🏗️ Installation et configuration</h2>
            
            <div class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Navigateur web (Frontend)</h3>
              <p class="text-gray-700 mb-4">
                JavaScript fonctionne directement dans votre navigateur. Aucune installation nécessaire !
              </p>
              <div class="bg-white border border-blue-300 rounded-lg p-4">
                <p class="text-sm font-medium text-gray-900 mb-2">Ouvrez la console de votre navigateur :</p>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <strong>Chrome/Edge :</strong> F12 ou Ctrl+Shift+J
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <strong>Firefox :</strong> F12 ou Ctrl+Shift+K
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <strong>Safari :</strong> Cmd+Option+C (activer d'abord le menu Développement)
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Node.js (Backend)</h3>
              <p class="text-gray-700 mb-4">
                Pour exécuter JavaScript côté serveur :
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                <pre># Téléchargez depuis https://nodejs.org
# Version LTS recommandée

# Vérification
node --version
npm --version</pre>
              </div>
              <div class="bg-gradient-to-r from-green-100 to-green-50 border border-green-300 rounded-lg p-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                  <div>
                    <p class="text-sm font-medium text-green-800 mb-1">Conseil Pro</p>
                    <p class="text-sm text-green-700">
                      Téléchargez la version LTS (Long Term Support) pour plus de stabilité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Les bases - Version concise -->
          <section id="bases" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">📚 Les bases essentielles</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Variables -->
              <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Variables</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>let nom = "Alice";      // Modifiable
const age = 25;        // Constant
var ville = "Paris";   // Ancien (éviter)</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Utilisez <code class="bg-blue-100 px-1.5 py-0.5 rounded">const</code> par défaut, <code class="bg-blue-100 px-1.5 py-0.5 rounded">let</code> si modification nécessaire.
                </p>
              </div>

              <!-- Fonctions -->
              <div class="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Fonctions</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>function saluer(nom) {
  return `Bonjour ${nom}`;
}

// Fléchée (moderne)
const saluer = nom => 
  `Bonjour ${nom}`;</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Les fonctions fléchées sont plus concises et ont un comportement <code>this</code> différent.
                </p>
              </div>

              <!-- Conditions -->
              <div class="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Conditions</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>if (age >= 18) {
  // Majeur
} else {
  // Mineur
}

// Ternaire
const statut = age >= 18 
  ? "majeur" 
  : "mineur";</pre>
                </div>
                <p class="text-sm text-gray-600">
                  L'opérateur ternaire est utile pour des conditions courtes et simples.
                </p>
              </div>

              <!-- Boucles -->
              <div class="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Boucles</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Moderne
for (const item of items) {
  console.log(item);
}</pre>
                </div>
                <p class="text-sm text-gray-600">
                  <code>for...of</code> est plus simple pour itérer sur les tableaux.
                </p>
              </div>
            </div>
          </section>

          <!-- Concepts clés - Version condensée -->
          <section id="concepts" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🎯 Concepts clés</h2>
            
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">DOM Manipulation</h3>
                <p class="text-gray-700 mb-2">Interagir avec les éléments HTML</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('Clic !');
});</pre>
                </div>
              </div>

              <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Programmation Asynchrone</h3>
                <p class="text-gray-700 mb-2">Gérer les opérations qui prennent du temps</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}</pre>
                </div>
              </div>

              <div class="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">ES6+ Features</h3>
                <p class="text-gray-700 mb-2">Syntaxe moderne de JavaScript</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>// Destructuring
const { nom, age } = personne;

// Spread operator
const newArr = [...arr, 4, 5];

// Template strings
`Bonjour ${nom}`;</pre>
                </div>
              </div>
            </div>
          </section>

          <!-- Ressources - Même design que vous aviez -->
          <section id="ressources" class="scroll-mt-32">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-3xl font-bold text-gray-900">📁 Ressources de formation</h2>
              <span class="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">PDF • Gratuit</span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Guide -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Guide Complet JavaScript</h3>
                    <p class="text-sm text-gray-600 mb-2">Couvre tous les fondamentaux de A à Z</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 45 pages</span>
                      <span class="text-gray-500">⚡ 3.2 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('guide-javascript.pdf')"
                  class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger le guide
                  </span>
                </button>
              </div>

              <!-- Exercices -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">50 Exercices Pratiques</h3>
                    <p class="text-sm text-gray-600 mb-2">Progression du débutant à l'avancé</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 38 pages</span>
                      <span class="text-gray-500">⚡ 1.8 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('exercices-javascript.pdf')"
                  class="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger les exercices
                  </span>
                </button>
              </div>

              <!-- Projets -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">5 Projets Complets</h3>
                    <p class="text-sm text-gray-600 mb-2">Applications réelles à réaliser</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 52 pages</span>
                      <span class="text-gray-500">⚡ 2.5 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('projets-javascript.pdf')"
                  class="w-full bg-gradient-to-r from-yellow-600 to-amber-700 text-white py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-amber-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger les projets
                  </span>
                </button>
              </div>

              <!-- Référence -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Référence Rapide</h3>
                    <p class="text-sm text-gray-600 mb-2">Mémo syntaxe et API principales</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 28 pages</span>
                      <span class="text-gray-500">⚡ 1.2 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('reference-javascript.pdf')"
                  class="w-full bg-gradient-to-r from-purple-600 to-violet-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger la référence
                  </span>
                </button>
              </div>
            </div>
          </section>

          <!-- Quiz rapide -->
          <section id="quiz" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🧠 Quiz rapide</h2>
            
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <div class="mb-4">
                <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Question 1/3
                </span>
              </div>
              
              <h3 class="text-lg font-bold text-gray-900 mb-4">
                Quelle est la différence entre <code class="bg-blue-100 px-2 py-1 rounded">let</code> et <code class="bg-blue-100 px-2 py-1 rounded">const</code> ?
              </h3>
              
              <div class="space-y-3 mb-6">
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="1" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">Aucune différence</span>
                </label>
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="2" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700"><code>let</code> ne peut pas être réassigné</span>
                </label>
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="3" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700"><code>const</code> ne peut pas être réassigné</span>
                </label>
              </div>
              
              <button 
                @click="checkQuiz"
                class="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold py-3 rounded-lg hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Vérifier ma réponse
              </button>
            </div>
          </section>

          <!-- CTA Final -->
          <section class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">🚀 Prêt pour l'aventure interactive ?</h3>
            <p class="text-blue-100 mb-6 text-lg">
              Rejoignez notre cours interactif avec progression, quiz et apprentissage personnalisé !
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <router-link 
                to="/javascript/cours"
                class="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <svg class="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                Démarrer le cours interactif
              </router-link>
              
              <button 
                @click="showDemo"
                class="px-8 py-3.5 bg-white/20 backdrop-blur-sm text-white font-medium rounded-xl hover:bg-white/30 transition-colors border border-white/30"
              >
                Voir une démo
              </button>
            </div>
            
            <div class="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div class="text-center">
                <div class="text-2xl font-bold">38</div>
                <div class="text-xs text-blue-200">Chapitres</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">150+</div>
                <div class="text-xs text-blue-200">Exercices</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">6</div>
                <div class="text-xs text-blue-200">Niveaux</div>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar - Version améliorée -->
        <div class="lg:col-span-1">
          <div class="sticky top-32 space-y-6">
            <!-- Explorer plus -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-bold text-gray-900 mb-4">📌 Explorer plus</h3>
              <div class="space-y-3">
                <router-link 
                  to="/javascript/cours"
                  class="flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 text-blue-700 py-3 px-4 rounded-lg font-medium hover:from-blue-100 hover:to-blue-200 transition-all group"
                >
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    <span>Cours interactif</span>
                  </div>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </router-link>
              </div>
              
              <div class="mt-4 pt-4 border-t border-gray-200">
                <p class="text-xs text-gray-500 text-center">
                  Cliquez pour découvrir le cours interactif
                </p>
              </div>
            </div>

            <!-- Conseils -->
            <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-bold text-gray-900 mb-1">Astuce Pro</p>
                  <p class="text-xs text-gray-700">
                    Maîtrisez ES6+ avant de passer aux frameworks comme React ou Vue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScriptLandingPage',
  data() {
    return {
      quizAnswer: null
    }
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        history.pushState(null, null, `#${id}`);
      }
    },
    
    downloadPDF(filename) {
      // En production :
      // const filePath = `/pdf/javascript/${filename}`;
      // const link = document.createElement('a');
      // link.href = filePath;
      // link.download = filename;
      // link.click();
      
      // Pour l'instant, simulation
      alert(`✅ Téléchargement de "${filename}" démarré !`);
    },
    
    checkQuiz() {
      if (this.quizAnswer === '3') {
        alert('🎉 Bravo ! const ne peut pas être réassigné, alors que let peut l\'être.');
      } else if (this.quizAnswer) {
        alert('❌ Presque ! La bonne réponse est : const ne peut pas être réassigné.');
      } else {
        alert('⚠️ Sélectionnez une réponse avant de vérifier.');
      }
    },
    
    showDemo() {
      alert("🎬 Découvrez notre cours interactif avec :\n\n✅ 38 chapitres progressifs\n✅ Quiz après chaque chapitre\n✅ Progression sauvegardée\n✅ Interface moderne et intuitive\n✅ Support complet\n\nCliquez sur 'Démarrer le cours interactif' pour commencer !");
    },
    
    initScrollFromUrl() {
      if (window.location.hash) {
        const hash = window.location.hash.replace('#', '');
        setTimeout(() => {
          this.scrollTo(hash);
        }, 100);
      }
    }
  },
  mounted() {
    this.initScrollFromUrl();
    window.addEventListener('hashchange', () => {
      this.initScrollFromUrl();
    });
  }
}
</script>

<style scoped>
.scroll-mt-32 {
  scroll-margin-top: 8rem;
}

.javascript-page {
  min-height: 100vh;
}

/* Styles pour le code */
code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875em;
}

/* Effets d'ombre et transitions */
.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.transition-all {
  transition: all 0.3s ease;
}

/* Styling des inputs radio */
input[type="radio"] {
  accent-color: #3B82F6;
}

/* Animation pour les cartes */
.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}
</style>