
(function(){
    /**
     * checkbox function
     * @class
     * @param {number}      _x          horizontal position
     * @param {number}      _y          vertical position
     * @param {object}      _labelObj   object for the textual part of the checkbox contains @param {string} text for the label and @param {object} style for the textfield style
     * @param {string}      _sprite     key - The key used to a stored texture in Phase Cache
     * @param {boolean}     _state      predefined state of checkbox (default: false)
     * @return {object}                 A newley created checkbox-object
     */
    var PIXI_checkbox = window['PIXI_checkbox'] = function checkbox(_g, _x, _y, _labelObj, _sprite, _state ,_cb,_scale) {
        // creating texture, text and button
        var texture =  new PIXI.Sprite(game.loader.resources[_sprite].textures[1]);
        var texture0 = game.loader.resources[_sprite].textures[1];
        var texture1 = game.loader.resources[_sprite].textures[0];
        texture.scale.x=_scale;
        texture.scale.y=_scale;
        texture.x=_x;
        texture.y=_y;
        var text = spriteManager_.addText ( 100,-10, _labelObj.text,.5,.5, _labelObj.style );
        text.setAnchor(.5,.5)
        var change = function change () {
            if ( state ) {
                state = false;
                this.texture=texture0;
            } else {
                state = true;
                this.texture=texture1;
            }
            if (_cb!=null)_cb(state);
        }
        var button =  texture;
            _g.addChild(texture);
            texture.addChild(text);
            _g.addChild(button);

            button.interactive = true;
            button.on('pointerdown', change)

            //
            // button.events.onInputDown.add( function( elm, pointer ){
            //     change();
            // }, _g );
        // setting default state to false
        var state = false;
        /**
         * changing state of checkbox and changing texture frame
         * @method checkbox#change
         */

        // if parameter _state is set to true, overwrite the default state
        if ( undefined !== arguments[4] && true === arguments[4] ) {
            change();
        }
        // return the checkbox object
        return {
            button : button,
            change : change,
            text : text,
            texture : texture,
            // setter for changing if checkbox is enabled or not
            set enabled ( bool ) {
                if ( bool ) {
                    texture.tint = 0xffffff;
                    texture.alpha = 1;
                    text.tint = 0xffffff;
                    text.alpha = 1;                                    
                } else {
                    texture.tint = 0x999999;
                    texture.alpha = 0.5;
                    text.tint = 0x999999;
                    text.alpha = 0.5;
                }
            },
            // setter to enable input-events
            set inputEnabled ( bool ) {

            },
            // setter for using hand-cursor over checkbox
            set useHandCursor ( bool ) {

            },
            // getter for the actual state
            get state () {
                return state;  
            },
            // setter for state like checkbox#change
            set state ( bool ) {
                if ( bool ) {
                    state = true;
                    this.texture=texture1;
                } else {
                    state = false;
                    this.texture=texture0;
                }
            },
            // getter for horizontal and vertical position
            get x () {
                return texture.x;  
            },
            get y () {
                return texture.y;  
            },
            // setter for horizontal and vertical position
            set x ( xpos ) {
                button.x = xpos - 2;
                texture.x = xpos;
                text.x = texture.x + texture.width + 5;
            },
            set y ( ypos ) {
                button.y = ypos - 2;
                texture.y = ypos;
                text.y = ypos;
            },
            // methods to adding eventHandler for over, out and up events

            // kill the elements
            kill : function(){
                button.kill();
                texture.kill();
                text.kill();
            }
        };
    }  

})();