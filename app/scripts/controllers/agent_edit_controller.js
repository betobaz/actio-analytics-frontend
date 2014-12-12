ActioAnalyticsFrontend.AgentEditController = Ember.ObjectController.extend({
  needs: 'agent',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.agent.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('agent',this.get('model'));
    }
  }
});

