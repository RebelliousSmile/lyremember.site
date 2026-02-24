<template>
  <div class="bg-deep">

    <!-- ─── HEADER ───────────────────────────────────────── -->
    <section class="bg-gradient-to-b from-[#13102280] to-deep border-b border-border py-[90px] text-center">
      <div class="container block">
        <p class="label mb-4">{{ $t('download.header.label') }}</p>
        <h1 class="font-serif text-[3.2rem] font-light text-primary mb-4 leading-[1.2]">
          {{ $t('download.header.title_1') }}<br><span class="text-gold">{{ $t('download.header.title_gold') }}</span>
        </h1>
        <p class="text-secondary text-[1.1rem] leading-[1.7] max-w-[480px] mx-auto">
          {{ $t('download.header.subtitle') }}
        </p>
      </div>
    </section>

    <!-- ─── WAITLIST FORM ─────────────────────────────────── -->
    <section class="py-[90px]">
      <div class="container block">
        <div class="max-w-[480px] mx-auto">

          <form class="waitlist-form" @submit.prevent="submit">
            <div class="mb-4">
              <label class="block text-secondary text-[13px] mb-2">{{ $t('download.form.email_label') }}</label>
              <input
                v-model="email"
                type="email"
                required
                :placeholder="$t('download.form.email_placeholder')"
                class="w-full bg-card border border-border rounded-xl px-4 py-[14px] text-primary text-[15px] outline-none transition-colors duration-200 focus:border-gold placeholder-muted"
                style="font-family:'DM Sans',sans-serif;"
              />
            </div>

            <div class="mb-6">
              <label class="block text-secondary text-[13px] mb-3">{{ $t('download.form.platform_label') }}</label>
              <div class="flex gap-3">
                <label
                  v-for="p in platforms"
                  :key="p.value"
                  class="flex-1 flex items-center gap-3 bg-card border rounded-xl px-4 py-3 cursor-pointer transition-colors duration-200"
                  :class="platform === p.value ? 'border-gold' : 'border-border'"
                >
                  <input v-model="platform" type="radio" :value="p.value" class="hidden" />
                  <span class="text-[20px]">{{ p.icon }}</span>
                  <span class="text-secondary text-[14px]" :class="platform === p.value ? 'text-gold font-semibold' : ''">{{ p.label }}</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              class="w-full btn-primary text-center"
              :disabled="submitted || loading"
            >
              <span v-if="loading">…</span>
              <span v-else-if="submitted">{{ $t('download.form.submitted') }}</span>
              <span v-else>{{ $t('download.form.submit') }}</span>
            </button>
          </form>

          <p v-if="errorMsg" class="text-[#E05A5A] text-[12px] text-center mt-3">{{ errorMsg }}</p>

          <p class="text-muted text-[12px] text-center mt-4 leading-[1.6]">
            {{ $t('download.form.disclaimer') }}<br>
            {{ $t('download.form.disclaimer2') }}
          </p>

        </div>
      </div>
    </section>

    <!-- ─── WHAT TO EXPECT ────────────────────────────────── -->
    <section class="py-[90px] bg-surface border-t border-border">
      <div class="container block">
        <p class="label text-center mb-[10px]">{{ $t('download.upcoming.label') }}</p>
        <h2 class="section-heading text-[2.4rem] text-center mb-[50px]">
          {{ $t('download.upcoming.title') }}
        </h2>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 max-w-[900px] mx-auto">
          <div v-for="item in upcomingItems" :key="item.title"
            class="bg-card border border-border rounded-[20px] p-6"
          >
            <div class="text-[32px] mb-3">{{ item.icon }}</div>
            <div class="text-primary text-[15px] font-semibold mb-2">{{ item.title }}</div>
            <div class="text-secondary text-[13px] leading-[1.6]">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── GITHUB ────────────────────────────────────────── -->
    <section class="py-[60px] border-t border-border">
      <div class="container block text-center">
        <p class="text-secondary text-[14px] mb-4">{{ $t('download.github.text') }}</p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-3 text-secondary no-underline font-semibold text-[15px] transition-all duration-250 hover:border-gold hover:text-gold hover:-translate-y-0.5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          {{ $t('download.github.btn') }}
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const { tm, rt } = useI18n()

const email = ref('')
const platform = ref('ios')
const submitted = ref(false)
const loading = ref(false)
const errorMsg = ref('')

const platforms = computed(() =>
  tm('download.form.platforms').map(p => ({ value: rt(p.value), icon: rt(p.icon), label: rt(p.label) }))
)
const upcomingItems = computed(() =>
  tm('download.upcoming.items').map(i => ({ icon: rt(i.icon), title: rt(i.title), desc: rt(i.desc) }))
)

async function submit() {
  if (!email.value || loading.value) return
  loading.value = true
  errorMsg.value = ''
  try {
    await $fetch('/api/waitlist', {
      method: 'POST',
      body: { email: email.value, platform: platform.value },
    })
    submitted.value = true
  } catch {
    errorMsg.value = 'Une erreur est survenue. Réessayez dans un instant.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
input:focus { border-color: #F2A93B; }
input::placeholder { color: #8A82A0; }
button:disabled { opacity: 0.7; cursor: default; transform: none; }
</style>
