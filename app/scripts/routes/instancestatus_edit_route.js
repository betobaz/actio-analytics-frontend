ActioAnalyticsFrontend.InstancestatusEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('instancestatus', this.modelFor('instancestatus').id);
  },
  setupController: function(controller, model){
    controller.set('model', model);
    buffer = model.get('attributes').map(function(attr){
      return { key: attr.get('key'), value: attr.get('value') }
    });
    controller.set('buffer', buffer)
  }
});

