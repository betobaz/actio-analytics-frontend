ActioAnalyticsFrontend.InstancestatusesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('instancestatus');
  }
});

