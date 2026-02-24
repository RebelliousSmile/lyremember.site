import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],

  theme: {
    colors: {
      // ── Cool (violet) ──────────────────────────────────
      deep: '#0D0B1A',
      surface: '#131022',
      card: '#1A1528',
      'card-hover': '#231D35',
      border: '#2A2440',
      // ── Warm (amber) ───────────────────────────────────
      // Sections "chaudes" alternant avec les sections violettes froides
      warm: '#1C1408',
      'warm-border': 'rgba(242,169,59,0.15)',
      'warm-secondary': '#C8B89A',
      // ── Accents ────────────────────────────────────────
      gold: '#F2A93B',
      'gold-hover': '#E09520',
      violet: '#7B6FA0',
      'violet-muted': '#5E5480',
      // ── Text ───────────────────────────────────────────
      primary: '#F5F0EB',
      secondary: '#B8B0D0',
      muted: '#8A82A0',
      // ── Feedback ───────────────────────────────────────
      success: '#30A46C',
      'success-muted': '#1A3A2A',
    },
    fontFamily: {
      serif: ["'Cormorant Garamond'", 'Georgia', 'serif'],
      sans: ["'DM Sans'", '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    },
  },

  shortcuts: {
    // Layout
    'container': 'max-w-[1200px] mx-auto px-5',

    // Typography
    'label': 'text-gold text-[12px] tracking-[3px] uppercase font-medium',
    'section-heading': 'font-serif text-primary font-light',

    // Cards
    'card': 'bg-card border border-border rounded-2xl',
    'card-hover': 'transition-transform duration-250 hover:-translate-y-1',

    // Buttons
    'btn': 'inline-block px-7 py-[13px] rounded-xl font-semibold text-[15px] no-underline transition-all duration-250',
    'btn-primary': 'btn bg-gold text-deep hover:bg-gold-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(242,169,59,0.35)]',
    'btn-secondary': 'btn bg-transparent text-secondary border border-border hover:border-gold hover:text-gold hover:-translate-y-0.5',

    // Feature list item
    'feature-li': 'relative pl-7 py-[9px] text-secondary text-[14px] border-b border-border last:border-b-0',
  },
})
