import Ember from 'ember';

export default Ember.Controller.extend({
  editing: null,

  actions: {
    showedit: function(entry) {
      alert('hi!');
      //this.set('edit_address', entry['address']);
      //this.set('edit_value', entry.data.value);
      //this.set('edit_comment', entry.data.comment);
      //this.set('editing', true);
    },
    doedit: function(entry) {
      console.log(entry);
      this.set('editing', null);
    },
    mytest2: function() {
      console.log('memory.js :: mytest2');
    },
  },
});
