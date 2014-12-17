ActioAnalyticsFrontend.Router.map(function () {
  
  this.resource('agents', function(){
    this.resource('agent', { path: '/:agent_id' }, function(){
      //this.route('edit');
    });
    //this.route('create');
  });
  
  this.resource('instances', function(){
    this.resource('instance', { path: '/:instance_id' }, function(){
      this.route('current_status');
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('instancestatuses', function(){
    this.resource('instancestatus', { path: '/:instancestatus_id' }, function(){
      //this.route('edit');
    });
    //this.route('create');
  });
  
});
