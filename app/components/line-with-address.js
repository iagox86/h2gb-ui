import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    mytest3: function() {
      console.log('line-with-address :: mytest3');
      this.sendAction('mytest5');
    }
  },
});
