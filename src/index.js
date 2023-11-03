import generateJoke from "./generateJoke";
import "./styles/main.scss";
import img from './assets/default.jpg';

const imgName = document.getElementById('imgName');
imgName.src = img;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke)

generateJoke();