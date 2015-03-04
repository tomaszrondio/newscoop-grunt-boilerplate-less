module.exports = function(grunt){

  grunt.config('autoprefixer',{

    dev: {
      src: 'assets/dist/style.css'
    },

    build: {
      src: 'assets/dist/style.css'
    }

  });

};