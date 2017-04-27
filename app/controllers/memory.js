import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    undo: function() {
      Ember.$.ajax('http://localhost:4567/api/undo/1', {
        data: JSON.stringify({}),
        contentType: 'application/json',
        type: 'POST',
      }).then(function() {
        me.set('showEdit', false);
        window.location.reload();
      });
    },

    redo: function() {
      Ember.$.ajax('http://localhost:4567/api/redo/1', {
        data: JSON.stringify({}),
        contentType: 'application/json',
        type: 'POST',
      }).then(function() {
        me.set('showEdit', false);
        window.location.reload();
      });
    },
  },
});
