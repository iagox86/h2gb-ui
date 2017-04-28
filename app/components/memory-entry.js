import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit: function(entry) {
      this.set('editAddress',    '0x' + entry.address.toString(16));
      this.set('editLength',     '0x' + entry.length);
      this.set('editType',       entry.data.type);
      this.set('editValue',      entry.data.value);
      this.set('editComment',    entry.data.comment);

      this.set('editRefs', entry.refs.map(function(ref) {
        return '0x' + ref.toString(16);
      }).toString());

      this.set('showEdit', true);

      return true;
    },
    cancelEdit: function() {
      this.set('showEdit', false);
    },
    saveEdit: function() {
      var me = this;

      var address = parseInt(this.get('editAddress'));
      var length  = parseInt(this.get('editLength'));
      var type    = this.get('editType');
      var value   = this.get('editValue');
      var comment = this.get('editComment');
      var refs    = null;
      if(this.get('editRefs')) {
        refs = this.get('editRefs').split(/[ ,]+/).map(function(val) {
          return parseInt(val);
        });
      }

      var editData = {
        'address': address,
        'length':  length,
        'type':    type,
        'value':   value,
        'comment': comment,
        'refs':    refs,
      };

      Ember.$.ajax('http://localhost:4567/api/edit_memory/1', {
        data: JSON.stringify(editData),
        contentType: 'application/json',
        type: 'POST',
      }).then(function() {
        me.set('showEdit', false);
        window.location.reload();
      });
    },
  },
});
