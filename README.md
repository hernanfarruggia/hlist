# hlist
A work in progress todo app but with a huge ambition :)

## About!
This is a simple to do app craeted as hobby to keep track of React and ES6 new features. Feel free to download the code and play around!
Was built using ReactJS, NodeJS, MongoDB, and some other tools as Create React App, Bootstrap and Font Awesome.

### Initial features:

- Add new TODO by pressing + button ot hitting Enter key
- Set TODO as Done by pressing Check button
- Set TODO as Pending by pressing Undo button
- Delete TODO by pressing Trash button
- Load TODO's in different sections depending on their state ['pending' || 'done']

### Added features

- :heavy_check_mark: Integration with MongoDB
- :heavy_check_mark: CSS Improvements (Bootstrap implemented)
- :heavy_check_mark: Font Awesome support for better styling
- :heavy_check_mark: Added ES6 features
- :heavy_check_mark: Added async/await for action creators
- :heavy_check_mark: Ability to add TODO description
- :heavy_check_mark: Ability to view/hide TODO description

### Coming soon features:
- Multi user to allow login and private TODO lists
- Some other stuffs I didn't have the time yet to decide... :D

### Pending Code Improvements

- Better error handling
- Separate actions into their own files

## Instalation!

In order to run this app you will need to have pre-installed [NodeJS](https://nodejs.org/es/download/) and [MongoDB](https://www.mongodb.com/download-center/community).

You will need to create a new collection called `todos`.

```bash
# Clone the repo
git clone https://github.com/hernanfarruggia/hlist.git

# Get into the project folder
cd hlist

# Install NPM dependencies
npm install

# Get into the backend folder
cd backend

# Install npm dependencies
npm install
```

## Running the app!

To run the app we need 3 things:

- MongoDB instance running
- Backend services running
- Frontend app running

To run these 3 apps, follow these steps:

```bash

# Anywhere in your console, start the mongod service, I'm using linux (you can google how to run it in Windows :P) so type:
sudo service mongod start
# Now we have the MongoDB Instance running

# Get into the project folder
cd hlist

# Get into backend folder
cd backend

# Run backend services by typing:
node index.js
# You can also use `nodemon index.js` which will lift a watcher so if you want to play around with backend files, you don't need to run `node index.js` after each change.

# Get back into project root folder
cd ..

# Start the frontend app
npm start
```

And that's it! A new window should open with the app running.

## Troubleshoot

When running the app locally, there could be some issues with CORS and local requests. I have included a middleware in backend that deals with it so you don't need to do anything, but in case you still have issues, there's a Chrome extension that could really help you. :)