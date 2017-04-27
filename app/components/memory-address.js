import Ember from 'ember';

export default Ember.Component.extend({
  // Get rid of the <div> around it
  tagName: '',

  actions: {
    mytest: function() {
      console.log('memory-address.js :: actions/mytest :: start');
      this.sendAction('mytest4', this.get('address'));
      console.log('memory-address.js :: actions/mytest :: finish');
    },
  }
});
