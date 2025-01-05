const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ['./src/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
          orange: 'hsl(26, 100%, 55%)',
          'pale-orange': 'hsl(25, 100%, 94%)',
          'very-dark-blue': 'hsl(220, 13%, 13%)',
          'dark-grayish-blue': 'hsl(219, 9%, 45%)',
          'grayish-blue': 'hsl(220, 14%, 75%)',
          'light-grayish-blue': 'hsl(223, 64%, 98%)'
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif', ...defaultTheme.fontFamily.sans]
      },
      animation: {
				change: "change .3s linear 1",
				lightChange: "lightbox .3s linear 1",
				lightReverse: "lightbox .3s linear 1 forwards reverse",
			},
			keyframes: {
				change: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				lightbox: {
					"0%": { opacity: "0" },
					"100%": { opacity: "0.75" },
				},
			},
			screens: {
        xs: "475px",
        "2xl": "1320px",
        ...defaultTheme.screens
			},
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
        'logo-light-mode': "url('../images/logo-light-mode.svg')",
        'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')"
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['black']
    }
  },
  plugins: [require("tailwindcss"), require("autoprefixer")]
}
