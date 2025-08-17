const button=document.querySelector("button");
const input=document.querySelector("input");
let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
button.addEventListener("click",()=>{
    const getqr=async()=>{
        let current=input.value;
        if(current===""){
            alert("enter the text");
        }
        const existingImg = document.querySelector(".img");
        if (existingImg) {
            existingImg.remove();
         } 
        let img=document.createElement("img");
        img.setAttribute("class","img");
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(current)}`;
        input.insertAdjacentElement("afterend", img);
            }    
    getqr();

});
