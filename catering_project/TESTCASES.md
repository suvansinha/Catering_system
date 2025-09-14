# Test Cases

1. Add product (Admin)
  - Input: title, price
  - Expected: Product appears in admin list and front page.

2. Add to cart
  - Action: click Add to cart
  - Expected: item saved to localStorage cart.

3. Remove product
  - Action: Admin click remove
  - Expected: product gone from Firestore and UI.

4. Read/Write permissions
  - Expected: only admin role can add/delete products (implement via security rules).

5. Deploy to Firebase Hosting
  - Expected: site served at hosting URL.

