// data/cpp-courses.js

export const COURSE_LEVELS = [
  {
    id: 1,
    name: "NIVEAU 1",
    subtitle: "Bases du C++",
    color: "emerald",
    icon: "🟢",
    chapters: [
      {
        id: "1.1",
        title: "Introduction au C++",
        description: "Histoire, compilation et premier programme",
        readTime: "15 min",
        unlocked: true,
        completed: false,
        difficulty: "débutant",
        icon: "🚀",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
              <h3 class="text-xl font-bold text-gray-900 mb-4">⚡ Le Langage C++</h3>
              <p class="text-gray-700 leading-relaxed">
                Créé par <strong class="text-blue-600">Bjarne Stroustrup</strong> en 1983, 
                C++ est un langage de programmation compilé, multi-paradigme, qui étend le langage C.
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">⚙️</div>
                <h4 class="font-bold text-gray-900 mb-2">Système</h4>
                <p class="text-sm text-gray-600">OS, pilotes, embarqué</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">🎮</div>
                <h4 class="font-bold text-gray-900 mb-2">Jeux vidéo</h4>
                <p class="text-sm text-gray-600">Moteurs de jeu (Unreal)</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">📈</div>
                <h4 class="font-bold text-gray-900 mb-2">Haute performance</h4>
                <p class="text-sm text-gray-600">Finances, simulations</p>
              </div>
            </div>
            
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-blue-700">
                    <strong class="font-bold">💡 Saviez-vous ?</strong> Le C++ standard est mis à jour tous les 3 ans (C++11, C++14, C++17, C++20, C++23).
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
                <div class="text-sm font-semibold text-gray-300">Exemple 1 : Premier programme C++</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple1')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple1">#include &lt;iostream&gt;

int main() {
    std::cout << "🎉 Bonjour le monde en C++ !" << std::endl;
    return 0;
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Compilation : <code class="bg-gray-800 px-1 rounded">g++ mon_programme.cpp -o mon_programme</code></p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Créé par Bjarne Stroustrup (1983)",
          "Langage compilé et typé statiquement",
          "Extension du langage C",
          "Multi-paradigme (procédural, orienté objet, générique)"
        ],
        quiz: [
          {
            question: "Qui a créé le langage C++ ?",
            options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
            correct: 1,
            explanation: "C++ a été créé par Bjarne Stroustrup aux laboratoires Bell en 1983."
          },
          {
            question: "Quelle commande utilise-t-on généralement pour compiler un programme C++ avec g++ ?",
            options: ["g++ fichier.cpp", "gcc fichier.cpp", "compile fichier.cpp", "c++ fichier.cpp"],
            correct: 0,
            explanation: "On utilise g++ pour compiler du code C++ (gcc est pour le C)."
          },
          {
            question: "Quelle est la fonction principale en C++ ?",
            options: ["start()", "main()", "init()", "begin()"],
            correct: 1,
            explanation: "Tout programme C++ exécutable doit contenir une fonction main()."
          }
        ]
      },
      {
        id: "1.2",
        title: "Types de base et variables",
        description: "Types fondamentaux et déclaration de variables",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🔢",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🔢 Types Fondamentaux en C++</h3>
            <p class="text-gray-700 leading-relaxed">
              C++ possède des types de données fondamentaux avec des tailles spécifiques.
            </p>
            
            <div class="grid md:grid-cols-4 gap-3">
              <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-2">Entiers</h4>
                <p class="text-sm text-gray-600">int, short, long</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 class="font-bold text-green-700 mb-2">Flottants</h4>
                <p class="text-sm text-gray-600">float, double</p>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 class="font-bold text-yellow-700 mb-2">Caractères</h4>
                <p class="text-sm text-gray-600">char, wchar_t</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-2">Booléen</h4>
                <p class="text-sm text-gray-600">bool</p>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-gray-900 mb-3">✅ Bonne pratique</h4>
                <pre class="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg"><code>// Initialisation moderne (C++11)
int age{25};               // initialisation uniforme
auto nombre = 42;          // inférence de type
const double PI{3.14159};  // constante</code></pre>
              </div>
              <div class="bg-red-50 p-5 rounded-xl border border-red-200">
                <h4 class="font-bold text-gray-900 mb-3">❌ À éviter</h4>
                <pre class="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg"><code>int a;          // non initialisée
int b = 3.14;   // conversion implicite
#define PI 3.14 // macro (préférer const)</code></pre>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Types et variables</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple2')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple2">#include &lt;iostream&gt;
#include &lt;typeinfo&gt;

int main() {
    // Types entiers (signés par défaut)
    short petit{100};              // 16 bits
    int entier{1000};              // 32 bits
    long grand{1000000L};          // 64 bits
    long long tresGrand{1000000000LL};
    
    // Types flottants
    float simple{3.14f};           // simple précision
    double doublePrecision{3.141592653589793};
    long double hautePrecision{3.141592653589793238L};
    
    // Caractères
    char lettre{'A'};              // 8 bits
    wchar_t large{L'€'};           // caractère large
    char16_t utf16{u'字'};          // UTF-16 (C++11)
    char32_t utf32{U'🔒'};          // UTF-32 (C++11)
    
    // Booléen
    bool estVrai{true};
    bool estFaux{false};
    
    // Auto (C++11)
    auto x{42};                    // int
    auto y{3.14};                  // double
    auto z{"Bonjour"};             // const char*
    
    // Affichage des tailles
    std::cout << "Taille de int: " << sizeof(int) << " octets" << std::endl;
    std::cout << "Taille de double: " << sizeof(double) << " octets" << std::endl;
    
    // Littéraux (C++14)
    auto binaire = 0b101010;       // binaire: 42
    auto hexa = 0x2A;              // hexadécimal: 42
    auto separateur = 1'000'000;   // avec séparateur
    
    return 0;
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Utilisez <code class="bg-gray-800 px-1 rounded">auto</code> pour les types évidents, mais pas au détriment de la lisibilité</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          'Types fondamentaux : int, double, char, bool',
          'Initialisation uniforme avec {}',
          'auto pour l\'inférence de type',
          'const pour les constantes'
        ],
        quiz: [
          {
            question: 'Quel mot-clé permet l\'inférence de type en C++ moderne ?',
            options: ['var', 'auto', 'let', 'type'],
            correct: 1,
            explanation: 'auto (introduit dans C++11) permet l\'inférence de type.'
          },
          {
            question: 'Quelle syntaxe est recommandée pour l\'initialisation en C++ moderne ?',
            options: ['int x = 5;', 'int x(5);', 'int x{5};', 'int x => 5;'],
            correct: 2,
            explanation: 'L\'initialisation uniforme avec {} est recommandée car elle évite certaines conversions implicites indésirables.'
          },
          {
            question: 'Comment déclarer une constante en C++ ?',
            options: ['#define PI 3.14', 'const double PI = 3.14;', 'constant double PI = 3.14;', 'let PI = 3.14;'],
            correct: 1,
            explanation: 'const est la manière correcte de déclarer une constante en C++.'
          }
        ]
      },
      {
        id: "1.3",
        title: "Opérateurs et expressions",
        description: "Opérateurs arithmétiques, logiques et de comparaison",
        readTime: "16 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "⚡",
        examplesCount: 5,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">⚡ Opérateurs en C++</h3>
            <p class="text-gray-700 leading-relaxed">
              C++ possède un riche ensemble d'opérateurs pour manipuler les données.
            </p>
            
            <div class="grid md:grid-cols-4 gap-4">
              <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-2">Arithmétiques</h4>
                <code class="text-sm">+ - * / %</code>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 class="font-bold text-green-700 mb-2">Comparaison</h4>
                <code class="text-sm">== != &lt; &gt; &lt;= &gt;=</code>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 class="font-bold text-yellow-700 mb-2">Logiques</h4>
                <code class="text-sm">&amp;&amp; || !</code>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-2">Bits</h4>
                <code class="text-sm">&amp; | ^ ~ &lt;&lt; &gt;&gt;</code>
              </div>
            </div>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-red-700">
                    <strong class="font-bold">Attention :</strong> La division entière tronque le résultat. <code>5 / 2 = 2</code>, pas <code>2.5</code>. Utilisez des flottants si vous voulez une division précise.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Opérateurs en action</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple3')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple3">#include &lt;iostream&gt;

int main() {
    // Opérateurs arithmétiques
    int a{10}, b{3};
    
    std::cout << "a + b = " << a + b << std::endl;   // 13
    std::cout << "a - b = " << a - b << std::endl;   // 7
    std::cout << "a * b = " << a * b << std::endl;   // 30
    std::cout << "a / b = " << a / b << std::endl;   // 3 (division entière!)
    std::cout << "a % b = " << a % b << std::endl;   // 1 (reste)
    
    // Division avec flottants
    double x{10.0}, y{3.0};
    std::cout << "x / y = " << x / y << std::endl;   // 3.33333
    
    // Opérateurs de comparaison
    std::cout << std::boolalpha;  // affiche true/false
    std::cout << "a == b : " << (a == b) << std::endl;  // false
    std::cout << "a != b : " << (a != b) << std::endl;  // true
    std::cout << "a < b  : " << (a < b) << std::endl;   // false
    std::cout << "a >= b : " << (a >= b) << std::endl;  // true
    
    // Opérateurs logiques
    bool vrai{true}, faux{false};
    std::cout << "vrai && faux : " << (vrai && faux) << std::endl;  // false
    std::cout << "vrai || faux : " << (vrai || faux) << std::endl;  // true
    std::cout << "!vrai : " << (!vrai) << std::endl;                // false
    
    // Opérateurs bit à bit
    unsigned int bits1{0b1010};  // 10
    unsigned int bits2{0b1100};  // 12
    
    std::cout << "bits1 & bits2 : " << (bits1 & bits2) << std::endl;  // 8 (0b1000)
    std::cout << "bits1 | bits2 : " << (bits1 | bits2) << std::endl;  // 14 (0b1110)
    std::cout << "bits1 ^ bits2 : " << (bits1 ^ bits2) << std::endl;  // 6 (0b0110)
    std::cout << "~bits1 : " << (~bits1) << std::endl;                // complément
    
    // Décalages
    std::cout << "bits1 << 1 : " << (bits1 << 1) << std::endl;  // 20 (multiplie par 2)
    std::cout << "bits1 >> 1 : " << (bits1 >> 1) << std::endl;  // 5 (divise par 2)
    
    // Opérateurs d'affectation composés
    int n{5};
    n += 3;   // n = 8
    n -= 2;   // n = 6
    n *= 2;   // n = 12
    n /= 3;   // n = 4
    n %= 3;   // n = 1
    
    // Incrémentation/Décrémentation
    int i{5};
    std::cout << "i++ : " << i++ << std::endl;  // affiche 5, puis i=6
    std::cout << "++i : " << ++i << std::endl;  // i=7, affiche 7
    std::cout << "i-- : " << i-- << std::endl;  // affiche 7, puis i=6
    std::cout << "--i : " << --i << std::endl;  // i=5, affiche 5
    
    // Opérateur ternaire
    int age{20};
    std::string statut = (age >= 18) ? "majeur" : "mineur";
    std::cout << "Statut : " << statut << std::endl;
    
    // Priorité des opérateurs
    int resultat = 2 + 3 * 4;  // 14, pas 20 !
    std::cout << "2 + 3 * 4 = " << resultat << std::endl;
    
    // Utilisez des parenthèses pour clarifier
    int clair = (2 + 3) * 4;   // 20
    std::cout << "(2 + 3) * 4 = " << clair << std::endl;
    
    return 0;
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Les opérateurs bit à bit travaillent sur la représentation binaire des nombres</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Division entière vs division flottante",
          "Opérateurs logiques et de comparaison",
          "Opérateurs bit à bit",
          "Priorité des opérateurs"
        ],
        quiz: [
          {
            question: "Que vaut 5 / 2 en C++ avec des int ?",
            options: ["2.5", "2", "3", "2.0"],
            correct: 1,
            explanation: "La division entre entiers donne un résultat entier tronqué (2)."
          },
          {
            question: "Quel opérateur donne le reste d'une division ?",
            options: ["/", "%", "//", "rem"],
            correct: 1,
            explanation: "L'opérateur % (modulo) donne le reste de la division entière."
          },
          {
            question: "Quelle est la différence entre i++ et ++i ?",
            options: ["Aucune différence", "i++ incrémente avant l'évaluation, ++i après", "++i incrémente avant l'évaluation, i++ après", "i++ est plus rapide"],
            correct: 2,
            explanation: "++i (pré-incrémentation) incrémente avant d'utiliser la valeur, i++ (post-incrémentation) utilise la valeur puis incrémente."
          }
        ]
      },
      {
        id: "1.4",
        title: "Structures de contrôle",
        description: "if/else, switch, boucles for, while, do...while",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🎯",
        examplesCount: 6,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🎯 Structures de Contrôle</h3>
            <p class="text-gray-700 leading-relaxed">
              Les structures de contrôle permettent de diriger le flux d'exécution du programme.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Conditions</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>if (condition) {
  // code
} else if {
  // code
} else {
  // code
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">if/else/else if</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Switch</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>switch(variable) {
  case valeur1:
    // code
    break;
  default:
    // code
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Choix multiples</p>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Boucles</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>for (int i=0; i&lt;n; ++i) {
  // répéter n fois
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">for, while, do...while</p>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">C++17 :</strong> Les conditions if avec initialiseur : <code>if (auto result = calcul(); result &gt; 0) { ... }</code>
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Structures de contrôle</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple4')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple4">#include &lt;iostream&gt;
#include &lt;string&gt;

int main() {
    // IF-ELSE
    int age{20};
    
    if (age < 13) {
        std::cout << "Enfant" << std::endl;
    } else if (age < 18) {
        std::cout << "Adolescent" << std::endl;
    } else {
        std::cout << "Adulte" << std::endl;
    }
    
    // IF avec initialiseur (C++17)
    if (int note{85}; note >= 90) {
        std::cout << "Excellent !" << std::endl;
    } else if (note >= 80) {
        std::cout << "Très bien" << std::endl;
    } else {
        std::cout << "Peut mieux faire" << std::endl;
    }
    // 'note' n'est plus accessible ici
    
    // SWITCH
    int jour{3};
    
    switch(jour) {
        case 1:
            std::cout << "Lundi" << std::endl;
            break;
        case 2:
            std::cout << "Mardi" << std::endl;
            break;
        case 3:
            std::cout << "Mercredi" << std::endl;
            break;
        case 4:
            std::cout << "Jeudi" << std::endl;
            break;
        case 5:
            std::cout << "Vendredi" << std::endl;
            break;
        default:
            std::cout << "Weekend" << std::endl;
    }
    
    // SWITCH avec initialiseur (C++17)
    switch(int option{2}; option) {
        case 1:
            std::cout << "Option 1" << std::endl;
            break;
        case 2:
            std::cout << "Option 2" << std::endl;
            break;
    }
    
    // BOUCLE FOR classique
    std::cout << "Boucle for : ";
    for (int i{0}; i < 5; ++i) {
        std::cout << i << " ";
    }
    std::cout << std::endl;
    
    // BOUCLE FOR avec déclaration multiple
    std::cout << "Boucle for multiple : ";
    for (int i{0}, j{10}; i < 5; ++i, --j) {
        std::cout << i << "-" << j << " ";
    }
    std::cout << std::endl;
    
    // BOUCLE FOR basée sur un range (C++11)
    int tableau[]{1, 2, 3, 4, 5};
    std::cout << "Range-based for : ";
    for (int valeur : tableau) {
        std::cout << valeur << " ";
    }
    std::cout << std::endl;
    
    // Avec auto et référence
    std::cout << "Range-based for avec auto : ";
    for (auto& valeur : tableau) {
        valeur *= 2;  // modifie le tableau original
        std::cout << valeur << " ";
    }
    std::cout << std::endl;
    
    // BOUCLE WHILE
    int compteur{0};
    std::cout << "Boucle while : ";
    while (compteur < 5) {
        std::cout << compteur << " ";
        ++compteur;
    }
    std::cout << std::endl;
    
    // BOUCLE DO...WHILE
    compteur = 0;
    std::cout << "Boucle do...while : ";
    do {
        std::cout << compteur << " ";
        ++compteur;
    } while (compteur < 5);
    std::cout << std::endl;
    
    // BOUCLE INFINIE avec break
    int recherche{42};
    std::cout << "Recherche : ";
    for (int i{0}; ; ++i) {
        if (i == recherche) {
            std::cout << "Trouvé à " << i << std::endl;
            break;
        }
        if (i > 100) {
            std::cout << "Non trouvé" << std::endl;
            break;
        }
    }
    
    // CONTINUE
    std::cout << "Nombres impairs : ";
    for (int i{0}; i < 10; ++i) {
        if (i % 2 == 0) {
            continue;  // passe à l'itération suivante
        }
        std::cout << i << " ";
    }
    std::cout << std::endl;
    
    // ÉTIQUETTES et GOTO (à éviter généralement)
    int essais{0};
    
recommencer:
    ++essais;
    if (essais < 3) {
        std::cout << "Essai " << essais << std::endl;
        goto recommencer;
    }
    
    // BOUCLE avec condition complexe
    int a{0}, b{10};
    while (a < 5 && b > 5) {
        std::cout << "a=" << a << ", b=" << b << std::endl;
        ++a;
        --b;
    }
    
    return 0;
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Préférez les boucles range-based (C++11) pour l'itération sur des conteneurs</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "if/else/else if pour les conditions",
          "switch pour les choix multiples",
          "Boucles for, while, do...while",
          "Range-based for (C++11)"
        ],
        quiz: [
          {
            question: "Quelle boucle s'exécute au moins une fois ?",
            options: ["for", "while", "do...while", "range-based for"],
            correct: 2,
            explanation: "do...while vérifie la condition après l'exécution du bloc, donc il s'exécute au moins une fois."
          },
          {
            question: "Quel mot-clé permet de sauter à l'itération suivante d'une boucle ?",
            options: ["break", "continue", "skip", "next"],
            correct: 1,
            explanation: "continue passe à l'itération suivante de la boucle."
          },
          {
            question: "Quelle version de C++ a introduit la boucle range-based ?",
            options: ["C++98", "C++11", "C++14", "C++17"],
            correct: 1,
            explanation: "La boucle range-based for a été introduite dans C++11."
          }
        ]
      },
      {
        id: "1.5",
        title: "Fonctions de base",
        description: "Déclaration, définition, paramètres et valeurs de retour",
        readTime: "22 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🎯",
        examplesCount: 5,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🎯 Les Fonctions en C++</h3>
            <p class="text-gray-700 leading-relaxed">
              Les fonctions permettent de structurer le code en blocs réutilisables.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Déclaration</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>// prototype
type nom(paramètres);</code></pre>
                <p class="text-sm text-gray-600 mt-2">Signature de la fonction</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Définition</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>type nom(paramètres) {
  // corps
  return valeur;
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Implémentation</p>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Appel</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>nom(arguments);</code></pre>
                <p class="text-sm text-gray-600 mt-2">Utilisation</p>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">Surcharge :</strong> C++ permet d'avoir plusieurs fonctions avec le même nom mais des paramètres différents.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Fonctions détaillées</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple5')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple5">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;cmath&gt;

// PROTOTYPES (déclarations)
int addition(int a, int b);
double addition(double a, double b);
void afficherMessage();
void afficherMessage(const std::string& message);
void echanger(int& a, int& b);  // référence
int factorielle(int n);
void fonctionVoid();
int& obtenirReference(int& x);  // retour par référence

// DÉFINITIONS
int addition(int a, int b) {
    return a + b;
}

// SURCHARGE (overloading)
double addition(double a, double b) {
    return a + b;
}

void afficherMessage() {
    std::cout << "Bonjour !" << std::endl;
}

void afficherMessage(const std::string& message) {
    std::cout << "Message : " << message << std::endl;
}

// Passage par référence (modifie les originaux)
void echanger(int& a, int& b) {
    int temp{a};
    a = b;
    b = temp;
}

// Fonction récursive
int factorielle(int n) {
    if (n <= 1) return 1;
    return n * factorielle(n - 1);
}

void fonctionVoid() {
    std::cout << "Cette fonction ne retourne rien" << std::endl;
    // Pas de return nécessaire
}

int& obtenirReference(int& x) {
    return x;  // Retourne une référence à x
}

// Fonction avec paramètres par défaut
void configurer(int largeur, int hauteur = 600, bool pleinEcran = false) {
    std::cout << "Largeur: " << largeur 
              << ", Hauteur: " << hauteur
              << ", Plein écran: " << std::boolalpha << pleinEcran 
              << std::endl;
}

// Fonction inline (pour petites fonctions)
inline int carre(int x) {
    return x * x;
}

// Fonction constexpr (C++11) - évaluée à la compilation
constexpr double pi() {
    return 3.141592653589793;
}

// Fonction avec auto comme type de retour (C++14)
auto multiplier(auto a, auto b) {
    return a * b;
}

int main() {
    // APPELS DE FONCTIONS
    int resultat1 = addition(5, 3);
    double resultat2 = addition(5.5, 3.2);
    
    std::cout << "5 + 3 = " << resultat1 << std::endl;
    std::cout << "5.5 + 3.2 = " << resultat2 << std::endl;
    
    // Surcharge résolue automatiquement
    afficherMessage();
    afficherMessage("C++ est puissant !");
    
    // Passage par référence
    int x{5}, y{10};
    std::cout << "Avant échange : x=" << x << ", y=" << y << std::endl;
    echanger(x, y);
    std::cout << "Après échange : x=" << x << ", y=" << y << std::endl;
    
    // Récursivité
    std::cout << "5! = " << factorielle(5) << std::endl;
    
    // Paramètres par défaut
    configurer(800);           // largeur=800, hauteur=600, pleinEcran=false
    configurer(800, 600);      // largeur=800, hauteur=600, pleinEcran=false
    configurer(800, 600, true);// largeur=800, hauteur=600, pleinEcran=true
    
    // Ne peut pas sauter un paramètre
    // configurer(800, true);  // ERREUR: true converti en int
    
    // Fonction inline
    std::cout << "carre(4) = " << carre(4) << std::endl;
    
    // constexpr
    constexpr double pi_value = pi();  // calculé à la compilation
    std::cout << "π = " << pi_value << std::endl;
    
    // auto comme type de retour
    auto produit1 = multiplier(2, 3);     // int
    auto produit2 = multiplier(2.5, 3.0); // double
    auto produit3 = multiplier(2, 3.0);   // double
    
    std::cout << "produit1: " << produit1 << std::endl;
    std::cout << "produit2: " << produit2 << std::endl;
    std::cout << "produit3: " << produit3 << std::endl;
    
    // Retour par référence
    int valeur{42};
    int& ref = obtenirReference(valeur);
    ref = 100;  // Modifie 'valeur'
    std::cout << "valeur: " << valeur << std::endl;  // 100
    
    // Fonctions de la bibliothèque standard
    double racine = std::sqrt(25.0);      // racine carrée
    double puissance = std::pow(2.0, 3.0); // 2^3
    double arrondi = std::round(3.14159); // arrondi
    
    std::cout << "sqrt(25) = " << racine << std::endl;
    std::cout << "pow(2, 3) = " << puissance << std::endl;
    std::cout << "round(3.14159) = " << arrondi << std::endl;
    
    // Fonction lambda (C++11) - fonction anonyme
    auto saluer = [](const std::string& nom) {
        return "Bonjour " + nom + " !";
    };
    
    std::cout << saluer("Alice") << std::endl;
    
    // Lambda avec capture
    int facteur{2};
    auto multiplierPar = [facteur](int n) {
        return n * facteur;
    };
    
    std::cout << "multiplierPar(5) = " << multiplierPar(5) << std::endl;
    
    return 0;
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Les fonctions <code>inline</code> et <code>constexpr</code> peuvent améliorer les performances</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Prototypes et définitions",
          "Surcharge de fonctions",
          "Passage par valeur vs référence",
          "Paramètres par défaut"
        ],
        quiz: [
          {
            question: "Quelle est la différence entre passage par valeur et par référence ?",
            options: ["Aucune différence", "Par valeur copie les données, par référence utilise l'original", "Par référence est plus lent", "Par valeur modifie l'original"],
            correct: 1,
            explanation: "Passage par valeur : copie des données ; passage par référence : travaille sur les données originales."
          },
          {
            question: "Que signifie la surcharge de fonctions en C++ ?",
            options: ["Fonctions trop longues", "Fonctions avec même nom mais paramètres différents", "Fonctions qui retournent plusieurs valeurs", "Fonctions récursives"],
            correct: 1,
            explanation: "La surcharge permet d'avoir plusieurs fonctions avec le même nom mais des signatures de paramètres différentes."
          },
          {
            question: "Quel mot-clé permet de retourner 'rien' d'une fonction ?",
            options: ["null", "void", "empty", "none"],
            correct: 1,
            explanation: "void indique que la fonction ne retourne aucune valeur."
          }
        ]
      },
      {
        id: "1.6",
        title: "Tableaux et chaînes",
        description: "Tableaux C-style et std::string",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "📊",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">📊 Tableaux et Chaînes</h3>
            <p class="text-gray-700 leading-relaxed">
              Deux types de tableaux en C++ : les tableaux C-style et les conteneurs modernes comme std::array (C++11).
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Tableaux C-style</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>int tab[5];          // 5 entiers
int tab[] = {1,2,3}; // initialisé
int* ptr = tab;      // pointeur sur 1er</code></pre>
                <p class="text-sm text-gray-600 mt-2">Taille fixe, hérité du C</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">std::string (C++)</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>#include &lt;string&gt;
std::string s1{"Hello"};
std::string s2 = "World";
auto s3 = s1 + " " + s2;</code></pre>
                <p class="text-sm text-gray-600 mt-2">Chaînes dynamiques, sûres</p>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">Sécurité :</strong> Préférez std::array et std::vector aux tableaux C-style. Utilisez std::string plutôt que char[] pour les chaînes.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Tableaux et chaînes</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple6')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple6">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;array&gt;      // C++11
#include &lt;vector&gt;     // tableau dynamique
#include &lt;algorithm&gt;  // pour std::sort
#include &lt;cstring&gt;    // fonctions C pour char[]

int main() {
    // TABLEAUX C-STYLE
    int tableau1[5];  // non initialisé
    int tableau2[5] = {1, 2, 3, 4, 5};
    int tableau3[] = {10, 20, 30};  // taille déduite: 3
    
    // Initialisation uniforme (C++11)
    int tableau4[]{40, 50, 60};
    
    // Accès aux éléments
    tableau2[0] = 100;  // premier élément
    std::cout << "tableau2[2] = " << tableau2[2] << std::endl;
    
    // Taille d'un tableau
    int taille = sizeof(tableau2) / sizeof(tableau2[0]);
    std::cout << "Taille de tableau2: " << taille << std::endl;
    
    // Boucle sur tableau C-style
    std::cout << "tableau2: ";
    for (int i = 0; i < taille; ++i) {
        std::cout << tableau2[i] << " ";
    }
    std::cout << std::endl;
    
    // Range-based for (C++11)
    std::cout << "tableau3: ";
    for (int valeur : tableau3) {
        std::cout << valeur << " ";
    }
    std::cout << std::endl;
    
    // TABLEAU MULTIDIMENSIONNEL
    int matrice[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    
    std::cout << "matrice[1][2] = " << matrice[1][2] << std::endl;
    
    // std::array (C++11) - plus sûr
    std::array&lt;int, 5&gt; arr1 = {1, 2, 3, 4, 5};
    std::array&lt;int, 3&gt; arr2{10, 20, 30};
    
    // Méthodes de std::array
    std::cout << "arr1.size() = " << arr1.size() << std::endl;
    std::cout << "arr1.front() = " << arr1.front() << std::endl;  // premier
    std::cout << "arr1.back() = " << arr1.back() << std::endl;    // dernier
    
    // Tri
    std::array&lt;int, 5&gt; arr3{5, 2, 8, 1, 9};
    std::sort(arr3.begin(), arr3.end());
    
    std::cout << "arr3 trié: ";
    for (int v : arr3) {
        std::cout << v << " ";
    }
    std::cout << std::endl;
    
    // CHAÎNES C-STYLE (char[])
    char chaine1[] = "Bonjour";  // taille: 8 (7 lettres + \\0)
    char chaine2[20] = "Hello";
    const char* chaine3 = "World";  // pointeur vers littéral
    
    // Fonctions C pour char[]
    std::cout << "strlen(chaine1) = " << std::strlen(chaine1) << std::endl;
    
    char copie[20];
    std::strcpy(copie, chaine1);  // copie
    std::strcat(copie, " !");     // concaténation
    
    int comparaison = std::strcmp(chaine1, "Bonjour");
    std::cout << "Comparaison: " << comparaison << std::endl;
    
    // std::string (RECOMMANDÉ)
    std::string s1 = "Bonjour";
    std::string s2{"le monde"};
    std::string s3(10, 'x');  // "xxxxxxxxxx"
    
    // Concaténation
    std::string message = s1 + " " + s2 + " !";
    std::cout << "Message: " << message << std::endl;
    
    // Méthodes de std::string
    std::cout << "Taille: " << s1.size() << std::endl;
    std::cout << "Longueur: " << s1.length() << std::endl;
    std::cout << "Est vide: " << std::boolalpha << s1.empty() << std::endl;
    
    // Accès
    std::cout << "Premier caractère: " << s1[0] << std::endl;
    std::cout << "Premier caractère (sûr): " << s1.at(0) << std::endl;
    
    // Modification
    s1.append(" tout le monde");
    s1.insert(7, " cher");
    s1.replace(0, 7, "Salut");
    s1.erase(5, 4);  // supprime 4 caractères à partir de la position 5
    
    // Recherche
    size_t pos = s2.find("monde");
    if (pos != std::string::npos) {
        std::cout << "'monde' trouvé à: " << pos << std::endl;
    }
    
    // Sous-chaîne
    std::string sous = s2.substr(3, 5);
    std::cout << "Sous-chaîne: " << sous << std::endl;
    
    // Conversion
    std::string nombreStr = "123";
    int nombre = std::stoi(nombreStr);  // string to int
    
    double decimal = 3.14159;
    std::string decimalStr = std::to_string(decimal);
    
    std::cout << "Nombre: " << nombre << std::endl;
    std::cout << "Decimal string: " << decimalStr << std::endl;
    
    // C-string vs std::string
    const char* cstr = s1.c_str();  // conversion en C-string
    std::cout << "C-string: " << cstr << std::endl;
    
    // std::vector (tableau dynamique)
    std::vector&lt;int&gt; vec1 = {1, 2, 3, 4, 5};
    std::vector&lt;std::string&gt; vec2{"un", "deux", "trois"};
    
    vec1.push_back(6);  // ajoute à la fin
    vec1.pop_back();    // retire le dernier
    
    std::cout << "Vector: ";
    for (int v : vec1) {
        std::cout << v << " ";
    }
    std::cout << std::endl;
    
    return 0;
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Préférez <code>std::string::at(i)</code> à <code>std::string[i]</code> pour vérifier les limites</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Tableaux C-style vs std::array",
          "Chaînes C (char[]) vs std::string",
          "Accès sécurisé avec .at()",
          "Tableaux multidimensionnels"
        ],
        quiz: [
          {
            question: "Quelle classe C++ moderne est préférable aux tableaux C-style ?",
            options: ["std::array", "std::vector", "std::list", "std::array et std::vector"],
            correct: 3,
            explanation: "std::array pour taille fixe, std::vector pour taille dynamique."
          },
          {
            question: "Comment obtenir la taille d'un std::string ?",
            options: [".size()", ".length()", "strlen()", ".size() et .length()"],
            correct: 3,
            explanation: "std::string a à la fois .size() et .length() qui retournent le nombre de caractères."
          },
          {
            question: "Quel est l'avantage de std::string sur char[] ?",
            options: ["Plus rapide", "Gère automatiquement la mémoire", "Plus petit en mémoire", "Incompatible avec le C"],
            correct: 1,
            explanation: "std::string gère automatiquement l'allocation mémoire et la taille."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "NIVEAU 2",
    subtitle: "Programmation Orientée Objet",
    color: "blue",
    icon: "🔵",
    chapters: [
      {
        id: "2.1",
        title: "Classes et objets",
        description: "Définition de classes, constructeurs et membres",
        readTime: "25 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🏛️",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🏛️ Classes et Objets</h3>
            <p class="text-gray-700 leading-relaxed">
              La Programmation Orientée Objet (POO) en C++ permet de créer des types personnalisés avec données et comportements.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Classe</h4>
                <p class="text-sm text-gray-600">Plan de construction</p>
                <div class="mt-2">
                  <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Définition</span>
                </div>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Objet</h4>
                <p class="text-sm text-gray-600">Instance de classe</p>
                <div class="mt-2">
                  <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Exécution</span>
                </div>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Membres</h4>
                <p class="text-sm text-gray-600">Attributs et méthodes</p>
                <div class="mt-2">
                  <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Détails</span>
                </div>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">Encapsulation :</strong> Masquer les détails d'implémentation et exposer seulement une interface publique.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Classes complètes</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple7')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple7">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;cmath&gt;

// CLASSE SIMPLE
class Rectangle {
private:  // Section privée (par défaut dans les classes)
    double largeur;
    double hauteur;
    
public:   // Section publique
    // Constructeur
    Rectangle(double l, double h) : largeur{l}, hauteur{h} {
        std::cout << "Rectangle créé" << std::endl;
    }
    
    // Constructeur par défaut
    Rectangle() : largeur{1.0}, hauteur{1.0} {}
    
    // Destructeur
    ~Rectangle() {
        std::cout << "Rectangle détruit" << std::endl;
    }
    
    // Méthodes (fonctions membres)
    double aire() const {
        return largeur * hauteur;
    }
    
    double perimetre() const {
        return 2 * (largeur + hauteur);
    }
    
    // Getters (accesseurs)
    double getLargeur() const { return largeur; }
    double getHauteur() const { return hauteur; }
    
    // Setters (mutateurs)
    void setLargeur(double l) {
        if (l > 0) largeur = l;
    }
    
    void setHauteur(double h) {
        if (h > 0) hauteur = h;
    }
    
    // Méthode statique (appartenant à la classe)
    static std::string description() {
        return "Une forme avec 4 angles droits";
    }
};

// CLASSE AVEC MEMBRES STATIQUES
class Compteur {
private:
    static int total;  // variable statique (partagée)
    
public:
    Compteur() {
        ++total;
    }
    
    ~Compteur() {
        --total;
    }
    
    static int getTotal() {
        return total;
    }
};

// Définition de la variable statique
int Compteur::total = 0;

// CLASSE AVEC INITIALISATION IN-LINE (C++11)
class Point {
private:
    double x{0.0};  // initialisation in-line
    double y{0.0};
    
public:
    Point() = default;  // constructeur par défaut explicite
    
    Point(double x, double y) : x{x}, y{y} {}
    
    // Méthodes const et non-const
    double getX() const { return x; }
    double getY() const { return y; }
    
    void setX(double x) { this-&gt;x = x; }
    void setY(double y) { this-&gt;y = y; }
    
    void deplacer(double dx, double dy) {
        x += dx;
        y += dy;
    }
    
    double distance(const Point& autre) const {
        double dx = x - autre.x;
        double dy = y - autre.y;
        return std::sqrt(dx*dx + dy*dy);
    }
};

// CLASSE AVEC FRIEND (accès privilégié)
class CompteSecret {
private:
    int secret{42};
    
    // Fonction amie
    friend void revelerSecret(const CompteSecret& cs);
    
    // Classe amie
    friend class Espion;
    
public:
    int getSecret() const { return secret; }
};

class Espion {
public:
    static int voirSecret(const CompteSecret& cs) {
        return cs.secret;  // Accès au membre privé
    }
};

void revelerSecret(const CompteSecret& cs) {
    std::cout << "Secret: " << cs.secret << std::endl;
}

// STRUCT (classe avec membres publics par défaut)
struct Personne {
    std::string nom;
    int age;
    
    // Les struct peuvent avoir des méthodes
    void afficher() const {
        std::cout << nom << ", " << age << " ans" << std::endl;
    }
};

// CLASSE AVEC MEMBRES CONSTANTS
class Cercle {
private:
    const double pi{3.14159};
    double rayon;
    
public:
    Cercle(double r) : rayon{r} {}
    
    double aire() const {
        return pi * rayon * rayon;
    }
    
    double circonference() const {
        return 2 * pi * rayon;
    }
};

// ENUM CLASS (C++11) - énumération forte
enum class Couleur {
    ROUGE,
    VERT,
    BLEU
};

enum class Taille : char {  // type sous-jacent spécifié
    PETIT = 'S',
    MOYEN = 'M',
    GRAND = 'L'
};

int main() {
    // CRÉATION D'OBJETS
    Rectangle rect1{5.0, 3.0};
    Rectangle rect2;  // utilise constructeur par défaut
    
    std::cout << "Rectangle 1:" << std::endl;
    std::cout << "  Aire: " << rect1.aire() << std::endl;
    std::cout << "  Périmètre: " << rect1.perimetre() << std::endl;
    
    // Utilisation des getters/setters
    rect2.setLargeur(4.0);
    rect2.setHauteur(2.0);
    
    std::cout << "Largeur rect2: " << rect2.getLargeur() << std::endl;
    
    // Méthode statique
    std::cout << Rectangle::description() << std::endl;
    
    // Membres statiques
    Compteur c1, c2, c3;
    std::cout << "Nombre de compteurs: " << Compteur::getTotal() << std::endl;
    
    {
        Compteur c4;  // compteur local
        std::cout << "Dans le bloc: " << Compteur::getTotal() << std::endl;
    }  // c4 détruit ici
    
    std::cout << "Après bloc: " << Compteur::getTotal() << std::endl;
    
    // Point
    Point p1{1.0, 2.0};
    Point p2{4.0, 6.0};
    
    std::cout << "Distance: " << p1.distance(p2) << std::endl;
    p1.deplacer(1.0, 1.0);
    
    // this pointer
    p1.setX(10.0);
    
    // Friend
    CompteSecret cs;
    revelerSecret(cs);
    std::cout << "Secret vu par espion: " << Espion::voirSecret(cs) << std::endl;
    
    // Struct
    Personne personne{"Alice", 25};
    personne.afficher();
    
    // Aggrégation d'objets
    struct Adresse {
        std::string rue;
        std::string ville;
    };
    
    struct Employe {
        Personne identite;
        Adresse adresse;
        double salaire;
    };
    
    Employe emp{
        {"Bob", 30},
        {"123 Rue Principale", "Paris"},
        50000.0
    };
    
    std::cout << "Employé: " << emp.identite.nom 
              << ", " << emp.adresse.ville << std::endl;
    
    // Enum class
    Couleur couleur = Couleur::VERT;
    Taille taille = Taille::GRAND;
    
    if (couleur == Couleur::VERT) {
        std::cout << "C'est vert !" << std::endl;
    }
    
    // Conversion de enum class
    char tailleChar = static_cast&lt;char&gt;(taille);
    std::cout << "Taille: " << tailleChar << std::endl;
    
    // Liste d'objets
    Rectangle rectangles[] = {
        Rectangle{2, 3},
        Rectangle{4, 5},
        Rectangle{1, 1}
    };
    
    for (const auto& rect : rectangles) {
        std::cout << "Aire: " << rect.aire() << std::endl;
    }
    
    return 0;
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Utilisez l'initialisation des membres dans la liste d'initialisation du constructeur pour de meilleures performances</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Classes vs structs",
          "Constructeurs et destructeurs",
          "Membres publics/privés",
          "Méthodes const et statiques"
        ],
        quiz: [
          {
            question: "Quelle est la différence entre class et struct en C++ ?",
            options: ["Aucune différence", "class a membres privés par défaut, struct a membres publics", "struct ne peut pas avoir de méthodes", "class est plus rapide"],
            correct: 1,
            explanation: "Dans class, les membres sont privés par défaut ; dans struct, ils sont publics par défaut."
          },
          {
            question: "Qu'est-ce qu'un destructeur ?",
            options: ["Fonction qui supprime un objet", "Fonction appelée quand un objet est détruit", "Fonction qui libère la mémoire", "Fonction qui initialise un objet"],
            correct: 1,
            explanation: "Le destructeur est appelé automatiquement quand un objet est détruit."
          },
          {
            question: "Que signifie 'const' après une méthode ?",
            options: ["La méthode ne modifie pas l'objet", "La méthode retourne une constante", "La méthode ne peut pas être appelée", "La méthode est constante"],
            correct: 0,
            explanation: "Une méthode const ne peut pas modifier les membres de l'objet (sauf mutable)."
          }
        ]
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
    percentage: totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0
  };
};