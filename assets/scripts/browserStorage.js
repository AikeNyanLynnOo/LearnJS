const storeBtn = document.querySelector("#store-data");
const retrieveBtn = document.querySelector("#retrieve-data");
const resetCookie = document.querySelector("#reset-cookie");

const deletefromIdxDb = document.querySelector("#del-from-idx-db");

// local storage lives until it is removed
// session storage lives before the browser tab is closed

const userId = "123";
const user = {
  name: "anlo",
  age: 21,
  hobbies: ["programming", "reading"],
};

// storeBtn.onclick = function () {
//   sessionStorage.setItem("uid", userId);
//   localStorage.setItem("user", JSON.stringify(user));
// };
// retrieveBtn.onclick = function () {
//   alert(sessionStorage.getItem("uid"));
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user) {
//     console.log(user);
//     console.log(user.name);
//   }
// };

// cookie lives even the browser is closed
/*
const getData = (data) => {
  const keyvalue = data.split("=");
  return keyvalue[1];
};
storeBtn.onclick = function () {
  document.cookie = `uid=${userId}; max-age=360`; // expires=Fri, 31 Dec 2020 23:59:59 GMT
  document.cookie = `user=${JSON.stringify(user)}`;
};
retrieveBtn.onclick = function () {
  console.log(document.cookie);
  const cookieData = document.cookie.split(";");
  const data = cookieData.map((item) => {
    return item.trim();
  });

  console.log(data);
  data.forEach((i) => {
    console.log(getData(i));
  });
};

// check key existence
const checkKey = (key) => {
  const cookieData = document.cookie.split(";");
  const data = cookieData.map(data=>data.trim());
  return data.some((item) => item.startsWith(`${key}=`));
};

// check a cookie has a specific value
const checkCookie = (key,value) => {
    const cookie = document.cookie.split(";").find(cookie=>cookie.includes(`${key}=${value}`));
    if(cookie){
        console.log("Specified cookie exist",cookie); 
    }
}

// resetting a cookie
// key must be same
resetCookie.onclick = function () {
  if (checkKey("uid")) {
    console.log("uid exist");
    document.cookie = `uid=${1234};max-age=350`;
    console.log("uid is updated")
  }
};

checkCookie("uid",123);
*/

// indexedDB
/*
Open a database.
Create an object store in the database. 
Start a transaction and make a request to do some database operation, like adding or retrieving data.
Wait for the operation to complete by listening to the right kind of DOM event.
Do something with the results (which can be found on the request object).
*/

let db;
const createDB = () => {
  const dbRequest = indexedDB.open("StoreDummy", 1);
  // run every request success
  dbRequest.onsuccess = function (event) {
    db = event.target.result;
  };
  // run every request success with version upgrade
  dbRequest.onupgradeneeded = function (event) {
    db.onerror = function (event) {
      // Generic error handler for all errors targeted at this database's
      // requests!
      console.error("Database error: " + event.target.errorCode);
    };
    db = event.target.result;
    const objStore = db.createObjectStore("products", { keyPath: "id" });
    // generating key automatically incrementally starting from 1
    // no longer need to give key property when adding data
    // const objStore = db.createObjectStore("products", { autoIncrement: true });
    objStore.transaction.oncomplete = function (event) {};
  };

  dbRequest.onerror = function (event) {};
};
createDB();
const storeToDb = (obj) => {
  const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  productStore.add(obj);
};

storeBtn.onclick = function () {
  if (!db) {
    return;
  }
  const data = {
    id: "p3",
    title: "Product title",
    price: 12.56,
    tags: ["Expensive", "Luxury"],
  };
  storeToDb(data);
};
retrieveBtn.addEventListener("click", () => {
  const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const request = productStore.get("p1");
  request.onsuccess = function () {
    console.log(request.result);
  };
});

deletefromIdxDb.addEventListener("click", () => {
  const deleteReq = db
    .transaction("products", "readwrite")
    .objectStore("products")
    .delete("p1");
  deleteReq.onsuccess = function (event) {
    console.log("Successfully deleted - ", event.target.result);
  };
});
