// data/javascript-courses.js
export const COURSE_LEVELS = [
  {
    id: 1,
    name: "NIVEAU 1",
    subtitle: "Bases indispensables",
    color: "emerald",
    icon: "🟢",
    chapters: [
      {
        id: "1.1",
        title: "Introduction à JavaScript",
        description: "Histoire, écosystème et premières lignes de code",
        readTime: "15 min",
        unlocked: true,
        completed: false,
        difficulty: "débutant",
        icon: "🚀",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
              <h3 class="text-xl font-bold text-gray-900 mb-4">🌍 Le Langage du Web Moderne</h3>
              <p class="text-gray-700 leading-relaxed">
                Conçu en 1995 par <strong class="text-blue-600">Brendan Eich</strong> chez Netscape, 
                JavaScript est aujourd'hui le langage de programmation le plus utilisé au monde.
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">💻</div>
                <h4 class="font-bold text-gray-900 mb-2">Frontend</h4>
                <p class="text-sm text-gray-600">Interfaces interactives</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">⚙️</div>
                <h4 class="font-bold text-gray-900 mb-2">Backend</h4>
                <p class="text-sm text-gray-600">Node.js pour serveurs</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">📱</div>
                <h4 class="font-bold text-gray-900 mb-2">Mobile</h4>
                <p class="text-sm text-gray-600">React Native</p>
              </div>
            </div>
            
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-blue-700">
                    <strong class="font-bold">💡 Saviez-vous ?</strong> JavaScript a été créé en seulement 10 jours !
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple 1 : Premier programme</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code>console.log("🎉 Bonjour le monde !");</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Affiche un message dans la console du navigateur</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Créé en 1995 par Brendan Eich",
          "Exécution client ET serveur",
          "Écosystème le plus riche (npm)"
        ],
        quiz: [
          {
            question: "En quelle année JavaScript a-t-il été créé ?",
            options: ["1990", "1995", "2000", "2005"],
            correct: 1,
            explanation: "JavaScript a été créé en 1995 par Brendan Eich chez Netscape."
          }
        ]
      },
      {
        id: "1.2",
        title: "Comment inclure JavaScript",
        description: "Les différentes méthodes pour intégrer du code JavaScript dans vos pages HTML",
        readTime: "12 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "📝",
        examplesCount: 2,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">📝 Intégration de JavaScript</h3>
            <p class="text-gray-700 leading-relaxed">
              Il existe trois méthodes principales pour ajouter du JavaScript à une page HTML :
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">1️⃣</div>
                <h4 class="font-bold text-gray-900 mb-2">Inline</h4>
                <pre class="text-xs bg-gray-100 p-2 rounded"><code>&lt;button onclick="alert('Hello!')"&gt;</code></pre>
                <p class="text-sm text-gray-600 mt-2">À éviter</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">2️⃣</div>
                <h4 class="font-bold text-gray-900 mb-2">Internal</h4>
                <pre class="text-xs bg-gray-100 p-2 rounded"><code>&lt;script&gt;code ici&lt;/script&gt;</code></pre>
                <p class="text-sm text-gray-600 mt-2">Pour petits scripts</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm border-green-300 bg-green-50">
                <div class="text-3xl mb-3">✅</div>
                <h4 class="font-bold text-gray-900 mb-2">External</h4>
                <pre class="text-xs bg-gray-100 p-2 rounded"><code>&lt;script src="app.js"&gt;&lt;/script&gt;</code></pre>
                <p class="text-sm text-gray-600 mt-2">Recommandé</p>
              </div>
            </div>
            
            <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-green-700">
                    <strong class="font-bold">💡 Bonne pratique :</strong> Utilisez des fichiers externes (.js) pour séparer le code du contenu et améliorer la maintenabilité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Fichier externe</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Mon App&lt;/title&gt;
    &lt;script src="script.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Contenu --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">L'attribut <code class="bg-gray-800 px-1 rounded">defer</code> optimise le chargement</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          'Utilisez des fichiers externes .js',
          'L\'attribut defer optimise le chargement',
          'Placez les scripts avant &lt;/body&gt;',
          'Évitez le code inline'
        ],
        quiz: [
          {
            question: 'Quelle balise HTML utilise-t-on pour inclure JavaScript ?',
            options: ['<js>', '<javascript>', '<script>', '<code>'],
            correct: 2,
            explanation: 'La balise <script> est utilisée pour inclure ou écrire du code JavaScript dans une page HTML.'
          },
          {
            question: 'Quel attribut permet d\'exécuter un script après le chargement du DOM ?',
            options: ['async', 'defer', 'delay', 'wait'],
            correct: 1,
            explanation: 'L\'attribut defer indique que le script doit s\'exécuter après que le document a été analysé.'
          }
        ]
      },
      {
        id: "1.3",
        title: "Variables (var, let, const)",
        description: "Déclarer et manipuler des variables avec les bonnes pratiques modernes",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🧠",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🧠 Les Variables en JavaScript</h3>
            <p class="text-gray-700 leading-relaxed">
              Les variables sont des conteneurs qui stockent des valeurs. Trois mots-clés existent :
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm border-red-200">
                <div class="text-3xl mb-3 text-red-500">❌</div>
                <h4 class="font-bold text-gray-900 mb-2">var</h4>
                <p class="text-sm text-gray-600">Ancienne syntaxe, portée fonction</p>
                <div class="mt-3">
                  <span class="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Déprécié</span>
                </div>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm border-blue-200">
                <div class="text-3xl mb-3 text-blue-500">🔄</div>
                <h4 class="font-bold text-gray-900 mb-2">let</h4>
                <p class="text-sm text-gray-600">Portée bloc, réassignable</p>
                <div class="mt-3">
                  <span class="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Modifiable</span>
                </div>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm border-green-300 bg-green-50">
                <div class="text-3xl mb-3 text-green-500">✅</div>
                <h4 class="font-bold text-gray-900 mb-2">const</h4>
                <p class="text-sm text-gray-600">Portée bloc, constante</p>
                <div class="mt-3">
                  <span class="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Recommandé</span>
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-gray-900 mb-3">✅ Bonne pratique</h4>
                <pre class="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg"><code>const nom = "Alice"; // par défaut
let age = 25; // si modification nécessaire</code></pre>
              </div>
              <div class="bg-red-50 p-5 rounded-xl border border-red-200">
                <h4 class="font-bold text-gray-900 mb-3">❌ À éviter</h4>
                <pre class="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg"><code>var ville = "Paris"; // ancienne syntaxe</code></pre>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Bonnes pratiques</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code>// const par défaut
const PI = 3.14159;
const config = { apiUrl: '...' };

// let si modification nécessaire
let compteur = 0;
compteur = 1; // OK

// Jamais var
// var ancien = 'déprécié';</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400"><code class="bg-gray-800 px-1 rounded">const</code> empêche la réassignation, pas la mutation d'objets</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          'const par défaut, let si modification nécessaire',
          'Jamais var (obsolète)',
          'const empêche la réassignation, pas la mutation',
          'Portée bloc pour let/const'
        ],
        quiz: [
          {
            question: 'Quel mot-clé devrait être utilisé par défaut pour déclarer une variable ?',
            options: ['var', 'let', 'const', 'static'],
            correct: 2,
            explanation: 'const est recommandé par défaut car il rend l\'intention claire et évite les erreurs accidentelles.'
          },
          {
            question: 'Peut-on modifier un objet déclaré avec const ?',
            options: ['Non, c\'est interdit', 'Oui, car on modifie le contenu, pas la variable', 'Seulement avec Object.freeze()', 'Uniquement dans le même fichier'],
            correct: 1,
            explanation: 'Oui ! const empêche la réassignation de la variable elle-même, mais permet la mutation du contenu des objets.'
          }
        ]
      },
      {
        id: "1.4",
        title: "Types de données",
        description: "Number, String, Boolean, null, undefined et leurs particularités",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🔢",
        examplesCount: 5,
        content: "Contenu du chapitre 4...",
        examples: "Exemples...",
        keyPoints: [
          "7 types primitifs + Object",
          "typeof pour identifier le type",
          "Conversion implicite et explicite",
          "Truthy et falsy values"
        ],
        quiz: [
          {
            question: 'Quel est le type de null en JavaScript ?',
            options: ['null', 'undefined', 'object', 'string'],
            correct: 2,
            explanation: 'Étonnamment, typeof null retourne "object" - c\'est un bug historique de JavaScript.'
          }
        ]
      },
      {
        id: "1.5",
        title: "Opérateurs",
        description: "Arithmétiques, logiques, de comparaison et leurs subtilités",
        readTime: "16 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "⚡",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "=== plutôt que ==",
          "Opérateurs courts-circuits",
          "Opérateur ternaire",
          "Opérateur de coalescence nulle"
        ],
        quiz: []
      },
      {
        id: "1.6",
        title: "Conditions",
        description: "if/else, switch et opérateur ternaire pour contrôler le flux",
        readTime: "14 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🎯",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "if/else pour conditions simples",
          "switch pour multiples cas",
          "Opérateur ternaire pour conditions courtes",
          "Éviter les conditions trop complexes"
        ],
        quiz: []
      },
      {
        id: "1.7",
        title: "Boucles",
        description: "for, while, do...while et itération sur collections",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🔄",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "for pour itérations comptées",
          "while pour conditions complexes",
          "for...of pour itérer sur tableaux",
          "Éviter les boucles infinies"
        ],
        quiz: []
      }
    ]
  },
  {
    id: 2,
    name: "NIVEAU 2",
    subtitle: "Fonctions & Structures",
    color: "blue",
    icon: "🟡",
    chapters: [
      {
        id: "2.1",
        title: "Fonctions",
        description: "Créer du code réutilisable avec fonctions et paramètres",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🎯",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Déclaration vs expression",
          "Paramètres et arguments",
          "return et valeur de retour",
          "Fonctions comme citoyens de première classe"
        ],
        quiz: []
      },
      {
        id: "2.2",
        title: "Fonctions fléchées",
        description: "Syntaxe concise et comportement du this",
        readTime: "15 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🏹",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Syntaxe courte sans function",
          "this lexical (pas de propre this)",
          "Pas d'arguments object",
          "Implicit return pour une ligne"
        ],
        quiz: []
      },
      {
        id: "2.3",
        title: "Portée des variables",
        description: "Scope, closure et hoisting expliqués simplement",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🎪",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Portée globale, fonction, bloc",
          "Closures pour accès privé",
          "Hoisting des déclarations",
          "Temporal Dead Zone (TDZ)"
        ],
        quiz: []
      },
      {
        id: "2.4",
        title: "Tableaux (Arrays)",
        description: "Création et méthodes avancées pour manipuler des collections",
        readTime: "22 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "📊",
        examplesCount: 5,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Méthodes fonctionnelles (map, filter, reduce)",
          "Manipulation (push, pop, slice, splice)",
          "Itération (forEach, for...of)",
          "Tableaux multidimensionnels"
        ],
        quiz: []
      },
      {
        id: "2.5",
        title: "Objets",
        description: "Propriétés, méthodes et manipulation d'objets en JavaScript",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "📦",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Notation point vs bracket",
          "Méthodes et this",
          "Object.keys(), values(), entries()",
          "Copie profonde vs superficielle"
        ],
        quiz: []
      },
      {
        id: "2.6",
        title: "Destructuring",
        description: "Extraire des valeurs d'objets et tableaux facilement",
        readTime: "14 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🎁",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Destructuring d'objets",
          "Destructuring de tableaux",
          "Valeurs par défaut",
          "Alias et nested destructuring"
        ],
        quiz: []
      },
      {
        id: "2.7",
        title: "Spread operator",
        description: "... pour copier, fusionner et passer des arguments",
        readTime: "12 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "📤",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Copie de tableaux/objets",
          "Fusion d'objets",
          "Passage d'arguments",
          "Rest parameters"
        ],
        quiz: []
      }
    ]
  },
  {
    id: 3,
    name: "NIVEAU 3",
    subtitle: "DOM & Navigateur",
    color: "orange",
    icon: "🟠",
    chapters: [
      {
        id: "3.1",
        title: "Le DOM",
        description: "Document Object Model et manipulation d'éléments HTML",
        readTime: "22 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🌳",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Arborescence du DOM",
          "Sélection d'éléments",
          "Navigation entre nodes",
          "Performance des manipulations"
        ],
        quiz: []
      },
      {
        id: "3.2",
        title: "Sélection des éléments",
        description: "getElementById, querySelector et autres méthodes de sélection",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🔍",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Méthodes par id, classe, tag",
          "querySelector vs querySelectorAll",
          "Live vs static collections",
          "Sélecteurs CSS avancés"
        ],
        quiz: []
      },
      {
        id: "3.3",
        title: "Manipulation du DOM",
        description: "Modifier contenu, styles et structure des éléments",
        readTime: "24 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🎨",
        examplesCount: 5,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "innerHTML vs textContent",
          "classList pour les classes CSS",
          "style pour les styles inline",
          "Création et suppression d'éléments"
        ],
        quiz: []
      },
      {
        id: "3.4",
        title: "Événements",
        description: "Gestion des interactions utilisateur avec addEventListener",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🎮",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Types d'événements (click, submit, keyup)",
          "Bubbling et capturing",
          "Event delegation",
          "preventDefault et stopPropagation"
        ],
        quiz: []
      },
      {
        id: "3.5",
        title: "Formulaires & validation",
        description: "Manipulation de formulaires et validation côté client",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "📝",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Accès aux champs de formulaire",
          "Validation avec Constraint Validation API",
          "Événements de formulaire",
          "Soumission AJAX"
        ],
        quiz: []
      },
      {
        id: "3.6",
        title: "Timers",
        description: "setTimeout, setInterval et gestion du temps en JavaScript",
        readTime: "14 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "⏱️",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "setTimeout pour exécution différée",
          "setInterval pour répétition",
          "clearTimeout et clearInterval",
          "Gestion des performances"
        ],
        quiz: []
      }
    ]
  },
  {
    id: 4,
    name: "NIVEAU 4",
    subtitle: "JavaScript moderne",
    color: "purple",
    icon: "🔵",
    chapters: [
      {
        id: "4.1",
        title: "Classes & POO",
        description: "Programmation Orientée Objet avec classes ES6",
        readTime: "24 min",
        unlocked: false,
        completed: false,
        difficulty: "avancé",
        icon: "🏛️",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Déclaration de classe",
          "Constructeur et méthodes",
          "Héritage avec extends",
          "Méthodes et propriétés statiques"
        ],
        quiz: []
      },
      {
        id: "4.2",
        title: "Modules",
        description: "Organisation du code avec import/export",
        readTime: "16 min",
        unlocked: false,
        completed: false,
        difficulty: "avancé",
        icon: "📦",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Export nommé vs par défaut",
          "Import avec alias",
          "Modules dynamiques",
          "Gestion des dépendances"
        ],
        quiz: []
      },
      {
        id: "4.3",
        title: "JSON",
        description: "JavaScript Object Notation pour échange de données",
        readTime: "12 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "📄",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "JSON.stringify() pour sérialiser",
          "JSON.parse() pour désérialiser",
          "Limitations du format JSON",
          "Alternatives (YAML, XML)"
        ],
        quiz: []
      },
      {
        id: "4.4",
        title: "LocalStorage & SessionStorage",
        description: "Stockage côté client pour persistance des données",
        readTime: "14 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "💾",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Différence localStorage/sessionStorage",
          "Limites de stockage (~5-10MB)",
          "API simple (setItem, getItem, removeItem)",
          "Sécurité et limitations"
        ],
        quiz: []
      },
      {
        id: "4.5",
        title: "Gestion des erreurs",
        description: "try/catch, erreurs personnalisées et bonnes pratiques",
        readTime: "16 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🚨",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "try/catch/finally",
          "Erreurs personnalisées avec Error",
          "Promise.catch() pour asynchrone",
          "Debugging avec console.error"
        ],
        quiz: []
      },
      {
        id: "4.6",
        title: "Async JavaScript",
        description: "Callbacks, Promises et async/await pour code asynchrone",
        readTime: "28 min",
        unlocked: false,
        completed: false,
        difficulty: "avancé",
        icon: "⏳",
        examplesCount: 5,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Callback hell et solutions",
          "Promesses (then/catch/finally)",
          "async/await syntaxe",
          "Gestion des erreurs asynchrones"
        ],
        quiz: []
      }
    ]
  },
  {
    id: 5,
    name: "NIVEAU 5",
    subtitle: "API & Projets",
    color: "red",
    icon: "🔴",
    chapters: [
      {
        id: "5.1",
        title: "Fetch API",
        description: "Faire des requêtes HTTP modernes avec fetch()",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "avancé",
        icon: "🌐",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "fetch() pour requêtes HTTP",
          "Options (method, headers, body)",
          "Gestion des réponses",
          "Gestion des erreurs HTTP"
        ],
        quiz: []
      },
      {
        id: "5.2",
        title: "Requêtes HTTP",
        description: "GET, POST, PUT, DELETE et gestion des données",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "avancé",
        icon: "📡",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Méthodes HTTP et leurs usages",
          "Envoi de données JSON",
          "En-têtes personnalisés",
          "Gestion des CORS"
        ],
        quiz: []
      },
      {
        id: "5.3",
        title: "Consommation d'API REST",
        description: "Interagir avec des APIs externes RESTful",
        readTime: "22 min",
        unlocked: false,
        completed: false,
        difficulty: "avancé",
        icon: "🍽️",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Structure des APIs REST",
          "Authentification (API keys, tokens)",
          "Pagination et filtres",
          "Gestion du rate limiting"
        ],
        quiz: []
      },
      {
        id: "5.4",
        title: "Manipulation de données backend",
        description: "Traiter et afficher des données provenant d'APIs",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "avancé",
        icon: "📊",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Transformation des données",
          "Gestion des états de chargement",
          "Mise en cache des réponses",
          "Gestion des erreurs réseau"
        ],
        quiz: []
      },
      {
        id: "5.5",
        title: "Sécurité de base",
        description: "XSS, bonnes pratiques et sécurité web essentielle",
        readTime: "24 min",
        unlocked: false,
        completed: false,
        difficulty: "avancé",
        icon: "🛡️",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Prévention XSS",
          "Validation des entrées",
          "Échappement des sorties",
          "Content Security Policy"
        ],
        quiz: []
      }
    ]
  },
  {
    id: 6,
    name: "NIVEAU 6",
    subtitle: "Avancé (pro)",
    color: "teal",
    icon: "⚫",
    chapters: [
      {
        id: "6.1",
        title: "Event loop",
        description: "Comprendre le modèle d'exécution asynchrone de JavaScript",
        readTime: "26 min",
        unlocked: false,
        completed: false,
        difficulty: "expert",
        icon: "🎡",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Call stack",
          "Callback queue",
          "Microtasks vs macrotasks",
          "setTimeout(0) vs setImmediate"
        ],
        quiz: []
      },
      {
        id: "6.2",
        title: "Closures",
        description: "Fonctions qui 'capturent' leur environnement lexical",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "expert",
        icon: "🔗",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Définition et exemples",
          "Cas d'usage pratiques",
          "Pièges courants",
          "Performances et mémoire"
        ],
        quiz: []
      },
      {
        id: "6.3",
        title: "Hoisting",
        description: "Comportement du hissage des déclarations en JavaScript",
        readTime: "16 min",
        unlocked: false,
        completed: false,
        difficulty: "expert",
        icon: "⬆️",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Différence var/let/const",
          "Temporal Dead Zone",
          "Hoisting des fonctions",
          "Bonnes pratiques"
        ],
        quiz: []
      },
      {
        id: "6.4",
        title: "Debounce & Throttle",
        description: "Optimiser les performances des événements fréquents",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "expert",
        icon: "⚡",
        examplesCount: 3,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Debounce pour événements répétés",
          "Throttle pour limiter la fréquence",
          "Cas d'usage (scroll, resize, input)",
          "Implémentations custom"
        ],
        quiz: []
      },
      {
        id: "6.5",
        title: "Performance JS",
        description: "Optimiser les performances de votre code JavaScript",
        readTime: "22 min",
        unlocked: false,
        completed: false,
        difficulty: "expert",
        icon: "🚀",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Profilage avec DevTools",
          "Optimisation des boucles",
          "Memoization",
          "Lazy loading"
        ],
        quiz: []
      },
      {
        id: "6.6",
        title: "Tests (Jest)",
        description: "Introduction aux tests unitaires avec Jest",
        readTime: "24 min",
        unlocked: false,
        completed: false,
        difficulty: "expert",
        icon: "🧪",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Structure des tests",
          "Assertions avec expect",
          "Mocks et spies",
          "Tests asynchrones"
        ],
        quiz: []
      },
      {
        id: "6.7",
        title: "Architecture de projet",
        description: "Structures et patterns pour projets JavaScript évolutifs",
        readTime: "28 min",
        unlocked: false,
        completed: false,
        difficulty: "expert",
        icon: "🏗️",
        examplesCount: 4,
        content: "Contenu...",
        examples: "Exemples...",
        keyPoints: [
          "Structure de dossiers",
          "Patterns (MVC, MVVM, Flux)",
          "Gestion des dépendances",
          "Configuration et environnements"
        ],
        quiz: []
      }
    ]
  }
];

export const getChapterById = (chapterId) => {
  for (const level of COURSE_LEVELS) {
    const chapter = level.chapters.find(ch => ch.id === chapterId);
    if (chapter) return { ...chapter, level };
  }
  return null;
};

export const getProgress = (levels) => {
  const totalChapters = levels.reduce((sum, level) => sum + level.chapters.length, 0);
  const completedChapters = levels.reduce((sum, level) => 
    sum + level.chapters.filter(ch => ch.completed).length, 0
  );
  
  return {
    total: totalChapters,
    completed: completedChapters,
    percentage: Math.round((completedChapters / totalChapters) * 100)
  };
};