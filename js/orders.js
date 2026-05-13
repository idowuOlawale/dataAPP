import { db, auth } from "./firebase.js";
import {
collection,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.buyData = async () => {
const phone = document.getElementById("phone").value;
const network = document.getElementById("network").value;
const bundle = document.getElementById("bundle").value;

await addDoc(collection(db,"orders"),{
uid: auth.currentUser.uid,
phone,
network,
bundle,
status:"Processing",
createdAt: serverTimestamp()
});

alert("Order submitted");
}
