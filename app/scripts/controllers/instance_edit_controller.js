ActioAnalyticsFrontend.InstanceEditController = Ember.ObjectController.extend({
  needs: 'instance',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.instance.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('instance',this.get('model'));
    }
  }
});

