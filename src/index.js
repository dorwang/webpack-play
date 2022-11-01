import generateJoke from "./generateJoke";
import "./styles/main.scss";
import imageProfile from "./assets/profile.png";

const imageProfileSlot = document.getElementById("profile-img");
imageProfileSlot.src = imageProfile;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
