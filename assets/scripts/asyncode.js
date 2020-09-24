const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const getLocBtn = document.getElementById("get-location");

btn.addEventListener("click", () => {
  console.log("You run synchronous code");
});

// custom code with is not registered and handled by browser
// let result = 0;
// for (i = 0; i < 1000000000; i++) {
//   result++;
// }
// console.log(result);

btn1.addEventListener("click", startAsyncCode);
const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Running Promise of duration : ${duration} milliseconds`);
    }, duration);
  });
  return promise;
};
// setTimeout() function which is registered and handled by browser
let num = 0;
function startAsyncCode() {
  setTimer(2000)
    .then((data) => {
      console.log(data);
      return setTimer(4000); // start counting 4s
    })
    .then((data) => {
      console.log(data);
    });

  setTimer(0).then((data) => {
    console.log(data);
  }); // even with no timer value , timer run after console.log() finished

  console.log("Async code starting"); // pushed by browser before setTimeout finish
}

// get user location using promise
const getUserLocation = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};
const getLocation = async () => {
  // only available on async functions
  // using await for shorter code
  // code transformation to the normal 'then' block occurs behind
  // await statement is not pushed behind. It runs where it is written
  // then is pushed behind and browser runs normal statements first(console.log(),etc)

  try {
    const data = await getUserLocation();
    console.log(data);
  } catch (error) {
    console.log("Getting location error", error);
  }

  // using error callback to catch errors
  // getUserLocation().then(
  //   (data) => {
  //     console.log(data);
  //   },
  //   (err) => {
  //     console.log(err);
  //   }
  // );

  // or you can use catch() to catch any error
  // catch() can be used anywhere in the promise chain(recommended in the end tho)
  // catch() does not exit the promise chain execution, but continue the remaining chain
  // For example, getUserLocation().then().catch().then().then() etc.

  //   getUserLocation()
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  console.log("Getting Location");
};
getLocBtn.addEventListener("click", getLocation);

// making array of functions which return promises race
// when the faster promise fires, the slower promise is discarded
// answer of slower promise is only ignored, but still finished execution
// IMPORTANT *** if there HTTP request, the request is sent
// continue execution of winning promise
Promise.race([setTimer(3000), setTimer(2000), setTimer(1500)]).then((data) => {
  console.log(data);
});

// returns an array of all data resolved
// order of array is same as order of array given in Promise.all()
// output result only after longest promise done
// if one promise is rejected, cancel later promise execution
Promise.all([setTimer(3000), setTimer(2000), setTimer(1500)]).then(
  (allPromiseData) => {
    console.log(allPromiseData);
  }
);

// returns an array of objects{resolved-data and status}
// status : "fulfilled" or "rejected"
// if one promise rejected, does not cancel other promise execution  
Promise.allSettled([getUserLocation(), setTimer(3000)]).then(
  (allPromiseData) => {
    console.log(allPromiseData);
  }
);
