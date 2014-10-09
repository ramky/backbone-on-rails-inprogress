var ExampleApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function (data) {
    this.tasks = new ExampleApp.Collections.Tasks(data.tasks);
    new ExampleApp.Routers.Tasks();
    Backbone.history.start();
  }
};
