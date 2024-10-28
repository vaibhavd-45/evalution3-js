function firebaseConfig()  {
    "https://console.firebase.google.com/project/e-commerse-82a05/database/e-commerse-82a05-default-rtdb/data/~2F"
  };
  const productRef =firebase.database().ref('products');

  function fetchProducts(){
    productRef.on('value',(snapshot)=>{
        const products=snapshot.val();
        const productRefContainer = document.getElementById('product');
        productRefContainer.innerHTML='';

        for ( const productId in products) {
            const product = products[productId];
            const productCard = document.createElement('div')
            productCard.classList.add('product')
            productCard.innerHTML=`
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price:$${product.price}</p>
            <button>Add to cart</button>`;
            productsContainer.appendChild(productCard);
        }
    });
  }
  fetchProducts();