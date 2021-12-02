// Calling API using Fetch
const jokes = document.getElementById("jokes");
const jokeBtn = document.getElementById("newJoke");

/*
    const generateJokes = () => {
    const setHeader = {
        headers: {
            Accept: "application/json",
        },
    };
    jokes.innerHTML = "Jokes is Loading ... 😴";
    fetch("https://icanhazdadjoke.com", setHeader)
        .then((res) => res.json())
        .then((data) => (jokes.innerHTML = data.joke))
        .catch((error) => console.log(error));
    };
 */

// Using Async Await

const generateJokes = async () => {
   try {
      const setHeader = {
         headers: {
            Accept: "application/json",
         },
      };
      jokes.innerHTML = "Jokes is Loading ... 😴";
      const res = await fetch("https://icanhazdadjoke.com", setHeader);
      const data = await res.json();
      jokes.innerHTML = data.joke;
   } catch (error) {
      console.log(`The error is ${error}`);
   }
};

setTimeout(generateJokes(), 3000);
jokeBtn.addEventListener("click", generateJokes);
