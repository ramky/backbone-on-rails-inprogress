ExampleApp.Routers.Tasks = Backbone.Router.extend({

  routes: {
    "": "index"
  },

  index: function() {
    alert('Hello, World! This is a backbone router action.');
  }
});

