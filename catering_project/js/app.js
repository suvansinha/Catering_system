import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore, collection, getDocs, addDoc, doc, getDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsEl = document.getElementById('products');
const tpl = document.getElementById('product-tpl');

async function loadProducts(){
  const q = await getDocs(collection(db, 'products'));
  productsEl.innerHTML = '';
  q.forEach(d=>{
    const data = d.data();
    const node = tpl.content.cloneNode(true);
    node.querySelector('.prod-img').src = data.image || 'assets/placeholder.png';
    node.querySelector('.prod-title').textContent = data.title;
    node.querySelector('.prod-desc').textContent = data.desc || '';
    node.querySelector('.prod-price').textContent = data.price;
    node.querySelector('.add-cart').addEventListener('click', ()=> addToCart(d.id));
    productsEl.appendChild(node);
  })
}

function addToCart(id){
  const cart = JSON.parse(localStorage.getItem('cart')||'[]');
  cart.push({id, qty:1});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart');
}

window.addEventListener('DOMContentLoaded', loadProducts);
