API Documentation

Project

Week 3 – REST API Development

Backend developed using Node.js and Express.js.

Base URL

http://localhost:5000

---

1. Get All Products

Endpoint

GET /api/products

Description

Returns all available products.

Success Response

[
  {
    "id": 1,
    "name": "Gaming Laptop",
    "price": 70000
  }
]

---

2. Get Product by ID

Endpoint

GET /api/products/:id

Description

Returns a single product by its ID.

Example

GET /api/products/1

Success Response

{
  "id": 1,
  "name": "Gaming Laptop",
  "price": 70000
}

---

3. Add Product

Endpoint

POST /api/products

Description

Adds a new product.

Request Body

{
  "name": "Smartphone",
  "price": 25000
}

Success Response

{
  "message": "Product Added Successfully",
  "product": {
    "id": 2,
    "name": "Smartphone",
    "price": 25000
  }
}

---

4. Update Product

Endpoint

PUT /api/products/:id

Description

Updates an existing product.

Request Body

{
  "name": "Gaming Laptop Pro",
  "price": 80000
}

Success Response

{
  "message": "Product Updated Successfully",
  "product": {
    "id": 1,
    "name": "Gaming Laptop Pro",
    "price": 80000
  }
}

---

5. Delete Product

Endpoint

DELETE /api/products/:id

Description

Deletes a product by ID.

Success Response

{
  "message": "Product Deleted Successfully"
}

---

6. User Registration

Endpoint

POST /api/register

Description

Registers a new user.

Request Body

{
  "name": "Mora Snehitha",
  "email": "morasnehitha@gmail.com",
  "password": "123456"
}

Success Response

{
  "success": true,
  "message": "User Registered Successfully"
}

---

7. Get All Users

Endpoint

GET /api/users

Description

Returns all registered users.

---

8. User Login

Endpoint

POST /api/login

Description

Authenticates a registered user.

Request Body

{
  "email": "morasnehitha@gmail.com",
  "password": "123456"
}

Success Response

{
  "success": true,
  "message": "Login Successful"
}

---

9. Contact Form Submission

Endpoint

POST /api/contact

Description

Accepts contact form details.

Request Body

{
  "name": "Mora Snehitha",
  "email": "morasnehitha@gmail.com",
  "message": "Hello NEXORA UI Team!"
}

Success Response

{
  "success": true,
  "message": "Contact Submitted Successfully"
}

---

Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- Thunder Client / Postman

---

API Testing

All APIs were tested successfully using Thunder Client/Postman.

---

Author

Mora Snehitha

Full Stack Development Intern

NEXORA UI