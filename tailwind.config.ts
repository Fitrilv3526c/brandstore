import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '485px', // 👈 now you can use `xs:` prefix
      },
    },
  },
  plugins: [],
}

export default config
