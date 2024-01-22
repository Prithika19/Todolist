const input=document.getElementById("inputbox")
const list=document.getElementById("listbox")

function add(){
    if (input.value===""){
        alert("You should write something!!")

    }
    else{
        let li =document.createElement("li")
        li.innerHTML=input.value
        list.appendChild(li)
        let s=document.createElement("span")
        s.innerHTML="\u00d7"
        li.appendChild(s)
    }
    input.value="";
    save()

}
list.addEventListener( "click",function(e){
    if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
    }

else{
      if(e.target.tagName==="SPAN")
      e.target.parentElement.remove();
}
},false)

function save(){
    localStorage.setItem("data",list.innerHTML)

}function show(){
    list.innerHTML=localStorage.getItem("data")
}
show()