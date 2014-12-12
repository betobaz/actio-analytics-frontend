ActioAnalyticsFrontend.InstanceRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('instance', params.instance_id);
  }
});

