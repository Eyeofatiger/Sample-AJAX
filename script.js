let inputUsd = document.getElementById("usd"),
    inputGbp = document.getElementById("gbp");

    inputUsd.addEventListener("input", ()=>{
        let request = new XMLHttpRequest();

        request.open("GET", "current.json");
        request.setRequestHeader("Content-type", "aplication/json; charset=utf-8");
        request.send();

        request.addEventListener("readystatechange", function(){
            if(request.readyState ===4 && request.status ==200){
                let data = JSON.parse(request.response);
                
                inputGbp.value = (inputUsd.value / data.gbp).toFixed(2);
            } else{
                inputGbp.value = "Somthing wrong!";
            }
        });
    });
