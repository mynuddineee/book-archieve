const errorDiv =  document.getElementById('error-handle');
//const urlImage = (`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg}`);
const bookSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if (searchText === "") {
        errorDiv.innerText = "Search field cannot be empty.";
        return;
      }
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => bookSearchResult(data.docs));
}

//bookSearch();

const bookSearchResult = (results) =>{
    const searchResultContainer = document.getElementById('result-container');
    const searchResultCount = document.getElementById('search-count');
    
    searchResultCount.innerHTML = `<p class="card-text text-center mb-3 fw-bold fs-4 text text-success">Search Result: ${results.length}</p>`
    searchResultContainer.textContent = '';
    if (results.length === 0){
        errorDiv.innerText = 'No Result found';
    }
    else{
        errorDiv.innerText = " ";
    };
        results.forEach(result => {
            const div = document.createElement('div')
            div.classList.add('col');
            div.innerHTML = `
            <div class="col">
                  <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Book title: ${result.title}</h5>
                      <h5 class="card-title">Author Name: ${result.author_name}</h5>
                      <p class="card-text">First Publish Year: ${result.first_publish_year}</p>
                      <p class="card-text">Publisher Name: ${result.publisher}</p>
                    </div>
                  </div>
                </div>
            `
            searchResultContainer.appendChild(div);
          
        });
    
   
    
    
}
