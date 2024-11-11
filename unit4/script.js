let timeoutId;

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value;

    
    clearTimeout(timeoutId);

   
    timeoutId = setTimeout(() => {
        if (query) {
            fetchSuggestions(query);
        } else {
            clearSuggestions();
        }
    }, 300); 
});

function fetchSuggestions(query) {
    fetch("https://console.firebase.google.com/project/e-commerse-82a05/database/e-commerse-82a05-default-rtdb/data/~2F")
        .then(response => response.json())
        .then(data => {
            displaySuggestions(data);
        })
        .catch(error => console.error('Error fetching suggestions:', error));
}

function displaySuggestions(products) {
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = ''; 

    if (products.length > 0) {
        suggestionsContainer.style.display = 'block'; 
        products.slice(0, 5).forEach(product => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = product.title;

            suggestionItem.addEventListener('click', () => {
                loadProductDetails(product.id);
            });

            suggestionsContainer.appendChild(suggestionItem);
        });
    } else {
        suggestionsContainer.style.display = 'none'; 
    }
}

function clearSuggestions() {
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';
    suggestionsContainer.style.display = 'none';
}

function loadProductDetails(productId) {
    console.log(`Loading details for product ID: ${productId}`);
}