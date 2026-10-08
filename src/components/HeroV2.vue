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
  <section id="hero" class="v2-hero-section">


    <div class="container">
      <div class="v2-hero-grid">

        <div class="v2-hero-content">
          <div class="v2-badge">
            <span></span>
            CENTRAL PHILIPPINE UNIVERSITY
          </div>

          <h1 class="v2-hero-title">
            College of <br />
            <span>Computer Studies</span>
          </h1>

          <p class="v2-hero-desc">
            Inspiring digital innovation, advanced computing research, and software leadership. We train tomorrow's tech warriors for global industry impact.
          </p>

          <div class="v2-quote-card">
            <div class="quote-icon-wrap">
              <i class="fa-solid fa-shield-cat"></i>
            </div>
            <div class="quote-text">
              <span class="quote-tag">COLLEGE SLOGAN</span>
              <p>"For we are warriors and will never be broken, to infinity and beyond."</p>
            </div>
          </div>


          <div class="v2-hero-actions">
            <button class="v2-btn v2-btn-cyan" @click="scrollTo('programs')">
              <span>View Programs</span>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
            <button class="v2-btn v2-btn-glass" @click="scrollTo('faculty')">
              <span>Explore Faculty</span>
              <i class="fa-solid fa-user-astronaut"></i>
            </button>
          </div>


          <div class="v2-metrics-row">
            <div class="v2-metric">
              <span class="metric-num">1995</span>
              <span class="metric-sub">Est. Year</span>
            </div>
            <div class="v2-metric-divider"></div>
            <div class="v2-metric">
              <span class="metric-num">4</span>
              <span class="metric-sub">Degrees</span>
            </div>
            <div class="v2-metric-divider"></div>
            <div class="v2-metric">
              <span class="metric-num">17</span>
              <span class="metric-sub">Faculty/Staff</span>
            </div>
            <div class="v2-metric-divider"></div>
            <div class="v2-metric">
              <span class="metric-num">5+</span>
              <span class="metric-sub">Tech Alliances</span>
            </div>
          </div>
        </div>


        <div class="v2-hero-visual">
          <div class="v2-cyber-card">
            <div class="cyber-corner tr"></div>
            <div class="cyber-corner bl"></div>
            
            <div class="v2-logo-display">
              <img :src="ccsLogo" alt="CCS Logo" class="v2-ccs-crest" />
            </div>

            <div class="v2-tech-pills">
              <span class="tech-pill"><i class="fa-solid fa-code"></i> Software Eng.</span>
              <span class="tech-pill"><i class="fa-solid fa-brain"></i> AI & Data</span>
              <span class="tech-pill"><i class="fa-solid fa-vr-cardboard"></i> Digital Media</span>
            </div>

            <div class="v2-cpu-seal-bar">
              <img :src="cpuLogo" alt="CPU Seal" class="v2-seal-img" />
              <div class="seal-info">
                <span class="seal-motto">Scientia et Fides</span>
                <span class="seal-univ">Central Philippine University</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.v2-hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 140px;
  padding-bottom: 80px;
  overflow: hidden;
}

.v2-glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.orb-cyan {
  top: 10%;
  left: -10%;
  width: 500px;
  height: 500px;

}

.orb-gold {
  bottom: 10%;
  right: -10%;
  width: 600px;
  height: 600px;

}

.v2-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.5rem;
  align-items: center;
}

@media (max-width: 991px) {
  .v2-hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
}

.v2-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.3);
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--cyan-bright);
  letter-spacing: 0.08em;
  margin-bottom: 1.5rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--cyan-bright);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--cyan-bright);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 245, 212, 0.7); }
  70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(0, 245, 212, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 245, 212, 0); }
}

.v2-hero-title {
  font-family: 'Times New Roman', serif;
  font-size: 3.75rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  color: gold;
}

@media (max-width: 768px) {
  .v2-hero-title {
    font-size: 2.5rem;
  }
}

.v2-hero-desc {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 2rem;
  max-width: 620px;
}

@media (max-width: 991px) {
  .v2-hero-desc {
    margin-left: auto;
    margin-right: auto;
  }
}

.v2-quote-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(28, 37, 65, 0.6);
  border-left: 4px solid var(--gold-bright);
  padding: 1rem 1.25rem;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  margin-bottom: 2.25rem;
  backdrop-filter: blur(12px);
}

@media (max-width: 991px) {
  .v2-quote-card {
    justify-content: center;
    border-left: none;
    border-top: 3px solid var(--gold-bright);
    border-radius: var(--radius-sm);
  }
}

.quote-icon-wrap {
  width: 42px;
  height: 42px;
  background: rgba(245, 158, 11, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold-bright);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.quote-text {
  display: flex;
  flex-direction: column;
}

.quote-tag {
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--gold-bright);
  letter-spacing: 0.08em;
}

.quote-text p {
  font-size: 0.95rem;
  font-style: italic;
  color: #E2E8F0;
  font-weight: 500;
}

.v2-hero-actions {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 3rem;
}

@media (max-width: 991px) {
  .v2-hero-actions {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .v2-hero-actions {
    flex-direction: column;
  }
}

.v2-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0.9rem 1.85rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: var(--transition);
}

.v2-btn-cyan {
  background: linear-gradient(green);
  color: #FFFFFF;
  border: none;
  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.4);
}

.v2-btn-cyan:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(6, 182, 212, 0.6);
}

.v2-btn-glass {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-glass);
  color: #FFFFFF;
  backdrop-filter: blur(10px);
}

.v2-btn-glass:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: var(--cyan-bright);
  transform: translateY(-3px);
}

.v2-metrics-row {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  padding-top: 1.75rem;
  border-top: 1px solid var(--border-glass);
}

@media (max-width: 991px) {
  .v2-metrics-row {
    justify-content: center;
  }
}

.v2-metric {
  display: flex;
  flex-direction: column;
}

.metric-num {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--cyan-bright);
  line-height: 1;
}

.metric-sub {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
  margin-top: 4px;
}

.v2-metric-divider {
  width: 1px;
  height: 36px;
  background: var(--border-glass);
}

.v2-hero-visual {
  display: flex;
  justify-content: center;
}

.v2-cyber-card {
  position: relative;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-glow);
  border-radius: var(--radius-lg);
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transition: var(--transition);
}

.v2-cyber-card:hover {
  box-shadow: 0 0 35px rgba(6, 182, 212, 0.3);
  border-color: var(--cyan-bright);
}

.cyber-corner {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid var(--cyan-bright);
}

.cyber-corner.tr {
  top: -2px;
  right: -2px;
  border-left: none;
  border-bottom: none;
  border-radius: 0 var(--radius-lg) 0 0;
}

.cyber-corner.bl {
  bottom: -2px;
  left: -2px;
  border-right: none;
  border-top: none;
  border-radius: 0 0 0 var(--radius-lg);
}

.v2-ccs-crest {
  max-width: 200px;
  height: auto;
  filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.3));
}

.v2-tech-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.tech-pill {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-glass);
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 6px;
}

.v2-cpu-seal-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-glass);
}

.v2-seal-img {
  width: 36px;
  height: 36px;
}

.seal-info {
  display: flex;
  flex-direction: column;
}

.seal-motto {
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--gold-bright);
}

.seal-univ {
  font-size: 0.72rem;
  color: var(--text-muted);
}
</style>
