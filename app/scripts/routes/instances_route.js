ActioAnalyticsFrontend.InstancesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('instance');
  }
});

