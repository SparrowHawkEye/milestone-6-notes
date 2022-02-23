const loadUsers = async () => {
  const url = 'https://randomuser.me/api/'
  const res = await fetch(url);
  const data = await res.json()
  displayUser(data)
}


function displayUser (data){
    const userInfo = data.results[0];
    const userContainer = document.getElementById('user-container')
    userContainer.innerHTML = "";
  
  const userInfoDiv = document.createElement('div')
  const lists = ["card", "mb-3", "p-5", "w-75"]
  userInfoDiv.classList.add(...lists);
  userInfoDiv.innerHTML = `
  <div class="row g-5 align-items-center">
  <div class="col-md-4">
    <img
      src="${userInfo.picture.large}"
      class="rounded shadow-lg"
      alt="Picture of ${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}"
    />
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}</h5>
      <div class="card-text">
        Gender : ${(userInfo.gender)} <br />
        Country : France <br />
        City : Courbevoie <br />
        Phone : 01-27-21-38-92 <br />
        userName : "tinyostrich391"
      </div>
    </div>
  </div>
</div>
  `
  userContainer.appendChild(userInfoDiv)
  console.log(data.results[0]);
  console.log(userInfoDiv);

}