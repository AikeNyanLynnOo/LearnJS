// ******* SELECTNG ELEMENT ****** //
// querySelector querySelectorAll
// getElementById getElementsByTagName getElementsByClassName

// parentNode || parentElement // closest("id starting with # || tag name") - to find the closest ancestor
// childNodes // children // querySelector
// firstChild firstElementChild // lastChild lastElementChild
// previousSibling // previousElementSibling // nextSibling // nextElementSibling

// ******* STYLING ELEMENT ******* // 
// classList .add("className" || [...array]) 
//.remove("className" || [...array]) 
// .replace("replace","with")
// .toggle("className",i<10) - add or remove className - i<10 is optional condition
// .contains("className") - true/false

// ******* CREATING AND INSERTING ELEMENTS ******* //
// innerHTML // innerAdjacentHTML
// appendChild // append 
// prepend() // before() // after() // insertBefore() 
// replaceChild() // replaceWith()
// removeChild()

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
btnAddMovie.onclick = function() {
    modal.style.display = "block";
}
cancel.onclick = () => {
  modal.style.display = "none";  
}
span.onclick = function() {
  modal.style.display = "none";
}

{/* <li class="list-content">
    <img src="https://cdn.traileraddict.com/vidquad/walt-disney-pictures/mulan-2020-poster/1.jpg" alt="movie-logo" class="list-logo">
    <div class="list-item-content">
        <div class="list-item-title">Movie Name</div>
        <div class="rating-bar">
            rating : <i class="fa fa-star"></i>
        </div>
    </div>
</li> */}

const generateImg = (url) => {
    const img = document.createElement('img')
    img.src = url
    img.alt = "movie-logo"
    img.className = "list-logo"
    return img
}
const generateContent = (name,rating) => {
    const listItem = document.createElement("div")
    listItem.className = "list-item-content"

    const divName = document.createElement("div")
    divName.className = "list-item-title"
    divName.textContent = name
    
    const divRatingBar = document.createElement("div")
    divRatingBar.className = "rating-bar"
    for(var i = 0 ; i<rating ; i++){
        const star = document.createElement("i")
        star.classList = "fa fa-star"
        divRatingBar.appendChild(star)
    }
    divRatingBar.prepend("rating : ")

    listItem.appendChild(divName)
    listItem.appendChild(divRatingBar)

    return listItem
}
const afterAddItem = () => {
    modal.style.display = "none";
    noData.classList.add('make-invisible')
}
const afterDeleteItem = () => {
    list.childElementCount == 0 ? showDefault() : false;
}
function is_url(str)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}


add.addEventListener('click',()=>{
    const li = document.createElement("li")
    li.className = "list-content"
    li.onclick = function(){
        li.parentElement.removeChild(li)
        afterDeleteItem()
    }
    const name = document.getElementById('movie_name').value
    const url = is_url(document.getElementById("movie_url").value) ? document.getElementById("movie_url").value : false ;
    const ratingCheck = parseInt(document.getElementById('movie_rating').value)

    if(!(ratingCheck <= 5 && ratingCheck > 0)){
        alert("Please rate between 1 to 5")
        
    }else if(url === false){
        alert("Please enter a valid image url")
    }else {
        const rating = ratingCheck
        const img = generateImg(url)
        const content = generateContent(name,rating)
    
        li.appendChild(img)
        li.appendChild(content)
        list.appendChild(li)
        afterAddItem()
    }
    
})


const showDefault = () => {
    noData.classList.remove('make-invisible')
}


// https://cdn.traileraddict.com/vidquad/walt-disney-pictures/mulan-2020-poster/1.jpg
// https://i.ytimg.com/vi/zo1AspqYJI4/maxresdefault.jpg
// https://ae01.alicdn.com/kf/HTB1Ov1sjKGSBuNjSspbq6AiipXa1/D978-Black-Panther-2018-Marvel-NEW-Movie-Top-Silk-Poster-Art-Print-Canvas-Painting-Wall-Posters.jpg
// http://www.shwedream.com/wp-content/uploads/2016/08/5579_Sit.jpg
// https://www.videoinya.com/wp-content/uploads/2017/05/49302fd799ddff276bb24c0d262ad3d4-520x293.jpg