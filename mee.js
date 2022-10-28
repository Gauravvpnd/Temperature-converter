window.onload=function(){
let cel = document.getElementById("cel")
let far = document.getElementById("far")

cel.addEventListener('input', function(){
    let c = this.value
    let f = (c * 9/5) + 32;

    far.value = f
})
}