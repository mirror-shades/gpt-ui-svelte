module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      padding: '2rem',
    },
  },
  daisyui: {
    themes: [
      "dark",
      {
        mytheme: {
          "primary": "#a991f7",
          "secondary": "#041014",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      }],
  },
  plugins: [require("daisyui")],
}