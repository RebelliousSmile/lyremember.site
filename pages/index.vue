<template>
  <div>

    <!-- ─── HERO ─────────────────────────────────────────── -->
    <section class="bg-gradient-to-b from-[#13102280] to-deep border-b border-border py-[90px] pb-[80px]">
      <div class="container flex gap-[60px] items-center">

        <div class="flex-1 max-w-[540px]">
          <p class="label mb-4">{{ $t('index.hero.label') }}</p>
          <h1 class="font-serif text-[3.6rem] font-light leading-[1.15] text-primary mb-6">
            {{ $t('index.hero.title_1') }}<br>{{ $t('index.hero.title_2') }}<br><span class="text-gold">{{ $t('index.hero.title_gold') }}</span>
          </h1>
          <p class="text-[1.1rem] leading-[1.7] text-secondary mb-9">
            {{ $t('index.hero.subtitle') }}
          </p>
          <div class="flex gap-[14px] flex-wrap">
            <NuxtLink :to="localePath('/download')" class="btn-primary">{{ $t('index.hero.cta_primary') }}</NuxtLink>
            <NuxtLink :to="localePath('/features')" class="btn-secondary">{{ $t('index.hero.cta_secondary') }}</NuxtLink>
          </div>
        </div>

        <div class="flex-1 flex justify-center items-start">
          <PhoneMockup />
        </div>

      </div>
    </section>

    <!-- ─── ORIGINE ───────────────────────────────────────── -->
    <section class="py-[90px] bg-warm border-y border-[rgba(242,169,59,0.15)]">
      <div class="container flex gap-[70px] items-center">
        <div class="flex-1 max-w-[480px]">
          <p class="label mb-4">{{ $t('index.why.label') }}</p>
          <h2 class="font-serif text-[2.6rem] font-light text-primary mb-6 leading-[1.2]">
            {{ $t('index.why.title_1') }}<br>{{ $t('index.why.title_2') }}<br><span class="text-gold">{{ $t('index.why.title_gold') }}</span>
          </h2>
          <p class="text-secondary text-[1rem] leading-[1.8] mb-4">
            {{ $t('index.why.p1') }}
          </p>
          <p class="text-secondary text-[1rem] leading-[1.8]">
            {{ $t('index.why.p2') }} <em class="text-primary not-italic">{{ $t('index.why.p2_em') }}</em>
          </p>
        </div>
        <div class="flex-1 flex flex-col gap-4">
          <div v-for="point in whyPoints" :key="point.title"
            class="bg-card border border-border rounded-[16px] p-5 flex gap-4 items-start"
          >
            <div class="text-[24px] shrink-0 mt-0.5">{{ point.icon }}</div>
            <div>
              <div class="text-primary text-[14px] font-semibold mb-1">{{ point.title }}</div>
              <div class="text-secondary text-[13px] leading-[1.5]">{{ point.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PARCOURS UTILISATEUR ──────────────────────────── -->
    <section class="py-[90px] bg-deep">
      <div class="container block">
        <p class="label text-center mb-[10px]">{{ $t('index.flow.label') }}</p>
        <h2 class="section-heading text-[2.8rem] text-center mb-[50px]">
          {{ $t('index.flow.title_1') }} <span class="text-gold">{{ $t('index.flow.title_gold') }}</span>
        </h2>
        <div class="bg-card rounded-[20px] p-7 border border-border max-w-[700px] mx-auto">
          <div class="flex items-center gap-3 flex-wrap justify-center">
            <template v-for="(step, i) in flowSteps" :key="i">
              <span v-if="i > 0" class="text-gold text-[20px]">→</span>
              <div class="bg-surface rounded-[14px] py-[14px] px-[18px] border border-border text-center flex-[1_1_120px]">
                <div class="w-7 h-7 rounded-full bg-[rgba(242,169,59,0.2)] text-gold flex items-center justify-center text-[13px] font-bold mx-auto mb-2" style="font-family:'DM Sans',sans-serif;">
                  {{ step.num }}
                </div>
                <div class="text-primary text-[14px] font-semibold">{{ step.label }}</div>
                <div class="text-muted text-[11px] mt-1">{{ step.desc }}</div>
              </div>
            </template>
          </div>
        </div>
        <div class="text-center mt-8">
          <NuxtLink :to="localePath('/features')" class="btn-secondary">{{ $t('index.flow.cta') }}</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ─── DON ───────────────────────────────────────────── -->
    <section class="donate-section">
      <div class="container block text-center">
        <div class="donate-heart">♥</div>
        <h2 class="donate-title">
          {{ $t('index.donate.title_1') }}<br>
          <span class="donate-title-gold">{{ $t('index.donate.title_gold') }}</span>
        </h2>
        <p class="donate-body">{{ $t('index.donate.p') }}</p>
        <a href="#" class="donate-btn">{{ $t('index.donate.cta') }}</a>
      </div>
    </section>

    <!-- ─── CTA FINAL ─────────────────────────────────────── -->
    <section class="cta-finale">
      <div class="container block text-center cta-content">
        <p class="label mb-5">{{ $t('index.cta_section.label') }}</p>
        <h2 class="font-serif cta-heading leading-[1.1]">
          {{ $t('index.cta_section.title_1') }}<br>
          {{ $t('index.cta_section.title_2') }}&nbsp;<span class="text-gold">{{ $t('index.cta_section.title_gold') }}</span>
        </h2>
        <p class="cta-sub mt-6 mb-12">{{ $t('index.cta_section.p') }}</p>
        <NuxtLink :to="localePath('/download')" class="cta-pill">{{ $t('index.cta_section.btn') }}</NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
const { tm, rt } = useI18n()
const localePath = useLocalePath()

const whyPoints = computed(() =>
  tm('index.why.points').map(p => ({ icon: rt(p.icon), title: rt(p.title), desc: rt(p.desc) }))
)
const flowSteps = computed(() =>
  tm('index.flow.steps').map(s => ({ num: rt(s.num), label: rt(s.label), desc: rt(s.desc) }))
)
</script>

<style scoped>
/* ── Donate — ton warm (token: warm = #1C1408) ─────────── */
.donate-section {
  background: #1C1408; /* warm */
  border-top: 1px solid rgba(242,169,59,0.15); /* warm-border */
  border-bottom: 1px solid rgba(242,169,59,0.15);
  padding: 90px 0;
  text-align: center;
}

.donate-heart {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #F2A93B;
  opacity: 0.7;
}

.donate-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.6rem;
  font-weight: 400;
  color: #F5F0EB;
  line-height: 1.25;
  margin-bottom: 20px;
}

.donate-title-gold {
  color: #F2A93B;
}

.donate-body {
  font-size: 1rem;
  color: #C8B89A;
  line-height: 1.8;
  max-width: 420px;
  margin: 0 auto 32px;
}

.donate-btn {
  display: inline-block;
  padding: 13px 36px;
  border: 1px solid rgba(242,169,59,0.5);
  color: #F2A93B;
  font-weight: 600;
  font-size: 14px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.donate-btn:hover {
  background: rgba(242,169,59,0.12);
}

/* ── CTA finale — retour violet froid profond ──────────── */
.cta-finale {
  padding: 120px 0 130px;
  background: #131022;
}

.cta-content { position: relative; }

.cta-heading {
  font-size: 3.4rem;
  color: #F5F0EB;
  margin-top: 10px;
}

.cta-sub {
  color: #8A82A0;
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
}

.cta-pill {
  display: inline-block;
  padding: 16px 48px;
  background: #F2A93B;
  color: #0D0B1A;
  font-weight: 700;
  font-size: 15px;
  border-radius: 100px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 0 40px rgba(242,169,59,0.2);
}
.cta-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 40px rgba(242,169,59,0.38);
}

@media (max-width: 768px) {
  .donate-title { font-size: 2rem; }
  .cta-heading { font-size: 2.4rem; }
  .cta-finale { padding: 90px 0 100px; }
}
</style>
