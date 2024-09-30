const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const path = require('path');
const cors = require('cors');  // Import the CORS package

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());

// Initialize Firebase Admin
const serviceAccount = require(path.join(__dirname, 'src', 'main', 'java', 'com', 'example', 'sos-app-react-firebase-adminsdk-j29gt-4d897acd66.json'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sos-app-react-default-rtdb.firebaseio.com"
});
const db = admin.database();
// const junkFoodProducts = [
//     { name: 'Kurkure', price: 20 },
//     { name: 'Lays', price: 25 },
//     { name: 'Cheetos', price: 30 },
//     { name: 'Doritos', price: 35 },
//     { name: 'Uncle Chips', price: 15 },
//     { name: 'Pringles', price: 50 },
//     { name: 'Bingo', price: 20 },
//     { name: 'Haldiram Bhujia', price: 10 },
//     { name: 'Nachos', price: 40 },
//     { name: 'Peppy', price: 18 },
//     { name: 'Mojo', price: 22 },
//     { name: 'Parle G', price: 5 },
//     { name: 'Good Day', price: 20 },
//     { name: 'Hide & Seek', price: 30 },
//     { name: 'Marie Gold', price: 12 },
//     { name: '20-20', price: 15 },
//     { name: 'Monaco', price: 10 },
//     { name: 'Krackjack', price: 20 },
//     { name: 'Popcorn', price: 35 },
//     { name: 'Diamond Chips', price: 30 },
//     { name: 'Potato Sticks', price: 15 },
//     { name: 'Piknik', price: 20 },
//     { name: 'Mast Masti', price: 18 },
//     { name: 'Ruffles', price: 25 },
//     { name: 'Tangy Tom', price: 12 },
//     { name: 'Wafers', price: 22 },
//     { name: 'Mad Angles', price: 35 },
//     { name: 'Treat', price: 18 },
//     { name: 'Oreo', price: 40 },
//     { name: 'Magic Masala', price: 10 }
// ];

// // Use a for loop to add all products to Firebase
// const promises = junkFoodProducts.map((product, index) => {
//     const id = `product_${index + 1}`;
//     return db.ref('products').child(id).set(product);
// });
    


// Get all products from Firebase
app.get('/products', (req, res) => {
    const productRef = db.ref('products');
    
    // Fetch the products from Firebase
    productRef.once('value', (snapshot) => {
        const products = snapshot.val();
        
        // Create an array of products
        const productList = Object.keys(products).map((key, index) => {
            return { number: index + 1, id: key, ...products[key] }; // Include all product data, including img URL
        });
        
        // Send the product list as a JSON response
        res.status(200).json(productList);
    }, (errorObject) => {
        // Handle errors
        res.status(500).json({ message: 'Error fetching data', error: errorObject });
    });
});
app.post('/pay', (req, res) => {
    const img = req.body.img;
    const name = req.body.name;
    const price = req.body.price;
    const mobile = req.body.mobile
    const namec = req.body.namereceiver
    const hostel = req.body.hostel
    const hostelroom = req.body.hostelroom

    db.ref("user/").update({
        img: img,
        name: name,
        price: price,
        namer: namec,
        mobile : mobile, 
        hostel : hostel,
        hostelroom : hostelroom
        
    })
    .then(() => {
        res.status(200).json({ message: 'Order will be delivered in few hrs' });
    })
    .catch((error) => {
        res.status(500).json({ message: 'Error adding data', error: error });
    })
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
