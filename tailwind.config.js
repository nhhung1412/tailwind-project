module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee' : '#C89F94'
      },
      keyframes: {
        slideDown: {
          '0%':{transform:'translateY(-100%)'},
          '100%':{transform:'translateY(0)'}
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
      },
      height: {
        'header': '80px',
      },
      backgroundImage: {
        'slider-bg':'url("./img/slider-header.jpg")'
      }
    },
  },
  plugins: [],
}