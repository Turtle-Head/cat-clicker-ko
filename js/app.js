var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/cute-little-cat.jpg');
  this.imgAttribution = ko.observable('http://www.medhatspca.ca/sites/default/files/news_photos/2014-Apr-15/node-147/cute-little-cat.jpg');

  this.incrementCounter = function(){
    this.clickCount(this.clickCount()+1);
  };
};

ko.applyBindings(new ViewModel());
