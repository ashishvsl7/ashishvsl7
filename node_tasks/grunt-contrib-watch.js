module.exports = function(grunt) {
	grunt.config('watch', {
		configFiles: {
			files: [
				'Gruntfile.js',
				'node_tasks/*.js'
			],
			options: {
				reload: true,
				interval: 10007,
				interrupt: true,
				debounceDelay: 2000,
			}
		}
		
	});
};
