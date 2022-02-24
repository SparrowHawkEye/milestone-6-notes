const loadComments = async () => {
  const url = "https://www.thesportsdb.com/api/v1/json/2/all_sports.php"
  const res = await  fetch(url);
  const data = await res.json();
  // console.log(data.sports[0].strSportDescription);
  displayComments(data)
}

const displayComments = (data) => {
  const body = document.getElementById("container");
  const commentsContainer = document.createElement('div') 
  const classList = ["d-flex", "justify-content-center","text-center"]
  commentsContainer.classList.add(...classList)
  body.appendChild(commentsContainer);
  const orderList = document.createElement('ol');
  commentsContainer.appendChild(orderList);
      const listItems = document.createElement('li')
   listItems.innerHTML = `<h3> ${data.sports[3].strSportDescription} </h3>
   `
    orderList.appendChild(listItems);
  }



