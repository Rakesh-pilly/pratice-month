let start = 1 ;
let count = 10  
function load (start, count){
    let div = document.getElementById("load");

    for(let i = start ;i<= count ; i++){
        let H1 = document.createElement("h1");
        H1.innerText = `masai school ${i}`

        div.appendChild(H1)
    }
    
}



load(start, count);


window.addEventListener("scroll", function(){

    if(window.scrollY+ this.window.innerHeight >= document.documentElement.scrollHeight){
        start += 10
        count += 10;
        load(start,count);
    }
})