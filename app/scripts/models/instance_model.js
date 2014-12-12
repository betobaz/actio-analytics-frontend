/*global Ember*/
ActioAnalyticsFrontend.Instance = DS.Model.extend({
    name: DS.attr('string'),

    sugarUrl: DS.attr('string'),

    instanceId: DS.attr('string'),

    agents: DS.hasMany('agent', {async: true}),

    instancestatus: DS.belongsTo('instancestatus')

});

// probably should be mixed-in...
ActioAnalyticsFrontend.Instance.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
ActioAnalyticsFrontend.Instance.FIXTURES = [
  
  {
    id: 1,
    
    name: 'Merxbp',
    
    sugarUrl: 'https://merxbp.sugarondemand.com/',
    
    instanceId: 'foo',

    instancestatus: 1,

    agents: [1,2]
    
  },
  
  {
    id: 2,
    
    name: 'Paquetexpress',
    
    sugarUrl: 'https://paquetexpress.sugarondemand.com/',
    
    instanceId: 'foo',

    instancestatus: 2,

    agents: []
    
  }
  
];
