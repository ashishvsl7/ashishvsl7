/**
 * KiS Framework, Created by Tom on 14/07/2016.
 */
function CircularSelector(target, targetValues, backGround, listner, side, defaultValue, callBack, openCall, _underlay) {

    var target_ = target;
    var targetValues_ = targetValues;
    var backGround_ = backGround;
    var segments_ = $(target_).find(".selection__values li");
    var dragObject;
    var deg_ = 22.5;
    var degrees = [];
    var callBack_ = callBack;
    var openCall_ = openCall || getBoxInfo_;

    var boxInfo_ = {
        value: defaultValue,
        step: 0,
    };

    var side_ = side;

    var open = false;

    function initClass_(listner) {

      /*  if (listner) {
            $(target_).find('.button__center').on('touchstart click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                //custom code here
                //$("#spin").off("click touchstart");
                toggleSelector();
                openCall_(open);

            });
        }*/

        var deg = deg_;
        var i = 0;
        var startDeg = 90;
        if (side_ === "right") {
            logger("right side");
            startDeg = 270;
        }

        $(segments_).each(function(index) {

            if (i < targetValues_.length) {
                $(this).find("div").text(targetValues_[i]);
                var degree = (deg * i) * -1;
                degrees.push(degree + startDeg);
                i++;
                logger("betValue " + i + ": " +targetValues_[i]);
            }

            TweenMax.set($(this), { rotation: index * deg });

        });

        var degMul = targetValues_.length - 1;

        var minRot = (deg * degMul) - startDeg;

        logger("minRotation: " + minRot * -1); //

        var rotationSnap = deg;
        dragObject = Draggable.create($(target_).find(".rotational__div"), {
            type: "rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable!
            throwProps: true, //enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
            edgeResistance: 0.75,
            bounds: { minRotation: minRot * -1, maxRotation: startDeg },
            snap: function(endValue) {
                //this function gets called when the mouse/finger is released and it plots where rotation should normally end and we can alter that value and return a new one instead. This gives us an easy way to apply custom snapping behavior with any logic we want. In this case, just make sure the end value snaps to 90-degree increments but only when the "snap" checkbox is selected.
                return Math.round(endValue / rotationSnap) * rotationSnap;
            },
            onDrag: adjustOpacity,
            onDragStart: function(event) {
                gameClass_.leaveGame();
                TweenMax.set($(segments_).find("div"), { color: "white" });
            },
            onThrowUpdate: adjustOpacity,
            onThrowComplete: function(event) {
                gameClass_.backToGame();
                logger("released: " + this.rotation + " value: " + getValue(this.rotation));
            }
        });

        adjustOpacity(0);
        setValue(boxInfo_.value);

        if (_underlay) {
            $(target_).addClass('underlay');
        }

    }

    function toggleSelector() {

        if (open) {
            hideSelector_();
        } else {
            //buttonManager_.applyState("APNH");
            showSelector_();
        }
    }


    function adjustOpacity(rotationAmount) {
        gameClass_.leaveGame();
        var rotation = this.rotation || rotationAmount;

        for (var i = 0; i < segments_.length; i++) {

            var distanceFromActiveRotation = (rotation - degrees[i]) / 100;

            var opacity = 1 - Math.abs(distanceFromActiveRotation);

            var scale = Math.max(1.2 - Math.abs(distanceFromActiveRotation), 1);

            TweenLite.set(segments_[i], { opacity: opacity });
            TweenLite.set($(segments_[i]).find("div"), { scale: scale });
        }

    }


    function setValue(val) {

        logger("in set value. " + val);

        for (var i = 0; i < targetValues_.length; i++) {

            if (val === targetValues_[i]) {
                TweenMax.set($(target_).find(".rotational__div"), { rotation: degrees[i] });
                Draggable.get($(target_).find(".rotational__div")).update();
                adjustOpacity(degrees[i]);
                getValue(degrees[i]);
                logger("Setting Value: " + degrees[i]);
            }
        }

    }


    function getValue(rotation) {

        for (var i = 0; i < degrees.length; i++) {

            if (rotation === degrees[i]) {
                var item = $(segments_).eq(i).find("div");
                TweenMax.to(item, 0.1, { color: "yellow" });
                boxInfo_.step = i;
                boxInfo_.value = targetValues_[i];
                callBack_(boxInfo_.value);
                return boxInfo_.value;
            }
        }

        return 0;

    }

    function setValueAmount_(val){

        logger("SET VALUE AMOUNT: " + val);

        for (var i = 0; i < targetValues_.length; i++) {

            if (Number(val) === Number(targetValues_[i])) {
                logger("SET VALUE AMOUNT: " + i);
                TweenMax.set($(target_).find(".rotational__div"), { rotation: degrees[i] });
                Draggable.get($(target_).find(".rotational__div")).update();
                adjustOpacity(degrees[i]);
                var item = $(segments_).eq(i).find("div");
                TweenMax.to(item, 0.1, { color: "yellow" });
                boxInfo_.step = i;
                boxInfo_.value = targetValues_[i];
            }
        }

    }

    function showSelector_() {
        if(target_.selector=="#bet" || buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()) {
            //$(backGround_).removeClass("hidden");
            fadeElement($(backGround_), 'in');
            open=true;
            //$("#autoPlayMobileInput").show();
            if(target_.selector!="#bet") {
                $("#autoPlayMobileInput").show();
            }
        }
    }

    function hideSelector_() {
        //$(backGround_).addClass("hidden");
        fadeElement($(backGround_), 'out');
        if(target_.selector!="#bet") {
            $("#autoPlayMobileInput").hide();
        }
        open=false;
    }

    function getBoxInfo_() {
        return boxInfo_;
    }

    function setBackground_(imgSrc) {

        $(target_).find('.button__center').css("background-image", imgSrc);

    }


    var me = {

        setBoxInfo: function(defaultValue) {
            getBoxInfo_.value = defaultValue
        },
        getBoxInfo: getBoxInfo_,
        showSelector: showSelector_,
        hideSelector: hideSelector_,
        setBackground: setBackground_,
        setValueAmount:setValueAmount_,
        toggleOpen: function() {
            toggleSelector();
        }

    }

    initClass_(listner);

    return me;
}
