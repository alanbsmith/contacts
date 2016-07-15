let contactList = [
  'Andy Mention',
  'Emily Davis',
  'Eric Fransen',
  'Jessica Goulding',
  'Jonmichael Chambers',
  'Marc Garreau',
  'Tan Doan',
  'Alan Smith',
  'Allison Larson',
  'Andrew Watkins',
  'Chad Brading',
  'Corey Davis',
  'Gustavo Villagrana',
  'Hilary Denton',
  'Horacio Chavez',
  'Tim Proctor',
  'Will Faurot'
];

$(document).ready(() => {
  const contacts = new Contacts(contactList);
  contacts.buildList(contactList);

  $('input#search').keyup((e) => {
    const results = contacts.search(e.target.value);
    contacts.buildList(results);
  });

  $('.sort-link').click((e) => {
    let sorted;
    if(e.target.id === "last-name") {
      sorted = contacts.sortByLastName();
    } else {
      sorted = contacts.sortByFirstName();
    }
    return contacts.buildList(sorted);

  });
});

class Contacts {
  constructor(initialContacts) {
    // list of all contacts
    this.list = initialContacts;
    // current list of contacts displayed in the view
    this.currentList = [];
  };

  // setting the current list of contacts to be displayed
  setCurrentList(list) {
    currentList = list;
  };

  // build / rebuild the list in the view
  buildList(contacts) {
    // update the current list of contacts
    this.currentList = contacts;
    // reset the list before appending
    $('.contact').remove();
    return contacts.map((contact, i) => {
      $('.contact-list').append(
        '<div class="contact">' +
          '<p class="name" id=`${i}`>' +
            `${contact}` +
          '</p>' +
        '</div>'
      )
    });
  };

  search(query) {
    const results = this.list.filter((contact) => {
      return contact.toLowerCase().includes(query)
    });
    return results;

  };

  sortByFirstName() {
    return this.currentList.sort();
  };

  sortByLastName() {
    const sorted = this.currentList.sort((x,y) => {
      const current = x.split(' ').pop();
      const next = y.split(' ').pop();
      return current < next ? -1 : current > next ? 1 : 0;
    });
    return sorted;
  };
};
