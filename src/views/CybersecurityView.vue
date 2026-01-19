<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-2xl mb-4">
          <span class="text-4xl">🛡️</span>
        </div>
        <h1 class="text-4xl font-bold text-gray-900 mb-3">
          Parcours Cybersécurité
        </h1>
        <p class="text-lg text-gray-600">
          Maîtrisez les fondamentaux étape par étape
        </p>
      </div>

      <!-- Timeline -->
      <div class="mb-8 text-center">
        <div class="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
          <span class="font-semibold text-gray-700">Durée totale :</span>
          <span class="text-gray-900 font-bold">13-16 semaines</span>
        </div>
      </div>

      <!-- Modules -->
      <div class="space-y-4">
        <div
          v-for="(module, index) in modules"
          :key="module.id"
          :class="[
            'bg-white rounded-xl border-2 transition-all cursor-pointer shadow-sm hover:shadow-md',
            colorClasses[module.color].border,
            colorClasses[module.color].hover,
            selectedModule === module.id ? 'ring-2 ring-offset-2 ring-gray-900' : ''
          ]"
          @click="toggleModule(module.id)"
        >
          <div class="p-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div :class="[
                  'p-3 rounded-xl',
                  colorClasses[module.color].bg,
                  colorClasses[module.color].text
                ]">
                  <span class="text-3xl">{{ module.icon }}</span>
                </div>
                <div>
                  <div class="flex items-center gap-3">
                    <span class="text-sm font-bold text-gray-400">
                      MODULE {{ index + 1 }}
                    </span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-1">
                    {{ module.title }}
                  </h3>
                  <p class="text-sm text-gray-500">
                    ⏱️ {{ module.duration }}
                  </p>
                </div>
              </div>
              <svg
                :class="[
                  'w-6 h-6 text-gray-400 transition-transform',
                  selectedModule === module.id ? 'rotate-90' : ''
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div v-if="selectedModule === module.id" class="mt-6 pt-6 border-t border-gray-100">
              <h4 class="font-bold text-gray-900 mb-4">
                📚 Concepts à maîtriser :
              </h4>
              <div class="space-y-3">
                <div
                  v-for="(concept, idx) in module.concepts"
                  :key="idx"
                  class="flex items-start gap-3 bg-gray-50 p-3 rounded-lg"
                >
                  <span class="text-green-500 font-bold mt-0.5">✓</span>
                  <span class="text-gray-700">{{ concept }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Footer -->
      <div class="mt-12 bg-gray-900 rounded-2xl p-8 text-center text-white">
        <h3 class="text-2xl font-bold mb-3">
          Prêt à commencer ?
        </h3>
        <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
          Chaque module comprend des ressources PDF, des exercices pratiques et un accompagnement personnalisé.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:7bhilal.chitou7@gmail.com?subject=Démarrer le parcours Cybersécurité"
            class="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            📧 Contactez-moi par email
          </a>
          <a
            href="https://wa.me/22998874019?text=Bonjour, je veux démarrer le parcours Cybersécurité"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CybersecurityView',
  data() {
    return {
      selectedModule: null,
      modules: [
        {
          id: 1,
          icon: '💻',
          title: "Linux Avancé",
          color: "blue",
          duration: "3-4 semaines",
          concepts: [
            "Administration système approfondie",
            "Gestion des permissions et ACL",
            "Sécurisation du système (hardening)",
            "Analyse des logs et monitoring",
            "Gestion des services et processus"
          ]
        },
        {
          id: 2,
          icon: '⚡',
          title: "Bash Scripting",
          color: "green",
          duration: "2 semaines",
          concepts: [
            "Automatisation de tâches",
            "Scripts de sécurité et audit",
            "Manipulation de fichiers et logs",
            "Création d'outils personnalisés",
            "Gestion des erreurs et debugging"
          ]
        },
        {
          id: 3,
          icon: '🐍',
          title: "Python",
          color: "purple",
          duration: "3 semaines",
          concepts: [
            "Scripts d'automatisation sécurité",
            "Manipulation de données",
            "Bibliothèques de sécurité (scapy, requests)",
            "Création d'outils de pentesting",
            "Analyse et parsing de logs"
          ]
        },
        {
          id: 4,
          icon: '🌐',
          title: "Réseaux",
          color: "orange",
          duration: "3 semaines",
          concepts: [
            "Modèle OSI et TCP/IP",
            "Configuration et sécurisation réseau",
            "Firewalls et règles de filtrage",
            "VPN et segmentation",
            "Analyse de trafic et Wireshark"
          ]
        },
        {
          id: 5,
          icon: '🔐',
          title: "Cryptographie",
          color: "red",
          duration: "2-3 semaines",
          concepts: [
            "Hashing (MD5, SHA-256, bcrypt)",
            "Chiffrement symétrique (AES)",
            "Chiffrement asymétrique (RSA)",
            "Certificats SSL/TLS",
            "PKI et signature numérique"
          ]
        }
      ],
      colorClasses: {
        blue: {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-600",
          hover: "hover:border-blue-400"
        },
        purple: {
          bg: "bg-purple-50",
          border: "border-purple-200",
          text: "text-purple-600",
          hover: "hover:border-purple-400"
        },
        green: {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-600",
          hover: "hover:border-green-400"
        },
        red: {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-600",
          hover: "hover:border-red-400"
        },
        orange: {
          bg: "bg-orange-50",
          border: "border-orange-200",
          text: "text-orange-600",
          hover: "hover:border-orange-400"
        }
      }
    }
  },
  methods: {
    toggleModule(moduleId) {
      this.selectedModule = this.selectedModule === moduleId ? null : moduleId;
    }
  }
}
</script>

<style scoped>
/* Styles additionnels si nécessaire */
</style>