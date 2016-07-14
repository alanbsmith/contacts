# Contacts

### Overview
Contacts is a really simple UI intended to function as a platform for building things purely in the view. This project begins as a static template for adding functionality. The base styles live in `base.css`. The JavaScript lives in `index.js`. jQuery is being called from a CDN, so youl'll need an Internet connection to use it.

### Up & Running
Everything can be run in the browser, so getting up and running is simple.

To view it in your default browser:
```
open index.html
```

To view it in another browser (for Mac)
```
open index.html -a firefox
```

##### Using es6
Currently a lot of browsers will let you use ES6 (and a few ES7), but some won't :(. To do a quick check for this, you can look in your browser console. When you open `index.html` if you see `hello es6!`, you can use es6 in your browser! If you see a JS error or just `hello world!`, you will need to use es5 syntax, which is fine too. :) Feel free to remove these or comment them out if you want.

### Challenges
The purpose of these challenges is to force you to get everything you can out of your browser, JavaScript, and jQuery. Really learning to use these tools well will help you become much more comfortable with frontend development.

##### 1. Dynamic Entries
Currently the entries are static names. There's a lot of repetition in the UI and would be difficult to update information later. It would be nice to have a dynamic list to populate our contacts.


##### 7. Sorting
You may have noticed that this list is not sorted. It would be nice to have a way to alphabetize them by first or last name

##### 2. Search
The list starts with only 17 contacts, so scrolling isn't too painful. But when we add more it might become cumbersome. It would be nice to search through our contacts and find the one we want.

##### 3. Add New Contacts
We're starting with a list of 17 names, which is great until we meet someone new. It would be nice if the small '+' button at the top gave us a way to add new contacts.

##### 4. Viewing More Info
Names are nice, but not super helpful for contacting people. It would be cool if there was a way we could click on a name and see more info for the contact. How you want to implement that is totally up to you.

##### 5. Editing
Sometimes people move or get new phone numbers. It would be nice to update our information.

##### 6. Removing
Removing contacts is the last of the CRUD operations we need to tackle. Find a way to remove contacts from your list.
