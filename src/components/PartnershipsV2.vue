<script setup>
import { partners } from '../data/partnersData'
</script>

<template>
  <section id="partnerships" class="section v2-partners-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag"><i class="fa-solid fa-network-wired"></i> Global Ecosystem</span>
        <h2 class="section-title">Partnerships & Memberships</h2>
        <p class="section-desc">
          Fostering strategic technology alliances with world-leading corporations to deliver international certifications and career opportunities.
        </p>
      </div>

      <div class="v2-partners-grid">
        <div
          v-for="partner in partners"
          :key="partner.id"
          class="v2-partner-card glass-card"
        >
          <div class="partner-accent-line" :style="{ background: partner.accentColor }"></div>

          <div class="v2-partner-logo-wrap">
            <img :src="partner.logo" :alt="partner.name" class="v2-partner-logo" />
          </div>

          <div class="v2-partner-info">
            <span class="v2-partner-cat" :style="{ color: partner.accentColor }">{{ partner.category }}</span>
            <h3 class="v2-partner-name">{{ partner.name }}</h3>
            <p class="v2-partner-desc">{{ partner.description }}</p>

            <div class="v2-partner-tags">
              <span v-for="(tag, tIdx) in partner.tags" :key="tIdx" class="partner-tag-pill">
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.v2-partners-section {
  position: relative;
}

.v2-partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (min-width: 1024px) {
  .v2-partners-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.v2-partner-card {
  position: relative;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.partner-accent-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
}

.v2-partner-logo-wrap {
  width: 100%;
  height: 110px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-glass);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.v2-partner-logo {
  max-width: 100%;
  max-height: 85px;
  object-fit: contain;
  transition: var(--transition);
}

.v2-partner-card:hover .v2-partner-logo {
  transform: scale(1.08);
}

.v2-partner-cat {
  display: block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
}

.v2-partner-name {
  font-size: 1.25rem;
  color: #FFFFFF;
  margin-bottom: 0.75rem;
}

.v2-partner-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.v2-partner-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-top: auto;
}

.partner-tag-pill {
  font-size: 0.72rem;
  padding: 3px 10px;
  border-radius: 9999px;
  font-weight: 600;
}
</style>
