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
  clearSearchInput();
  buildContactList(contactList);
});

const buildContactList = (contacts) => {
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

const sortByLastName = () => {
  const sorted = contactList.sort((x,y) => {
    first = x.split(' ').pop();
    next = y.split(' ').pop();
    return first < next ? -1 : first > next ? 1 : 0;
  });
  return buildContactList(sorted);
};

$('.sort-link').click((e) => {
  clearContactList()
  if(e.target.id === "last-name") {
    return sortByLastName();
  }
  return buildContactList(contactList.sort());
});

$('input#search').keyup((e) => {
  const results = contactList.filter((contact) => {
    return contact.toLowerCase().includes(e.target.value)
  });
  clearContactList();
  return buildContactList(results);
});

const clearContactList = () => {
  $('.contact').remove();
};

const clearSearchInput = () => {
  $('input#search').value = '';
}
