# Low Level Design (LLD)

## Modules
1. Frontend
   - index.html: product listing, add to cart
   - admin.html: CRUD for products
   - js/: modular scripts (app.js, admin.js, firebaseConfig.js)

2. Backend (Firebase)
   - Firestore collections: products, orders, users
   - Auth: Firebase Authentication (email/password)

## Data models
- products: { title, price, image, desc, createdAt }
- orders: { userId, items:[{productId,qty}], total, status, createdAt }

## Logging
- Client-side: console.log for actions
- Server-side: use Firebase Cloud Functions + Cloud Logging for critical events

## Security rules (high level)
- Only authenticated admins can write to `products`
- Users can create their own `orders`

