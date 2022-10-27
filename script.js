var div0 = document.createElement("div");
div0.setAttribute("class","main");

var div = document.createElement("div");
div.setAttribute("class","container");

var label = document.createElement("label");
label.innerHTML ="Nationality";
label.setAttribute("for","text");
label.setAttribute("id","label");

var br = document.createElement("br");

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");
input.setAttribute("required",true);

var br1 = document.createElement("br");

var btn = document.createElement("button");
btn.addEventListener("click",foo);
btn.innerHTML = "Search";
btn.setAttribute("id","btn");

var div1 = document.createElement("div");
div1.setAttribute("class","display");
div1.setAttribute("id","output");


div0.appendChild(div);
div.append(label,br,input,br1,btn,);

div0.appendChild(div1);
document.body.append(div0);


async function foo(){
    let text1 =document.getElementById("text").value;
    
    try{

        
        let res = await fetch(`https://api.nationalize.io/?name=${text1}`);
        let res1 = await res.json();
        console.log(res1);
        console.log(res1.name);
        if(res1.country.length>0){
        console.log(res1.country);
        console.log(res1.country[0].country_id);
        console.log(res1.country[0].probability);
        console.log(res1.country[1].country_id);
        console.log(res1.country[1].probability);
        console.log(res1.country.length);
        
           
                var text2 = document.getElementById("output");
                text2.innerHTML= 
                ` ${res1.name} <br>
                ${res1.country[0].country_id} 
                 probability : ${res1.country[0].probability} ${res1.country[1].country_id}
                  
                   probability: ${res1.country[1].probability} `;   
        }else{
            var tex2 = document.getElementById("output");
                tex2.innerHTML= "DATA UNDEFINED ";
                
        }
    }
    catch (error){
         console.log(error);
    }
}
