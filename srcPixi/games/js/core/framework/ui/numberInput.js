/**
 * KiS Framework, Created by Tom on 14/08/2016.
 */
function NumberInput(label, action, container, startValue, min, max) {

   var action_ = action;
   var label_ = label;
   var container_ = $(container);
   var startValue_ = startValue || 0;
   var input_;

    function initClass_() {

    	var textInput = $('<input class="auto__input" type="text" min="'+min+'" max="'+max+'" name="'+label_+'">');

    	container_.append(textInput);//add to the container
      input_ = $("input[name='"+label_+"']");

    	$(input_).change(function() {
           
           action_($(this).val());
      });

      setValue_(startValue_);

    }

    function setValue_(newVal){

      $(input_).val(newVal);
	  }

    function getValue_(){
      return $(input_).val();
    }

    var me = {

    	setValue:setValue_,
      getValue:getValue_

    }

    initClass_();

    return me;
}
