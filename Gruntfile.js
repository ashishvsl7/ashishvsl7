module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/* \n' +
          ' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n' +
          ' * <%= pkg.description %> \n' +
          ' * <%= pkg.homepage %> \n' +
          ' * \n' +
          ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; \n' +
          ' */ \n\n'
    },

  });

  grunt.loadTasks('node_tasks');

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', ['concat:main', 'uglify:main', 'newer:copy']);
  grunt.registerTask('pixi', ['concat:mainP', 'uglify:mainP', 'newer:copy:gameJsPixi','newer:copy:slotPixi']);

  grunt.registerTask('live', ['concat:main', 'concat:mainP', 'uglify:live', 'copy']);

};
