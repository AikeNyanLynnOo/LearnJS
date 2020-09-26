const allPostList = document.getElementById("all-posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("form");
const fetchPosts = document.querySelector("#fetch-posts");

const renderPosts = async () => {
  try {
    const responseData = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );

    const posts = responseData.data;
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
    console.log(error.message);
    console.log(error.response);
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

  // axios works both with object data and form data
  // it converts to the json data whatever you give (object or form data)
  // it also defines the header intelligently

  try {
    const response = await axios.post(
      "http://jsonplaceholder.typicode.com/posts",
      newPost
    );
    console.log(response);
    response.status === 201 && alert("posted successfully");
  } catch (error) {
    alert(error);
  }
};

deletePost = async (event) => {
  if (event.target.tagName === "BUTTON") {
    const li = event.currentTarget.closest("li");
    try {
      const response = await axios.delete(
        `http://jsonplaceholder.typicode.com/posts/${li.dataset.postId}`
      );
      response.status === 200 && alert("deleted successfully");
    } catch (error) {
      alert(error);
    }
  }
};

form.addEventListener("submit", saveToServer);
fetchPosts.addEventListener("click", renderPosts);
