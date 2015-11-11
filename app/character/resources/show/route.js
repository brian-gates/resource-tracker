import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.find('character-resource', params.resource_id);
  }
});
