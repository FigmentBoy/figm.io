/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'gray':             '#282828',
      'red':              '#ff8080',
      'orange':           '#ffbf80',
      'yellow':           '#ffff80',
      'green':            '#80ff80',
      'blue':             '#80bfff',
      'purple':           '#bf80ff',
      'pink':             '#ff80ff',
      'gold':             '#ceb888',
      'white':            '#eee',
      'light':            '#aaa',
  },
  fontFamily: {
      'head': ['"Varela Round"', 'sans-serif'],
      'text': ['"Inter"', 'sans-serif'],
  },
    extend: {},
  },
  plugins: [],
}

