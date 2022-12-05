module.exports = function(grunt) {
    grunt.config('copy', {

        login: {
            expand: true,
            cwd: 'src/gameLaunch/', // set working folder / root to copy
            src: '**/*',
            dest: 'dist/<%= pkg.globalVars.distributionFolder %>/'
        },
        gameJs: {
            expand: true,
            cwd: 'src/games/gameJs/', // set working folder / root to copy
            src: '**/*',
            dest: 'dist/<%= pkg.globalVars.distributionFolder %>/games/gameJs'
        },
        slot: {
            expand: true,
            cwd: 'src/games/slot', // set working folder / root to copy
            src: '**/*',
            dest: 'dist/<%= pkg.globalVars.distributionFolder %>/games/slot'
        },

        gameJsPixi: {
            expand: true,
            cwd: 'srcPixi/games/gameJs/', // set working folder / root to copy
            src: '**/*',
            dest: 'distPixi/<%= pkg.globalVars.distributionFolder %>/games/gameJs'
        },
        slotPixi: {
            expand: true,
            cwd: 'srcPixi/games/slot', // set working folder / root to copy
            src: '**/*',
            dest: 'distPixi/<%= pkg.globalVars.distributionFolder %>/games/slot'

        }

    });
};
