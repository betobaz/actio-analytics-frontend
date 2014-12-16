ActioAnalyticsFrontend.InstancesRoute = Ember.Route.extend({
  model: function() {
  	ActioAnalyticsFrontend.socket.emit('findAll', {
  		model: 'Instance'
  	});
    return this.get('store').find('instance');
  }
});

