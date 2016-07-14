// var oldHello = function(name) {
//   console.log('hello, ' + name + '!');
// };
//
//
// const hello = (name) => {
//   console.log(`hello, ${name}!`);
// };
//
// oldHello('world');
// hello('es6');

let contacts = [
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
  buildContactList();
});

const buildContactList = () => {
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
