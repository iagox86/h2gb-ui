import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit: function() {
      console.log('click2');
    },
  },

  doubleClick: function() {
    console.log('doubleclick');
  },
});
