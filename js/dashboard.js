import { db, auth } from "./firebase.js";
import {
collection,
query,
where,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function loadDashboard(){
const q = query(
collection(db,"orders"),
where("uid","==",auth.currentUser.uid)
);

const snap = await getDocs(q);

document.getElementById("ordersCount").innerText = snap.size;
}

loadDashboard();
