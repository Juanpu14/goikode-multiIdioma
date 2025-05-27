<template>
  <header>
    <div class="container">
      <h1 class="logo"><span class="logo-bracket"></span>goikode<span class="logo-bracket">></span></h1>
      <nav>
        <router-link to="/">{{ $t('nav.home') }}</router-link>
        <router-link to="/about">{{ $t('nav.about') }}</router-link>
        <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
        <router-link to="/history">{{ $t('nav.history') }}</router-link>
        <router-link to="/rulet">{{ $t('nav.rulet') }}</router-link>
        <router-link to="/ruleta">{{ $t('nav.ruleta') }}</router-link>
        <LanguageSelector class="language-selector" />
        <button class="theme-toggle" @click="toggleTheme">
          {{ isDark ? '🌙' : '☀️' }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue'

export default {
  components: {
    LanguageSelector
  },
  data() {
    return {
      isDark: true
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      this.isDark = savedTheme === 'dark'
    } else {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    this.applyTheme()
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
      this.applyTheme()
    },
    applyTheme() {
      document.body.classList.toggle('dark-mode', this.isDark)
      document.body.classList.toggle('light-mode', !this.isDark)
    }
  }
}
</script>


<style scoped>
header {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 1rem 0;
}
header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.logo-bracket {
  color: var(--primary-color);
}

nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

nav a {
  color: var(--primary-color);
}

nav a:hover,
nav a.router-link-active {
  color: var(--link-hover-color);
}

.language-selector {
  margin-left: 1rem;
}

@media (max-width: 600px) {
  header .container {
    flex-direction: column;
    gap: 1rem;
  }
  
  nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>