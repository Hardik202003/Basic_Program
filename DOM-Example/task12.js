let form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        event.preventDefault();
    
        let data = {
            firstName: document.getElementById("1").value,
            lastName: document.getElementById("2").value,
            age: document.getElementById("3").value,
            date: document.getElementById("4").value,
            email: document.getElementById("5").value
           
        };
         console.log(data);
    });