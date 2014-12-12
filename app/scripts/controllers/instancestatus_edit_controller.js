ActioAnalyticsFrontend.InstancestatusEditController = Ember.ObjectController.extend({
  needs: 'instancestatus',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.instancestatus.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('instancestatus',this.get('model'));
    }
  }
});

