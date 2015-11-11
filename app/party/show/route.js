import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.modelFor('party');
  },
  actions: {
    delete() {
      return this.get('currentModel').destroyRecord()
        .then(()=>{
          this.transitionTo('parties');
        });
    },
    addCharacter() {
      this.transitionTo('party.characters.new', this.get('currentModel.id'));
    },
  },
});
