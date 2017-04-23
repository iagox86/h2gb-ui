import Ember from 'ember';

export default Ember.Component.extend({
  // Get rid of the <div> around it
  tagName: '',

  // Convert values to padded hex
  didReceiveAttrs: function() {
    this._super(...arguments);

    var hex_value = this.get('value').toString(16);
    var prefix = this.get('noprefix') ? '' : '0x';
    this.set('value', prefix + '0'.repeat(this.get('length') - hex_value.length) + hex_value);
  }
});
