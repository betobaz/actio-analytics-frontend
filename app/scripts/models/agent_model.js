/*global Ember*/
ActioAnalyticsFrontend.Agent = DS.Model.extend({
    extension: DS.attr('string'),

    status: DS.attr('string'),

    sugarUserName: DS.attr('string'),

    entered: DS.attr('date'),

    instance: DS.belongsTo('instance', {async: true})
});

// probably should be mixed-in...
ActioAnalyticsFrontend.Agent.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
ActioAnalyticsFrontend.Agent.FIXTURES = [
  
  {
    id: 1,

    instance: 1,
    
    extension: '1016',
    
    status: 'online',
    
    sugarUserName: 'Pedrob',
    
    entered: 'foo'
    
  },
  
  {
    id: 2,

    instance: 1,
    
    extension: '1022',
    
    status: 'offline',
    
    sugarUserName: 'Ramon',
    
    entered: 'foo'
    
  }
  
];
