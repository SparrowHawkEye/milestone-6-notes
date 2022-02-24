const loadComments = async () => {
  const url = "https://jsonplaceholder.typicode.com/comments"
  const res = await  fetch(url);
  const data = await res.json();
  // console.log(data);
  displayComments(data)
}

// const button = document.querySelectorAll('button')
// button.onclick = () => button.disabled = true;    

const displayComments = (data) => {
  const body = document.getElementById("container");
  const commentsContainer = document.createElement('div') 
  const classList = ["d-flex", "justify-content-center","text-center"]
  commentsContainer.classList.add(...classList)
  body.appendChild(commentsContainer);
  const orderList = document.createElement('ol');
  commentsContainer.appendChild(orderList);
  for(const comment of data){   
    const listItems = document.createElement('li')
   listItems.innerHTML = `<h3> ${comment.name} </h3>
   <p> ${comment.body}</p>
   `
    orderList.appendChild(listItems);
  }
}


