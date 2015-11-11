import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name       : DS.attr('string'),
  resources  : DS.hasMany('character-resource', { async: true, autoSave: true }),
  parties    : DS.hasMany('party', { async: true, autoSave: true }),

  resourceLevel: 0,
  resourceLevelObserver: Ember.observer(
    'resources.@each.current',
    'resources.@each.max',
    'resources.@each.weight',
    function () {
      this.get('resources')
        .then(resources => {
          let resourceLevel = resources.reduce(
            (acc, resource) => {
              acc.current += (resource.get('current') *resource.get('weight'));
              acc.total   += (resource.get('max')     *resource.get('weight'));
              return acc;
            },
            { current: 0, total: 0 }
          );
          this.set('resourceLevel', Math.round(resourceLevel.current / resourceLevel.total * 100));
        });
    }
  )
});
