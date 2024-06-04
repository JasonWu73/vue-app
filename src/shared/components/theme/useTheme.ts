import { onMounted, ref } from 'vue';

// 取值于 `tailwind.config.js` 中的 `daisyui.themes`
const LIGHT_THEME = 'emerald';
const DARK_THEME = 'dracula';

export function useTheme() {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = ref(prefersDarkScheme.matches);
  const applyDark = () => applyDarkTheme(isDark.value);

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDark.value = savedTheme === DARK_THEME;
      applyDark();
      return;
    }

    isDark.value = prefersDarkScheme.matches;
    applyDark();
  });

  prefersDarkScheme.addEventListener('change', event => {
    isDark.value = event.matches;
    applyDark();
  });

  /**
   * 切换主题。
   */
  function toggleTheme() {
    isDark.value = !isDark.value;
    applyDark();
    localStorage.setItem('theme', isDark.value ? DARK_THEME : LIGHT_THEME);
  }

  return { isDark, toggleTheme };
}

function applyDarkTheme(isDark: boolean) {
  resetTheme();
  document.documentElement.dataset.theme = isDark ? DARK_THEME : LIGHT_THEME;
}

function resetTheme() {
  delete document.documentElement.dataset.theme;
}
