var ActioAnalyticsFrontend = window.ActioAnalyticsFrontend = Ember.Application.create({
	ready: function() {
		var self = this;
		var socket = io.connect('http://localhost:1337');
		this.socket = socket;
		socket.on('start', function (argument) {
			//socket.emit('instance', '548b9580b37113951dc23a2e');

		})
		socket.on('findAll', _.bind(function(data){
			console.log('data: ',data);	
			if(data.records && data.records.length){
				
				if(data.model == 'Instance' && {
					_.each(data.records, function(item){
						ActioAnalyticsFrontend[data.model].store.push(data.model, item);
					});
				}
			}		

		}, self));

		socket.on('instancestatus', _.bind(function(instance){
			//debugger;
			console.log('message: ',instance);			
		}, self));

	},

});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
