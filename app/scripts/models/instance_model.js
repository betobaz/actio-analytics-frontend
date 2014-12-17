/*global Ember*/
ActioAnalyticsFrontend.Instance = DS.Model.extend({
    name: DS.attr('string'),

    sugar_url: DS.attr('string'),

    actio_instance_id: DS.attr('string'),

    agents: DS.hasMany('agent', {async: true}),

    instancestatus: DS.belongsTo('instance-status')

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
ActioAnalyticsFrontend.Instance.FIXTURES = [];
