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

let MOVIE_ID = 0

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
const generateStars = (rating) => {
    
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
add.addEventListener('click',()=>{
    const li = document.createElement("li")
    li.className = "list-content"
    li.onclick = function(){
        li.parentElement.removeChild(li)
        afterDeleteItem()
    }
    const name = document.getElementById('movie_name').value
    const url = document.getElementById("movie_url").value
    const rating = parseInt(document.getElementById('movie_rating').value)

    const img = generateImg(url)
    const content = generateContent(name,rating)
    
    li.appendChild(img)
    li.appendChild(content)
    list.appendChild(li)
    afterAddItem()
    MOVIE_ID++
})


const showDefault = () => {
    noData.classList.remove('make-invisible')
}


// https://cdn.traileraddict.com/vidquad/walt-disney-pictures/mulan-2020-poster/1.jpg
// https://i.ytimg.com/vi/zo1AspqYJI4/maxresdefault.jpg
// https://ae01.alicdn.com/kf/HTB1Ov1sjKGSBuNjSspbq6AiipXa1/D978-Black-Panther-2018-Marvel-NEW-Movie-Top-Silk-Poster-Art-Print-Canvas-Painting-Wall-Posters.jpg
// http://www.shwedream.com/wp-content/uploads/2016/08/5579_Sit.jpg
// https://www.videoinya.com/wp-content/uploads/2017/05/49302fd799ddff276bb24c0d262ad3d4-520x293.jpg