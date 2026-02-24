<template>
  <div class="phone-shell">
    <!-- Status bar notch -->
    <div class="notch-bar">
      <div class="notch" />
    </div>

    <!-- Scrollable content -->
    <div class="phone-scroll">
      <!-- Header -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
        <div>
          <h1 style="font-family:'Cormorant Garamond',serif; font-size:28px; font-weight:400; color:#F5F0EB; margin:0;">
            Mes <span style="color:#F2A93B;">Lyrics</span>
          </h1>
          <p style="color:#8A82A0; font-size:12px; margin:3px 0 0; font-family:'DM Sans',sans-serif;">5 chansons · 4 langues</p>
        </div>
        <div style="width:36px; height:36px; border-radius:12px; background:#1A1528; border:1px solid #2A2440; display:flex; align-items:center; justify-content:center;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8B0D0" stroke-width="2" stroke-linecap="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
      </div>

      <!-- Language filter pills -->
      <div class="lang-scroll">
        <div
          v-for="f in langFilters"
          :key="f.label"
          class="lang-pill"
          :class="{ active: f.active }"
        >{{ f.label }}</div>
      </div>

      <!-- Song list -->
      <div
        v-for="song in songs"
        :key="song.id"
        class="song-card"
      >
        <div class="song-cover">{{ song.cover }}</div>
        <div style="flex:1; min-width:0;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:2px;">
            <span style="color:#F5F0EB; font-size:14px; font-weight:600; font-family:'DM Sans',sans-serif; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ song.title }}</span>
            <span style="font-size:11px; color:#8A82A0; background:#131022; padding:1px 6px; border-radius:4px; font-family:'DM Sans',sans-serif; flex-shrink:0;">{{ langFlags[song.lang] }}</span>
          </div>
          <div style="color:#B8B0D0; font-size:12px; font-family:'DM Sans',sans-serif; margin-bottom:6px;">{{ song.artist }}</div>
          <div style="display:flex; align-items:center; gap:8px;">
            <div style="flex:1; height:3px; background:#2A2440; border-radius:2px;">
              <div :style="{ width: song.progress + '%' }" style="height:100%; background:#F2A93B; border-radius:2px;" />
            </div>
            <span style="color:#8A82A0; font-size:10px; font-family:'DM Sans',sans-serif;">{{ song.progress }}%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom navigation -->
    <div class="bottom-nav">
      <div class="tab">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2A93B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 4C4 3 7 3 9 4C11 5 12 5 12 5V21C12 21 11 20 9 19.5C7 19 4 19 2 20V4Z"/>
          <path d="M22 4C20 3 17 3 15 4C13 5 12 5 12 5V21C12 21 13 20 15 19.5C17 19 20 19 22 20V4Z"/>
          <line x1="5" y1="8" x2="9" y2="8" opacity="0.5"/>
          <line x1="5" y1="11" x2="9" y2="11" opacity="0.5"/>
          <line x1="15" y1="8" x2="19" y2="8" opacity="0.5"/>
          <line x1="15" y1="11" x2="19" y2="11" opacity="0.5"/>
        </svg>
        <span class="tab-label active">Mes Lyrics</span>
      </div>

      <div class="fab">
        <span style="font-size:26px; color:#0D0B1A; font-weight:300; line-height:1;">+</span>
      </div>

      <div class="tab">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8A82A0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4H9C9 4 9 2 10.5 2C12 2 12 4 12 4H18V9C18 9 20 9 20 10.5C20 12 18 12 18 12V18H12C12 18 12 20 10.5 20C9 20 9 18 9 18H4V12C4 12 2 12 2 10.5C2 9 4 9 4 9V4Z"/>
        </svg>
        <span class="tab-label">Mémoriser</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const langFlags = { EN: '🇬🇧', FR: '🇫🇷', DE: '🇩🇪', ES: '🇪🇸', IT: '🇮🇹' }

const langFilters = [
  { label: 'Tout', active: true },
  { label: '🇬🇧 EN', active: false },
  { label: '🇫🇷 FR', active: false },
  { label: '🇩🇪 DE', active: false },
  { label: '🇪🇸 ES', active: false },
]

const songs = [
  { id: 1, title: 'Something About Us',    artist: 'Daft Punk',        lang: 'EN', progress: 72, cover: '🌙' },
  { id: 2, title: 'Papaoutai',             artist: 'Stromae',          lang: 'FR', progress: 45, cover: '🎭' },
  { id: 3, title: '99 Luftballons',        artist: 'Nena',             lang: 'DE', progress: 18, cover: '🎈' },
  { id: 4, title: 'La Tortura',            artist: 'Shakira',          lang: 'ES', progress: 60, cover: '🔥' },
  { id: 5, title: 'Nuovo Cinema Paradiso', artist: 'Ennio Morricone',  lang: 'IT', progress: 30, cover: '🎬' },
]
</script>

<style scoped>
.phone-shell {
  width: 375px;
  height: 700px;
  background: #0D0B1A;
  border-radius: 40px;
  border: 3px solid #2A2440;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 60px rgba(123,111,160,0.08), 0 24px 48px rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.notch-bar {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.notch {
  width: 120px;
  height: 28px;
  background: #0D0B1A;
  border-radius: 0 0 20px 20px;
  border: 1px solid #2A2440;
  border-top: none;
}

/* Hide scrollbar but keep scrollability */
.phone-scroll {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 20px 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.phone-scroll::-webkit-scrollbar { display: none; }

.lang-scroll {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  overflow-x: auto;
  padding-bottom: 2px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.lang-scroll::-webkit-scrollbar { display: none; }

.lang-pill {
  background: #1A1528;
  color: #B8B0D0;
  border-radius: 20px;
  padding: 7px 14px;
  font-size: 13px;
  white-space: nowrap;
  font-family: 'DM Sans', sans-serif;
  border: 1px solid #2A2440;
  flex-shrink: 0;
}
.lang-pill.active {
  background: #F2A93B;
  color: #0D0B1A;
  font-weight: 600;
  border-color: #F2A93B;
}

.song-card {
  background: #1A1528;
  border-radius: 16px;
  padding: 14px;
  margin-bottom: 10px;
  display: flex;
  gap: 14px;
  align-items: center;
  border: 1px solid #2A2440;
}
.song-cover {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(123,111,160,0.3), #0D0B1A);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.bottom-nav {
  height: 68px;
  background: #131022;
  border-top: 1px solid #2A2440;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 24px;
  flex-shrink: 0;
}
.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
}
.tab-label {
  font-size: 10px;
  font-family: 'DM Sans', sans-serif;
  color: #8A82A0;
}
.tab-label.active { color: #F2A93B; font-weight: 600; }

.fab {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, #F2A93B, #E09520);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(242,169,59,0.4);
  position: relative;
  top: -14px;
}
</style>
