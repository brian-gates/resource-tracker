import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    increment(x) {
      return x.increment();
    },
    decrement(x) {
      return x.decrement();
    },
  }
});
