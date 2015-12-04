var initialCats = [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/cute-little-cat.jpg',
    imgAttribution: 'http://www.medhatspca.ca/sites/default/files/news_photos/2014-Apr-15/node-147/cute-little-cat.jpg',
    nicknames: [
        {name:"Tony the Tiger"},
        {name:"Terry the Terrible"},
        {name: "Spaz"},
        {name: "Creepy"}
      ]
  },
  {
    clickCount: 0,
    name: 'Jarvis',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: '',
    nicknames: [
        {name:"Cat in My Hat"},
        {name:"Compu Kitty"}
      ]
  },
  {
    clickCount: 0,
    name: 'Toni-Rie',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: '',
    nicknames: [
        {name:"Tony the Tiger"},
        {name:"Herrroww Nurse!"}
      ]
  },
  {
    clickCount: 0,
    name: 'Shadow',
    imgSrc: 'img/cute-little-cat.jpg',
    imgAttribution: 'http://www.medhatspca.ca/sites/default/files/news_photos/2014-Apr-15/node-147/cute-little-cat.jpg',
    nicknames: [
        {name:"Spooky"}
      ]
  },
  {
    clickCount: 0,
    name: 'MegaMan',
    imgSrc: 'img/cute-little-cat.jpg',
    imgAttribution: 'http://www.medhatspca.ca/sites/default/files/news_photos/2014-Apr-15/node-147/cute-little-cat.jpg',
    nicknames: [
        {name:"Blue Boy"}
      ]
  }
];

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push( new Cat(catItem) );
  });
  this.setCat = function(clickedCat){
    self.currentCat(clickedCat);
  };
  this.currentCat = ko.observable( this.catList()[0] );
  this.incrementCounter = function(){
    this.clickCount(this.clickCount()+1);
    //this.level();
  };
};
var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
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
  this.nicknames = ko.observableArray(data.nicknames);
};

ko.applyBindings(new ViewModel());
