<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ccsLogo from '../assets/CCS-Logov-new.png'
import cpuLogo from '../assets/CPU LOGO.png'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navItems = [
  { id: 'hero', label: 'Home', icon: 'fa-house' },
  { id: 'programs', label: 'Programs', icon: 'fa-graduation-cap' },
  { id: 'faculty', label: 'Faculty & Staff', icon: 'fa-users' },
  { id: 'partnerships', label: 'Partnerships', icon: 'fa-handshake' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30

  const sections = navItems.map(item => document.getElementById(item.id))
  const scrollPos = window.scrollY + 150

  sections.forEach(sec => {
    if (sec) {
      const top = sec.offsetTop
      const height = sec.offsetHeight
      if (scrollPos >= top && scrollPos < top + height) {
        activeSection.value = sec.id
      }
    }
  })
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToSection = (id) => {
  activeSection.value = id
  closeMobileMenu()
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="navbar-v2-wrapper" :class="{ 'navbar-v2-scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-v2-pill">

        <a href="#hero" class="v2-brand" @click.prevent="scrollToSection('hero')">
          <div class="v2-logo-group">
            <img :src="cpuLogo" alt="CPU Seal" class="v2-logo" />
            <img :src="ccsLogo" alt="CCS Logo" class="v2-logo ccs" />
          </div>
          <div class="v2-brand-text">
            <span class="v2-title">COLLEGE OF COMPUTER STUDIES</span>
            <span class="v2-sub"></span>
          </div>
        </a>


        <nav class="v2-desktop-nav">
          <ul>
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="'#' + item.id"
                :class="{ active: activeSection === item.id }"
                @click.prevent="scrollToSection(item.id)"
              >
                <i :class="'fa-solid ' + item.icon"></i>
                <span>{{ item.label }}</span>
                <span v-if="activeSection === item.id" class="active-pill"></span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- CTA Action -->
        <div class="v2-header-cta">
          <a href="#programs" class="v2-cta-btn" @click.prevent="scrollToSection('programs')">
            <span>Apply Now</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <!-- Mobile Toggle -->
        <button class="v2-mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle Menu">
          <i :class="isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered'"></i>
        </button>
      </div>

      <!-- Mobile Menu Drawer -->
      <transition name="v2-drawer">
        <div v-if="isMobileMenuOpen" class="v2-mobile-drawer">
          <ul class="v2-mobile-list">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="'#' + item.id"
                :class="{ active: activeSection === item.id }"
                @click.prevent="scrollToSection(item.id)"
              >
                <i :class="'fa-solid ' + item.icon"></i>
                <span>{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.navbar-v2-wrapper {
  position: fixed;
  top: 1.25rem;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: var(--transition);
}

.navbar-v2-pill {
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.6rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: var(--transition);
}

.navbar-v2-scrolled .navbar-v2-pill {
  background: rgba(11, 19, 43, 0.92);
  border-color: rgba(6, 182, 212, 0.4);
  box-shadow: 0 0 25px rgba(6, 182, 212, 0.2);
}

.v2-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.v2-logo-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.v2-logo {
  height: 38px;
  width: auto;
  object-fit: contain;
}

.v2-brand-text {
  display: flex;
  flex-direction: column;
}

.v2-title {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 800;
  font-size: 0.85rem;
  color: #FFFFFF;
  letter-spacing: -0.01em;
  line-height: 1.1;
}

.v2-sub {
  font-size: 0.7rem;
  color: var(--cyan-bright);
  font-weight: 600;
}

.v2-desktop-nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.v2-desktop-nav a {
  position: relative;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 0.85rem;
  border-radius: 9999px;
  transition: var(--transition);
}

.v2-desktop-nav a:hover,
.v2-desktop-nav a.active {
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.08);
}

.v2-desktop-nav a.active {
  color: var(--cyan-bright);
}

.active-pill {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 3px;
  background: var(--cyan-bright);
  border-radius: 2px;
  box-shadow: 0 0 8px var(--cyan-bright);
}

.v2-header-cta {
  display: flex;
  align-items: center;
}

.v2-cta-btn {
  background: linear-gradient(135deg, var(--gold-glow) 0%, #D97706 100%);
  color: yellow;
  font-weight: 800;
  font-size: 0.82rem;
  padding: 0.55rem 1.25rem;

  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.v2-cta-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.5);
}

.v2-mobile-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.35rem;
  color: green;
  cursor: pointer;
  padding: 0.25rem;
}

@media (max-width: 991px) {
  .v2-desktop-nav,
  .v2-header-cta {
    display: none;
  }
  .v2-mobile-toggle {
    display: block;
  }
}

.v2-mobile-drawer {
  margin-top: 0.75rem;
  background: rgba(11, 19, 43, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-glow);

  padding: 1.25rem;
  box-shadow: var(--shadow-neon);
}

.v2-mobile-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.v2-mobile-list a {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-secondary);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.v2-mobile-list a.active,
.v2-mobile-list a:hover {
  background: rgba(6, 182, 212, 0.15);
  color: var(--cyan-bright);
}

.v2-drawer-enter-active,
.v2-drawer-leave-active {
  transition: all 0.3s ease;
}

.v2-drawer-enter-from,
.v2-drawer-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
