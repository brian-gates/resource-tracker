import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('party');
  },
  actions: {
    create() {
      return this.transitionTo('parties.new');
    }
  },
});
