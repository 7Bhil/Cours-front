// data/java-courses.js

export const COURSE_LEVELS = [
  {
    id: 1,
    name: "NIVEAU 1",
    subtitle: "Fondamentaux Java",
    color: "emerald",
    icon: "🟢",
    chapters: [
      {
        id: "1.1",
        title: "Introduction à Java",
        description: "Histoire, JVM, JDK et premiers programmes",
        readTime: "20 min",
        unlocked: true,
        completed: false,
        difficulty: "débutant",
        icon: "🚀",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
              <h3 class="text-xl font-bold text-gray-900 mb-4">☕ Le Langage Orienté Objet par Excellence</h3>
              <p class="text-gray-700 leading-relaxed">
                Créé en 1995 par <strong class="text-orange-600">James Gosling</strong> chez Sun Microsystems, 
                Java est un langage robuste, portable et sécurisé, utilisé par des millions de développeurs dans le monde.
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">💻</div>
                <h4 class="font-bold text-gray-900 mb-2">Applications Desktop</h4>
                <p class="text-sm text-gray-600">JavaFX, Swing</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">🌐</div>
                <h4 class="font-bold text-gray-900 mb-2">Web & Backend</h4>
                <p class="text-sm text-gray-600">Spring Boot, Jakarta EE</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">📱</div>
                <h4 class="font-bold text-gray-900 mb-2">Mobile</h4>
                <p class="text-sm text-gray-600">Android natif</p>
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
                    <strong class="font-bold">Java 14+ :</strong> Les switch expressions permettent de retourner directement une valeur avec <code>-></code>
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Conditions en pratique</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple5')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple5">public class Conditions {
    public static void main(String[] args) {
        // if/else/else if
        int age = 20;
        
        if (age < 13) {
            System.out.println("Enfant");
        } else if (age < 18) {
            System.out.println("Adolescent");
        } else {
            System.out.println("Adulte");
        }
        
        // Switch classique
        int jour = 3;
        String nomJour;
        
        switch(jour) {
            case 1:
                nomJour = "Lundi";
                break;
            case 2:
                nomJour = "Mardi";
                break;
            case 3:
                nomJour = "Mercredi";
                break;
            default:
                nomJour = "Autre jour";
                break;
        }
        
        // Switch expression (Java 14+)
        String typeJour = switch(jour) {
            case 1, 2, 3, 4, 5 -> "Jour de travail";
            case 6, 7 -> "Weekend";
            default -> "Jour invalide";
        };
        
        // Opérateur ternaire
        String statut = (age >= 18) ? "Majeur" : "Mineur";
        
        // Notes
        int note = 85;
        String mention;
        
        if (note >= 90) {
            mention = "Excellent";
        } else if (note >= 80) {
            mention = "Très bien";
        } else if (note >= 70) {
            mention = "Bien";
        } else if (note >= 60) {
            mention = "Passable";
        } else {
            mention = "Insuffisant";
        }
        
        System.out.println("Mention: " + mention);
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">N'oubliez pas <code class="bg-gray-800 px-1 rounded">break</code> dans les switch classiques</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "if/else pour conditions simples",
          "switch pour multiples valeurs",
          "Switch expressions (Java 14+)",
          "Opérateur ternaire pour affectations conditionnelles"
        ],
        quiz: [
          {
            question: 'Que se passe-t-il si on oublie le break dans un switch ?',
            options: ['Erreur de compilation', 'Fall-through : exécution des cas suivants', 'Rien, le break est optionnel', 'Le programme plante'],
            correct: 1,
            explanation: 'Sans break, l\'exécution continue dans les cas suivants (fall-through), ce qui est rarement voulu.'
          },
          {
            question: 'Quelle version de Java a introduit les switch expressions ?',
            options: ['Java 8', 'Java 11', 'Java 14', 'Java 17'],
            correct: 2,
            explanation: 'Les switch expressions avec -> ont été introduites en Java 14.'
          },
          {
            question: 'Peut-on utiliser String dans un switch ?',
            options: ['Non, seulement int', 'Oui, depuis Java 7', 'Non, seulement enum', 'Oui, depuis toujours'],
            correct: 1,
            explanation: 'Le switch avec String est supporté depuis Java 7.'
          }
        ]
      },
      {
        id: "1.6",
        title: "Boucles",
        description: "for, while, do-while et enhanced for",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🔄",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🔄 Boucles en Java</h3>
            <p class="text-gray-700 leading-relaxed">
              Les boucles permettent de répéter des instructions. Java propose plusieurs types de boucles.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">for</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>for (int i = 0; i < 10; i++) {
    // code
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Itérations comptées</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">while</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>while (condition) {
    // code
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Condition en début</p>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">for-each</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>for (Type item : collection) {
    // code
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Itération sur collections</p>
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
                    <strong class="font-bold">Attention :</strong> Vérifiez toujours que votre condition de boucle finira par être fausse pour éviter les boucles infinies !
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Différents types de boucles</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple6')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple6">public class Boucles {
    public static void main(String[] args) {
        // Boucle for classique
        for (int i = 0; i < 5; i++) {
            System.out.println("Itération " + i);
        }
        
        // Boucle for-each (enhanced for)
        int[] nombres = {1, 2, 3, 4, 5};
        for (int nombre : nombres) {
            System.out.println("Nombre: " + nombre);
        }
        
        // Boucle while
        int compteur = 0;
        while (compteur < 3) {
            System.out.println("Compteur: " + compteur);
            compteur++;
        }
        
        // Boucle do-while (exécute au moins une fois)
        int x = 0;
        do {
            System.out.println("x = " + x);
            x++;
        } while (x < 3);
        
        // Break et continue
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                break; // Sort de la boucle
            }
            if (i % 2 == 0) {
                continue; // Passe à l'itération suivante
            }
            System.out.println(i); // Affiche seulement les impairs
        }
        
        // Boucles imbriquées
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.print(i + "x" + j + "=" + (i*j) + " ");
            }
            System.out.println();
        }
        
        // Labels (étiquettes) pour boucles imbriquées
        outer: for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (i == 1 && j == 1) {
                    break outer; // Sort de la boucle externe
                }
                System.out.println("i=" + i + ", j=" + j);
            }
        }
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">La boucle for-each est préférable pour parcourir des collections (plus lisible)</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "for pour itérations comptées",
          "for-each pour parcourir collections",
          "while pour conditions variables",
          "break et continue pour contrôle de flux"
        ],
        quiz: [
          {
            question: 'Quelle est la différence entre while et do-while ?',
            options: ['Aucune différence', 'do-while exécute le corps au moins une fois', 'while est plus rapide', 'do-while ne peut pas utiliser break'],
            correct: 1,
            explanation: 'do-while vérifie la condition après avoir exécuté le corps, garantissant au moins une exécution.'
          },
          {
            question: 'Que fait l\'instruction continue dans une boucle ?',
            options: ['Sort de la boucle', 'Passe à l\'itération suivante', 'Arrête le programme', 'Recommence depuis le début'],
            correct: 1,
            explanation: 'continue saute le reste du corps de la boucle et passe directement à l\'itération suivante.'
          },
          {
            question: 'Peut-on modifier la variable d\'itération dans une boucle for-each ?',
            options: ['Oui', 'Non, c\'est une copie', 'Seulement avec des objets', 'Seulement si déclarée final'],
            correct: 1,
            explanation: 'La variable dans un for-each est une copie, la modifier n\'affecte pas la collection originale.'
          }
        ]
      },
      {
        id: "1.7",
        title: "Tableaux (Arrays)",
        description: "Déclaration, manipulation et tableaux multidimensionnels",
        readTime: "16 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "📊",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">📊 Les Tableaux en Java</h3>
            <p class="text-gray-700 leading-relaxed">
              Les tableaux sont des structures de données de taille fixe qui stockent des éléments du même type.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Déclaration</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>int[] nombres = new int[5];
String[] noms = {"Alice", "Bob"};</code></pre>
                <p class="text-sm text-gray-600 mt-2">Taille fixe, indexés à partir de 0</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Accès et modification</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>nombres[0] = 42;
int premier = nombres[0];
int taille = nombres.length;</code></pre>
                <p class="text-sm text-gray-600 mt-2">Accès direct par index</p>
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
                    <strong class="font-bold">Important :</strong> La taille d'un tableau est fixe. Pour une taille dynamique, utilisez <code>ArrayList</code>.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Manipulation de tableaux</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple7')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple7">import java.util.Arrays;

