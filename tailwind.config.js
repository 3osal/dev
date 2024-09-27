/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main : {
          mainColor : '#FF204E',
        },
        background: {
          DEFAULT: '#121212', // الخلفية الرئيسية
          ALT: '#1E1E1E',    // خيار خلفية أفتح قليلاً
        },
        text: {
          primary: '#E0E0E0',  // النص الأساسي
          secondary: '#B3B3B3', // النص الثانوي
          muted: '#8A8A8A',    // النص المعطل أو الثانوي جداً
        },
        interactive: {
          blue: '#1E90FF',    // الأزرق التفاعلي (الأزرار أو الروابط)
          green: '#00FF84',   // الأخضر التفاعلي (للتأكيد أو النجاح)
          red: '#FF5555',     // الأحمر التفاعلي (للتحذيرات أو الأخطاء)
          orange: '#FFA500',  // البرتقالي التفاعلي (للتنبيهات)
        },
        accent: {
          purple: '#BB86FC',  // لون مميز بنفسجي
          cyan: '#03DAC6',    // لون مميز أزرق سماوي
        },
        border: {
          DEFAULT: '#2C2C2C', // لون الحدود
        },
        shadow: {
          DEFAULT: '#0c0a09', // لون الظلال
        },
      },
    },
  },
  plugins: [],
};
