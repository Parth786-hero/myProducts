const father = document.querySelector(".father");
async function getProducts(){
    const promise = await fetch("https://fakestoreapi.com/products");
    try{
        const data = await promise.json();
        data.forEach((obj , id)=>{
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <img src=${obj.image} alt="later on">
            <div class="text-box">
                <h2 class="md-sm-heading capitalize">${obj.category}</h2>
                <p class="fw-300">${(obj.description).slice(0 ,70)}</p>
                <a href=${obj.image} class="capitalize button">explore</a>
            </div>
        `;
        father.append(div);
        });
    }catch(e){
        alert("Kindley get connected to internet ....");
        console.log(e);
    }
    
}
getProducts();