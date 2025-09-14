# System Architecture

Client (browser) <--> Firebase (Auth, Firestore, Hosting, Storage)

- Client: Static site served via Firebase Hosting
- Firestore: Stores products, orders
- Auth: Email/password authentication
- (Optional) Cloud Functions: business logic (order processing), logging

Wireframe: index (browse) -> product page -> cart -> checkout
Admin: admin.html -> product CRUD

