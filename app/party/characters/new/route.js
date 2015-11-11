import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  notify: inject.service('notify'),
  queryParams: {
    name: {
      refreshModel: true
    }
  },
  model({ name }) {
    var params =  { filter: { } };
    if(name) {
      params.filter.name = new RegExp(`.*${name}.*`, 'i');
    }
    return this.store.query('character', params);
  },
  actions: {
    done() {
      this.transitionTo('party', this.modelFor('party'));
    },
    addCharacter(character) {
      var party = this.modelFor('party');

      party.get('characters')
        .then(characters => {
          characters.pushObject(character);
          return party.save();
        })
        .then(() => character.get('parties'))
        .then(parties => {
          console.log(parties);
          parties.pushObject(party);
          return character.save();
        })
        .then(() => {
          this
            .get('notify')
            .success(`${character.get('name')} has joined ${this.modelFor('party').get('name')}`);
        })
      ;
    }
  }
});
