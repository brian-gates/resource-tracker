import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createCharacter() {
      this.transitionTo('characters.new');
    },
    createParty() {
      this.transitionTo('parties.new');
    },
    increment(x) {
      return x.increment();
    },
    decrement(x) {
      return x.decrement();
    },
  }
});
