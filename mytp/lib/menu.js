/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var pagesDisponibles = new Array(["Accueil","index.htm","Bienvenue sur "+projet["nom"]],["Recherche","recherche.htm","Votre recherche de BD"],["Commande","commande.htm","Votre panier"]);

function affichePageMenu(pageSelected){
    var menu = '<div id="menu"><ul>';
    for (i=0;i<pagesDisponibles.length;i++){
        menu += '<li';
        if (pageSelected == pagesDisponibles[i][1].toString()){
            menu += ' class="select"';
        }
        menu += '><a href="' + pagesDisponibles[i][1].toString() + '" title="' + pagesDisponibles[i][2].toString()+'">' + pagesDisponibles[i][0].toString() + '</a></li>';
    }
    return menu + '</ul></div>';
}

