/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// Step 1 Sending a GET request to the URL
axios
.get('https://api.github.com/users/shabginov')
.then(response => {
  console.log('response', response.data);
  cardCreator(response.data);
  // console.log('response', response.data.bio);
})

// Step 3 Creating a component function

/* <div class="card"> // class done!
  <img src={image url of user} /> // done!
  <div class="card-info"> // class done!
    <h3 class="name">{users name}</h3> // class done!
    <p class="username">{users user name}</p> // class done!
    <p>Location: {users location}</p> // done!
    <p>Profile:  // done!
      <a href={address to users github page}>{address to users github page}</a> // done!
    </p>
    <p>Followers: {users followers count}</p> // done!
    <p>Following: {users following count}</p> // done!
    <p>Bio: {users bio}</p> // done!
  </div>
</div> */

function cardCreator(obj) {
  // Elements of the component
  const cards = document.querySelector('.cards');
  const img = document.createElement('img');
  const card = document.createElement('div');
  const cardInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const link = document.createElement('a');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // Adding classes to the elements
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  h3.classList.add('name');
  username.classList.add('username');

  // Structuring component
  profile.appendChild(link);
  cardInfo.append(h3, username, location, profile, followers, following, bio);
  card.append(img, cardInfo);
  cards.append(card);
  console.log(card);
  
  // Adding text content to the elements
  img.href = obj.avatar_url;
  h3.textContent = obj.name;
  username.textContent = `${obj.login}`;
  link.setAttribute(`href`, obj.html_url);
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = 'Profile:'
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;
  
  // console.log(cards);
  // console.log(card);
  // console.log(cardInfo);
  return card;
}