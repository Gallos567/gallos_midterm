<script setup>
import { ref, computed } from 'vue'
import { departments, faculty } from '../data/facultyData'

const activeTab = ref('all')

const filteredFaculty = computed(() => {
  if (activeTab.value === 'all') return faculty
  return faculty.filter(f => f.department === activeTab.value)
})

const dean = computed(() => faculty.find(f => f.id === 1))
</script>

<template>
  <section id="faculty" class="section v2-faculty-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag"><i class="fa-solid fa-user-tie"></i> Academic Leadership</span>
        <h2 class="section-title">Faculty and Staff</h2>
        <p class="section-desc">
          Meet the educators, department chairs, and technical staff guiding the College of Computer Studies.
        </p>
      </div>
      <div class="v2-filter-pills">
        <button
          v-for="dept in departments"
          :key="dept.id"
          class="v2-pill-btn"
          :class="{ active: activeTab === dept.id }"
          @click="activeTab = dept.id"
        >
          <span>{{ dept.name }}</span>
          <span class="pill-count">{{ dept.badge }}</span>
        </button>
      </div>
      <div class="v2-faculty-grid">
        <div
          v-for="person in filteredFaculty"
          :key="person.id"
          class="v2-faculty-card glass-card"
        >
          <div class="v2-avatar-box">
            <img :src="person.photo" :alt="person.name" class="v2-person-photo" />
            <span class="v2-dept-tag">{{ person.departmentName }}</span>
          </div>

          <div class="v2-person-details">
            <h3 class="v2-person-name">{{ person.name }}</h3>
            <span class="v2-person-pos">{{ person.position }}</span>

            <div class="v2-degree-chip">
              <i class="fa-solid fa-award"></i>
              <span>{{ person.degree }}</span>
            </div>

            <a :href="'mailto:' + person.email" class="v2-person-email">
              <i class="fa-regular fa-envelope"></i> {{ person.email }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.v2-faculty-section {
  position: relative;
}


.v2-dean-banner {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2.5rem;
  padding: 2.5rem;
  margin-bottom: 4rem;
  align-items: center;
}

@media (max-width: 991px) {
  .v2-dean-banner {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.dean-photo-col {
  position: relative;
  width: 100%;
  height: 340px;

  overflow: hidden;
}

.dean-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.dean-badge-tag {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 800;
  font-size: 0.75rem;
  padding: 4px 14px;
  border-radius: 9999px;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.dean-sub-tag {
  font-size: 0.75rem;
  font-weight: 800;

  letter-spacing: 0.1em;
}

.dean-name {
  font-size: 1.85rem;
  color: #FFFFFF;
  margin: 4px 0;
}

.dean-pos {
  font-size: 1rem;

  font-weight: 700;
  margin-bottom: 1rem;
}

.dean-degree-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--border-glass);
  padding: 6px 14px;
  font-size: 0.85rem;
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.dean-bio {
  font-size: 0.98rem;

  font-style: italic;
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

.dean-mail-btn {
  display: inline-flex;
}


.v2-filter-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3.5rem;
}

.v2-pill-btn {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-glass);
  color: var(--text-secondary);
  padding: 0.65rem 1.35rem;

  font-weight: 700;
  font-size: 0.88rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);
}

.v2-pill-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
}

.v2-pill-btn.active {
  background: var(--cyan-glow);
  color: #FFFFFF;
  border-color: var(--cyan-bright);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
}

.pill-count {
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;

}

.v2-faculty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.v2-faculty-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.v2-avatar-box {
  position: relative;
  width: 100%;
  height: 280px;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.v2-person-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: var(--transition);
}

.v2-faculty-card:hover .v2-person-photo {
  transform: scale(1.06);
}

.v2-dept-tag {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(11, 19, 43, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-glass);
  color: var(--cyan-bright);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;

}

.v2-person-details {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.v2-person-name {
  font-size: 1.15rem;
  color: #FFFFFF;
  margin-bottom: 4px;
  line-height: 1.3;
}

.v2-person-pos {
  font-size: 0.85rem;
  color: var(--cyan-bright);
  font-weight: 700;
  margin-bottom: 1rem;
}

.v2-degree-chip {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  border: 1px solid var(--border-glass);
  padding: 0.65rem 0.85rem;

  margin-bottom: 1.25rem;
  margin-top: auto;
  font-size: 0.82rem;
  color: var(--text-secondary);
}

.v2-degree-chip i {

  margin-top: 2px;
}

.v2-person-email {
  font-size: 0.82rem;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: var(--transition);
}

.v2-person-email:hover {
  color: var(--cyan-bright);
}
</style>
