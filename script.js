localStorage.clear()
document.getElementById("btn1").addEventListener("click", (e) => {
    let heading = document.getElementById("text").value
    console.log(heading)
    let random = Math.floor(Math.random()*999);
    
    localStorage.setItem(random, JSON.stringify(heading))
    document.getElementById("field").innerHTML += ` <div id="${random*10}" class="list">
    <span>${heading}</span>
    <input type="button" id="${random}" value="Delete" onclick="rlick(this.id)" >

</div>`

document.getElementById("text").value = "";

})
function rlick(clicked_id){
    localStorage.removeItem(clicked_id)
    document.getElementById(clicked_id*10).remove()
}