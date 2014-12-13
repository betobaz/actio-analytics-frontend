/*global Ember*/
ActioAnalyticsFrontend.Instancestatus = DS.Model.extend({

    totalCalls: DS.attr('number'),

    totalMinutesCalls: DS.attr('number'),

    inboundCalls: DS.attr('number'),

    outboundCalls: DS.attr('number'),

    inboundLostCalls: DS.attr('number'),

    date: DS.attr('date'),

    instance: DS.belongsTo('instance'),

    callsPerHours: DS.attr('object'),

    callsPerHoursToArray: function() {
      var result = [];
      for(index in this.get('callsPerHours')) {
         result.push({ hour: index, value: this.get('callsPerHours')[index] });
      }
      return result;
    }.property('callsPerHours',
      'callsPerHours.0','callsPerHours.1','callsPerHours.2','callsPerHours.3','callsPerHours.4','callsPerHours.5','callsPerHours.6','callsPerHours.7','callsPerHours.8','callsPerHours.9','callsPerHours.10','callsPerHours.11','callsPerHours.12','callsPerHours.13','callsPerHours.14','callsPerHours.15','callsPerHours.16','callsPerHours.17','callsPerHours.18','callsPerHours.19','callsPerHours.20','callsPerHours.21','callsPerHours.22','callsPerHours.23')


});

// probably should be mixed-in...
ActioAnalyticsFrontend.Instancestatus.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
ActioAnalyticsFrontend.Instancestatus.FIXTURES = [
  
  {
    id: 1,

    instance: 1,
    
    totalCalls: 1,
    
    totalMinutesCalls: 1,
    
    inboundCalls: 1,
    
    outboundCalls: 1,
    
    inboundLostCalls: 1,

    callsPerHours:{0: 0,1: 0,2: 0,3: 0,4: 0,5: 0,6: 0,7: 0,8: 0,9: 0,10: 0,11: 0,12: 0,13: 0,14: 0,15: 0,16: 0,17: 0,18: 0,19: 0,20: 0,21: 0,22: 0,23: 0}
    
  },
  
  {
    id: 2,

    instance: 2,
    
    totalCalls: 1,
    
    totalMinutesCalls: 1,
    
    inboundCalls: 1,
    
    outboundCalls: 1,
    
    inboundLostCalls: 1,

    callsPerHours:{0: 0,1: 0,2: 0,3: 0,4: 0,5: 0,6: 0,7: 0,8: 0,9: 0,10: 0,11: 0,12: 0,13: 0,14: 0,15: 0,16: 0,17: 0,18: 0,19: 0,20: 0,21: 0,22: 0,23: 0}
    
  }
  
];
