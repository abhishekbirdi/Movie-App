

var edits=JSON.parse(localStorage.getItem("edit"))||[];
console.log(edits)
var card=document.querySelectorAll(".lks");

card.forEach((items)=>{
    items.addEventListener("click",(event)=>{
        var id=event.target.id;
        var title=event.target.parentElement.children[0].textContent;
        var img= event.target.parentElement.parentElement.children[0].children[0].src;
var price =event.target.parentElement.children[1].textContent;
        var flag=edits.some((item)=>{
            return id==item.id
  
        })
        if(flag){
            alert("already exist!!!")
        }else{
            edits.push({
                id:id,
                title:title,
                price:price,
                img:img,
                qty:1
            })
            localStorage.setItem('edit',JSON.stringify(edits))
            
        }



       
     

    })
})



