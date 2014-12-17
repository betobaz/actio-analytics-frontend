ActioAnalyticsFrontend.InstancesRoute = Ember.Route.extend({
  model: function() {
  	ActioAnalyticsFrontend.socket.emit('findAll', {
  		model: 'Instance',
  		populate: 'agents'
  	});
    return this.get('store').find('instance');
  }
});

