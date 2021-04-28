var items = JSON.parse(localStorage.getItem("data"))||[];
console.log(items);
var count=0;
var main= document.getElementsByTagName("tbody")[0]
var total=document.getElementById("total")
var sum=0;
items.forEach((element) => {
    main.innerHTML+=`
    <tr>
    <td>${count+=1}</td>
    <td><img src="${element.img}" width="100px/>"</td>
    <td>${element.title}</td>
    <td><button class="btn btn-dange remove" id="${element.id}">X</button>


    </tr>`
    sum+=parseInt(element.price*element.qty)

    // <td><button class="btn btn-primary add" id="${element.id}">+</button>
    // <input type="text" value="${element.qty}" disable/>
    // <button class="btn btn-primary minus" id="${element.id}">-</button></td>
    // <td>${element.price}</td> 
});
console.log(sum)
total.innerHTML=sum

var remove= document.querySelectorAll(".remove");
remove.forEach((obj)=>{
    obj.addEventListener("click",(event)=>{

        var id= event.target.id;
        var arrNew=items.filter((obj)=>{
            return id!==obj.id
        })
        localStorage.setItem('data',JSON.stringify(arrNew));
        location.reload();

    })
})
var add=document.querySelectorAll(".add");

var minus=document.querySelectorAll(".minus");

add.forEach((obj)=>{
    obj.addEventListener("click",(event)=>{
        var id=event.target.id;
        console.log()
        items.forEach((val)=>{
            if(id==val.id){
                val.qty+=1;
                console.log(event.target.parentElement.children[1]);
                event.target.parentElement.children[1].value=val.qty
                localStorage.setItem('data',JSON.stringify(items))
            }
        })
        
        console.log(add);

        location.reload();
    })
   
})

minus.forEach((obj)=>{
    obj.addEventListener("click",(event)=>{
        var id=event.target.id

        items.forEach((val)=>{
            if(id==val.id){
                if(val.qty==1){
                    minus:disable;
                }else{
                val.qty-=1;
                console.log(event.target.parentElement.children[1]);
                event.target.parentElement.children[1].value=val.qty
                localStorage.setItem('data',JSON.stringify(items))
            }
            }
        })
        
        console.log(add);

        location.reload();
    })
   
})
