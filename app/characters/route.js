import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('character');
  },
  actions: {
    create() {
      return this.transitionTo('characters.new');
    }
  }
});
