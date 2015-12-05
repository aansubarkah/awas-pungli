import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contribute');
  this.route('about');
  this.route('disclaimer');
  this.route('markerviews');
  this.route('markers');
  this.route('categories');
  this.route('loading');
});

export default Router;
