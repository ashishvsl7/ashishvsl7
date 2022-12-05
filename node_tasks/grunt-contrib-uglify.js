module.exports = function(grunt) {
	grunt.config('uglify', {
		main: {
			options: {
				mangle: false,
				sourceMap: true,
				ASCIIOnly: true,
				compress: {
					drop_console: true,
					drop_debugger: true,
				}
			},
			src: 'src/games/js/main.js',
			dest: 'dist/<%= pkg.globalVars.distributionFolder %>/games/js/main.min.js'
		},
		mainP: {
			options: {
				mangle: false,
				sourceMap: true,
				ASCIIOnly: true,
				compress: {
					drop_console: true,
					drop_debugger: true,
				}
			},
			src: 'srcPixi/games/js/main.js',
			dest: 'distPixi/<%= pkg.globalVars.distributionFolder %>/games/js/main.min.js'
		},
		live: {
			options: {
				mangle: true,
				sourceMap: false,
				ASCIIOnly: true,
				compress: {
					drop_console: true,
					drop_debugger: true,
				}
			},
			files: {
				'dist/<%= pkg.globalVars.distributionFolder %>/js/main.min.js' : 'src/games/js/main.js',
				'distPixi/<%= pkg.globalVars.distributionFolder %>/games/js/main.min.js' : 'srcPixi/games/js/main.js'
		  	}
		}

	});
};
