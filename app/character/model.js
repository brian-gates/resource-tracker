import DS from 'ember-data';

export default DS.Model.extend({
  name       : DS.attr('string'),
  resources  : DS.hasMany('character-resource', { async: true }),
});
