import { auth } from "./firebase.js";
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.register = async () => {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

await createUserWithEmailAndPassword(auth,email,password);
window.location="dashboard.html";
}

window.login = async () => {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

await signInWithEmailAndPassword(auth,email,password);
window.location="dashboard.html";
}

window.logout = async () => {
await signOut(auth);
window.location="login.html";
}
