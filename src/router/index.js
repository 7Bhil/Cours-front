// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importez vos services API
import { apiService } from '../services/api';

// Importez tous vos composants
const HomeView = () => import('../views/HomeView.vue');
const LanguagesView = () => import('../views/LanguagesView.vue');
const WebView = () => import('../views/WebView.vue');
const CybersecurityView = () => import('../views/CybersecurityView.vue');
const ContactView = () => import('../views/ContactView.vue');
const TechnologyView = () => import('../views/TechnologyView.vue');
const Login = () => import('../views/user/Login.vue');
const Register = () => import('../views/user/Register.vue');
const Js = () => import('../views/lANGUAGE/JS/JavaScript.vue');
const Java = () => import('../views/lANGUAGE/Java/Java.vue');
const JavaCours = () => import('../views/lANGUAGE/Java/CoursJava.vue');
const Javatest = () => import('../views/lANGUAGE/Java/Javatest.vue');
const JSCours = () => import('../views/lANGUAGE/JS/CoursJavaScript.vue');
const Rubytest = () => import('../views/lANGUAGE/Ruby/Rubytest.vue');
const Python = () => import('../views/lANGUAGE/Python/Python.vue');
const Pythoncours = () => import('../views/lANGUAGE/Python/CoursPython.vue');
const C = () => import('../views/lANGUAGE/C/C.vue');
const Cpp = () => import('../views/lANGUAGE/C++/C++.vue');
const CppCours = () => import('../views/lANGUAGE/C++/CoursC++.vue');
const Profile = () => import('../views/Profile.vue');
const Ruby = () => import('../views/lANGUAGE/Ruby/Ruby.vue');
const NotFound = () => import('../views/NotFound.vue'); // Ajoutez ce composant

const routes = [
  // Routes publiques
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresGuest: true } // Seuls les invités peuvent accéder
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresGuest: true }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },

  // Routes protégées
  {
    path: '/langages',
    name: 'langages',
    component: LanguagesView,
    meta: { requiresAuth: true }
  },
  {
    path: '/langages/javascript',
    name: 'javascript',
    component: Js,
    meta: { requiresAuth: true }
  },
  {
    path: '/langages/java',
    name: 'java',
    component: Java,
    meta: { requiresAuth: true }
  },
  {
    path: '/langages/javascript/cours',
    name: 'CoursJavaScript',
    component: JSCours,
    meta: { requiresAuth: true }
  },
  {
    path: '/langages/python/cours',
    name: 'CoursPython',
    component: Pythoncours,
    meta: { requiresAuth: true }
  },
  {
    path: '/langages/java/cours',
    name: 'CoursJava',
    component: JavaCours,
    meta: { requiresAuth: true }
  },
  {
    path: '/langages/cpp/cours',
    name: 'CoursCpp',
    component: CppCours,
    meta: { requiresAuth: true }
  },
  {
    path: '/langages/javatest',
    name: 'javatest',
    component: Javatest,
    meta: { requiresAuth: true }
  },
  {
    path: '/langages/rubytest',
    name: 'rubytest',
    component: Rubytest,
    meta: { requiresAuth: true }
  },
  {
    path: '/langages/python',
    name: 'python',
    component: Python,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/langages/c',
    name: 'c',
    component: C,
    meta: { requiresAuth: true }
  },
  {
    path: '/langages/cpp',
    name: 'cpp',
    component: Cpp,
    meta: { requiresAuth: true }
  },
  {
    path: '/langages/ruby',
    name: 'ruby',
    component: Ruby,
    meta: { requiresAuth: true }
  },
  {
    path: '/web',
    name: 'web',
    component: WebView,
    meta: { requiresAuth: true }
  },
  {
    path: '/cybersecurity',
    name: 'cybersecurity',
    component: CybersecurityView,
    meta: { requiresAuth: true }
  },
  {
    path: '/technology',
    name: 'technology',
    component: TechnologyView,
    meta: { requiresAuth: true }
  },

  // Route 404 (catch-all) - DOIT ÊTRE LA DERNIÈRE
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

// Création du router
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Fonction de garde d'authentification
const authGuard = (to, from, next) => {
  const isAuthenticated = apiService.isAuthenticated();
  
  // Si la route nécessite une authentification ET l'utilisateur n'est pas connecté
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    // Rediriger vers la page de connexion
    next('/login');
  } 
  // Si la route est pour les invités seulement ET l'utilisateur est déjà connecté
  else if (to.matched.some(record => record.meta.requiresGuest) && isAuthenticated) {
    // Rediriger vers la page d'accueil
    next('/');
  } 
  // Sinon, continuer
  else {
    next();
  }
};

// Ajouter le guard de navigation
router.beforeEach(authGuard);

// Optionnel: Initialisation après que le router soit prêt
router.isReady().then(() => {
  console.log('Router ready');
  
  // Vérifier si l'utilisateur est authentifié au démarrage
  if (apiService.isAuthenticated()) {
    console.log('User is authenticated, fetching profile...');
    apiService.getProfile().catch(error => {
      console.warn('Could not fetch profile:', error);
    });
  }
});

export default router;