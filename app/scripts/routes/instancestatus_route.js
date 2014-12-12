ActioAnalyticsFrontend.InstancestatusRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('instancestatus', params.instancestatus_id);
  },
  setupController: function(controller, model){
    controller.set('model', model);
  }
});

