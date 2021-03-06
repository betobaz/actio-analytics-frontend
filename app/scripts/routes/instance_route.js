ActioAnalyticsFrontend.InstanceRoute = Ember.Route.extend({
  model: function(params) {  	
  	ActioAnalyticsFrontend.socket.emit('findAll', {
  		model: 'Agent',
  		query: {
  			instance: params.instance_id
  		}
  	});
  	return this.get('store').find('instance', params.instance_id);
  }
});

