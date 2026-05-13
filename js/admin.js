import { db } from "./firebase.js";
import {
collection,
getDocs,
doc,
updateDoc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const ordersDiv = document.getElementById("orders");

async function loadOrders(){
const snap = await getDocs(collection(db,"orders"));

snap.forEach(order=>{
const data = order.data();

ordersDiv.innerHTML += `
<div class="glass" style="margin:10px 0">
<p>${data.phone} - ${data.network} - ${data.bundle}</p>

<select onchange="updateStatus('${order.id}',this.value)">
<option>Processing</option>
<option>Completed</option>
<option>Failed</option>
</select>
</div>
`;
});
}

window.updateStatus = async(id,status)=>{
await updateDoc(doc(db,"orders",id),{status});
alert("Updated");
}

window.savePrices = async()=>{
const price = document.getElementById("mtnPrice").value;

await setDoc(doc(db,"prices","mtn"),{
oneGb:price
});

alert("Saved");
}

loadOrders();
