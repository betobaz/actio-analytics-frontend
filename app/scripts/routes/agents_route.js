ActioAnalyticsFrontend.AgentsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('agent');
  }
});