public class Tableaux {
    public static void main(String[] args) {
        // Déclaration et initialisation
        int[] nombres = new int[5];  // Tableau de 5 int initialisés à 0
        String[] fruits = {"Pomme", "Banane", "Orange"};
        
        // Accès et modification
        nombres[0] = 10;
        nombres[1] = 20;
        System.out.println("Premier: " + nombres[0]);
        System.out.println("Taille: " + nombres.length);
        
        // Parcours avec for
        for (int i = 0; i < fruits.length; i++) {
            System.out.println(fruits[i]);
        }
        
        // Parcours avec for-each
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // Tableaux multidimensionnels
        int[][] matrice = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("Element [1][2]: " + matrice[1][2]); // 6
        
        // Parcours de tableau 2D
        for (int i = 0; i < matrice.length; i++) {
            for (int j = 0; j < matrice[i].length; j++) {
                System.out.print(matrice[i][j] + " ");
            }
            System.out.println();
        }
        
        // Méthodes utiles de la classe Arrays
        int[] nums = {5, 2, 8, 1, 9};
        
        Arrays.sort(nums);  // Tri
        System.out.println("Trié: " + Arrays.toString(nums));
        
        int index = Arrays.binarySearch(nums, 8);  // Recherche (tableau trié)
        System.out.println("Index de 8: " + index);
        
        int[] copie = Arrays.copyOf(nums, nums.length);  // Copie
        
        Arrays.fill(nombres, 42);  // Remplit tout le tableau avec 42
        
        boolean egaux = Arrays.equals(nums, copie);  // Comparaison
        System.out.println("Égaux: " + egaux);
        
        // Tableau de tableaux (tailles différentes)
        int[][] jagged = new int[3][];
        jagged[0] = new int[]{1, 2};
        jagged[1] = new int[]{3, 4, 5};
        jagged[2] = new int[]{6};
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Utilisez <code class="bg-gray-800 px-1 rounded">Arrays.toString()</code> pour afficher facilement un tableau</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Taille fixe définie à la création",
          "Indexés à partir de 0",
          "length est une propriété, pas une méthode",
          "Classe Arrays pour opérations utiles"
        ],
        quiz: [
          {
            question: 'Quel est l\'index du premier élément d\'un tableau ?',
            options: ['1', '0', '-1', 'Dépend du type'],
            correct: 1,
            explanation: 'Les tableaux en Java sont indexés à partir de 0.'
          },
          {
            question: 'Comment obtenir la taille d\'un tableau ?',
            options: ['array.size()', 'array.length', 'array.length()', 'array.size'],
            correct: 1,
            explanation: 'length est une propriété publique (pas une méthode) des tableaux.'
          },
          {
            question: 'Peut-on changer la taille d\'un tableau après sa création ?',
            options: ['Oui, avec resize()', 'Oui, avec setSize()', 'Non, la taille est fixe', 'Seulement pour augmenter'],
            correct: 2,
            explanation: 'La taille d\'un tableau est fixe. Pour une taille dynamique, utilisez ArrayList.'
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
        title: "Classes et Objets",
        description: "Créer des classes, instancier des objets et comprendre l'encapsulation",
        readTime: "25 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🎯",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🎯 Classes et Objets en Java</h3>
            <p class="text-gray-700 leading-relaxed">
              Java est un langage orienté objet. Les classes sont des modèles pour créer des objets.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Classe</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>public class Voiture {
    // Attributs (propriétés)
    private String marque;
    private int vitesse;
    
    // Méthodes
    public void accelerer() {
        vitesse++;
    }
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Modèle/Blueprint</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Objet</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>// Instanciation
Voiture maVoiture = new Voiture();

// Utilisation
maVoiture.accelerer();</code></pre>
                <p class="text-sm text-gray-600 mt-2">Instance concrète</p>
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
                    <strong class="font-bold">Encapsulation :</strong> Les attributs doivent être <code>private</code> et accessibles via des getters/setters.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Classe complète avec encapsulation</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple8')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple8">public class Personne {
    // Attributs privés (encapsulation)
    private String nom;
    private int age;
    private String email;
    
    // Constructeur par défaut
    public Personne() {
        this.nom = "Inconnu";
        this.age = 0;
    }
    
    // Constructeur avec paramètres
    public Personne(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }
    
    // Constructeur complet
    public Personne(String nom, int age, String email) {
        this.nom = nom;
        this.age = age;
        this.email = email;
    }
    
    // Getters
    public String getNom() {
        return nom;
    }
    
    public int getAge() {
        return age;
    }
    
    public String getEmail() {
        return email;
    }
    
    // Setters avec validation
    public void setNom(String nom) {
        if (nom != null && !nom.isEmpty()) {
            this.nom = nom;
        }
    }
    
    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        }
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    // Méthodes métier
    public void sePresenter() {
        System.out.println("Bonjour, je m'appelle " + nom + 
                          " et j'ai " + age + " ans.");
    }
    
    public boolean estMajeur() {
        return age >= 18;
    }
    
    // Méthode toString (pour affichage)
    @Override
    public String toString() {
        return "Personne{nom='" + nom + "', age=" + age + 
               ", email='" + email + "'}";
    }
}

// Utilisation
public class Main {
    public static void main(String[] args) {
        // Création d'objets
        Personne p1 = new Personne();
        Personne p2 = new Personne("Alice", 25);
        Personne p3 = new Personne("Bob", 30, "bob@email.com");
        
        // Utilisation des méthodes
        p2.sePresenter();
        System.out.println("Majeur? " + p2.estMajeur());
        
        // Utilisation des setters
        p1.setNom("Charlie");
        p1.setAge(20);
        
        // Utilisation des getters
        System.out.println("Nom: " + p1.getNom());
        System.out.println("Age: " + p1.getAge());
        
        // toString()
        System.out.println(p3);
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Le mot-clé <code class="bg-gray-800 px-1 rounded">this</code> fait référence à l'instance courante</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Classe = modèle, Objet = instance",
          "Encapsulation avec private/public",
          "Constructeurs pour initialisation",
          "Getters/Setters pour accès contrôlé"
        ],
        quiz: [
          {
            question: 'Quel est le rôle d\'un constructeur ?',
            options: ['Détruire un objet', 'Initialiser un nouvel objet', 'Copier un objet', 'Afficher un objet'],
            correct: 1,
            explanation: 'Un constructeur initialise un nouvel objet lors de sa création avec le mot-clé new.'
          },
          {
            question: 'Pourquoi déclarer les attributs en private ?',
            options: ['Pour la performance', 'Pour l\'encapsulation et le contrôle d\'accès', 'C\'est obligatoire', 'Pour économiser de la mémoire'],
            correct: 1,
            ="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-blue-700">
                    <strong class="font-bold">💡 WORA :</strong> "Write Once, Run Anywhere" - Le bytecode Java s'exécute sur n'importe quelle plateforme possédant une JVM !
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
                <div class="text-sm font-semibold text-gray-300">Exemple 1 : Premier programme Java</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple1')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple1">public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("🎉 Bonjour le monde !");
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">La méthode main est le point d'entrée de tout programme Java</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Créé en 1995 par James Gosling",
          "Principe WORA (Write Once, Run Anywhere)",
          "Compilation en bytecode pour la JVM",
          "Langage fortement typé et orienté objet"
        ],
        quiz: [
          {
            question: "En quelle année Java a-t-il été créé ?",
            options: ["1991", "1995", "2000", "2005"],
            correct: 1,
            explanation: "Java a été créé en 1995 par James Gosling chez Sun Microsystems."
          },
          {
            question: "Que signifie JVM ?",
            options: ["Java Virtual Machine", "Java Version Manager", "Java Visual Manager", "Java Variable Method"],
            correct: 0,
            explanation: "JVM signifie Java Virtual Machine, c'est elle qui exécute le bytecode Java."
          },
          {
            question: "Quel est le principe WORA de Java ?",
            options: ["Write Once, Read Always", "Write Once, Run Anywhere", "Work Once, Repeat Always", "Write Often, Run Automatically"],
            correct: 1,
            explanation: "WORA (Write Once, Run Anywhere) signifie qu'on compile une fois et le code s'exécute partout où il y a une JVM."
          }
        ]
      },
      {
        id: "1.2",
        title: "Installation et Configuration",
        description: "Installer JDK, configurer PATH et premier IDE",
        readTime: "15 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "⚙️",
        examplesCount: 2,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">⚙️ Configuration de l'Environnement Java</h3>
            <p class="text-gray-700 leading-relaxed">
              Pour développer en Java, vous avez besoin du JDK (Java Development Kit) et d'un IDE.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">1️⃣</div>
                <h4 class="font-bold text-gray-900 mb-2">JDK</h4>
                <p class="text-sm text-gray-600">Outils de développement + JRE</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">2️⃣</div>
                <h4 class="font-bold text-gray-900 mb-2">JRE</h4>
                <p class="text-sm text-gray-600">Environnement d'exécution Java</p>
              </div>
              <div class="p-5 rounded-xl border shadow-sm border-green-300 bg-green-50">
                <div class="text-3xl mb-3">✅</div>
                <h4 class="font-bold text-gray-900 mb-2">IDE</h4>
                <p class="text-sm text-gray-600">IntelliJ IDEA, Eclipse, VS Code</p>
              </div>
            </div>
            
            <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-green-700">
                    <strong class="font-bold">💡 Recommandation :</strong> IntelliJ IDEA Community Edition est gratuit et excellent pour débuter en Java.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Vérifier l'installation</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple2')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple2"># Vérifier la version de Java
java -version

# Vérifier le compilateur
javac -version

# Afficher le PATH Java
echo $JAVA_HOME

# Compiler et exécuter
javac HelloWorld.java
java HelloWorld</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Configurez JAVA_HOME pour pointer vers votre installation JDK</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          'JDK contient le compilateur javac',
          'JRE contient la JVM pour exécuter',
          'Configurez la variable JAVA_HOME',
          'Utilisez un IDE moderne'
        ],
        quiz: [
          {
            question: 'Quelle est la différence entre JDK et JRE ?',
            options: ['Aucune différence', 'JDK contient les outils de développement, JRE seulement l\'exécution', 'JRE est plus récent', 'JDK est pour Windows uniquement'],
            correct: 1,
            explanation: 'Le JDK (Java Development Kit) inclut le JRE plus les outils de développement comme le compilateur javac.'
          },
          {
            question: 'Quelle commande compile un fichier Java ?',
            options: ['java', 'javac', 'compile', 'javarun'],
            correct: 1,
            explanation: 'javac est le compilateur Java qui transforme le code source (.java) en bytecode (.class).'
          },
          {
            question: 'Que contient un fichier .class ?',
            options: ['Code source Java', 'Bytecode pour la JVM', 'Commentaires uniquement', 'Configuration'],
            correct: 1,
            explanation: 'Un fichier .class contient le bytecode compilé qui sera exécuté par la JVM.'
          }
        ]
      },
      {
        id: "1.3",
        title: "Variables et Types Primitifs",
        description: "Types de données, déclaration et initialisation",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🧠",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🧠 Variables et Types en Java</h3>
            <p class="text-gray-700 leading-relaxed">
              Java est un langage fortement typé : chaque variable doit avoir un type déclaré explicitement.
            </p>
            
            <div class="grid md:grid-cols-4 gap-3">
              <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-2">Entiers</h4>
                <p class="text-xs text-gray-600">byte, short, int, long</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 class="font-bold text-green-700 mb-2">Décimaux</h4>
                <p class="text-xs text-gray-600">float, double</p>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 class="font-bold text-yellow-700 mb-2">Caractères</h4>
                <p class="text-xs text-gray-600">char</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-2">Booléen</h4>
                <p class="text-xs text-gray-600">boolean</p>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">Convention :</strong> Les noms de variables commencent par une minuscule en camelCase : <code>monAge</code>, <code>nombreEtudiants</code>
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Déclaration de variables</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple3')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple3">public class Variables {
    public static void main(String[] args) {
        // Types entiers
        byte age = 25;              // -128 à 127
        short annee = 2024;         // -32,768 à 32,767
        int population = 1000000;   // -2^31 à 2^31-1
        long distance = 9876543210L; // Notez le 'L'
        
        // Types décimaux
        float prix = 19.99f;        // Notez le 'f'
        double pi = 3.14159265359;  // Plus précis
        
        // Caractère et booléen
        char grade = 'A';
        boolean estMajeur = true;
        
        // Affichage
        System.out.println("Age: " + age);
        System.out.println("Prix: " + prix + "€");
        System.out.println("Est majeur: " + estMajeur);
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Les suffixes <code class="bg-gray-800 px-1 rounded">L</code> et <code class="bg-gray-800 px-1 rounded">f</code> sont nécessaires pour long et float</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          '8 types primitifs en Java',
          'Types fortement typés (pas de conversion automatique)',
          'Conventions de nommage camelCase',
          'Valeurs par défaut pour les variables d\'instance'
        ],
        quiz: [
          {
            question: 'Quel type utiliser pour stocker un nombre décimal avec haute précision ?',
            options: ['float', 'double', 'int', 'long'],
            correct: 1,
            explanation: 'double offre une meilleure précision que float (64 bits vs 32 bits).'
          },
          {
            question: 'Quelle est la plage de valeurs d\'un byte ?',
            options: ['0 à 255', '-128 à 127', '-256 à 255', '0 à 127'],
            correct: 1,
            explanation: 'Un byte en Java est signé et va de -128 à 127 (8 bits).'
          },
          {
            question: 'Pourquoi ajoute-t-on le suffixe L aux nombres long ?',
            options: ['Pour la lisibilité', 'Pour indiquer au compilateur que c\'est un long', 'C\'est optionnel', 'Pour la performance'],
            correct: 1,
            explanation: 'Le suffixe L indique explicitement au compilateur qu\'il s\'agit d\'un long et non d\'un int.'
          }
        ]
      },
      {
        id: "1.4",
        title: "Opérateurs",
        description: "Arithmétiques, logiques, de comparaison et d'affectation",
        readTime: "16 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "⚡",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">⚡ Opérateurs en Java</h3>
            <p class="text-gray-700 leading-relaxed">
              Java propose plusieurs catégories d'opérateurs pour manipuler les données.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Arithmétiques</h4>
                <div class="space-y-2">
                  <code class="block text-sm bg-white p-2 rounded">+ - * / % ++ --</code>
                  <p class="text-sm text-gray-600">Addition, modulo, incrémentation...</p>
                </div>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Comparaison</h4>
                <div class="space-y-2">
                  <code class="block text-sm bg-white p-2 rounded">== != < > <= >=</code>
                  <p class="text-sm text-gray-600">Égalité et inégalité</p>
                </div>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Logiques</h4>
                <div class="space-y-2">
                  <code class="block text-sm bg-white p-2 rounded">&& || ! & |</code>
                  <p class="text-sm text-gray-600">ET, OU, NON</p>
                </div>
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
                    <strong class="font-bold">Attention :</strong> Pour comparer des objets String, utilisez <code>.equals()</code> et non <code>==</code> !
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
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple4')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple4">public class Operateurs {
    public static void main(String[] args) {
        // Arithmétiques
        int a = 10, b = 3;
        System.out.println("Addition: " + (a + b));      // 13
        System.out.println("Soustraction: " + (a - b));  // 7
        System.out.println("Multiplication: " + (a * b)); // 30
        System.out.println("Division: " + (a / b));      // 3 (division entière)
        System.out.println("Modulo: " + (a % b));        // 1 (reste)
        
        // Incrémentation
        int x = 5;
        System.out.println("x++: " + (x++)); // 5, puis x devient 6
        System.out.println("++x: " + (++x)); // 7 (incrémente puis affiche)
        
        // Comparaison
        System.out.println("10 > 3: " + (10 > 3));   // true
        System.out.println("5 == 5: " + (5 == 5));   // true
        System.out.println("7 != 8: " + (7 != 8));   // true
        
        // Logiques
        boolean majeur = true;
        boolean permis = false;
        System.out.println("Peut conduire: " + (majeur && permis)); // false
        System.out.println("Majeur OU Permis: " + (majeur || permis)); // true
        System.out.println("Non majeur: " + (!majeur)); // false
        
        // Opérateur ternaire
        int age = 20;
        String statut = (age >= 18) ? "Majeur" : "Mineur";
        System.out.println("Statut: " + statut); // Majeur
        
        // Affectation composée
        int n = 10;
        n += 5;  // n = n + 5
        n *= 2;  // n = n * 2
        System.out.println("n: " + n); // 30
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">La division entre entiers donne toujours un entier : 10/3 = 3 (pas 3.33)</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Division entière vs division réelle",
          "Différence entre ++ et --",
          "Opérateurs logiques courts-circuits (&&, ||)",
          "Opérateur ternaire pour conditions simples"
        ],
        quiz: [
          {
            question: 'Que retourne 10 / 3 en Java (avec des int) ?',
            options: ['3.33', '3', '3.0', 'Erreur'],
            correct: 1,
            explanation: 'La division entre deux entiers donne un entier : 10 / 3 = 3 (partie décimale tronquée).'
          },
          {
            question: 'Quelle est la différence entre && et & ?',
            options: ['Aucune', '&& est court-circuit, & évalue toujours les deux opérandes', '& est plus rapide', '&& fonctionne seulement avec boolean'],
            correct: 1,
            explanation: '&& est un opérateur court-circuit : si le premier opérande est false, le second n\'est pas évalué.'
          },
          {
            question: 'Que vaut x après : int x = 5; int y = x++; ?',
            options: ['x = 5, y = 5', 'x = 6, y = 5', 'x = 6, y = 6', 'x = 5, y = 6'],
            correct: 1,
            explanation: 'x++ est post-incrémentation : y reçoit la valeur actuelle (5), puis x est incrémenté à 6.'
          }
        ]
      },
            {
        id: "1.5",
        title: "Structures Conditionnelles",
        description: "if/else, switch et expressions conditionnelles",
        readTime: "14 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🎯",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🎯 Structures Conditionnelles</h3>
            <p class="text-gray-700 leading-relaxed">
              Les conditions permettent d'exécuter différentes instructions selon les circonstances.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">if/else</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>if (condition) {
    // code
} else {
    // autre code
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Pour conditions simples</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">switch</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>switch(valeur) {
    case 1:
        // code
        break;
    default:
        // défaut
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Pour multiples cas</p>
              </div>
              
              <div class="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
                <h4 class="font-bold text-yellow-700 mb-3">Ternaire</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>condition ? vrai : faux</code></pre>
                <p class="text-sm text-gray-600 mt-2">Expression courte</p>
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
                    <strong class="font-bold">Astuce :</strong> Depuis Java 14, les switch expressions permettent un style plus concis avec <code>-></code> et peuvent retourner des valeurs.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Conditions en pratique</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple5')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple5">public class Conditions {
    public static void main(String[] args) {
        // if/else/else if
        int age = 20;
        
        if (age < 13) {
            System.out.println("Enfant");
        } else if (age < 18) {
            System.out.println("Adolescent");
        } else {
            System.out.println("Adulte");
        }
        
        // Switch classique
        int jour = 3;
        String nomJour;
        
        switch(jour) {
            case 1:
                nomJour = "Lundi";
                break;
            case 2:
                nomJour = "Mardi";
                break;
            case 3:
                nomJour = "Mercredi";
                break;
            default:
                nomJour = "Autre jour";
                break;
        }
        
        // Switch expression (Java 14+)
        String typeJour = switch(jour) {
            case 1, 2, 3, 4, 5 -> "Jour de travail";
            case 6, 7 -> "Weekend";
            default -> "Jour invalide";
        };
        
        // Opérateur ternaire
        String statut = (age >= 18) ? "Majeur" : "Mineur";
        
        // Notes
        int note = 85;
        String mention;
        
        if (note >= 90) {
            mention = "Excellent";
        } else if (note >= 80) {
            mention = "Très bien";
        } else if (note >= 70) {
            mention = "Bien";
        } else if (note >= 60) {
            mention = "Passable";
        } else {
            mention = "Insuffisant";
        }
        
        System.out.println("Mention: " + mention);
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">N'oubliez pas <code class="bg-gray-800 px-1 rounded">break</code> dans les switch classiques</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "if/else pour conditions simples",
          "switch pour multiples valeurs",
          "Switch expressions (Java 14+)",
          "Opérateur ternaire pour affectations conditionnelles"
        ],
        quiz: [
          {
            question: 'Que se passe-t-il si on oublie le break dans un switch ?',
            options: ['Erreur de compilation', 'Fall-through : exécution des cas suivants', 'Rien, le break est optionnel', 'Le programme plante'],
            correct: 1,
            explanation: 'Sans break, l\'exécution continue dans les cas suivants (fall-through), ce qui est rarement voulu.'
          },
          {
            question: 'Quelle version de Java a introduit les switch expressions ?',
            options: ['Java 8', 'Java 11', 'Java 14', 'Java 17'],
            correct: 2,
            explanation: 'Les switch expressions avec -> ont été introduites en Java 14.'
          },
          {
            question: 'Peut-on utiliser String dans un switch ?',
            options: ['Non, seulement int', 'Oui, depuis Java 7', 'Non, seulement enum', 'Oui, depuis toujours'],
            correct: 1,
            explanation: 'Le switch avec String est supporté depuis Java 7.'
          }
        ]
      },
      {
        id: "1.6",
        title: "Boucles",
        description: "for, while, do-while et enhanced for",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🔄",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🔄 Boucles en Java</h3>
            <p class="text-gray-700 leading-relaxed">
              Les boucles permettent de répéter des instructions. Java propose plusieurs types de boucles.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">for</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>for (int i = 0; i < 10; i++) {
    // code
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Itérations comptées</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">while</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>while (condition) {
    // code
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Condition en début</p>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">for-each</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>for (Type item : collection) {
    // code
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Itération sur collections</p>
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
                    <strong class="font-bold">Attention :</strong> Vérifiez toujours que votre condition de boucle finira par être fausse pour éviter les boucles infinies !
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Différents types de boucles</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple6')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple6">public class Boucles {
    public static void main(String[] args) {
        // Boucle for classique
        for (int i = 0; i < 5; i++) {
            System.out.println("Itération " + i);
        }
        
        // Boucle for-each (enhanced for)
        int[] nombres = {1, 2, 3, 4, 5};
        for (int nombre : nombres) {
            System.out.println("Nombre: " + nombre);
        }
        
        // Boucle while
        int compteur = 0;
        while (compteur < 3) {
            System.out.println("Compteur: " + compteur);
            compteur++;
        }
        
        // Boucle do-while (exécute au moins une fois)
        int x = 0;
        do {
            System.out.println("x = " + x);
            x++;
        } while (x < 3);
        
        // Break et continue
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                break; // Sort de la boucle
            }
            if (i % 2 == 0) {
                continue; // Passe à l'itération suivante
            }
            System.out.println(i); // Affiche seulement les impairs
        }
        
