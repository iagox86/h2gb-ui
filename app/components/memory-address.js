import Ember from 'ember';

export default Ember.Component.extend({
  // Get rid of the <div> around it
  tagName: '',

  actions: {
    addressclick: function(address) {
      console.log(address);
      console.log('#address-' + address);
      console.log($('#address-' + address));
      console.log($('#address-' + address).offset());
      $('html, body').animate({scrollTop: $('#address-' + address).offset().top + 'px'}, 'fast');
    }
  },
});
