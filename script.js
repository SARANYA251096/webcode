async function foo(){
    try{
        var container=document.createElement("div");
        container.setAttribute("class","container");
        container.style.backgroundColor="lightgray";
        var row=document.createElement("div");
        row.style.height="30%";
        row.classList.add("row","m-3");
        container.append(row);

        var res=await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
        let res1=await res.json();
        console.log(res1);
        for(var i=0;i<10;i++){
              row.innerHTML+=`<div class=col-md-4>
              <div class="card border-light mb-3" style="max-width: 18rem; height:">
              <div class="card-header"style="text-align:center; background-color:lightblue;"><b>Brand:"${res1[i].brand}"</b></div>
              <img src="${res1[i].image_link}" class="card-img-top" style="height:100px; width:200px; align-items:center; margin-left:40px ">
                <h6 class="card-title" style="font-size:15px">Name:"${res1[i].name}"</h6>
                <h6 class="card-title" style="font-size:15px">Price:"${res1[i].price}"</h6>
                <h6 class="card-title" style="font-size:15px">Product Link:"${res1[i].product_link}"</h6>
                <h6 class="card-title" style="font-size:15px">Description:"${res1[i].description}"</h6>

                
              </div>
            </div>
         </div>`;
        }
        document.body.append(container);
    }
    catch(error){
        console.log(error);
    }
}
foo();

