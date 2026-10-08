<script setup>
import { ref } from 'vue'
import { programs } from '../data/programsData'

const selectedProgram = ref(null)

const openModal = (prog) => {
  selectedProgram.value = prog
}

const closeModal = () => {
  selectedProgram.value = null
}
</script>

<template>
  <section id="programs" class="section v2-programs-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag"><i class="fa-solid fa-code-branch"></i> Academic Pathways</span>
        <h2 class="section-title">Programs Offered</h2>
        <p class="section-desc">
          Four specialized degree programs engineered to prepare future leaders for high-impact tech careers.
        </p>
      </div>
      <div class="v2-programs-grid">
        <div
          v-for="prog in programs"
          :key="prog.id"
          class="v2-program-card glass-card"
        >
          <div class="card-glow-bar" :style="{ background: prog.gradient }"></div>

          <div class="v2-card-top">
            <div class="v2-logo-box">
              <img :src="prog.logo" :alt="prog.title" class="v2-prog-img" />
            </div>
            <span class="v2-prog-badge" :style="{ background: prog.badgeColor }">
              {{ prog.code }}
            </span>
          </div>

          <div class="v2-card-content">
            <span class="v2-prog-tagline">{{ prog.tagline }}</span>
            <h3 class="v2-prog-title">{{ prog.title }}</h3>
            <p class="v2-prog-desc">{{ prog.description }}</p>

            <div class="v2-competencies">
              <span class="competency-title"><i class="fa-solid fa-layer-group"></i> Key Focus Areas</span>
              <ul class="competency-list">
                <li v-for="(outcome, idx) in prog.outcomes.slice(0, 3)" :key="idx">
                  <i class="fa-solid fa-angle-right bullet-icon"></i> {{ outcome }}
                </li>
              </ul>
            </div>
          </div>

          <div class="v2-card-bottom">
            <div class="v2-careers">
              <span v-for="(career, cIdx) in prog.careerPaths.slice(0, 2)" :key="cIdx" class="v2-career-tag">
                {{ career }}
              </span>
              <span v-if="prog.careerPaths.length > 2" class="v2-career-tag more">
                +{{ prog.careerPaths.length - 2 }}
              </span>
            </div>

            <button class="v2-details-btn" @click="openModal(prog)">
              <span>Explore Curriculum</span>
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <transition name="modal-fade">
      <div v-if="selectedProgram" class="v2-modal-backdrop" @click.self="closeModal">
        <div class="v2-modal-card">
          <button class="v2-modal-close" @click="closeModal">
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div class="v2-modal-header">
            <div class="v2-modal-logo-wrap">
              <img :src="selectedProgram.logo" :alt="selectedProgram.title" class="v2-modal-logo" />
            </div>
            <div>
              <span class="v2-prog-badge" :style="{ background: selectedProgram.badgeColor }">
                {{ selectedProgram.code }}
              </span>
              <h3 class="v2-modal-title">{{ selectedProgram.title }}</h3>
            </div>
          </div>

          <div class="v2-modal-body">
            <h4>Program Description</h4>
            <p>{{ selectedProgram.description }}</p>

            <h4>Core Program Learning Outcomes</h4>
            <ul class="v2-modal-outcomes">
              <li v-for="(outcome, idx) in selectedProgram.outcomes" :key="idx">
                <i class="fa-solid fa-circle-check check-cyan"></i>
                <span>{{ outcome }}</span>
              </li>
            </ul>

            <h4>Career Opportunities & Roles</h4>
            <div class="v2-modal-careers">
              <span v-for="(career, cIdx) in selectedProgram.careerPaths" :key="cIdx" class="modal-career-chip">
                <i class="fa-solid fa-briefcase"></i> {{ career }}
              </span>
            </div>
          </div>

          <div class="v2-modal-footer">
            <button class="v2-btn v2-btn-cyan" @click="closeModal">Close Curriculum</button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.v2-programs-section {
  position: relative;
}

.v2-programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 2rem;
}

@media (min-width: 1024px) {
  .v2-programs-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.v2-program-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.75rem;
  overflow: hidden;
}

.card-glow-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}

.v2-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.v2-logo-box {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-glass);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.v2-prog-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.v2-prog-badge {
  color: #FFFFFF;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 9999px;
  letter-spacing: 0.05em;
}

.v2-prog-tagline {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;

  text-transform: uppercase;
  margin-bottom: 4px;
}

.v2-prog-title {
  font-size: 1.2rem;
  color: #FFFFFF;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.v2-prog-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.55;
  margin-bottom: 1.25rem;
  display: -webkit-box;

  -webkit-box-orient: vertical;
  overflow: hidden;
}

.v2-competencies {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid var(--border-glass);
  padding: 1rem;
  border-radius: var(--radius-sm);
  margin-bottom: 1.5rem;
}

.competency-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--gold-bright);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 0.5rem;
}

.competency-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.competency-list li {
  font-size: 0.82rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 6px;
}

.bullet-icon {
  color: var(--cyan-bright);
  font-size: 0.75rem;
}

.v2-card-bottom {
  border-top: 1px solid var(--border-glass);
  padding-top: 1rem;
}

.v2-careers {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1rem;
}

.v2-career-tag {
  font-size: 0.72rem;
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-secondary);
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: 600;
}

.v2-career-tag.more {
  color: var(--gold-bright);
  background: rgba(245, 158, 11, 0.15);
}

.v2-details-btn {
  width: 100%;
  background: transparent;
  border: 1px solid var(--cyan-glow);
  color: var(--cyan-bright);
  padding: 0.7rem 1rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: var(--transition);
}

.v2-details-btn:hover {
  background: var(--cyan-glow);
  color: #FFFFFF;
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
}


.v2-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(11, 19, 43, 0.85);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.v2-modal-card {
  background: #0F172A;
  border: 1px solid var(--border-glow);
  border-radius: var(--radius-lg);
  max-width: 680px;
  width: 100%;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
  max-height: 90vh;
  overflow-y: auto;
}

.v2-modal-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  font-size: 1.1rem;
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition);
}

.v2-modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
}

.v2-modal-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.v2-modal-logo-wrap {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-sm);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v2-modal-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.v2-modal-title {
  font-size: 1.4rem;
  color: #FFFFFF;
  margin-top: 6px;
}

.v2-modal-body h4 {
  font-size: 1rem;
  color: var(--gold-bright);
  margin: 1.5rem 0 0.5rem 0;
}

.v2-modal-body p {
  color: var(--text-secondary);
  line-height: 1.65;
}

.v2-modal-outcomes {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.v2-modal-outcomes li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: var(--text-primary);
}


.v2-modal-careers {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 0.5rem;
}

.modal-career-chip {
  background: rgba(6, 182, 212, 0.12);
  padding: 6px 14px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 6px;
}

.v2-modal-footer {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
