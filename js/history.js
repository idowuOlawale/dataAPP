import { db, auth } from "./firebase.js";
import {
collection,
query,
where,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const body = document.getElementById("historyBody");

async function loadHistory(){
const q = query(
collection(db,"orders"),
where("uid","==",auth.currentUser.uid)
);

const snap = await getDocs(q);

snap.forEach(doc=>{
const data = doc.data();

body.innerHTML += `
<tr>
<td>${data.phone}</td>
<td>${data.network}</td>
<td>${data.bundle}</td>
<td>${data.status}</td>
</tr>
`;
});
}

loadHistory();
