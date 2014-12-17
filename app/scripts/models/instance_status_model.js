/*global Ember*/
ActioAnalyticsFrontend.InstanceStatus = DS.Model.extend({

    total_calls: DS.attr('number'),

    total_minutes_calls: DS.attr('number'),

    inbound_calls: DS.attr('number'),

    outbound_calls: DS.attr('number'),

    inbound_lost_calls: DS.attr('number'),

    date: DS.attr('date'),

    instance: DS.belongsTo('instance'),

    calls_per_hours: DS.attr('object'),

    calls_per_hoursToArray: function() {
      var result = [];
      for(index in this.get('calls_per_hours')) {
         result.push({ hour: index, value: this.get('calls_per_hours')[index] });
      }
      return result;
    }.property('calls_per_hours',
      'calls_per_hours.0','calls_per_hours.1','calls_per_hours.2','calls_per_hours.3','calls_per_hours.4','calls_per_hours.5','calls_per_hours.6','calls_per_hours.7','calls_per_hours.8','calls_per_hours.9','calls_per_hours.10','calls_per_hours.11','calls_per_hours.12','calls_per_hours.13','calls_per_hours.14','calls_per_hours.15','calls_per_hours.16','calls_per_hours.17','calls_per_hours.18','calls_per_hours.19','calls_per_hours.20','calls_per_hours.21','calls_per_hours.22','calls_per_hours.23')


});

// probably should be mixed-in...
ActioAnalyticsFrontend.InstanceStatus.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
ActioAnalyticsFrontend.InstanceStatus.FIXTURES = [
  
  {
    id: 1,

    instance: 1,
    
    totalCalls: 1,
    
    totalMinutesCalls: 1,
    
    inboundCalls: 1,
    
    outboundCalls: 1,
    
    inboundLostCalls: 1,

    calls_per_hours:{0: 0,1: 0,2: 0,3: 0,4: 0,5: 0,6: 0,7: 0,8: 0,9: 0,10: 0,11: 0,12: 0,13: 0,14: 0,15: 0,16: 0,17: 0,18: 0,19: 0,20: 0,21: 0,22: 0,23: 0}
    
  },
  
  {
    id: 2,

    instance: 2,
    
    totalCalls: 1,
    
    totalMinutesCalls: 1,
    
    inboundCalls: 1,
    
    outboundCalls: 1,
    
    inboundLostCalls: 1,

    calls_per_hours:{0: 0,1: 0,2: 0,3: 0,4: 0,5: 0,6: 0,7: 0,8: 0,9: 0,10: 0,11: 0,12: 0,13: 0,14: 0,15: 0,16: 0,17: 0,18: 0,19: 0,20: 0,21: 0,22: 0,23: 0}
    
  }
  
];
