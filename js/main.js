var elList = document.querySelector(".pokemon__list");
var elInput = document.querySelector(".input");

var renderPokemon = function(array) {
    elList.innerHTML = ""
    array.forEach(element => {
        var liElement = document.createElement("li");
        var imgElement = document.createElement("img");
        var weightElement = document.createElement("p");
        var heightElement = document.createElement("p");
        var eggElement = document.createElement("p");
        var spawnElement = document.createElement("p");
        var nameElement = document.createElement("p");
        
        liElement.classList.add("pokemon__items");
        
        
        imgElement.setAttribute("src", element.img);
        imgElement.setAttribute("alt", element.name);
        imgElement.classList.add("pokemon-img");
        
        
        weightElement.textContent = `Weight: ${element.weight}`;
        weightElement.classList.add("item__weight");
        
        heightElement.textContent = `Height: ${element.height}`;
        heightElement.classList.add("item__height");
        
        eggElement.textContent = `Egg: ${element.egg}`;
        eggElement.classList.add("item__egg");
        
        spawnElement.textContent = `Spawn time: ${element.spawn_time}`;
        spawnElement.classList.add("item__spawn");
        
        nameElement.textContent = element.name;
        nameElement.classList.add("item__name");
        
        liElement.appendChild(imgElement);
        liElement.appendChild(weightElement);
        liElement.appendChild(heightElement);
        liElement.appendChild(eggElement);
        liElement.appendChild(spawnElement);
        liElement.appendChild(nameElement);
        elList.appendChild(liElement);
    });
};

renderPokemon(pokemons)

elInput.addEventListener("keyup", function(){
    
    var inputValue = elInput.value.trim().toLowerCase();
    
    let result = pokemons.filter(function(item){
        let search_name = item.name.toLowerCase();
        return search_name.includes(inputValue);
        
    })
    renderPokemon(result);
})



