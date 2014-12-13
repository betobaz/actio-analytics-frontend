var ActioAnalyticsFrontend = window.ActioAnalyticsFrontend = Ember.Application.create({
	ready: function() {
		var socket = io.connect('http://localhost:1337');
		this.socket = socket;
		socket.on('start', function (argument) {
			socket.emit('instance', '548b9580b37113951dc23a2e');					
		})
		socket.on('instance', function(instance){
			console.log('message: ',instance);
		});
	}
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
