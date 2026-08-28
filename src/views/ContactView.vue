<template>
  <div class="contact-page min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto space-y-12">

      <!-- Hero Header -->
      <div class="text-center space-y-4 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
          <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          Centre d'Assistance & Contact
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Parlons de vos <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">projets & questions</span>
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Une suggestion de cours, un blocage technique ou une demande de collaboration ? Envoyez-nous un message, notre équipe vous répond sous 24h.
        </p>
      </div>

      <!-- Main Layout: Contact Cards + Form -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Side: Quick Contact Channels & Advice (5 Cols) -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Email Card -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700/80 transition-all duration-300 group">
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                <svg class="w-3 h-3 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Réponse sous 24h
              </span>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Email Direct</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Pour les questions approfondies, feedbacks et partenariats.</p>

            <a 
              href="mailto:7bhilal.chitou7@gmail.com"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors duration-200 shadow-md shadow-blue-600/20"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
              7bhilal.chitou7@gmail.com
            </a>
          </div>

          <!-- WhatsApp Card -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700/80 transition-all duration-300 group">
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5"></span>
                Lun - Ven (9h-18h)
              </span>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">WhatsApp Instantané</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Idéal pour les échanges rapides et le support en direct.</p>

            <a 
              href="https://wa.me/2290198874019?text=Bonjour%20Bhil$,%20j'ai%20une%20question"
              target="_blank"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors duration-200 shadow-md shadow-emerald-600/20"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Ouvrir la discussion WhatsApp
            </a>
          </div>

          <!-- Tips Card -->
          <div class="bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-gray-800 dark:to-gray-800/60 rounded-2xl p-6 border border-indigo-100/80 dark:border-gray-700/80">
            <h4 class="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
              Conseils pour une réponse rapide
            </h4>
            <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span><strong>Précisez le cours ou techno :</strong> ex. Python, React, Django...</span>
              </li>
              <li class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span><strong>Joignez le contexte :</strong> Messages d'erreur ou extrait de code si besoin.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span><strong>Mentionnez votre niveau :</strong> Débutant, intermédiaire ou avancé.</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Right Side: Contact Form (7 Cols) -->
        <div class="lg:col-span-7">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700/80">
            <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Envoyez-nous un message</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Remplissez le formulaire ci-dessous et nous reviendrons vers vous.</p>
              </div>
              <div class="hidden sm:flex w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 items-center justify-center text-blue-600 dark:text-blue-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
              </div>
            </div>

            <!-- Banner Notification -->
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0">
              <div v-if="submitted" class="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div class="text-sm text-emerald-800 dark:text-emerald-300">
                  <p class="font-bold">Message préparé avec succès !</p>
                  <p class="mt-0.5">Votre application email s'ouvre pour envoyer votre message.</p>
                </div>
              </div>
            </transition>

            <form @submit.prevent="sendMessage" class="space-y-5">
              
              <!-- Nom & Email Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Votre Nom <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <input
                      v-model="form.name"
                      type="text"
                      id="name"
                      required
                      placeholder="Jean Dupont"
                      class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    >
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Votre Adresse Email <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <input
                      v-model="form.email"
                      type="email"
                      id="email"
                      required
                      placeholder="jean@exemple.com"
                      class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    >
                  </div>
                </div>
              </div>

              <!-- Sujet -->
              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Sujet de votre demande <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <select
                    v-model="form.subject"
                    id="subject"
                    required
                    class="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition appearance-none pr-10"
                  >
                    <option value="" disabled selected>Choisissez une catégorie...</option>
                    <option value="python">🐍 Question sur Python</option>
                    <option value="javascript">⚡ Question sur JavaScript</option>
                    <option value="web">🌐 Développement Web</option>
                    <option value="cybersecurite">🛡️ Cybersécurité / Réseaux</option>
                    <option value="suggestion">💡 Suggestion de contenu</option>
                    <option value="correction">⚠️ Signalement d'erreur / Bug</option>
                    <option value="collaboration">🤝 Partenariat & Collaboration</option>
                    <option value="autre">❓ Autre sujet</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Votre Message <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="form.message"
                  id="message"
                  rows="5"
                  required
                  placeholder="Décrivez précisément votre demande ou votre question..."
                  class="w-full p-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-y"
                ></textarea>
              </div>

              <!-- Checkbox Newsletter -->
              <div class="flex items-center gap-3">
                <input
                  v-model="form.newsletter"
                  type="checkbox"
                  id="newsletter"
                  class="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                >
                <label for="newsletter" class="text-xs text-gray-600 dark:text-gray-400 cursor-pointer select-none">
                  Je souhaite m'abonner aux mises à jour et nouvelles ressources par e-mail.
                </label>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <template v-else>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Envoyer le message
                </template>
              </button>

              <p class="text-xs text-gray-400 dark:text-gray-500 text-center mt-3">
                Vos informations personnelles sont strictement confidentielles.
              </p>

            </form>
          </div>
        </div>

      </div>

      <!-- FAQ Accordion / Cards Section -->
      <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 dark:border-gray-700/80">
        <div class="text-center max-w-xl mx-auto mb-8">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Questions Fréquemment Posées</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Trouvez immédiatement des réponses aux questions courantes.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-700/60">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 class="font-bold text-gray-900 dark:text-white text-base">Ressources 100% gratuites ?</h4>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Absolument. Tous les cours, exercices et ressources de la plateforme Bhil$ sont en accès libre et 100% gratuits.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-700/60">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
              </div>
              <h4 class="font-bold text-gray-900 dark:text-white text-base">Proposer une contribution ?</h4>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Oui ! Si vous repérez un bug ou souhaitez proposer un nouveau tutoriel, contactez-nous. Toutes les idées sont bienvenues.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-700/60">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <h4 class="font-bold text-gray-900 dark:text-white text-base">Formats des contenus</h4>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Les contenus sont actuellement sous forme de fiches interactives et cours écrits. Des contenus vidéos sont en préparation !
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      isLoading: false,
      submitted: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
      }
    }
  },
  methods: {
    sendMessage() {
      this.isLoading = true;

      const subjectText = this.getSubjectText(this.form.subject);
      const subject = `Contact Bhil$: ${subjectText} - ${this.form.name}`;
      const body = `Nom: ${this.form.name}\nEmail: ${this.form.email}\nSujet: ${subjectText}\nNewsletter: ${this.form.newsletter ? 'Oui' : 'Non'}\n\nMessage:\n${this.form.message}`;

      setTimeout(() => {
        window.location.href = `mailto:7bhilal.chitou7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        this.isLoading = false;
        this.submitted = true;

        this.form = {
          name: '',
          email: '',
          subject: '',
          message: '',
          newsletter: false
        };

        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      }, 400);
    },
    getSubjectText(value) {
      const subjects = {
        'python': 'Question sur Python',
        'javascript': 'Question sur JavaScript',
        'web': 'Parcours Web',
        'cybersecurite': 'Cybersécurité/Réseaux',
        'suggestion': 'Suggestion de contenu',
        'correction': 'Correction/Erreur',
        'collaboration': 'Collaboration',
        'autre': 'Autre sujet'
      };
      return subjects[value] || 'Autre sujet';
    }
  }
}
</script>

<style scoped>
/* Transiciones suaves */
.contact-page {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>