# Catering Reservation and Ordering System

**Tech:** HTML, CSS, JavaScript, Firebase (Firestore + Auth + Hosting)  
**Domain:** Food / Catering  
**Difficulty:** Easy

## What this package contains
- A simple front-end (index.html) for browsing products and adding to cart.
- An admin panel (admin.html) to add/remove products.
- Modular JS using Firebase v9 (modular SDK).
- `js/firebaseConfig.js` — add your Firebase config here.
- Basic styling resembling modern food apps (clean cards, quick actions).
- LLD and Architecture docs included.
- Test cases and deployment notes.

## How to run locally
1. Install [Node.js](https://nodejs.org/) (optional) or serve files using a simple static server.
2. Replace `js/firebaseConfig.js` with your Firebase project's config.
3. Ensure Firestore has a `products` collection (admin can add).
4. Open `index.html` in a browser (or `admin.html`).

## Deployment (recommended)
- Use [Firebase Hosting]. Run `npm install -g firebase-tools`, `firebase login`, `firebase init hosting`, then `firebase deploy`.
- Keep `firebaseConfig.js` secure (don't commit secrets).

## Notes & Next steps
- Authentication and orders are skeletons; add Firebase Auth and an `orders` collection for production.
- Logging: browser console has basic logs; extend using Cloud Logging or a JS logging library.
- This repo is a starter — expand UX to match Swiggy/Zomato by adding search, categories, filters, and cart/checkout flow.

