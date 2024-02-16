window.addEventListener("keypress", function(x){
    var keyword = x.key;
    document.querySelector('p').innerHTML = keyword.toUpperCase();
})