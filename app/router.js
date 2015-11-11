import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('character', { path : '/characters/:id'}, function() {
    this.route('show', { path: '' });
    this.route('resources', function() {
      this.route('new');
    });
  });
  this.route('characters', function() {
    this.route('new');
  });
});

export default Router;
