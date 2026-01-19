// router/middleware.js
import { apiService } from '../services/api';

export const authGuard = (to, from, next) => {
  const isAuthenticated = apiService.isAuthenticated();
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirection vers la page de login
    next('/login');
  } else if (to.meta.requiresGuest && isAuthenticated) {
    // Redirection vers la page d'accueil si déjà authentifié
    next('/');
  } else {
    next();
  }
};