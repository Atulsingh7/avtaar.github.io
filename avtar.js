console.log("he");

let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    //input 
    let name=document.getElementById("name").value;
    console.log(name);
    //IMAGE
    let img=document.getElementById("iamge");
    
    
    img.src=`https://joeschmoe.io/api/v1/${name}`;
    
})