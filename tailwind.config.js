module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee' : '#C89F94',
        'brown-coffee' : '#A25F4B'
      },
      height: {
        'header': '80px',
      },
      keyframes: {
        slide: {
          '0%': { 'transform': 'translateX(0)' },
          '100%': { 'transform': 'translateX(100%)'},
        },
      },
      animation: {
        slide: 'slide 0.5s ease-in-out',
      },
      backgroundImage: {
        'slider':'url("./img/slider-header.jpg")',
        'featured-mug1':'url("./img/featured-mug1.jpg")',
        'featured-mug2':'url("./img/featured-mug2.jpg")',
        'coffee-megazine1':'url("./img/coffee-megazine1.jpg")',
        'coffee-megazine2':'url("./img/coffee-megazine2.jpg")',
        'coffee-megazine3':'url("./img/coffee-megazine3.jpg")',
        'parallex':'url("./img/parallex.jpg")',
        'life3':'url("./img/life3.jpg")',
        'life2':'url("./img/life2.jpg")',
        'life1':'url("./img/life1.jpg")',
      }
    },
  },
  plugins: [],
}