        // Boucles imbriquées
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.print(i + "x" + j + "=" + (i*j) + " ");
            }
            System.out.println();
        }
        
        // Labels (étiquettes) pour boucles imbriquées
        outer: for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (i == 1 && j == 1) {
                    break outer; // Sort de la boucle externe
                }
                System.out.println("i=" + i + ", j=" + j);
            }
        }
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">La boucle for-each est préférable pour parcourir des collections (plus lisible)</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "for pour itérations comptées",
          "for-each pour parcourir collections",
          "while pour conditions variables",
          "break et continue pour contrôle de flux"
        ],
        quiz: [
          {
            question: 'Quelle est la différence entre while et do-while ?',
            options: ['Aucune différence', 'do-while exécute le corps au moins une fois', 'while est plus rapide', 'do-while ne peut pas utiliser break'],
            correct: 1,
            explanation: 'do-while vérifie la condition après avoir exécuté le corps, garantissant au moins une exécution.'
          },
          {
            question: 'Que fait l\'instruction continue dans une boucle ?',
            options: ['Sort de la boucle', 'Passe à l\'itération suivante', 'Arrête le programme', 'Recommence depuis le début'],
            correct: 1,
            explanation: 'continue saute le reste du corps de la boucle et passe directement à l\'itération suivante.'
          },
          {
            question: 'Peut-on modifier la variable d\'itération dans une boucle for-each ?',
            options: ['Oui', 'Non, c\'est une copie', 'Seulement avec des objets', 'Seulement si déclarée final'],
            correct: 1,
            explanation: 'La variable dans un for-each est une copie, la modifier n\'affecte pas la collection originale.'
          }
        ]
      },
      {
        id: "1.7",
        title: "Tableaux (Arrays)",
        description: "Déclaration, manipulation et tableaux multidimensionnels",
        readTime: "16 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "📊",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">📊 Les Tableaux en Java</h3>
            <p class="text-gray-700 leading-relaxed">
              Les tableaux sont des structures de données de taille fixe qui stockent des éléments du même type.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Déclaration</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>int[] nombres = new int[5];
String[] noms = {"Alice", "Bob"};</code></pre>
                <p class="text-sm text-gray-600 mt-2">Taille fixe, indexés à partir de 0</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Accès et modification</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>nombres[0] = 42;
int premier = nombres[0];
int taille = nombres.length;</code></pre>
                <p class="text-sm text-gray-600 mt-2">Accès direct par index</p>
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
                    <strong class="font-bold">Important :</strong> La taille d'un tableau est fixe. Pour une taille dynamique, utilisez <code>ArrayList</code>.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Manipulation de tableaux</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple7')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple7">import java.util.Arrays;

