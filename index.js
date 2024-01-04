var content=document.querySelector(".main-content")
var love_btn=document.querySelector("i")

content.addEventListener("dblclick",function(){
    love_btn.style.transform="translate(-50%,-50%) scale(1)"
    love_btn.style.opacity="0.8"

    setTimeout(function(){
        love_btn.style.opacity="0"
    },1000)

    setTimeout(function(){
        love_btn.style.transform="translate(-50%,-50%) scale(0)"
    },2000)
})