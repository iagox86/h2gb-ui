import Ember from 'ember';

export default Ember.Component.extend({
  // Get rid of the <div> around it
  tagName: '',

  actions: {
    'mytest6': function() {
      console.log('memory-entry.js :: mytest6');
    },
  },
});
