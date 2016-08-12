var oldHello = function(name) {
  console.log('hello, ' + name + '!');
};


const hello = (name) => {
  console.log(`hello, ${name}!`);
};

oldHello('world');
hello('es6');

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

$(document).ready(function(){
  listContacts(contacts)
  sortByFirstName()
  sortByLastName()
})


function listContacts(contacts) {
  contacts.forEach(function(contact) {
    $(".contact-list").append(
      "<div class='contact'><p class='name'> " + contact + "</p></div>"
    )
  })
}

function sortByFirstName() {
  $("#sort-by-first").on("click", function() {
    $(".contact-list").children().remove()
    listContacts(contacts.sort())
  })
}

function sortByLastName() {
  $("#sort-by-last").on("click", function() {
    $(".contact-list").children().remove()
    var sortedContacts = contacts.sort(sortByLast)
    listContacts(sortedContacts)
  })
}

function sortByLast(a, b) {
  if (a.split(" ")[1] < b.split(" ")[1]) {
    return -1;
  }
  if (a.split(" ")[1] > b.split(" ")[1]) {
    return 1;
  }
  return 0
}
