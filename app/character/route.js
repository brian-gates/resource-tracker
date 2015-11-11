import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('character', params.id);
  },
  actions: {
    delete() {
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