public class Tableaux {
    public static void main(String[] args) {
        // Déclaration et initialisation
        int[] nombres = new int[5];  // Tableau de 5 int initialisés à 0
        String[] fruits = {"Pomme", "Banane", "Orange"};
        
        // Accès et modification
        nombres[0] = 10;
        nombres[1] = 20;
        System.out.println("Premier: " + nombres[0]);
        System.out.println("Taille: " + nombres.length);
        
        // Parcours avec for
        for (int i = 0; i < fruits.length; i++) {
            System.out.println(fruits[i]);
        }
        
        // Parcours avec for-each
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // Tableaux multidimensionnels
        int[][] matrice = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("Element [1][2]: " + matrice[1][2]); // 6
        
        // Parcours de tableau 2D
        for (int i = 0; i < matrice.length; i++) {
            for (int j = 0; j < matrice[i].length; j++) {
                System.out.print(matrice[i][j] + " ");
            }
            System.out.println();
        }
        
        // Méthodes utiles de la classe Arrays
        int[] nums = {5, 2, 8, 1, 9};
        
        Arrays.sort(nums);  // Tri
        System.out.println("Trié: " + Arrays.toString(nums));
        
        int index = Arrays.binarySearch(nums, 8);  // Recherche (tableau trié)
        System.out.println("Index de 8: " + index);
        
        int[] copie = Arrays.copyOf(nums, nums.length);  // Copie
        
        Arrays.fill(nombres, 42);  // Remplit tout le tableau avec 42
        
        boolean egaux = Arrays.equals(nums, copie);  // Comparaison
        System.out.println("Égaux: " + egaux);
        
        // Tableau de tableaux (tailles différentes)
        int[][] jagged = new int[3][];
        jagged[0] = new int[]{1, 2};
        jagged[1] = new int[]{3, 4, 5};
        jagged[2] = new int[]{6};
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Utilisez <code class="bg-gray-800 px-1 rounded">Arrays.toString()</code> pour afficher facilement un tableau</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Taille fixe définie à la création",
          "Indexés à partir de 0",
          "length est une propriété, pas une méthode",
          "Classe Arrays pour opérations utiles"
        ],
        quiz: [
          {
            question: 'Quel est l\'index du premier élément d\'un tableau ?',
            options: ['1', '0', '-1', 'Dépend du type'],
            correct: 1,
            explanation: 'Les tableaux en Java sont indexés à partir de 0.'
          },
          {
            question: 'Comment obtenir la taille d\'un tableau ?',
            options: ['array.size()', 'array.length', 'array.length()', 'array.size'],
            correct: 1,
            explanation: 'length est une propriété publique (pas une méthode) des tableaux.'
          },
          {
            question: 'Peut-on changer la taille d\'un tableau après sa création ?',
            options: ['Oui, avec resize()', 'Oui, avec setSize()', 'Non, la taille est fixe', 'Seulement pour augmenter'],
            correct: 2,
            explanation: 'La taille d\'un tableau est fixe. Pour une taille dynamique, utilisez ArrayList.'
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
        title: "Classes et Objets",
        description: "Créer des classes, instancier des objets et comprendre l'encapsulation",
        readTime: "25 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🎯",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🎯 Classes et Objets en Java</h3>
            <p class="text-gray-700 leading-relaxed">
              Java est un langage orienté objet. Les classes sont des modèles pour créer des objets.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Classe</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>public class Voiture {
    // Attributs (propriétés)
    private String marque;
    private int vitesse;
    
    // Méthodes
    public void accelerer() {
        vitesse++;
    }
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Modèle/Blueprint</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Objet</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>// Instanciation
Voiture maVoiture = new Voiture();

// Utilisation
maVoiture.accelerer();</code></pre>
                <p class="text-sm text-gray-600 mt-2">Instance concrète</p>
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
                    <strong class="font-bold">Encapsulation :</strong> Les attributs doivent être <code>private</code> et accessibles via des getters/setters.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Classe complète avec encapsulation</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple8')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple8">public class Personne {
    // Attributs privés (encapsulation)
    private String nom;
    private int age;
    private String email;
    
    // Constructeur par défaut
    public Personne() {
        this.nom = "Inconnu";
        this.age = 0;
    }
    
    // Constructeur avec paramètres
    public Personne(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }
    
    // Constructeur complet
    public Personne(String nom, int age, String email) {
        this.nom = nom;
        this.age = age;
        this.email = email;
    }
    
    // Getters
    public String getNom() {
        return nom;
    }
    
    public int getAge() {
        return age;
    }
    
    public String getEmail() {
        return email;
    }
    
    // Setters avec validation
    public void setNom(String nom) {
        if (nom != null && !nom.isEmpty()) {
            this.nom = nom;
        }
    }
    
    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        }
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    // Méthodes métier
    public void sePresenter() {
        System.out.println("Bonjour, je m'appelle " + nom + 
                          " et j'ai " + age + " ans.");
    }
    
    public boolean estMajeur() {
        return age >= 18;
    }
    
    // Méthode toString (pour affichage)
    @Override
    public String toString() {
        return "Personne{nom='" + nom + "', age=" + age + 
               ", email='" + email + "'}";
    }
}

// Utilisation
public class Main {
    public static void main(String[] args) {
        // Création d'objets
        Personne p1 = new Personne();
        Personne p2 = new Personne("Alice", 25);
        Personne p3 = new Personne("Bob", 30, "bob@email.com");
        
        // Utilisation des méthodes
        p2.sePresenter();
        System.out.println("Majeur? " + p2.estMajeur());
        
        // Utilisation des setters
        p1.setNom("Charlie");
        p1.setAge(20);
        
        // Utilisation des getters
        System.out.println("Nom: " + p1.getNom());
        System.out.println("Age: " + p1.getAge());
        
        // toString()
        System.out.println(p3);
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Le mot-clé <code class="bg-gray-800 px-1 rounded">this</code> fait référence à l'instance courante</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Classe = modèle, Objet = instance",
          "Encapsulation avec private/public",
          "Constructeurs pour initialisation",
          "Getters/Setters pour accès contrôlé"
        ],
        quiz: [
          {
            question: 'Quel est le rôle d\'un constructeur ?',
            options: ['Détruire un objet', 'Initialiser un nouvel objet', 'Copier un objet', 'Afficher un objet'],
            correct: 1,
            explanation: 'Un constructeur initialise un nouvel objet lors de sa création avec le mot-clé new.'
          },
          {
            question: 'Pourquoi déclarer les attributs en private ?',
            options: ['Pour la performance', 'Pour l\'encapsulation et le contrôle d\'accès', 'C\'est obligatoire', 'Pour économiser de la mémoire'],
            correct: 1,
            explanation: 'Les attributs private permettent l\'encapsulation : contrôler l\'accès et valider les données via getters/setters.'
          },
          {
            question: 'Que fait le mot-clé this ?',
            options: ['Référence la classe parent', 'Référence l\'instance courante', 'Crée un nouvel objet', 'Détruit l\'objet'],
            correct: 1,
            explanation: 'this référence l\'instance courante de la classe, utile pour distinguer attributs et paramètres.'
          }
        ]
      },
      {
        id: "2.2",
        title: "Constructeurs",
        description: "Constructeurs par défaut, paramétrés et surcharge",
        readTime: "15 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🏗️",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🏗️ Les Constructeurs en Java</h3>
            <p class="text-gray-700 leading-relaxed">
              Les constructeurs sont des méthodes spéciales appelées lors de la création d'un objet avec <code>new</code>.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Par défaut</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>public Classe() {
    // Initialisation
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Sans paramètres</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Paramétré</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>public Classe(String nom) {
    this.nom = nom;
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Avec paramètres</p>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Surcharge</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>public Classe() { }
public Classe(String nom) { }
public Classe(String nom, int age) { }</code></pre>
                <p class="text-sm text-gray-600 mt-2">Plusieurs constructeurs</p>
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
                    <strong class="font-bold">Important :</strong> Si vous définissez un constructeur paramétré, le constructeur par défaut n'est plus créé automatiquement !
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Surcharge de constructeurs</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple9')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple9">public class Produit {
    private String nom;
    private double prix;
    private int quantite;
    
    // Constructeur par défaut
    public Produit() {
        this.nom = "Sans nom";
        this.prix = 0.0;
        this.quantite = 0;
    }
    
    // Constructeur avec nom seulement
    public Produit(String nom) {
        this.nom = nom;
        this.prix = 0.0;
        this.quantite = 0;
    }
    
    // Constructeur avec nom et prix
    public Produit(String nom, double prix) {
        this.nom = nom;
        this.prix = prix;
        this.quantite = 0;
    }
    
    // Constructeur complet
    public Produit(String nom, double prix, int quantite) {
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
    }
    
    // Constructeur avec this() - appel d'un autre constructeur
    public Produit(String nom, int quantite) {
        this(nom, 0.0, quantite); // Appelle le constructeur complet
    }
    
    public void afficher() {
        System.out.println(nom + " - " + prix + "€ (Stock: " + quantite + ")");
    }
}

public class Main {
    public static void main(String[] args) {
        // Différentes façons de créer des objets
        Produit p1 = new Produit();
        Produit p2 = new Produit("Ordinateur");
        Produit p3 = new Produit("Souris", 25.99);
        Produit p4 = new Produit("Clavier", 49.99, 10);
        Produit p5 = new Produit("Écran", 5);
        
        p1.afficher();
        p2.afficher();
        p3.afficher();
        p4.afficher();
        p5.afficher();
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Utilisez <code class="bg-gray-800 px-1 rounded">this()</code> pour appeler un autre constructeur de la même classe</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Même nom que la classe, pas de type de retour",
          "Surcharge pour différentes initialisations",
          "this() pour appeler un autre constructeur",
          "Constructeur par défaut créé automatiquement si aucun constructeur défini"
        ],
        quiz: [
          {
            question: 'Quelle est la différence entre un constructeur et une méthode normale ?',
            options: ['Le constructeur n\'a pas de type de retour', 'Le constructeur est plus rapide', 'Le constructeur ne peut pas avoir de paramètres', 'Aucune différence'],
            correct: 0,
            explanation: 'Un constructeur n\'a pas de type de retour (même pas void) et porte le nom de la classe.'
          },
          {
            question: 'Que fait this() dans un constructeur ?',
            options: ['Référence l\'objet courant', 'Appelle un autre constructeur de la même classe', 'Appelle le constructeur parent', 'Détruit l\'objet'],
            correct: 1,
            explanation: 'this() appelle un autre constructeur de la même classe. Il doit être la première instruction.'
          },
          {
            question: 'Que se passe-t-il si vous définissez un constructeur paramétré sans constructeur par défaut ?',
            options: ['Erreur de compilation', 'Le constructeur par défaut est créé automatiquement', 'Le constructeur par défaut n\'existe plus', 'Le programme ne compile pas'],
            correct: 2,
            explanation: 'Si vous définissez un constructeur, le constructeur par défaut n\'est plus créé automatiquement.'
          }
        ]
      },
      {
        id: "2.3",
        title: "Méthodes",
        description: "Méthodes d'instance, statiques, surcharge et passage de paramètres",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🔧",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🔧 Les Méthodes en Java</h3>
            <p class="text-gray-700 leading-relaxed">
              Les méthodes définissent le comportement des objets. Elles peuvent être d'instance ou statiques.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Méthode d'instance</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>public void accelerer() {
    this.vitesse += 10;
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Agit sur une instance</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Méthode statique</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>public static int compter() {
    return compteur;
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Appartient à la classe</p>
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
                    <strong class="font-bold">Astuce :</strong> Les méthodes statiques ne peuvent pas accéder aux attributs d'instance (non-static).
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Méthodes variées</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple10')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple10">public class Calculatrice {
    private static int nombreCalculs = 0;
    
    // Méthode d'instance sans retour
    public void afficherBienvenue() {
        System.out.println("Bienvenue dans la calculatrice !");
    }
    
    // Méthode d'instance avec retour
    public int additionner(int a, int b) {
        nombreCalculs++;
        return a + b;
    }
    
    // Surcharge de méthode (même nom, paramètres différents)
    public double additionner(double a, double b) {
        nombreCalculs++;
        return a + b;
    }
    
    public int additionner(int a, int b, int c) {
        nombreCalculs++;
        return a + b + c;
    }
    
    // Méthode avec varargs (nombre variable d'arguments)
    public int additionnerTous(int... nombres) {
        nombreCalculs++;
        int somme = 0;
        for (int n : nombres) {
            somme += n;
        }
        return somme;
    }
    
    // Méthode statique
    public static int getNombreCalculs() {
        return nombreCalculs;
    }
    
    // Méthode statique utilitaire
    public static double puissance(double base, int exposant) {
        double resultat = 1;
        for (int i = 0; i < exposant; i++) {
            resultat *= base;
        }
        return resultat;
    }
    
    // Méthode privée (helper)
    private boolean estValide(int nombre) {
        return nombre >= 0;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculatrice calc = new Calculatrice();
        
        // Méthodes d'instance
        calc.afficherBienvenue();
        
        int somme1 = calc.additionner(5, 3);        // 8
        double somme2 = calc.additionner(5.5, 3.2); // 8.7
        int somme3 = calc.additionner(1, 2, 3);     // 6
        int somme4 = calc.additionnerTous(1, 2, 3, 4, 5); // 15
        
        System.out.println("Somme1: " + somme1);
        System.out.println("Somme2: " + somme2);
        
        // Méthode statique (appelée sur la classe)
        System.out.println("Nombre de calculs: " + Calculatrice.getNombreCalculs());
        
        double puissance = Calculatrice.puissance(2, 3); // 8.0
        System.out.println("2^3 = " + puissance);
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Les varargs <code class="bg-gray-800 px-1 rounded">int...</code> permettent de passer un nombre variable d'arguments</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Méthodes d'instance vs statiques",
          "Surcharge de méthodes (overloading)",
          "Varargs pour nombre variable d'arguments",
          "Passage par valeur en Java"
        ],
        quiz: [
          {
            question: 'Comment appelle-t-on une méthode statique ?',
            options: ['objet.methode()', 'Classe.methode()', 'static.methode()', 'new Classe().methode()'],
            correct: 1,
            explanation: 'Les méthodes statiques s\'appellent sur la classe elle-même : Classe.methode().'
          },
          {
            question: 'Qu\'est-ce que la surcharge de méthode ?',
            options: ['Utiliser trop de méthodes', 'Définir plusieurs méthodes avec le même nom mais des paramètres différents', 'Redéfinir une méthode héritée', 'Appeler une méthode plusieurs fois'],
            correct: 1,
            explanation: 'La surcharge permet d\'avoir plusieurs méthodes avec le même nom mais des signatures différentes.'
          },
          {
            question: 'Une méthode statique peut-elle accéder aux attributs d\'instance ?',
            options: ['Oui, toujours', 'Non, jamais', 'Seulement si public', 'Seulement avec this'],
            correct: 1,
            explanation: 'Les méthodes statiques n\'ont pas accès aux attributs d\'instance car elles ne sont pas liées à un objet.'
          }
        ]
      },
      {
        id: "2.4",
        title: "Héritage",
        description: "Extends, super, redéfinition et hiérarchie de classes",
        readTime: "22 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🌳",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🌳 L'Héritage en Java</h3>
            <p class="text-gray-700 leading-relaxed">
              L'héritage permet à une classe d'hériter des attributs et méthodes d'une autre classe.
            </p>
            
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 class="font-bold text-blue-700 mb-3">Hiérarchie de classes</h4>
              <div class="text-center">
                <div class="inline-block bg-white p-4 rounded-lg border border-gray-300">
                  <div class="font-bold text-gray-800 mb-2">Animal (classe parent)</div>
                  <div class="text-gray-600 mb-1">↓</div>
                  <div class="flex justify-center gap-8">
                    <div class="text-center">
                      <div class="font-bold text-gray-800">Chien</div>
                      <div class="text-sm text-gray-600">(classe enfant)</div>
                    </div>
                    <div class="text-center">
                      <div class="font-bold text-gray-800">Chat</div>
                      <div class="text-sm text-gray-600">(classe enfant)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Classe parent</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>public class Animal {
    protected String nom;
    
    public void manger() {
        // code
    }
}</code></pre>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Classe enfant</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>public class Chien extends Animal {
    public void aboyer() {
        // code spécifique
    }
}</code></pre>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1 a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">Important :</strong> Java ne supporte que l'héritage simple (une seule classe parent), mais multiple via les interfaces.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Héritage complet</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple11')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple11">// Classe parent (superclasse)
public class Animal {
    protected String nom;
    protected int age;
    
    public Animal(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }
    
    public void manger() {
        System.out.println(nom + " mange.");
    }
    
    public void dormir() {
        System.out.println(nom + " dort.");
    }
    
    public void faireDuBruit() {
        System.out.println(nom + " fait du bruit.");
    }
}

// Classe enfant (sous-classe)
public class Chien extends Animal {
    private String race;
    
    public Chien(String nom, int age, String race) {
        super(nom, age); // Appel du constructeur parent
        this.race = race;
    }
    
    // Méthode spécifique au chien
    public void aboyer() {
        System.out.println(nom + " aboie : Woof!");
    }
    
    // Redéfinition (Override) d'une méthode parent
    @Override
    public void faireDuBruit() {
        System.out.println(nom + " aboie fort !");
    }
    
    // Utilisation de super pour appeler la méthode parent
    public void faireDuBruitParent() {
        super.faireDuBruit();
    }
}

// Autre classe enfant
public class Chat extends Animal {
    private boolean estDomestique;
    
    public Chat(String nom, int age, boolean estDomestique) {
        super(nom, age);
        this.estDomestique = estDomestique;
    }
    
    public void miauler() {
        System.out.println(nom + " miaule : Miaou!");
    }
    
    @Override
    public void faireDuBruit() {
        System.out.println(nom + " miaule doucement.");
    }
}

// Utilisation
public class Main {
    public static void main(String[] args) {
        // Création d'objets
        Chien chien = new Chien("Rex", 3, "Labrador");
        Chat chat = new Chat("Mimi", 2, true);
        
        // Méthodes héritées
        chien.manger();  // "Rex mange."
        chien.dormir();  // "Rex dort."
        
        // Méthodes spécifiques
        chien.aboyer();  // "Rex aboie : Woof!"
        chat.miauler();  // "Mimi miaule : Miaou!"
        
        // Méthodes redéfinies
        chien.faireDuBruit(); // "Rex aboie fort !"
        chat.faireDuBruit();  // "Mimi miaule doucement."
        
        // Polymorphisme
        Animal animal1 = new Chien("Buddy", 5, "Berger");
        Animal animal2 = new Chat("Felix", 1, true);
        
        animal1.faireDuBruit(); // "Buddy aboie fort !"
        animal2.faireDuBruit(); // "Felix miaule doucement."
        
        // Impossible : animal1.aboyer(); (méthode pas dans Animal)
        // Casting nécessaire :
        if (animal1 instanceof Chien) {
            ((Chien) animal1).aboyer();
        }
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Utilisez <code class="bg-gray-800 px-1 rounded">@Override</code> pour indiquer qu'une méthode redéfinit une méthode parent</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "extends pour hériter d'une classe",
          "super() pour appeler le constructeur parent",
          "@Override pour redéfinir une méthode",
          "protected pour accès dans les sous-classes"
        ],
        quiz: [
          {
            question: 'Quel mot-clé utilise-t-on pour hériter d\'une classe ?',
            options: ['inherits', 'extends', 'implements', 'derive'],
            correct: 1,
            explanation: 'Le mot-clé extends est utilisé pour créer une relation d\'héritage entre classes.'
          },
          {
            question: 'Que fait super() dans un constructeur ?',
            options: ['Crée un super objet', 'Appelle le constructeur de la classe parent', 'Supprime l\'héritage', 'Rend la classe abstraite'],
            correct: 1,
            explanation: 'super() appelle le constructeur de la classe parent et doit être la première instruction.'
          },
          {
            question: 'Combien de classes peut hériter une classe en Java ?',
            options: ['Autant qu\'on veut', 'Une seule', 'Deux maximum', 'Aucune'],
            correct: 1,
            explanation: 'Java ne supporte que l\'héritage simple : une classe ne peut hériter que d\'une seule classe parent.'
          }
        ]
      },
      {
        id: "2.5",
        title: "Polymorphisme",
        description: "Polymorphisme, casting et instanceof",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🎭",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🎭 Le Polymorphisme en Java</h3>
            <p class="text-gray-700 leading-relaxed">
              Le polymorphisme permet à un objet de prendre plusieurs formes. Une référence parent peut pointer vers un objet enfant.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Polymorphisme</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>Animal animal = new Chien();
animal.faireDuBruit(); 
// Appelle la version de Chien</code></pre>
                <p class="text-sm text-gray-600 mt-2">Liaison dynamique</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Casting</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>if (animal instanceof Chien) {
    Chien chien = (Chien) animal;
    chien.aboyer();
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Conversion de type</p>
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
                    <strong class="font-bold">Important :</strong> Le casting vers un type incompatible provoque une <code>ClassCastException</code> à l'exécution.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Polymorphisme et casting</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple12')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple12">class Forme {
    public void dessiner() {
        System.out.println("Dessiner une forme générique");
    }
    
    public double aire() {
        return 0;
    }
}

class Cercle extends Forme {
    private double rayon;
    
    public Cercle(double rayon) {
        this.rayon = rayon;
    }
    
    @Override
    public void dessiner() {
        System.out.println("Dessiner un cercle de rayon " + rayon);
    }
    
    @Override
    public double aire() {
        return Math.PI * rayon * rayon;
    }
    
    public void calculerCirconference() {
        System.out.println("Circonférence: " + (2 * Math.PI * rayon));
    }
}

class Rectangle extends Forme {
    private double largeur, hauteur;
    
    public Rectangle(double largeur, double hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    
    @Override
    public void dessiner() {
        System.out.println("Dessiner un rectangle " + largeur + "x" + hauteur);
    }
    
    @Override
    public double aire() {
        return largeur * hauteur;
    }
}

public class Main {
    public static void main(String[] args) {
        // Polymorphisme
        Forme forme1 = new Cercle(5);
        Forme forme2 = new Rectangle(4, 6);
        
        // Liaison dynamique
        forme1.dessiner(); // "Dessiner un cercle de rayon 5"
        forme2.dessiner(); // "Dessiner un rectangle 4x6"
        
        // Tableau polymorphique
        Forme[] formes = new Forme[3];
        formes[0] = new Cercle(3);
        formes[1] = new Rectangle(2, 4);
        formes[2] = new Cercle(7);
        
        double aireTotale = 0;
        for (Forme forme : formes) {
            forme.dessiner();
            aireTotale += forme.aire();
        }
        System.out.println("Aire totale: " + aireTotale);
        
        // Casting
        Forme f = new Cercle(10);
        
        // Casting sûr avec instanceof
        if (f instanceof Cercle) {
            Cercle c = (Cercle) f;
            c.calculerCirconference();
        }
        
        // Casting risqué (peut provoquer ClassCastException)
        try {
            Rectangle r = (Rectangle) f; // Échouera
        } catch (ClassCastException e) {
            System.out.println("Erreur de casting: " + e.getMessage());
        }
        
        // Méthode utilisant le polymorphisme
        afficherInfos(forme1);
        afficherInfos(forme2);
    }
    
    public static void afficherInfos(Forme forme) {
        System.out.println("Type: " + forme.getClass().getSimpleName());
        System.out.println("Aire: " + forme.aire());
        forme.dessiner();
        System.out.println();
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Utilisez <code class="bg-gray-800 px-1 rounded">instanceof</code> avant de caster pour éviter les ClassCastException</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Référence parent peut pointer vers objet enfant",
          "Liaison dynamique (dynamic binding)",
          "instanceof pour vérifier le type avant casting",
          "Casting pour accéder aux méthodes spécifiques"
        ],
        quiz: [
          {
            question: 'Que signifie "liaison dynamique" en Java ?',
            options: ['Le compilateur décide quelle méthode appeler', 'La JVM décide à l\'exécution quelle méthode appeler', 'Les méthodes sont liées statiquement', 'Le code est optimisé dynamiquement'],
            correct: 1,
            explanation: 'La liaison dynamique signifie que la JVM décide à l\'exécution quelle version d\'une méthode surchargée appeler, en fonction du type réel de l\'objet.'
          },
          {
            question: 'Quand utilise-t-on le mot-clé instanceof ?',
            options: ['Pour créer une instance', 'Pour vérifier le type d\'un objet avant de caster', 'Pour appeler une méthode statique', 'Pour initialiser une variable'],
            correct: 1,
            explanation: 'instanceof vérifie si un objet est une instance d\'une classe spécifique, utile avant de faire un casting.'
          },
          {
            question: 'Que se passe-t-il si on caste un objet vers un type incompatible ?',
            options: ['Erreur de compilation', 'ClassCastException à l\'exécution', 'L\'objet devient null', 'Rien, le casting est ignoré'],
            correct: 1,
            explanation: 'Un casting vers un type incompatible provoque une ClassCastException à l\'exécution.'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "NIVEAU 3",
    subtitle: "Concepts Avancés et API",
    color: "purple",
    icon: "🟣",
    chapters: [
      {
        id: "3.1",
        title: "Collections Framework",
        description: "List, Set, Map et leurs implémentations",
        readTime: "30 min",
        unlocked: false,
        completed: false,
        difficulty: "avancé",
        icon: "🗃️",
        examplesCount: 5,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🗃️ Collections Framework</h3>
            <p class="text-gray-700 leading-relaxed">
              Le framework Collections fournit des classes et interfaces pour stocker et manipuler des groupes d'objets.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">List</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>List<String> list = new ArrayList<>();</code></pre>
                <p class="text-sm text-gray-600 mt-2">Ordonnée, accepte doublons</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Set</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>Set<String> set = new HashSet<>();</code></pre>
                <p class="text-sm text-gray-600 mt-2">Non ordonnée, pas de doublons</p>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Map</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>Map<String, Integer> map = new HashMap<>();</code></pre>
                <p class="text-sm text-gray-600 mt-2">Clé-valeur</p>
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
                    <strong class="font-bold">💡 Astuce :</strong> Utilisez les diamants <code>&lt;&gt;</code> (type inference) depuis Java 7 pour éviter la redondance.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Collections en action</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple13')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple13">import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {
        // List (ArrayList)
        List<String> fruits = new ArrayList<>();
        fruits.add("Pomme");
        fruits.add("Banane");
        fruits.add("Orange");
        fruits.add("Pomme"); // Doublon autorisé
        
        System.out.println("Liste: " + fruits);
        System.out.println("Taille: " + fruits.size());
        System.out.println("Élément 0: " + fruits.get(0));
        
        // Parcours
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // Set (HashSet)
        Set<String> uniqueFruits = new HashSet<>();
        uniqueFruits.add("Pomme");
        uniqueFruits.add("Banane");
        uniqueFruits.add("Orange");
        uniqueFruits.add("Pomme"); // Ignoré
        
        System.out.println("\\nSet: " + uniqueFruits);
        
        // Map (HashMap)
        Map<String, Integer> ages = new HashMap<>();
        ages.put("Alice", 25);
        ages.put("Bob", 30);
        ages.put("Charlie", 35);
        
        System.out.println("\\nMap: " + ages);
        System.out.println("Âge de Bob: " + ages.get("Bob"));
        
        // Parcours de Map
        for (Map.Entry<String, Integer> entry : ages.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
        
        // Collections utilitaires
        List<Integer> nombres = Arrays.asList(5, 2, 8, 1, 9);
        Collections.sort(nombres);
        System.out.println("\\nTrié: " + nombres);
        
        Collections.reverse(nombres);
        System.out.println("Inversé: " + nombres);
        
        int max = Collections.max(nombres);
        System.out.println("Max: " + max);
        
        // Stack et Queue
        Stack<String> stack = new Stack<>();
        stack.push("Premier");
        stack.push("Second");
        stack.push("Troisième");
        
        System.out.println("\\nStack - Pop: " + stack.pop());
        
        Queue<String> queue = new LinkedList<>();
        queue.offer("Premier");
        queue.offer("Second");
        queue.offer("Troisième");
        
        System.out.println("Queue - Poll: " + queue.poll());
        
        // Collections immutables (Java 9+)
        List<String> immutableList = List.of("A", "B", "C");
        Set<String> immutableSet = Set.of("A", "B", "C");
        Map<String, Integer> immutableMap = Map.of("Alice", 25, "Bob", 30);
        
        // Collections synchronisées
        List<String> syncList = Collections.synchronizedList(new ArrayList<>());
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Les collections génériques (<code>&lt;String&gt;</code>) assurent la sécurité de type à la compilation</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "List: ArrayList, LinkedList",
          "Set: HashSet, TreeSet",
          "Map: HashMap, TreeMap",
          "Collections génériques (type safety)",
          "Méthodes utilitaires dans Collections"
        ],
        quiz: [
          {
            question: 'Quelle est la principale différence entre List et Set ?',
            options: ['List est plus rapide', 'Set autorise les doublons, List non', 'List est ordonnée et autorise les doublons', 'Set ne peut contenir que des nombres'],
            correct: 2,
            explanation: 'List maintient l\'ordre d\'insertion et autorise les doublons, tandis que Set ne garantit pas l\'ordre et n\'autorise pas les doublons.'
          },
          {
            question: 'Quelle implémentation de Map est basée sur une table de hachage ?',
            options: ['TreeMap', 'HashMap', 'LinkedHashMap', 'EnumMap'],
            correct: 1,
            explanation: 'HashMap utilise une table de hachage pour stocker les paires clé-valeur.'
          },
          {
            question: 'Depuis quelle version Java peut-on créer des collections immutables avec List.of() ?',
            options: ['Java 7', 'Java 8', 'Java 9', 'Java 11'],
            correct: 2,
            explanation: 'Les méthodes factory comme List.of(), Set.of(), Map.of() ont été introduites en Java 9.'
          }
        ]
      },
      {
        id: "3.2",
        title: "Exceptions",
        description: "Gestion des erreurs avec try-catch, checked vs unchecked",
        readTime: "22 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "⚠️",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">⚠️ Gestion des Exceptions</h3>
            <p class="text-gray-700 leading-relaxed">
              Les exceptions permettent de gérer les erreurs de manière élégante sans arrêter brutalement le programme.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Checked</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>IOException
SQLException</code></pre>
                <p class="text-sm text-gray-600 mt-2">Doit être déclarée ou catchée</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Unchecked</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>NullPointerException
ArrayIndexOutOfBounds</code></pre>
                <p class="text-sm text-gray-600 mt-2">Runtime exceptions</p>
              </div>
              
              <div class="bg-red-50 p-5 rounded-xl border border-red-200">
                <h4 class="font-bold text-red-700 mb-3">Error</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>OutOfMemoryError
StackOverflowError</code></pre>
                <p class="text-sm text-gray-600 mt-2">Erreurs graves</p>
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
                    <strong class="font-bold">Bonnes pratiques :</strong> Ne catchez jamais <code>Exception</code> sans raison valable. Soyez spécifique dans la gestion des erreurs.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Gestion complète des exceptions</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple14')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple14">import java.io.*;
import java.util.Scanner;

public class ExceptionsDemo {
    
    // Méthode qui déclare une exception checked
    public static void lireFichier(String chemin) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(chemin));
        String ligne;
        while ((ligne = reader.readLine()) != null) {
            System.out.println(ligne);
        }
        reader.close();
    }
    
    public static void main(String[] args) {
        // 1. Try-catch simple
        try {
            int[] nombres = {1, 2, 3};
            System.out.println(nombres[10]); // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Erreur: Indice hors limites");
            System.out.println("Message: " + e.getMessage());
        }
        
        // 2. Multiples catch
        try {
            String str = null;
            System.out.println(str.length()); // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Erreur: Référence null");
        } catch (Exception e) {
            System.out.println("Erreur générale: " + e.getMessage());
        }
        
        // 3. Try-catch-finally
        Scanner scanner = null;
        try {
            scanner = new Scanner(new File("test.txt"));
            while (scanner.hasNext()) {
                System.out.println(scanner.nextLine());
            }
        } catch (FileNotFoundException e) {
            System.out.println("Fichier non trouvé");
        } finally {
            if (scanner != null) {
                scanner.close();
                System.out.println("Scanner fermé");
            }
        }
        
        // 4. Try-with-resources (Java 7+)
        try (BufferedReader br = new BufferedReader(new FileReader("test.txt"))) {
            String ligne;
            while ((ligne = br.readLine()) != null) {
                System.out.println(ligne);
            }
        } catch (IOException e) {
            System.out.println("Erreur IO: " + e.getMessage());
        } // Pas besoin de finally pour fermer
        
        // 5. Throw personnalisée
        try {
            int age = -5;
            if (age < 0) {
                throw new IllegalArgumentException("Âge ne peut être négatif");
            }
        } catch (IllegalArgumentException e) {
            System.out.println("Erreur: " + e.getMessage());
        }
        
        // 6. Exception checked
        try {
            lireFichier("fichier.txt");
        } catch (IOException e) {
            System.out.println("Erreur de lecture: " + e.getMessage());
        }
        
        // 7. Stack trace
        try {
            int resultat = diviser(10, 0);
        } catch (ArithmeticException e) {
            System.out.println("Stack trace:");
            e.printStackTrace();
        }
    }
    
    public static int diviser(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Division par zéro");
        }
        return a / b;
    }
    
    // 8. Exception personnalisée
    static class SoldeInsuffisantException extends Exception {
        public SoldeInsuffisantException(String message) {
            super(message);
        }
    }
    
    static class CompteBancaire {
        private double solde;
        
        public void retirer(double montant) throws SoldeInsuffisantException {
            if (montant > solde) {
                throw new SoldeInsuffisantException("Solde insuffisant: " + solde);
            }
            solde -= montant;
        }
    }
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Try-with-resources ferme automatiquement les ressources implémentant AutoCloseable</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "try-catch-finally pour gérer les exceptions",
          "Checked vs Unchecked exceptions",
          "Try-with-resources (Java 7+)",
          "Créer ses propres exceptions"
        ],
        quiz: [
          {
            question: 'Quelle est la différence entre une exception checked et unchecked ?',
            options: ['Aucune différence', 'Les checked doivent être catchées ou déclarées, pas les unchecked', 'Les unchecked sont plus graves', 'Les checked viennent toujours de l\'utilisateur'],
            correct: 1,
            explanation: 'Les exceptions checked doivent être catchées avec try-catch ou déclarées avec throws, tandis que les unchecked (RuntimeException) non.'
          },
          {
            question: 'Que fait le bloc finally ?',
            options: ['S\'exécute seulement en cas d\'erreur', 'S\'exécute toujours, même après return', 'S\'exécute seulement si pas d\'erreur', 'N\'est plus utilisé en Java moderne'],
            correct: 1,
            explanation: 'Le bloc finally s\'exécute toujours, même s\'il y a un return dans le try ou catch.'
          },
          {
            question: 'Depuis quelle version Java existe try-with-resources ?',
            options: ['Java 5', 'Java 7', 'Java 8', 'Java 11'],
            correct: 1,
            explanation: 'Try-with-resources a été introduit en Java 7 pour la gestion automatique des ressources.'
          }
        ]
      }
    ]
  }
];

export default COURSE_LEVELS;