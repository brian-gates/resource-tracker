import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.createRecord('character');
  },
  actions: {
    submit() {
      if(!this.get('currentModel.name')) {
        alert('Please enter a name');
      }
      return this
        .get('currentModel')
        .save()
        .then(model =>
          this.transitionTo('character.show', model.id)
        );
    },
    willTransition () {
      const model = this.get('currentModel');
      if(model.get('isDirty')) {
        return model.destroyRecord();
      }
    }
  }
});
