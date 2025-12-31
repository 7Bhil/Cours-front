// frontend/src/services/api.js
const API_BASE_URL = 'http://localhost:8000/api';

class ApiService {
    constructor() {
        this.baseURL = API_BASE_URL;
        this.token = localStorage.getItem('token');
        this.refreshToken = localStorage.getItem('refreshToken');
    }

    // Méthodes pour gérer les tokens
    setTokens(tokens) {
        this.token = tokens.access;
        this.refreshToken = tokens.refresh;
        localStorage.setItem('token', tokens.access);
        localStorage.setItem('refreshToken', tokens.refresh);
    }

    clearTokens() {
        this.token = null;
        this.refreshToken = null;
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    }

    // Headers communs
    getHeaders(includeAuth = true) {
        const headers = {
            'Content-Type': 'application/json',
        };

        if (includeAuth && this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }

        return headers;
    }

    // Méthode fetch générique
    async fetch(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const response = await fetch(url, {
            ...options,
            headers: this.getHeaders(!options.noAuth),
        });

        // Si token expiré, essaie de le rafraîchir
        if (response.status === 401 && this.refreshToken && !options.noAuth) {
            const refreshed = await this.refreshTokens();
            if (refreshed) {
                // Réessaie la requête avec le nouveau token
                return this.fetch(endpoint, options);
            }
        }

        if (!response.ok) {
            const error = await response.json().catch(() => ({
                error: `HTTP ${response.status}: ${response.statusText}`
            }));
            throw error;
        }

        return response.json();
    }

    // Rafraîchir les tokens
    async refreshTokens() {
        try {
            const data = await this.fetch('/auth/refresh/', {
                method: 'POST',
                noAuth: true,
                body: JSON.stringify({ refresh: this.refreshToken })
            });

            if (data.success) {
                this.setTokens({ access: data.access, refresh: this.refreshToken });
                return true;
            }
        } catch (error) {
            console.error('Erreur rafraîchissement token:', error);
            this.clearTokens();
        }
        return false;
    }

    // ============ API METHODS ============

    // Inscription
    // Dans la méthode register, modifie :
async register(userData) {
    // Transforme les données pour correspondre au serializer Django
    const data = {
        username: userData.email,      // Django attend "username" (avec l'email)
        email: userData.email,         // Django attend "email"
        first_name: userData.firstName, // Django attend "first_name" (avec underscore)
        last_name: userData.lastName,   // Django attend "last_name" (avec underscore)
        password: userData.password,
        password2: userData.confirmPassword  // Django attend "password2"
    };

    console.log("📤 Données transformées pour Django:", data);

    const response = await this.fetch('/auth/register/', {
        method: 'POST',
        noAuth: true,
        body: JSON.stringify(data)
    });

    if (response.success) {
        this.setTokens(response.tokens);
    }

    return response;
}

    // Connexion
    async login(credentials) {
        const data = {
            username: credentials.email,
            password: credentials.password
        };

        const response = await this.fetch('/auth/login/', {
            method: 'POST',
            noAuth: true,
            body: JSON.stringify(data)
        });

        if (response.success) {
            this.setTokens(response.tokens);
        }

        return response;
    }

    // Déconnexion
    async logout() {
        try {
            await this.fetch('/auth/logout/', {
                method: 'POST'
            });
        } finally {
            this.clearTokens();
        }
    }

    // Profil utilisateur
    async getProfile() {
        return this.fetch('/auth/profile/');
    }

    // Test API
    async testConnection() {
        return this.fetch('/hello/', { noAuth: true });
    }

    // Prédiction ML
    async makePrediction(features, modelName = 'default') {
        return this.fetch('/predict/', {
            method: 'POST',
            body: JSON.stringify({
                features,
                model: modelName
            })
        });
    }
}

// Instance unique
export const apiService = new ApiService();