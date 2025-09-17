// let setInter = document.getElementById("setInter");
// let clearInter = document.getElementById("clearInter"); 
// let heading = document.getElementById("heading");

// let count =0; 
// let unique = null;


// setInter.addEventListener("click", function(){
//     unique = setInterval(function(){
//         heading.textContent = count
//         count++;
//     },2000)
// });

// clearInter.addEventListener("click", function(){
//     clearInterval(unique)
// });



// let creatInput = document.createElement("input")
// let creatHeading = document.createElement("h1") 


// creatInput.addEventListener("keydown",function(event){
//     if(event.key === "Enter"){
//         creatHeading.textContent = creatInput.value
//     }
// })

// document.body.appendChild(creatInput);
// document.body.appendChild(creatHeading);




// let option = {
//     method : "GET"
// }

// let url = "https://fakestoreapi.com/products";

// fetch(url,option).then(function(response){
//     return response.status
// }).then(function(status){
//     console.log(status)
// })



// let creaDivEl = document.createElement("div");
// let creatimg = document.createElement("img")
// let creath1 = document.createElement("h1");
// let createp = document.createElement("p");
 


// creaDivEl.classList.add("main-content");


// creath1.textContent = "Hello";
// createp.textContent = "Priya";
// creatimg.src = "https://images.unsplash.com/photo-1757252800867-2e78e08a6d53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// creatimg.alt = "Hello"

// creaDivEl.append(creatimg,creath1,createp);
// document.body.appendChild(creaDivEl);


let option = {
    method: "GET"
};

let url = "https://fakestoreapi.com/products";

fetch(url, option)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // create a container div
        let container = document.createElement("div");
        document.body.appendChild(container);

        // loop through products
        data.forEach(function(product){
            // create a card for each product
            let card = document.createElement("div");
            card.style.border = "1px solid #ccc";
            card.style.padding = "10px";
            card.style.margin = "10px";
            card.style.width = "200px";

            // product title
            let title = document.createElement("h3");
            title.textContent = product.title;

            // product image
            let img = document.createElement("img");
            img.src = product.image;
            img.alt = product.title;
            img.style.width = "100px";

            // append elements into card
            card.appendChild(title);
            card.appendChild(img);

            // append card into container
            container.appendChild(card);
        });
    })
    .catch(function(error){
        console.log("Error:", error);
    });
