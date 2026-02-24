<template>
  <div class="bg-deep">

    <!-- ─── PAGE HEADER ──────────────────────────────────── -->
    <section class="bg-gradient-to-b from-[#13102280] to-deep border-b border-border py-[70px] text-center">
      <div class="container block">
        <p class="label mb-[14px]">{{ $t('features.header.label') }}</p>
        <h1 class="font-serif text-[3rem] font-light text-primary mb-[14px]">
          {{ $t('features.header.title_1') }} <span class="text-gold">{{ $t('features.header.title_gold') }}</span>
        </h1>
        <p class="text-[1.1rem] text-secondary max-w-[520px] mx-auto leading-[1.6]">
          {{ $t('features.header.subtitle') }}
        </p>
      </div>
    </section>

    <!-- ─── MA LYRE ───────────────────────────────────────── -->
    <section class="py-[90px] bg-warm border-b border-[rgba(242,169,59,0.15)]">
      <div class="container flex gap-[70px] items-center">

        <!-- Bilingual lyrics mockup -->
        <div class="flex-1 flex justify-center">
          <div class="bg-card border border-border rounded-[24px] w-[300px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <!-- Song header -->
            <div class="flex items-center gap-3 p-4 border-b border-border">
              <div class="w-9 h-9 rounded-[10px] bg-gradient-to-br from-[rgba(123,111,160,0.4)] to-deep flex items-center justify-center text-[18px]">🌙</div>
              <div class="flex-1">
                <div class="text-primary text-[14px] font-semibold">Something About Us</div>
                <div class="text-secondary text-[11px]">Daft Punk</div>
              </div>
            </div>
            <!-- Lang selector -->
            <div class="flex gap-2 px-4 py-3 border-b border-border">
              <span class="text-muted text-[11px] self-center">Traduire en :</span>
              <div v-for="l in ['🇫🇷 FR','🇪🇸 ES','🇩🇪 DE']" :key="l"
                class="px-[10px] py-[5px] rounded-lg text-[12px]"
                :class="l.includes('FR') ? 'bg-[rgba(242,169,59,0.2)] text-gold border border-gold' : 'bg-surface text-muted border border-border'"
              >{{ l }}</div>
            </div>
            <!-- Section label -->
            <div class="px-4 pt-4 pb-1">
              <span class="text-gold text-[10px] tracking-[2px] uppercase">Verse 1</span>
            </div>
            <!-- Bilingual lines -->
            <div class="px-4 pb-5 flex flex-col gap-4">
              <div v-for="line in lyricLines" :key="line.orig" class="pl-3 border-l-2 border-[rgba(123,111,160,0.4)]">
                <p class="font-serif text-primary text-[14px] m-0 leading-[1.5]">{{ line.orig }}</p>
                <p class="text-gold text-[12px] mt-1 m-0 italic opacity-85">{{ line.trans }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="flex-1 max-w-[480px]">
          <div class="w-[52px] h-[52px] rounded-[14px] bg-[rgba(123,111,160,0.2)] flex items-center justify-center mb-5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F2A93B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 4C4 3 7 3 9 4C11 5 12 5 12 5V21C12 21 11 20 9 19.5C7 19 4 19 2 20V4Z"/>
              <path d="M22 4C20 3 17 3 15 4C13 5 12 5 12 5V21C12 21 13 20 15 19.5C17 19 20 19 22 20V4Z"/>
            </svg>
          </div>
          <p class="label mb-3">{{ $t('features.lyre.tab') }}</p>
          <h2 class="font-serif text-[2.4rem] font-light text-primary mb-4">{{ $t('features.lyre.title') }} <span class="text-gold">{{ $t('features.lyre.title_gold') }}</span></h2>
          <p class="text-secondary text-[1rem] leading-[1.8] mb-7">
            {{ $t('features.lyre.desc') }}
          </p>
          <ul class="list-none p-0 flex flex-col gap-0">
            <li v-for="f in lyreFeatures" :key="f" class="feature-li">
              <span class="absolute left-0 top-3 text-gold text-[8px]">●</span>{{ f }}
            </li>
          </ul>
        </div>

      </div>
    </section>

    <!-- ─── AJOUTER ────────────────────────────────────────── -->
    <section class="py-[90px] bg-surface border-b border-border">
      <div class="container flex gap-[70px] items-center">

        <!-- Text -->
        <div class="flex-1 max-w-[480px]">
          <div class="w-[52px] h-[52px] rounded-[14px] bg-gold flex items-center justify-center mb-5">
            <span class="text-[28px] text-deep font-light leading-none">+</span>
          </div>
          <p class="label mb-3">{{ $t('features.add.tab') }}</p>
          <h2 class="font-serif text-[2.4rem] font-light text-primary mb-4"><span class="text-gold">{{ $t('features.add.title_gold') }}</span> {{ $t('features.add.title') }}</h2>
          <p class="text-secondary text-[1rem] leading-[1.8] mb-7">
            {{ $t('features.add.desc') }}
          </p>
          <ul class="list-none p-0 flex flex-col gap-0">
            <li v-for="f in ajouterFeatures" :key="f" class="feature-li">
              <span class="absolute left-0 top-3 text-gold text-[8px]">●</span>{{ f }}
            </li>
          </ul>
        </div>

        <!-- Add song mockup -->
        <div class="flex-1 flex justify-center">
          <div class="bg-card border border-border rounded-[24px] w-[300px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <!-- Header -->
            <div class="flex justify-between items-center px-5 py-4 border-b border-border">
              <span class="text-secondary text-[18px]">✕</span>
              <span class="text-primary text-[15px] font-semibold">Ajouter une chanson</span>
              <span class="w-4" />
            </div>
            <!-- Search bar -->
            <div class="px-5 pt-4">
              <div class="bg-surface rounded-[14px] px-4 py-[13px] flex items-center gap-3 border border-[rgba(242,169,59,0.4)] mb-4">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F2A93B" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <span class="text-muted text-[13px]">Rechercher un titre ou artiste...</span>
              </div>
              <!-- Result -->
              <p class="text-muted text-[10px] tracking-[2px] uppercase mb-2">Résultats</p>
              <div v-for="r in searchResults" :key="r.title" class="bg-surface rounded-xl p-3 flex items-center gap-3 mb-2 border border-border">
                <div class="w-9 h-9 rounded-[9px] bg-gradient-to-br from-[rgba(123,111,160,0.3)] to-deep flex items-center justify-center text-[16px]">🎵</div>
                <div class="flex-1">
                  <div class="text-primary text-[13px] font-semibold">{{ r.title }}</div>
                  <div class="text-secondary text-[11px]">{{ r.artist }}</div>
                </div>
                <div class="bg-[rgba(242,169,59,0.15)] rounded-lg px-3 py-[5px] text-gold text-[11px] font-semibold">+ Ajouter</div>
              </div>
              <!-- Divider -->
              <div class="flex items-center gap-3 my-4">
                <div class="flex-1 h-px bg-border" />
                <span class="text-muted text-[11px]">ou saisir manuellement</span>
                <div class="flex-1 h-px bg-border" />
              </div>
              <!-- Fields preview -->
              <div v-for="field in formFields" :key="field" class="bg-surface rounded-xl px-4 py-[11px] mb-2 border border-border">
                <span class="text-muted text-[13px]">{{ field }}</span>
              </div>
            </div>
            <div class="px-5 pb-5 mt-2">
              <div class="bg-gold rounded-[14px] py-[14px] text-center text-deep font-bold text-[14px]">Sauvegarder dans ma Lyre</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── MÉMORISER ─────────────────────────────────────── -->
    <section class="py-[90px] bg-warm border-b border-[rgba(242,169,59,0.15)]">
      <div class="container flex gap-[70px] items-center">

        <!-- Fill-in-the-blank mockup -->
        <div class="flex-1 flex justify-center">
          <div class="bg-card border border-border rounded-[24px] w-[300px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <!-- Header -->
            <div class="flex items-center gap-3 px-4 py-[14px] border-b border-border">
              <span class="text-secondary text-[18px]">‹</span>
              <div class="flex-1">
                <div class="text-primary text-[14px] font-semibold">Texte à trous</div>
                <div class="text-secondary text-[11px]">Something About Us · Daft Punk</div>
              </div>
              <div class="bg-[rgba(242,169,59,0.2)] rounded-lg px-2 py-1 text-gold text-[11px]">Verse 1</div>
            </div>
            <!-- Exercise lines -->
            <div class="px-4 py-4 flex flex-col gap-3">
              <div v-for="line in exerciseLines" :key="line.id"
                class="rounded-[14px] p-4 border"
                :class="line.revealed ? 'border-[rgba(48,164,108,0.4)]' : 'border-border'"
                style="background:#1A1528"
              >
                <p class="font-serif text-primary text-[14px] m-0 leading-[1.6]">
                  <span v-for="(part, i) in line.parts" :key="i">
                    {{ part }}
                    <span v-if="i < line.parts.length - 1">
                      <span v-if="line.revealed"
                        class="text-success font-semibold px-2 py-0.5 rounded-md"
                        style="background:#1A3A2A"
                      >{{ line.missing }}</span>
                      <span v-else
                        class="inline-block w-16 h-5 rounded-md align-middle"
                        style="background:rgba(242,169,59,0.12); border:1px dashed rgba(242,169,59,0.45);"
                      />
                    </span>
                  </span>
                </p>
                <p v-if="line.revealed" class="text-gold text-[11px] mt-2 m-0 italic opacity-80">{{ line.hint }}</p>
              </div>
            </div>
            <!-- Word bank -->
            <div class="px-4 pb-4">
              <p class="text-muted text-[10px] tracking-[2px] uppercase mb-2">Mots disponibles</p>
              <div class="flex gap-2 flex-wrap">
                <div v-for="w in wordBank" :key="w" class="bg-card border border-[rgba(242,169,59,0.4)] rounded-[10px] px-4 py-2 text-gold text-[13px]">{{ w }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="flex-1 max-w-[480px]">
          <div class="w-[52px] h-[52px] rounded-[14px] bg-[rgba(123,111,160,0.2)] flex items-center justify-center mb-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F2A93B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4H9C9 4 9 2 10.5 2C12 2 12 4 12 4H18V9C18 9 20 9 20 10.5C20 12 18 12 18 12V18H12C12 18 12 20 10.5 20C9 20 9 18 9 18H4V12C4 12 2 12 2 10.5C2 9 4 9 4 9V4Z"/>
            </svg>
          </div>
          <p class="label mb-3">{{ $t('features.memorize.tab') }}</p>
          <h2 class="font-serif text-[2.4rem] font-light text-primary mb-4"><span class="text-gold">{{ $t('features.memorize.title_gold') }}</span></h2>
          <p class="text-secondary text-[1rem] leading-[1.8] mb-7">
            {{ $t('features.memorize.desc') }}
          </p>

          <div class="grid grid-cols-2 gap-3">
            <div v-for="m in methods" :key="m.name"
              class="bg-surface rounded-[14px] p-4 border border-border"
            >
              <div class="text-[20px] font-mono font-bold mb-2" :style="{ color: m.color }">{{ m.icon }}</div>
              <div class="text-primary text-[13px] font-semibold mb-1">{{ m.name }}</div>
              <div class="text-muted text-[11px] leading-[1.4]">{{ m.desc }}</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── CTA ───────────────────────────────────────────── -->
    <section class="bg-surface border-t border-border py-[90px]">
      <div class="container block">
        <div class="text-center max-w-[600px] mx-auto">
          <p class="label mb-[14px]">{{ $t('features.cta.label') }}</p>
          <h2 class="font-serif text-[2.5rem] font-light text-primary mb-[14px]">
            {{ $t('features.cta.title') }}
          </h2>
          <p class="text-[1.1rem] text-secondary mb-8 leading-[1.7]">
            {{ $t('features.cta.subtitle') }}
          </p>
          <NuxtLink :to="localePath('/')" class="btn-primary">{{ $t('features.cta.btn') }}</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const { tm, rt } = useI18n()
const localePath = useLocalePath()

const lyreFeatures = computed(() => tm('features.lyre.features').map(f => rt(f)))
const ajouterFeatures = computed(() => tm('features.add.features').map(f => rt(f)))
const methods = computed(() =>
  tm('features.memorize.methods').map(m => ({ icon: rt(m.icon), name: rt(m.name), desc: rt(m.desc), color: rt(m.color) }))
)

// Static demo content — decorative mockup data, not translated
const lyricLines = [
  { orig: 'It might not be the right time',        trans: 'Ce n\'est peut-être pas le bon moment' },
  { orig: 'I might not be the right one',           trans: 'Je ne suis peut-être pas la bonne personne' },
  { orig: 'But there\'s something about us I want to say', trans: 'Mais il y a quelque chose entre nous que je veux dire' },
]

const searchResults = [
  { title: 'Bohemian Rhapsody',  artist: 'Queen' },
  { title: 'Bohemian Like You',  artist: 'The Dandy Warhols' },
]

const formFields = [
  'Nom de la chanson',
  'Nom de l\'artiste',
  'Coller ou saisir les paroles originales...',
]

const exerciseLines = [
  { id: 1, parts: ['It might not be the right '],        missing: 'time',      revealed: false, hint: '' },
  { id: 2, parts: ['I might not be the ',    ' one'],   missing: 'right',     revealed: true,  hint: 'Je ne suis peut-être pas la bonne personne' },
  { id: 3, parts: ['But there\'s ', ' about us I want'], missing: 'something', revealed: false, hint: '' },
]

const wordBank = ['time', 'something', 'between', 'say']
</script>
