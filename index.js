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
  sortByFirstName()
  sortByLastName()
  search()
  addContact()
  create()
  moreInfo()
  edit()
  saveChanges()
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
      "<div class='contact'><p class='name'> " + contact + "</p>" +
      "<div class='info hidden'><p class='email'>Email: </p><p class='phone'>Phone:</p><p class='address'>Address:</p></div>"
      + "<button class='edit'>Edit</button>" + "</div>"
    )
  })
}

function sortByFirstName() {
  $("#sort-by-first").on("click", function() {
    $(".contact-list").children().remove()
    contacts = contacts.sort()
    listContacts()
  })
}

function sortByLastName() {
  $("#sort-by-last").on("click", function() {
    $(".contact-list").children().remove()
    contacts = contacts.sort(sortByLast)
    listContacts()
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

function search() {
  $("#search").on("keyup", function() {
    var text = $("#search").val().toLowerCase()
    $(".name").each(function(index) {
      if ($(this).text().toLowerCase().includes(text)) {
        $(this).closest("div").show()
      } else {
        $(this).closest("div").hide()
      }
    })
  })
}

function addContact() {
  $("#add-contact").on("click", function() {
    $(".new-contact").fadeIn()
  })
}

function create() {
  $("#add").on("click", function() {
    var newContact = $("#name-field").val()
    contacts.unshift(newContact)
    $(".contact-list").prepend(
      "<div class='contact'><p class='name'> " + newContact + "</p>" +
      "<div class='info hidden'><p class='email'>Email: </p><p class='phone'>Phone:</p>" +
      "<p class='address'>Address:</p></div>"
      + "<button class='edit'>Edit</button>" + "</div>"
    )
    $(".new-contact").fadeOut()
  })
}

function moreInfo() {
  $(".contact-list").on("click", ".name", function() {
    $(this).parent("div").children("div").toggleClass("hidden")
  })
}

function edit() {
  $(".contact-list").on("click", ".edit", function() {
    if ($(".edit-form").length === 0) {
      $(this).parent("div").append("<div class='edit-form'>" +
        "Name<input class='edit-name'></input>" +
        "Email<input class='edit-email'></input>" +
        "Phone<input class='edit-phone'></input>" +
        "Address<input class='edit-address'></input>" +
        "<button class='save' value='save'>Save</button>" + "</div>"
      )
    }
  })
}

function saveChanges() {
  $(".contact-list").on("click", ".save", function() {
    $(this).closest(".contact").find(".name").text($(".edit-name").val())
    $(this).closest(".contact").find(".email").text("Email: " + $(".edit-email").val())
    $(this).closest(".contact").find(".phone").text("Phone: " + $(".edit-phone").val())
    $(this).closest(".contact").find(".address").text("Address: " + $(".edit-address").val())
    $(this).closest(".edit-form").remove()
    $(".edit-form").remove()
  })
}
