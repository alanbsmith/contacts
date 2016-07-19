// var oldHello = function(name) {
//   console.log('hello, ' + name + '!');
// };


// const hello = (name) => {
//   console.log(`hello, ${name}!`);
// };

// oldHello('world');
// hello('es6');

function printNames(){
  var names = [ "Andy Mention",
                "Emily Davis",
                "Eric Fransen",
                "Jessica Goulding",
                "Jonmichael Chambers",
                "Marc Garreau",
                "Tan Doan",
                "Alan Smith",
                "Allison Larson",
                "Andrew Watkins",
                "Chad Brading",
                "Corey Davis",
                "Gustavo Villagrana",
                "Hilary Denton",
                "Horacio Chavez",
                "Tim Proctor",
                "Will Faurot" ]

  var arrayLength = names.length;

  for (var i = 0; i < arrayLength; i++) {
    var currentName = names[i];
    var div = document.createElement("div");
    div.setAttribute('class', 'contact');
    div.innerHTML = "<p class='name'>" + currentName + "</p>";
    $('.contact-list').append(div);
  }
};