import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name      : DS.attr('string'),
  recharge  : DS.attr('string', { defaultValue: 'Extended Rest' }),
  weight    : DS.attr('number', { defaultValue: 1 }),
  current   : DS.attr('number', { defaultValue: 1 }),
  max       : DS.attr('number', { defaultValue: 1 }),

  character : DS.belongsTo('character', { async: true, autoSave: true }),

  percent   : Ember.computed('current', 'max', function(){
    return Math.round(this.get('current')/this.get('max')*100);
  }),
  increment: function() {
    if(this.get('current') === this.get('max')) {
      return;
    }
    this.incrementProperty('current');
    return this.save();
  },
  decrement: function() {
    if(this.get('current') === 0) {
      return;
    }
    this.decrementProperty('current');
    return this.save();
  },
});
