import DS from 'ember-data';

export default DS.Model.extend({
  revision: DS.attr(),
  entries: DS.attr(),
});
