ActioAnalyticsFrontend.AgentRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('agent', params.agent_id);
  }
});

