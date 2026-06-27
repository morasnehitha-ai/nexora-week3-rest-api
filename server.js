const express = require("express");

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());

// Sample Product Data
let products = [
    {
        id: 1,
        name: "Gaming Laptop",
        price: 70000
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to NEXORA Week 3 REST API");
});

// GET All Products
app.get("/api/products", (req, res) => {
    res.json(products);
});

// GET Product by ID
app.get("/api/products/:id", (req, res) => {

    const product = products.find(
        p => p.id == req.params.id
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

// ADD Product
app.post("/api/products", (req, res) => {

    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product Added Successfully",
        product: newProduct
    });

});

// UPDATE Product
app.put("/api/products/:id", (req, res) => {

    const product = products.find(
        p => p.id == req.params.id
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name;
    product.price = req.body.price;

    res.json({
        message: "Product Updated Successfully",
        product
    });

});

// DELETE Product
app.delete("/api/products/:id", (req, res) => {

    const productIndex = products.findIndex(
        p => p.id == req.params.id
    );

    if (productIndex === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products.splice(productIndex, 1);

    res.json({
        message: "Product Deleted Successfully"
    });

});

// User Login API
app.post("/api/login", (req, res) => {

    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "123456") {
        return res.json({
            success: true,
            message: "Login Successful"
        });
    }

    res.status(401).json({
        success: false,
        message: "Invalid Email or Password"
    });

});

// Contact Form API
app.post("/api/contact", (req, res) => {

    const { name, email, message } = req.body;

    res.status(201).json({
        success: true,
        message: "Contact Submitted Successfully",
        data: {
            name,
            email,
            message
        }
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});