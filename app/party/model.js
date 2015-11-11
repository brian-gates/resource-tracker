import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  characters : DS.hasMany('character', { async: true, autoSave: true }),
  name       : DS.attr('string'),

  resourceLevel: 0,
  resourceLevelObserver: Ember.observer(
    'characters.@each.resourceLevel',
    function () {
      this.get('characters')
        .then(characters => {
          let resourceLevel = characters.reduce(
            (acc, character) => {
              acc.current += character.get('resourceLevel');
              acc.total   += 1;
              return acc;
            },
            { current: 0, total: 0 }
          );
          this.set('resourceLevel', Math.round(resourceLevel.current / resourceLevel.total));
        });
    }
  )
});
