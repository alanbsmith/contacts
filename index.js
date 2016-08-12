var oldHello = function(name) {
  console.log('hello, ' + name + '!');
};


const hello = (name) => {
  console.log(`hello, ${name}!`);
};

oldHello('world');
hello('es6');


$(document).ready(function(){
  listContacts()
})

var contacts = [
  "Andy Mention",
  "Emily Davis",
  "Eric Fransen",
  "Jessica Goulding",
  "Jonmichael Chambers",
  "Marc Garreau",
  "Tan Doan",
  "Alan Smith",
  "Allison Larson",
  "Andrw Watkins",
  "Chad Brading",
  "Corey Davis",
  "Gustavo Villagrana",
  "Hilary Denton",
  "Horacio Chavez",
  "Tim Proctor",
  "Will Faurot"
]

function listContacts() {
  contacts.forEach(function(contact) {
    $(".contact-list").append(
      "<div class='contact'><p class='name'> " + contact + "</p></div>"
    )
  })
}
