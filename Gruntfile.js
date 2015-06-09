module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {

      },
      build: {
        src: 'js/*.js',
        dest: 'dist/scripts.min.js'
      }
    },
    cssmin: {
		dist: {
	    	options: {
	    		processImport: false
	    	},
	    	files: {
	    		'dist/style.min.css': ['css/*.css']
	  		}
	  	}
	},
	copy: {
		main: {
			files:[
				// includes files within path
				{expand: true, flatten: true, src: ['bower_components/**/dist/**/*.min.css'], dest: 'css/', filter: 'isFile'},
				{expand: true, flatten: true, src: ['bower_components/**/dist/**/*.min.js'], dest: 'js/', filter: 'isFile'},
			]
	  	}
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy','uglify','cssmin']);

};

