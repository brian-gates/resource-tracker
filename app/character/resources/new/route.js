import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('character-resource', {
      character: this.modelFor('character'),
    });
  },
  actions: {
    willTransition () {
      const model = this.get('currentModel');
      if(model.get('isDirty')) {
        return model.destroyRecord();
      }
    },
    cancel() {
      this.get('currentModel').destroyRecord();
      this.transitionTo('character.show', this.modelFor('character'));
    },
    submit() {
      let model = this.get('currentModel');
      if(!model.get('name')) {
        alert('Please enter a name');
        return;
      }
      model.set('current', model.get('max'));
      return this
        .get('currentModel')
        .save()
        .then(resource =>
          this.modelFor('character').set('resource', resource).save()
        )
        .then(character =>
          this.transitionTo('character.show', character)
        );
    },
  }
});
