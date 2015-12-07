jQuery(document).ready(function(){
/* 
 * The owlcoursel needs  to trigger  window resize to adjust the image width in mobile devices.
 * The edited library is included in the module.
 * 
 * added this file in the info file so it automatically attaches that to the dom.
 *
 */


 /*page refresh on load for owl-coursel mobile devices*/
 
      var width = jQuery( window ).width();
      
      if(width<768)
      {
      
        jQuery(window).trigger('resize');
      }
     
   

});
