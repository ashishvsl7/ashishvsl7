Phaser.Filter.FloatingLines = function (game) {
    Phaser.Filter.call(this,game)
    this.uniforms.line =  { type: '1f', value: -1.0};
    this.fragmentSrc = [
        '#ifdef GL_ES',
        'precision mediump float;',
        '#endif',

        'uniform float time;',
        'uniform vec2 resolution;',
        "uniform float line;",
        'float A;',
        'float K;',
        'float Phi;',
        'float deltaY;',
        'float deltaX;',
        'const float limitSx=.17;',
        'const float limitDx=.83;',
        'const float limitTop=.87;',
        'const float limitBott=.33;',
        'const float decreaseSize=.51;',
        'const float glowSize=5.0;',

        'float exper(float x, float time){',
            'float A_factor=10.0*(sin(time)/2000.0);',
            'float K_factor=10.0*(sin(time)/1000.0);',
            'float Phi_factor=0.00;//10.0*(sin(time)/1000.0);',
            'float deltaY_factor=10.0*(sin(time)/2000.0);',
            'float yCoord=0.0;',
            'float sinxs;',


            //sin l2
            'A=.02;',		//altezza onda
            'K=12.3;'	,	//ampiezza
            'Phi=1.3;'	,   //spostamento punto 0
            'deltaY=.56;',	//offset verticale


            'if (line==0.0)',
                'yCoord= ((A +A_factor)*(sin((K +K_factor)*(x+(Phi+Phi_factor))))+deltaY + deltaY_factor-.1);',
            'return yCoord;',
        '}',

        'void main(void) {',


            'vec2 pos = gl_FragCoord.xy / vec2(1280,720);',
            'float pixelCol = 0.0;',

           'if (pos.x>limitSx && pos.x<limitDx && pos.y<limitTop && pos.y>limitBott){',
                'if (pos.x>decreaseSize)',
                    'pixelCol = 1.0*((1.005-pos.x-limitSx)*glowSize)/distance(pos,vec2(pos.x,exper(pos.x,time)));',
                'else',
                    'pixelCol = 1.0*((pos.x-limitSx)*glowSize)/distance(pos,vec2(pos.x,exper(pos.x,time)));',
            '}',
            'gl_FragColor =vec4(vec3(pixelCol * vec3(.001, 0.002, 0.006)),0.1);',
        '}'
    ];
};
Phaser.Filter.FloatingLines.prototype = Object.create(Phaser.Filter.prototype);
Phaser.Filter.FloatingLines.prototype.constructor = Phaser.Filter.FloatingLines;

Object.defineProperty(Phaser.Filter.FloatingLines.prototype, 'line', {

    get: function() {
        return this.uniforms.line.value;
    },

    set: function(value) {
        this.uniforms.line.value = value;
    }

});