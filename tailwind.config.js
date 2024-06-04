import animatePlugin from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],

  // 启用深色模式，通过在 HTML 元素上添加或移除 `dark` 类来手动切换深色模式
  darkMode: 'class',

  theme: {
    extend: {
      height: {
        // 考虑手机浏览器的地址栏
        screen: ['100vh', '100dvh']
      },

      /* 添加新的颜色 */
      colors: {
        'one-dark': {
          DEFAULT: 'rgb(var(--color-one-dark) / <alpha-value>)',
          1: 'rgb(var(--color-one-dark-1) / <alpha-value>)',
          2: 'rgb(var(--color-one-dark-2) / <alpha-value>)'
        }
      }
    }
  },

  plugins: [animatePlugin]
};

