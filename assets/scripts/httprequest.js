const allPostList = document.getElementById("all-posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("form");
const fetchPosts = document.querySelector("#fetch-posts");

const sendHTTPRequest = (method, url, data) => {
  /* 
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    // once settled, cannot delete header 
    xhr.setResponseHeader('Content-Type','application/json');

    xhr.open(method, url);
    xhr.responseType = "json";
    // JSON.stringify() converts objs to string
    // JSON.parse() converts json to object
    // xhr.addEventListener("load", () => {
    //   // const posts = JSON.parse(xhr.response);
    //   resolve(xhr.response);
    // });
    xhr.onload = function () {
      if (xhr.status >= 200 || xhr.status < 300) {
        resolve(xhr.response);
      }
      reject(new Error("Something went wrong on server"));
    };
    xhr.onerror = function () {
      reject(new Error("Failed to send request to server"));
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
  */
  // return the promise of response object
  // response body should be retrieved by response.json()
  // which is also a promise
  return fetch(url, {
    method: method,
    body: data, 
    // body: JSON.stringify(data),
    // headers: {
    //   "Content-Type": "application/json",
    // },
  }).then((responseObj) => {
    console.log(responseObj.status);
    if (responseObj.status >= 200 && responseObj.status < 300) {
      return responseObj.json();
    } else {
      throw new Error("Something went wrong - server side");
    }
  });
};

const renderPosts = async () => {
  try {
    const responseData = await sendHTTPRequest(
      "GET",
      "http://jsonplaceholder.typicode.com/posts"
    );

    const posts = responseData;
    console.log(posts);
    for (const post of posts) {
      const singlePostEle = document.importNode(postTemplate.content, true);
      singlePostEle.querySelector("li").dataset.postId = post.id;

      singlePostEle.querySelector("h2").textContent = post.title.toUpperCase();
      singlePostEle.querySelector("p").textContent = post.body;
      singlePostEle.querySelector("button").className = "cancel";
      singlePostEle.querySelector("button").onclick = deletePost;
      allPostList.append(singlePostEle);
    }
  } catch (error) {
    alert(error);
  }
};

saveToServer = async (event) => {
  event.preventDefault();
  const title = document.getElementById("post-title").value;
  const body = document.getElementById("post-content").value;

  const newPost = {
    userId: Math.ceil(Math.random() * 10),
    title,
    body,
  };
  const formData = new FormData(form);
  formData.append("userId", Math.ceil(Math.random() * 10));
  // formData.append("title", title);
  // formData.append("body", body);

  // advantage
  // formData.append("image", here file ,"profile.png");
  // biggest advantage - can collect form data
  // html input field must have name attribute same as the key names of form data
  // cannot use if the api does not accept form data
  try {
    sendHTTPRequest(
      "POST",
      "http://jsonplaceholder.typicode.com/posts",
      formData
    );
  } catch (error) {
    alert(error);
  }
};

// using data attribute
// async function deletePost() {
//   const li = this.closest("li");
//   const responseData = await sendHTTPRequest(
//     "DELETE",
//     `http://jsonplaceholder.typicode.com/posts/${li.dataset.postId}`
//   );
//   console.log(responseData);
// }

// another solution without using data attribute but dom traversing
deletePost = async (event) => {
  if (event.target.tagName === "BUTTON") {
    const li = event.currentTarget.closest("li");
    try {
      const responseData = await sendHTTPRequest(
        "DELETE",
        `http://jsonplaceholder.typicode.com/posts/${li.dataset.postId}`
      );
      console.log(responseData);
    } catch (error) {
      alert(error);
    }
  }
};

form.addEventListener("submit", saveToServer);
fetchPosts.addEventListener("click", renderPosts);
