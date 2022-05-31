var row = document.getElementById("row");
var perfumes =
[
  {id:1,Image:"images/carts1.png", name:"perfume1", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ut?"},
  {id:2,Image:"images/carts2.png", name:"perfume2", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ut?"},
  {id:3,Image:"images/carts3.png", name:"perfume3", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ut?"},
  {id:4,Image:"images/carts4.png", name:"perfume4", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ut?"},
  {id:5,Image:"images/carts5.png", name:"perfume5", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ut?"}
]


for (var i of perfumes){
    row.innerHTML += `
    <div class ="col">
    <div class="card" style="width: 18rem;">
    <img src="${i.Image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${i.name}</h5>
      <p class="card-text">${i.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    </div>
    `
}

function func(e){
    sessionStorage.setItem("productid",e.id);
    location.href = "detailProduct.html";
}