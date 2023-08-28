const elList = document.querySelector(".pokemon__list");
const elInput = document.querySelector(".input");
const elmodalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector("modal-body")
const renderPokemon = function(array) {
    elList.innerHTML = ""
    array.forEach(element => {
        var btnElement = document.createElement("button")
        var liElement = document.createElement("li");
        var imgElement = document.createElement("img");
        var weightElement = document.createElement("p");
        var heightElement = document.createElement("p");
        var eggElement = document.createElement("p");
        var spawnElement = document.createElement("p");
        var nameElement = document.createElement("p");
        const  moreBtnElement = document.createElement("button");
        
        liElement.classList.add("pokemon__items");
        
        
        imgElement.setAttribute("src", element.img);
        imgElement.setAttribute("alt", element.name);
        imgElement.classList.add("pokemon-img");
        

        // btnElement.textContent = `Read more`;
        // btnElement.classList.add("button");
        // weightElement.textContent = `Weight: ${element.weight}`;
        // weightElement.classList.add("item__weight");
        
        // heightElement.textContent = `Height: ${element.height}`;
        // heightElement.classList.add("item__height");
        
        // eggElement.textContent = `Egg: ${element.egg}`;
        // eggElement.classList.add("item__egg");
        
        // spawnElement.textContent = `Spawn time: ${element.spawn_time}`;
        // spawnElement.classList.add("item__spawn");
                
        moreBtnElement.textContent = `more`;
        moreBtnElement.classList.add("more-btn", 'btn-primary', "modal-btn");
        moreBtnElement.setAttribute('data-bs-toggle', 'modal');
        moreBtnElement.setAttribute('data-bs-target', '#exampleModal');
        moreBtnElement.dataset.id = element.id;


        nameElement.textContent = element.name;
        nameElement.classList.add("item__name");


        liElement.appendChild(imgElement); 
        liElement.appendChild(weightElement);
        liElement.appendChild(heightElement);   
        liElement.appendChild(eggElement);
        liElement.appendChild(spawnElement);
        liElement.append(moreBtnElement);
        liElement.appendChild(nameElement);
        elList.appendChild(liElement);
        
    });

};

renderPokemon(pokemons)

elList.addEventListener('click', (evt) => {
  if (evt.target.matches('.modal-btn')) {
    const btnId = evt.target.dataset.id;
    const finded = pokemons.find(function(item) {
        return pokemons.id  == btnId;
    }) 
    console.log(finded);
  }
})

elInput.addEventListener("keyup", function(){
    
    const inputValue = elInput.value.trim().toLowerCase();
    
    let result = pokemons.filter(function(item){
        let search_name = item.name.toLowerCase();
        return search_name.includes(inputValue);
        
    })
    renderPokemon(result);
})

