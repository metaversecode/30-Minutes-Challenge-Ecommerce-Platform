// Fetch products from the server
const data = []
fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
        const groceryList = document.getElementById('grocery-list');

        // Dynamically create and append product elements to the page
        products.forEach((product) => {
            // Create product container
            const productDiv = document.createElement('div');
            productDiv.classList.add('grocery-item');

            // Create and append product image
            const imgElement = document.createElement('img');
            imgElement.src = product.img; // Use the img URL from Firebase
            imgElement.alt = product.name;
            productDiv.appendChild(imgElement);

            // Create and append product name
            const nameElement = document.createElement('h3');
            nameElement.innerText = product.name;
            productDiv.appendChild(nameElement);

            // Create and append product price
            const priceElement = document.createElement('p');
            priceElement.innerText = `INR ${product.price}`;
            productDiv.appendChild(priceElement);

            // Create and append Buy Now button
            const buttonElement = document.createElement('button');
            buttonElement.innerText = 'Buy Now';
            buttonElement.onclick = function () {
                openModal(product.img, product.name, product.price);
            };
            productDiv.appendChild(buttonElement);

            // Append product to the grocery list container
            groceryList.appendChild(productDiv);
            
            
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });

    function openModal(img, name, price) {
        data.push(img,name,price)
        document.getElementById('modal').style.display = 'flex';
        document.getElementById('img2').src = img;
        document.getElementById('p1').innerHTML = name;
        document.getElementById("price").innerHTML = "₹" + price;
    }

    // Function to close the modal
    function closeModal() {
        data.length = 0
        document.getElementById("two").style.display = "none";
        document.getElementById("one").style.display = "block";

        document.getElementById('modal').style.display = 'none';
    }
document.getElementById("ff").addEventListener("click", closeModal);

document.getElementById("pay").addEventListener("click", function(){
    fetch('http://localhost:3000/pay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            img: data[0],
            name: data[1],
            price: data[2],
            namereceiver : localStorage.getItem('name'),
            mobile : localStorage.getItem('mobile'),
            hostel : localStorage.getItem('hostel'),
            hostelroom : localStorage.getItem('room')
        })
    }).then(response => {
        if (response.ok) {
            document.getElementById("one").style.display = "none";
            document.getElementById("two").style.display = "block";

            alert('Order placed successfully');
        } else {
            console.error('Failed to place order');
        }
    })
})
document.getElementById("two").style.display = "none";
