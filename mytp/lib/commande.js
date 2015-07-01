/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function initCommande(){
    function remplirVoirTxt (){
        var txt = document.getElementById("txtArea").value;
        document.getElementById("voirtxt").innerHTML = txt;
    }
    document.getElementById("valider").addEventListener("click",function(){
        document.getElementById("voirtxt").innerHTML = window.getSelection().toString();
    });
    document.getElementById("txtArea").addEventListener("keyup",remplirVoirTxt);
    
    document.addEventListener("select",function(){
        document.getElementById("voirtxt").innerHTML = document.getSelection().toString();
    });
}