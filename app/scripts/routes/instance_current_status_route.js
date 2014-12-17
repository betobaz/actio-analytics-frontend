ActioAnalyticsFrontend.InstanceCurrentStatusRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('instance', this.modelFor('instance').id);
  },
  setupController: function(controller, model){
    controller.set('model', model);
  }
});

