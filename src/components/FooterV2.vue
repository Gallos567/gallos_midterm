<script setup>
import ccsLogo from '../assets/CCS-Logov-new.png'
import cpuLogo from '../assets/CPU LOGO.png'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="v2-footer">
    <div class="container">
      <div class="v2-footer-grid">

        <div class="v2-footer-brand">
          <div class="v2-footer-logos">
            <img :src="cpuLogo" alt="CPU Seal" class="v2-f-logo" />
            <img :src="ccsLogo" alt="CCS Logo" class="v2-f-logo" />
          </div>
          <h3 class="v2-f-title">College of Computer Studies</h3>
          <span class="v2-f-sub">Central Philippine University</span>
          <p class="v2-f-desc">
            Exemplary Christian Education • Professional Competence • Technological Innovation
          </p>

          <div class="v2-f-socials">
            <a href="https://ccs.cpu.edu.ph/" target="_blank" class="social-icon" aria-label="Official Website">
              <i class="fa-solid fa-globe"></i>
            </a>
            <a href="mailto:ccssec@cpu.edu.ph" class="social-icon" aria-label="Email">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="https://facebook.com" target="_blank" class="social-icon" aria-label="Facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>


        <div class="v2-footer-col">
          <h4 class="v2-f-heading">Navigation</h4>
          <ul class="v2-f-links">
            <li><a href="#hero" @click.prevent="scrollTo('hero')"><i class="fa-solid fa-chevron-right"></i> Home Portal</a></li>
            <li><a href="#programs" @click.prevent="scrollTo('programs')"><i class="fa-solid fa-chevron-right"></i> Degree Programs</a></li>
            <li><a href="#faculty" @click.prevent="scrollTo('faculty')"><i class="fa-solid fa-chevron-right"></i> Faculty & Staff</a></li>
            <li><a href="#partnerships" @click.prevent="scrollTo('partnerships')"><i class="fa-solid fa-chevron-right"></i> Alliances</a></li>
          </ul>
        </div>

        <div class="v2-footer-col">
          <h4 class="v2-f-heading">Degrees Offered</h4>
          <ul class="v2-f-links">
            <li><a href="#programs" @click.prevent="scrollTo('programs')">BS Information Technology</a></li>
            <li><a href="#programs" @click.prevent="scrollTo('programs')">BS Computer Science</a></li>
            <li><a href="#programs" @click.prevent="scrollTo('programs')">BS Digital Media & Interactive Arts</a></li>
            <li><a href="#programs" @click.prevent="scrollTo('programs')">Bachelor of Library & Info Science</a></li>
          </ul>
        </div>

        <div class="v2-footer-col">
          <h4 class="v2-f-heading">Campus Location</h4>
          <div class="v2-map-card">
            <div class="map-text">
              <i class="fa-solid fa-location-dot map-pin"></i>
              <div>
                <strong>Mary Thomas Hall</strong>
                <p>Central Philippine University, Lopez Jaena St., Jaro, Iloilo City, Philippines</p>
              </div>
            </div>
            <a href="https://maps.google.com/maps?q=Mary%20Thomas%20Hall%20Central%20Philippine%20University" target="_blank" class="v2-map-link">
              <i class="fa-solid fa-map-location-dot"></i> View on Google Maps
            </a>
          </div>
        </div>
      </div>

      <div class="v2-footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} College of Computer Studies • Central Philippine University. Developed by CPU Software Development Team.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.v2-footer {
  background: rgb(24, 48, 24);
  border-top: 1px solid var(--border-glow);
  padding-top: 5rem;
  padding-bottom: 2rem;
  position: relative;
}

.v2-footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr 1.2fr;
  gap: 2.5rem;
  margin-bottom: 4rem;
}

@media (max-width: 991px) {
  .v2-footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .v2-footer-grid {
    grid-template-columns: 1fr;
  }
}

.v2-footer-logos {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
}

.v2-f-logo {
  height: 44px;
  width: auto;
  object-fit: contain;
}

.v2-f-title {
  font-size: 1.25rem;
  color: #FFFFFF;
  margin-bottom: 2px;
}

.v2-f-sub {
  font-size: 0.8rem;
  color: var(--cyan-bright);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
}

.v2-f-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.v2-f-socials {
  display: flex;
  gap: 10px;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-glass);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.social-icon:hover {
  background: var(--cyan-glow);
  color: #FFFFFF;
  border-color: var(--cyan-bright);
  box-shadow: 0 0 12px rgba(6, 182, 212, 0.5);
}

.v2-f-heading {
  font-size: 1.1rem;
  color: #FFFFFF;
  margin-bottom: 1.25rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.v2-f-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 28px;
  height: 2px;
  background: var(--cyan-bright);
}

.v2-f-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.v2-f-links a {
  font-size: 0.88rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);
}

.v2-f-links a:hover {
  color: var(--cyan-bright);
  transform: translateX(4px);
}

.v2-map-card {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid var(--border-glass);
  padding: 1.25rem;
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.map-text {
  display: flex;
  gap: 10px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.map-pin {
  color: var(--gold-bright);
  font-size: 1.1rem;
  margin-top: 3px;
}

.map-text strong {
  color: #FFFFFF;
  display: block;
}

.v2-map-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(6, 182, 212, 0.12);
  border: 1px solid rgba(6, 182, 212, 0.3);
  color: var(--cyan-bright);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 700;
  transition: var(--transition);
}

.v2-map-link:hover {
  background: var(--cyan-glow);
  color: #FFFFFF;
}

.v2-footer-bottom {
  border-top: 1px solid var(--border-glass);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.82rem;

}
</style>
