import Ember from 'ember';

export function numberHex(params, hash) {
  var prefix = hash['noprefix'] ? '' : '0x';
  var values = hash['value'];
  var length = hash['length'];

  if(typeof values !== 'object') {
    values = [values];
  }

  values = values.map(function(value) {
    var hex_value = value.toString(16);
    return prefix + '0'.repeat(length - hex_value.length) + hex_value;
  });

  return values.join(',');
}

export default Ember.Helper.helper(numberHex);
