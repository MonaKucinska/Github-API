const form = document.getElementById('newForm');
const searchBtn = document.getElementById('searchBtn');
const result = document.getElementById('result');
const userName = document.getElementById('userName');
const userInfo = document.getElementById('userInfo');
const userRepos = document.getElementById('userRepos');
const ul = document.querySelector('ul');

// returns the input value from the user 
const getUserName = () => {
  let user = userName.value;
  //remove spaces placed between words
  user = user.split(' ').join('');
  return user;
}

//gets username from getUserName function 
//and forwards it to functions that fetch data from the GitHub API
const searchUser = () => {
  const userInput = getUserName();
  fetchData(userInput);
  fetchRepos(userInput);
}

//fetch basic GitHub user info and forwards it into printing function
const fetchData = async (userName) => {
  const url = 'https://api.github.com/users/'+userName;
  const response = await fetch(url);
  const result = await response.json();
  printUserInfo(result);
}

// prints info about user
const printUserInfo = (user) => {
   userInfo.innerHTML = `
   <div class="image">
    <img src='${user.avatar_url}' alt='User photo' />
   </div>
   <div class="user">
    <div class="card">
      <h2>${user.login}</h2>
      <p class="date">${user.created_at.substr(0, 10)}</p>
    </div>
    <div class="card bio">
      <h3>Bio</h3>
      <p>${user.bio}</p>
    </div>
    <div class="card repos">
      <div class="card-element">
        <h3>Repositories</h3>
        <p>${user.public_repos}</p>
      </div>
      <div class="card-element">
        <h3>Followers</h3>
        <p>${user.followers}</p>
      </div>
      <div class="card-element">
        <h3>Following</h3>
        <p>${user.following}</p>
      </div>
    </div>
    <div class="card info">
      <div class="card-element">
        <i class="fas fa-map-marker-alt"></i>
        <p>${user.location}</p>
      </div>
      <div class="card-element">
        <i class="fas fa-envelope"></i>
        <p>${user.email}</p>
      </div>
      <div class="card-element">
        <i class="fas fa-building"></i>
        <p>${user.company}</p>
      </div>
      <div class="card-element">
        <i class="fab fa-twitter"></i>
        <p>${user.twitter_username}</p>
      </div>
    </div>
   </div>
   `
}

//fetch data about repositories and forwards it into printing function
const fetchRepos = async (userName) => {
  const url = 'https://api.github.com/users/'+userName+'/repos';
  const response = await fetch(url);
  const result = await response.json();
  printRepos(sortRepos(result));
}

// prints data about repositories
const printRepos = (repo) => {
  for(let i=0; i<repo.length; i++){
    ul.appendChild(document.createElement('li'));
    const li = ul.lastChild;
    li.innerHTML = `
    <div class="repo-name">
      <h2><a href="${repo[i].html_url}">${repo[i].name}</a></h2>
      <p class="date">${repo[i].created_at.substr(0, 10)}</p>
    </div>
    <div class = "repo-info">
      <p><i class="fas fa-star"></i> ${repo[i].stargazers_count}</p>
      <h3>Main language used: <span class = "language">${repo[i].language}</span></h3>
    </div>
    `
  }
}

//sort repositories by the number of stars (from the highest amount to the lowest)
const sortRepos = (repos) => {
  let sortedRepos = repos.sort(compareStars);
  return sortedRepos.reverse();
}

//sorting method
const compareStars = (num1, num2) => {
  if ( num1.stargazers_count < num2.stargazers_count ){
    return -1;
  }
  if ( num1.stargazers_count > num2.stargazers_count ){
    return 1;
  }
  return 0;
}

// clears area from the currently viewed profile (user info + repositories)
const clearArea = () => {
  if(userInfo.hasChildNodes()){
    while(userInfo.firstChild) {
      userInfo.removeChild(userInfo.lastChild);
    }
  }
  if(ul.hasChildNodes()){
    while(ul.firstChild) {
      ul.removeChild(ul.lastChild);
    }
  }
}



// search user after clicking a search button
form.addEventListener('click', function(e){
  e.preventDefault();
  clearArea();
  searchUser();
});