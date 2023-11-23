console.log(products)

var category = document.location.search.slice(10);
var novidadesProdutoEl = document.querySelector('.novidades__produto');
var novidadesEl = document.querySelector('.novidades');
var template = '';
var selectedCategory = products[category]
selectedCategory.forEach(product => {
    template += `
    <div class="novidades__produto--01">
        <img src="${product.imgUrl}" class="novidades__produto--01--imagem">
        <div class="novidades__produto--01--info">
            <p class="novidades__produto--01--txt">${product.name}</p>
        </div>
    </div>

    `
});
novidadesProdutoEl.innerHTML = template;
novidadesEl.innerText = category;

console.log(template)