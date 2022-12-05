/**
 * KiS Framework, Created by Tom on 14/08/2016.
 @param
     message --> the messga eto be displayed
 action --> 'warning', 'error', 'fatal-error', 'message'
 title --> message title
 buttons --> buttons array [{action:action, label:label}],
 closebutton --> boolean hide/show close button in header,
 modal --> boolean modal true/false
 */
function MessageScreen(message, action, title, buttons, closeButton, modal) {

    var _this = this;
    var message_ = decodeURI(message);
    var action_ = action;
    var title_ = title;
    var buttons_ = buttons;
    var closeButton_ = closeButton;
    var modal_ = modal;

    var element;

    //Initialise class
    function initClass_() {

        logger('MessageScreen init');

        element = document.createElement('div'); //Root message element
        element.className = 'message__box ' + (modal_ ? 'message__modal' : 'message__nonmodal'); //Set class
        element.innerHTML = getTemplate_(); //Get inner message content

        setCallbacks_(); //Set callbacks for message buttons

        document.getElementById('mainViewport').appendChild(element); //Add message to page
        show_(); //Show message

    }

    //Show message
    function show_(){
        element.classList.remove("hidden");
    }

    //Hide message
    function hide_(complete){
        element.classList.add("hidden");
    }

    //Destory message and remove event listeners
    function destroy_(){

        console.log('MessageScreen destroy');

        //Hide message
        //hide_(function() {
        if (element!=null) {
            document.getElementById('mainViewport').removeChild(element); //Remove message from DOM
            delete element; //Delete reference to message element node
            element = null; //Reset reference to message element node
        }
        //});

    }

    //Return markup for displaying message
    function getTemplate_(title, message){

        var title = title || title_; //Optional function argument
        var message = message || message_; //Optional function argument
        var orientation
        var template

        //If "NEW_UI" and mobile
        if (ReelConfig.newUI && framework.isTouch()) {

            window.innerHeight > window.innerWidth ? orientation = 'portrait' : orientation = 'landscape' //Determine orientation
            template = '<div class="message__container ' + orientation + '">'                             //Create message container div with orientation styling

        }

        //Old ui
        else {
            template = '<div class="message__container">'
        }

        template += '<header><h2>' + Translate.do(title) + '</h2>' + (closeButton_ ? '<button class="message__close">X</button>' : '') + '</header>';
        template += '<section>' + Translate.do(message) + '</section>';

        //If "NEW_UI" and mobile
        if (ReelConfig.newUI && framework.isTouch()) {
            template += '<footer class="container-footer">' + getButtons_(buttons) + '</footer>';
        }

        //Old UI or desktop
        else {
            template += '<footer>' + getButtons_(buttons) + '</footer>';
        }

        template += '</div>';

        return template;

    }

    //Return markup for message buttons
    function getButtons_(buttons){

        var buttons = buttons || buttons_; //Optional function argument

        var buttonTemplate = '';

        for (var i = buttons.length - 1; i >= 0; i--) {

            var button = buttons[i];

            //If "NEW_UI" and mobile
            if (ReelConfig.newUI && framework.isTouch()) {
                buttonTemplate += '<div class="message__button"><span class="message__button__text">'+Translate.do(button.label)+'</span></div>';
            }

            //Old UI or desktop
            else {
                buttonTemplate += '<div class="message__button" style="width: calc(' + Math.floor(100 / buttons.length) + '% - 20px);"><span class="message__button__text">'+Translate.do(button.label)+'</span></div>';
            }

        }

        return buttonTemplate;

    }

    //Set button callbacks
    function setCallbacks_(){

        //If close button is set
        if (closeButton_) {
            element.getElementsByClassName('message__close')[0].addEventListener('click', destroy_); //Add event listener for close button
        }

        var buttonElems = element.getElementsByClassName('message__button'); //Get button elements
        var buttons = buttons_.reverse(); //Reverse buttons array (elems are in reverse order)

        //Loop through buttons
        for (var i = 0; i < buttons.length; i++) {
            buttonElems[i].addEventListener('click', buttons[i].action); //Add listener for button
        }

    }

    var me = {
        show: show_,
        hide: hide_,
        destroy: destroy_
    }

    initClass_();

    return me;

}

//Function for showing a generic error message
MessageScreen.showGenericError = function(value) {

    var value_ = value || "Apparently we’re having some trouble, please try again later."; //Optional message parameter

    if (autoPlayManager_!= undefined && autoPlayManager_.getIsInAutoPlay()) {
        autoPlayManager_.toggleAutoPlay();
        framework.setAutoPlayState(0);
        if (ReelConfig.newUI && !framework.isTouch()) {
            window.newUI.autospin().state = 'START';
        }
    }

    if (spinManager_!= undefined && spinManager_.getSpinned())spinManager_.stopSpinForError();
    if(buttonManager_!=undefined)buttonManager_.applyState("NH");

    //Display error message
    var message_ = new MessageScreen(
        value_,
        "error",
        "Something went wrong!",
        [{
            label: 'Lobby',
            action: function() {
                message_.destroy(),
                    window.sendCustomEvent("f1x2gan", { detail: "gameClosing" })
                f1x2.clientWrapperInit.send("game-close")
                if (f1x2.clientWrapperInit.doLobbyURLNavigate) {
                    window.top.location.replace(gameParams.lobbyurl)
                }
            }
        }],
        false
    );

}

//Function for showing a generic error message
MessageScreen.showMessageFromServer = function(value, errorCode) {

    //RETURN TO LOBBY BUTTON FOR FATAL ERROR 
    var buttons = [{
        label: 'Lobby',
        action: function() {
            message_.destroy(),
                window.sendCustomEvent("f1x2gan", { detail: "gameClosing" })
            f1x2.clientWrapperInit.send("game-close")
            if (f1x2.clientWrapperInit.doLobbyURLNavigate) {
                window.top.location.replace(gameParams.lobbyurl)
            }
        }
    }];

    //THESE ERROR CODES ARE NON-FATAL SO SHOW AN OK BUTTON INSTEAD
    if(errorCode == 50089){
        //standard non fatal
        buttons = [{
            label: 'OK',
            action: function() {
                message_.destroy();
                window.location.reload();
            }
        }];
    }

    var value_ = value;// || "Apparently we’re having some trouble, please try again later."; //Optional message parameter

    if (autoPlayManager_!= undefined && autoPlayManager_.getIsInAutoPlay()) {
        autoPlayManager_.toggleAutoPlay();
        framework.setAutoPlayState(0);
    }

    if (spinManager_!= undefined && spinManager_.getSpinned())spinManager_.stopSpinForError();
    if(buttonManager_!=undefined){
        if(errorCode == 50089) {//not fatal
            buttonManager_.applyState("NH");
        }else{
            buttonManager_.applyState("AFTERSPIN");
        }

    }

    //Display error message
    var message_ = new MessageScreen(
        value_,
        "error",
        "Something went wrong!",
        buttons,
        false
    );

}
