var ViewModel = function() {
  var self = this;
  this.currentCat = ko.observable( new Cat() );
  this.incrementCounter = function(){
    this.clickCount(this.clickCount()+1);
    //this.level();
  };
};
var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/cute-little-cat.jpg');
  this.imgAttribution = ko.observable('http://www.medhatspca.ca/sites/default/files/news_photos/2014-Apr-15/node-147/cute-little-cat.jpg');
  this.level = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if (clicks < 10){
      title = 'Newborn';
    } else if (clicks < 50) {
      title = 'Infant';
    } else if (clicks < 100) {
      title = 'Child';
    } else if (clicks < 200) {
      title = 'Teen';
    } else if (clicks < 300) {
      title = 'Adult';
    } else {
      title = 'Ninja';
    }
    return title;
  }, this);
  this.nicknames = ko.observableArray([
      {name:"Tony the Tiger"},
      {name:"Terry the Terrible"},
      {name: "Spaz"},
      {name: "Creepy"}
  ]);
};

ko.applyBindings(new ViewModel());
