<script setup>
import NavbarV2 from './components/NavbarV2.vue'
import HeroV2 from './components/HeroV2.vue'
import ProgramsV2 from './components/ProgramsV2.vue'
import FacultyV2 from './components/FacultyV2.vue'
import PartnershipsV2 from './components/PartnershipsV2.vue'
import FooterV2 from './components/FooterV2.vue'
</script>

<template>
  <div class="v2-app-root">
    <NavbarV2 />
    <main>
      <HeroV2 />
      <ProgramsV2 />
      <FacultyV2 />
      <PartnershipsV2 />
    </main>
    <FooterV2 />
  </div>
</template>

<style scoped>
.v2-app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>
