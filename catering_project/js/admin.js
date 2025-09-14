import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore, collection, getDocs, addDoc, deleteDoc, doc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById('product-form');
const list = document.getElementById('admin-products');

async function loadAdminProducts(){
  const q = await getDocs(collection(db, 'products'));
  list.innerHTML = '';
  q.forEach(d=>{
    const data = d.data();
    const card = document.createElement('div');
    card.className='card';
    card.innerHTML = `
      <img src="${data.image||'assets/placeholder.png'}" />
      <div class="card-body">
        <h3>${data.title}</h3>
        <div class="row">
          <div>₹${data.price}</div>
          <button class="btn remove">Remove</button>
        </div>
      </div>
    `;
    card.querySelector('.remove').addEventListener('click', async ()=>{
      await deleteDoc(doc(db,'products',d.id));
      loadAdminProducts();
    })
    list.appendChild(card);
  })
}

form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const title = form.querySelector('#title').value;
  const price = form.querySelector('#price').value;
  const image = form.querySelector('#image').value;
  const desc = form.querySelector('#desc').value;
  await addDoc(collection(db,'products'), { title, price, image, desc, createdAt: Date.now() });
  form.reset();
  loadAdminProducts();
});

window.addEventListener('DOMContentLoaded', loadAdminProducts);
