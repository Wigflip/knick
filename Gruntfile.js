module.exports = function(grunt){

	//1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			//2. Configuration for concatinating files goes here.
			dist:{
				src: [
				'js/build/jquery-1.12.0.min.js',
				'js/global.js',
				'js/mobile.js',
				],
				dest: 'js/production.js'
			}
		},

		uglify: {
   			 build: {
        		src: 'js/production.js',
        		dest: 'js/production.min.js'
    		}
		},

		sass: {
		    dist: {
		        options: {
		            style: 'compressed'
		        },
		        files: {
		            'css/global.css': 'css/global.scss'
		        }
		    } 
    	},

    	watch: {
    		options: {
        		livereload: true,
    		},
		    css: {
		        files: ['css/*.scss'],
		        tasks: ['sass'],
		        options: {
		            spawn: false
		        }
		    },
		        
		    js:{
		    	files: ['js/*.js'],
		    	tasks: ['uglify'],
		    	options:{
		    		spawn: false,
		    	}
		    }     
		} 
	});

	//3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['sass','watch','concat','uglify']);
	grunt.registerTask('prod', ['concat', 'uglify','sass','watch']);

};