Drupal.behaviors.schoolauditTabsData = {
  attach: function (context, settings) {
    var datalist = Drupal.settings.audit.DataArray;
      jQuery.each( datalist, function( key, value ) {
        jQuery( ".tabs li a" ).eq( value ).css( "color", "gray" );
        jQuery( ".tabs li a" ).eq( value ).click(function() {
          return false
        })
    });
  }
};
