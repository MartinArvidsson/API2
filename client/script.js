window.onload = function(){
    var test = document.querySelector("#postForm");
    
    test.addEventListener("submit", function(event){
        event.preventDefault();
        
       var xhr = new XMLHttpRequest();
       xhr.open('POST', '/collection');
       xhr.send();
    });
    
};