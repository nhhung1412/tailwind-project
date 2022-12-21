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
      keyframes: {
        slideDown: {
          '0%':{transform:'translateY(-100%)'},
          '100%':{transform:'translateY(0)'}
        },
        slideUp: {
          '0%':{transform:'translate3d(0px,8px,0px)',opacity:0},
          '100%':{transform:'translate3d(0px,0px,0px)',opacity:1},
        }
       
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
        slideUp: 'slideUp .4s ease-in'
        
      },
      height: {
        'header': '80px',
      },
      backgroundImage: {
        'slider':'url("./img/slider-header.jpg")',
        'featured-mug1':'url("./img/featured-mug1.jpg")',
        'featured-mug2':'url("./img/featured-mug2.jpg")',
        'coffee-megazine1':'url("./img/coffee-megazine1.jpg")',
        'coffee-megazine2':'url("./img/coffee-megazine2.jpg")',
        'coffee-megazine3':'url("./img/coffee-megazine3.jpg")',
        'parallex':'url("./img/parallex.jpg")',
      }
    },
  },
  plugins: [],
}