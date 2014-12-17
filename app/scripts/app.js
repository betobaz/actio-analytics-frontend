var ActioAnalyticsFrontend = window.ActioAnalyticsFrontend = Ember.Application.create({
	ready: function() {
		var self = this;
		var socket = io.connect('http://192.168.1.95:1337');
		this.socket = socket;
		
		socket.on('findAll', _.bind(function(data){
			console.log('data: ', data);	
			if(data.records && data.records.length){
				_.each(data.records, function(item){
					ActioAnalyticsFrontend[data.model].store.push(data.model, item);
				});
			}		
		}, self));

		socket.on('update', _.bind(function(data){
			console.log('data: ', data);	
			debugger;
			if(data.record){
				ActioAnalyticsFrontend[data.model].store.update(data.model, data.record);
			}		
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
