jQuery(function($) {

    // Adding openItems function to Drupal behaviors so it will be called on Ajax completed request
    Drupal.behaviors.openProjectItem = {
        // Context here allows your function to run on ajax calls
        attach: function(context, settings) {
          // opening items
          openItems();
        }
    };

    function openItems() {

        $('.field-multiple-table tr .form-radios input').each(function( idx ) {
            
            var value = this.value;
            // Adding the event for user checing inputs
            $(this).change(function() {
                openItem(this);
            });
            // Opening checked items
            if ($(this).is(':checked')) {
                openItem(this);
            }
        })       
    }

    function openItem(input) {
        // Getting field id by input id by removing '-type-und' from input id
        var fieldId = '#' + input.id.replace('-type-und', '');  
        // Removing 'active' class from all related fields
        $(input).closest('.form-wrapper').siblings().removeClass('active');
        // Adding 'active' to open item
        $(fieldId).addClass('active');
    }
    
        $( document ).ready(function() {
            // Opening Items on document load
            openItems();
        });
        
    });