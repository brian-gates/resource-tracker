import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('home', { path: '/' });

  this.route('character', { path : '/characters/:id' }, function() {
    this.route('show', { path: '' });

    this.route('resources', function() {
      this.route('show', { path: ':resource_id' });
      this.route('new');
    });

  });

  this.route('characters', function() {
    this.route('new');
  });

  this.route('parties', function() {
    this.route('new');
  });

  this.route('party', { path : '/parties/:id' }, function() {
    this.route('show', { path: '' });

    this.route('characters', function() {
      this.route('new');
    });

  });
});

export default Router;
