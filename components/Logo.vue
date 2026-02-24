<template>
  <div class="logo-wrap">
    <svg :width="iconSize" :height="iconSize" viewBox="0 0 48 48" fill="none">
      <path d="M18 44C16 38 14 32 13 28C11 22 10 16 12 10C14 6 16 4 14 2" stroke="#F2A93B" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M30 44C32 38 34 32 35 28C37 22 38 16 36 10C34 6 32 4 34 2" stroke="#F2A93B" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="18" y1="44" x2="30" y2="44" stroke="#F2A93B" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M13.5 12H34.5" stroke="#F2A93B" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="20" y1="16" x2="20" y2="20" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="20" y1="23" x2="20" y2="30" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="20" y1="33" x2="20" y2="36" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="24" y1="14" x2="24" y2="22" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="24" y1="25" x2="24" y2="32" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="24" y1="35" x2="24" y2="42" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="28" y1="16" x2="28" y2="24" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="28" y1="27" x2="28" y2="34" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="28" y1="37" x2="28" y2="40" stroke="#F2A93B" stroke-width="1.1" stroke-linecap="round"/>
    </svg>
    <span v-if="showText" class="logo-text" :style="{ fontSize: textSize }">
      Ly<span class="logo-accent">remember</span>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: { type: String, default: 'md' }, // 'sm' | 'md'
  showText: { type: Boolean, default: true },
})

const iconSize = computed(() => props.size === 'sm' ? 18 : 22)
const textSize = computed(() => props.size === 'sm' ? '18px' : '22px')
</script>

<style scoped>
.logo-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-text {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  color: #F5F0EB;
  line-height: 1;
}
.logo-accent {
  color: #F2A93B;
}
</style>
