import Ember from 'ember';

export default Ember.Component.extend({
  // Get rid of the <div> around it
  tagName: '',

  // Convert values to padded hex
  didReceiveAttrs: function() {
    this._super(...arguments);

    var prefix = this.get('noprefix') ? '' : '0x';

    var values = this.get('value');
    var length = this.get('length');

    if(typeof values !== 'object') {
      values = [values];
    }

    values = values.map(function(value) {
      var hex_value = value.toString(16);
      return prefix + '0'.repeat(length - hex_value.length) + hex_value;
    });

    this.set('value', values.join(','));
  }
});
