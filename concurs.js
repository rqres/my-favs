Entries = new Mongo.Collection("entries");

if (Meteor.isClient) {
  
  var itemSub; 
  itemSub = Meteor.subscribe("all-my-entries");
  
  
  Template.entry.helpers({

  });

  Template.entry.events({
    "click .delete": function() {
      Entries.remove(this._id);
    }
  });

  Template.body.helpers({
    entries: function () {
      return Entries.find({}, {sort: {grade: -1}});
    },
    nElemente: function () {
            return Entries.find({}).count();
    }
  });

  Template.body.events({
  "change .select-filtru": function () {
    if (itemSub)
            itemSub.stop();
        if (document.getElementById('filtru').value=="ALL")
           itemSub = Meteor.subscribe('all-my-entries');
          else
            itemSub = Meteor.subscribe('my-entries', document.getElementById('filtru').value);

  },
  
  
    "submit .new-entry": function (event) {
      var text = event.target.text.value;
      var extra = event.target.extra.value;
      var type = event.target.type.value
      var grade = event.target.grade.value-0; 


      if(event.target.text.value !== "" && event.target.type.value !== "0" && event.target.extra.value !== "") {
        Entries.insert({
          text: text,
          type: type,
          grade: grade,
          // color: color,
          extra: extra,
          // createdAt: new Date()
        });
        Materialize.toast('Item added!', 2000, 'rounded');
      } else {
        alert("The fields are blank!");
      }

      event.target.text.value = "";
      event.target.type.value = 0;
      event.target.extra.value = "";
      event.target.grade.value = 0;

      return false;
    }
  });

  Template.rating.rendered = function () {
    this.$('.rateit').rateit();
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Entries.find().count() === 0) {
      Entries.insert({
        text: "The Artist",
        type: "RESTAURANT",
        grade: 7,
        extra: "Str. Tonitza nr. 13 Bucharest, District 3, Romania / 0728 318 871"
      });
      Entries.insert({
        text: "Fibrio",
        type: "RESTAURANT",
        grade: 9,
        extra: "Str. Marcel Andreescu nr. 11, District 1, Bucharest / 0723342746"
      });
      Entries.insert({
        text: "Casa Doina",
        type: "RESTAURANT",
        grade: 4,
        extra: "Sos. Kiseleff, nr 4, Bucharest, District 1, Romania / 021 - 222 67 17"
      });
      Entries.insert({
        text: "Ota",
        type: "RESTAURANT",
        grade: 9,
        extra: "Str. Dr. Staicovici nr. 26, Bucharest, Romania /  0721 840 723"
      });
      Entries.insert({
        text: "DaDa Bistro",
        type: "RESTAURANT",
        grade: 4,
        extra: "Str. Matei Voievod, nr. 94, Bucharest, District 2, Romania/ 021- 2523159"
      });
      Entries.insert({
        text: "Galo Nero",
        type: "RESTAURANT",
        grade: 6,
        extra: "B-dul. Decebal, nr. 12, Bucuresti, Sector 3, Romania/ 021 – 326 81 28"
      });
      Entries.insert({
        text: "Carol Presto Pizza",
        type: "RESTAURANT",
        grade: 9.5,
        extra: "B-dul Marasesti, 2B, Sect 4, Bucuresti / 0755 141 141"
      });
      Entries.insert({
        text: "Alioli",
        type: "RESTAURANT",
        grade: 7,
        extra: "Str. Popa Tatu nr. 4, Bucharest/ 021 - 311 80 27"
      });
      Entries.insert({
        text: "Cheia fulgerului",
        type: "BOOK",
        grade: 7,
        extra: "Jon Berkeley"
      });
      Entries.insert({
        text: "Aventurile lui Habarnam si ale prietenilor sai",
        type: "BOOK",
        grade: 7,
        extra: "Nikolai Noslov"
      });
      Entries.insert({
        text: "Hotul de Carti",
        type: "BOOK",
        grade: 9,
        extra: "Markus Zusak"
      });
      Entries.insert({
        text: "Tomi",
        type: "BOOK",
        grade: 6,
        extra: "Adrian Oprescu"
      });
      Entries.insert({
        text: "Witch",
        type: "BOOK",
        grade: 6,
        extra: "Elisabetta Gnore"
      });
      Entries.insert({
        text: "Captiv in labirint",
        type: "BOOK",
        grade: 8,
        extra: "James Dashner"
      });
      Entries.insert({
        text: "Nepotul Magicianului",
        type: "BOOK",
        grade: 7,
        extra: "C. S. Lewis"
      });
      Entries.insert({
        text: "Harriet spioneaza",
        type: "BOOK",
        grade: 8,
        extra: "Louise Fitzhugh"
      });
      Entries.insert({
        text: "Despicable Me",
        type: "MOVIE",
        grade: 9,
        extra: 2010
      });
      Entries.insert({
        text: "Ice Age 4",
        type: "MOVIE",
        grade: 9,
        extra: 2012
      });
      Entries.insert({
        text: "The Avengers",
        type: "MOVIE",
        grade: 10,
        extra: 2012
      });
      Entries.insert({
        text: "Guardians of the Galaxy",
        type: "MOVIE",
        grade: 9,
        extra: 2014
      });
      Entries.insert({
        text: "Gnomeo and Juliet",
        type: "MOVIE",
        grade: 9,
        extra: 2011
      });
      Entries.insert({
        text: "Yogi Bear",
        type: "MOVIE",
        grade: 6,
        extra: 2010
      });
      Entries.insert({
        text: "Shrek forever after",
        type: "MOVIE",
        grade: 9,
        extra: 2010
      });
      Entries.insert({
        text: "Toy Story 3",
        type: "MOVIE",
        grade: 9,
        extra: 2010
      });
      Entries.insert({
        text: "Angry Birds",
        type: "GAME",
        grade: 8,
        extra: "2009 game"
      });
      Entries.insert({
        text: "Ben 10",
        type: "GAME",
        grade: 7,
        extra: "2009 game"
      });
      Entries.insert({
        text: "Iron Man",
        type: "GAME",
        grade: 7,
        extra: "2010 game"
      });
      Entries.insert({
        text: "Minecraft",
        type: "GAME",
        grade: 10,
        extra: "2009 game"
      });
      Entries.insert({
        text: "Candy Crush",
        type: "GAME",
        grade: 8,
        extra: "2012 game"
      });
      Entries.insert({
        text: "Mortal Kombat",
        type: "GAME",
        grade: 10,
        extra: "1992 game"
      });
      Entries.insert({
        text: "Power Rangers",
        type: "GAME",
        grade: 8,
        extra: "1993 game"
      });
      Entries.insert({
        text: "League of Legends",
        type: "GAME",
        grade: 9,
        extra: "2009 game"
      });
      Entries.insert({
        text: "Tineretului",
        type: "PARK",
        grade: 9,
        extra: "District 4, Bucharest"
      });
      Entries.insert({
        text: "Carol",
        type: "PARK",
        grade: 9,
        extra: "District 4, Bucharest"
      });
      Entries.insert({
        text: "Herastrau",
        type: "PARK",
        grade: 10,
        extra: "District 1, Bucharest"
      });
      Entries.insert({
        text: "Aventura Park Luciana",
        type: "PARK",
        grade: 7,
        extra: "sat Lucianca nr. 151, comuna Butimanu"
      });
      Entries.insert({
        text: "Edenland",
        type: "PARK",
        grade: 9,
        extra: "str. Cantonului, Baloteşti"
      });
      Entries.insert({
        text: "Parc Aventura Comana",
        type: "PARK",
        grade: 8,
        extra: "Comana str. Gellu Naum 607, Giurgiu"
      });
      Entries.insert({
        text: "PaintballAS",
        type: "PARK",
        grade: 9,
        extra: "Padurea Baneasa"
      });
      Entries.insert({
        text: "Phoenix Aventura Parc ",
        type: "PARK",
        grade: 7,
        extra: "str. Revedere, comuna Cernica"
      });
    }
  });
  
  

  Meteor.publish('my-entries', function publishFunction(search_val) {
    return Entries.find({type: search_val}, {sort: {grade: -1}});
 });
 
  Meteor.publish("all-my-entries", function () {
    return Entries.find({}, {sort: {grade: -1}});
  });
  
}
