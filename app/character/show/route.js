import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.modelFor('character');
  },
  actions: {
    delete() {
      if(!confirm('Are you sure?')) {
        return;
      }
      return this.get('currentModel').destroyRecord()
        .then(()=>{
          this.transitionTo('characters');
        });
    },
    addResource() {
      this.transitionTo('character.resources.new', this.get('currentModel.id'));
    },
  },
});
