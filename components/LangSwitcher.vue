<template>
  <div class="lang-switcher">
    <div class="lang-sep" />
    <button
      v-for="loc in locales"
      :key="loc.code"
      class="lang-btn"
      :class="{ active: locale === loc.code }"
      :aria-label="loc.name"
      @click="setLocale(loc.code)"
    >
      {{ loc.flag }}
    </button>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n()

const locales = [
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'ko', flag: '🇰🇷', name: '한국어' },
  { code: 'ja', flag: '🇯🇵', name: '日本語' },
]
</script>

<style scoped>
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 4px;
}

.lang-sep {
  width: 1px;
  height: 18px;
  background: #2A2440;
  margin-right: 4px;
}

.lang-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  padding: 4px 3px;
  border-radius: 6px;
  opacity: 0.55;
  transition: opacity 0.2s, transform 0.15s;
  display: flex;
  align-items: center;
}

.lang-btn:hover {
  opacity: 0.85;
  transform: scale(1.15);
}

.lang-btn.active {
  opacity: 1;
  transform: scale(1.1);
}
</style>
