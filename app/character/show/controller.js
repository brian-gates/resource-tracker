import Ember from 'ember';

export default Ember.Controller.extend({
  exhaustion: 0,
  exhaustionObserver: Ember.observer(
    'model.resources.@each.current',
    'model.resources.@each.max',
    'model.resources.@each.weight',
    function () {
      this.get('model.resources')
        .then(resources => {
          let exhaustion = resources.reduce(
            (acc, resource) => {
              acc.current += (resource.get('current') *resource.get('weight'));
              acc.total   += (resource.get('max')     *resource.get('weight'));
              return acc;
            },
            { current: 0, total: 0 }
          );
          this.set('exhaustion', Math.round(exhaustion.current / exhaustion.total * 100));
        });
    }
  )
});
