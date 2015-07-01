/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var projet = new Array();
projet["nom"]="BDPhila";
projet["auteur"]="Jonathan";
projet["copy"]="&copy; 2015 mon entreprise";

function affichePageBandeauHaut(){
    return '<div id="bandeau">&nbsp;</div>';
}

function affichePageTitre(pageSelected){
    var titre = '';
    for (i=0;i<pagesDisponibles.length;i++){
        if (pageSelected == pagesDisponibles[i][1].toString()){
            titre = pagesDisponibles[i][0].toString();
        }
    }
    return '<div id="titre"><h1>Bienvenue sur ' + titre + '</h1></div>';
}

function affichePagePied(){
    return '<div id="pied"><span>' + projet["copy"].toString() + ' - R&eacute;alis&eacute; par ' + projet["auteur"].toString() + '</span></div>';
}

function afficheTout(pageSelected){
    var a = affichePageBandeauHaut();
    a += affichePageMenu(pageSelected);
    a += affichePageTitre(pageSelected);
    return a;
}


function initRecherche(){
    document.getElementById("rechercher").addEventListener("click",function (){
        var txt = document.getElementById("txtRecherche").value;
        //alert(txt);
        document.getElementById("blockDroit").innerHTML = monStock.search(txt);
    });
}

