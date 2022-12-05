module.exports = function(grunt) {
	grunt.config('concat', {
		main: {
			src: [
				'src/games/lib/jquery-2.1.4.min.js',
				'src/games/lib/screenfull.min.js',
				'src/games/lib/TweenMax.js',
				'src/games/lib/Draggable.min.js',
				'src/games/lib/phaser.js',
				'src/games/lib/plugin/box2d-html5.js',
				'src/games/lib/plugin/box2d-plugin.js',
				'src/games/lib/EPSY.js',
				'src/games/lib/EPSY.Phaser.js',
				'src/games/lib/ThrowPropsPlugin.min.js',
				'src/games/lib/phaser.checkbox.js',
				'src/games/lib/gameiom.js',
				'src/games/lib/gcm.min.js',
				'src/games/lib/session-bar.game.min.js',
				'src/games/lib/client-wrapper.game.min.js',
				'src/games/lib/message-handler.game.min.js',
				'src/games/lib/NoSleep.min.js',
				'src/games/js/core/**/*.js',
				'src/games/js/slotUtils/**/**/*.js',
				'src/games/js/staticClasses/**/*.js',
				'src/games/js/utils/**/*.js',
				'src/games/js/launcher.js'
			],
			dest: 'src/games/js/main.js'
		},
		mainP: {
			src: [
				'srcPixi/games/lib/jquery-2.1.4.min.js',
				'srcPixi/games/lib/screenfull.min.js',
				'srcPixi/games/lib/TweenMax.js',
				'srcPixi/games/lib/pixi.js',
				'srcPixi/games/lib/pixi.checkbox.js',
				'srcPixi/games/lib/pixi-spine.js',
				'srcPixi/games/lib/pixi-sound.js',
				'srcPixi/games/lib/Draggable.min.js',
				'srcPixi/games/lib/CSSPlugin.min.js',

				'srcPixi/games/lib/ScrollToPlugin.min.js',

				'srcPixi/games/lib/gameiom.js',
				'srcPixi/games/lib/gcm.min.js',
				'srcPixi/games/lib/session-bar.game.min.js',
				'srcPixi/games/lib/client-wrapper.game.min.js',
				'srcPixi/games/lib/message-handler.game.min.js',
				'srcPixi/games/lib/session-bar.game.min.js',
				'srcPixi/games/lib/NoSleep.min.js',
				'srcPixi/games/js/core/**/*.js',
				'srcPixi/games/js/slotUtils/**/**/*.js',
				'srcPixi/games/js/staticClasses/**/*.js',
				'srcPixi/games/js/utils/**/*.js',
				'srcPixi/games/js/launcher.js'

			],
			dest: 'srcPixi/games/js/main.js'
		}

	});
};