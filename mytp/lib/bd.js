/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ficheBd(idFiche, title, autor, out, res, prize, nbStock){
    this.id = idFiche;
    this.titre = title;
    this.auteur = autor;
    this.sortie = out;
    this.resume = res;
    this.prix = (prize===undefined)?0.00:prize;
    this.stock = (nbStock===undefined)?0:nbStock;
    this.stocker = function(qte){
        var add = qte===undefined?1:qte;
        this.stock += add;
    };
    this.destocker = function(qte){
        var add = qte===undefined?1:qte;
        this.stock -= add;
    };
    this.toString = function(){
        var chaine ='"FICHE BD N°' + this.id + ' : ' + this.titre +'";<br />';
        chaine += '"Auteur : ' + this.auteur +'";<br />';
        chaine += '"Prix : ' + this.prix +'";<br />';
        chaine += '"Stock : ' + this.stock +'";<br />';
        return chaine;
    };
}

function stockBd(){
    this.stock = new Array();
    this.stockByKey = new Array();
    this.referencer = function(bd){
        //var aaa= typeof bd;
        if (typeof bd == 'object'){
            this.stock.push(bd);
            this.stockByKey[bd.id] = this.stock.length - 1;
        }
    };
    this.ajouter = function(idFiche, title, autor, out, res, prize, nbStock){
        var fiche = new ficheBd(idFiche, title, autor, out, res, prize, nbStock);
        this.referencer(fiche);
    };
    this.stocker = function(id,qte){        
        this.stock[this.stockByKey[id]].stocker(qte);
    };
    this.destocker = function(id,qte){
        this.stock[this.stockByKey[id]].destocker(qte);
    };  
    this.toString = function(){
        var chaine ='<table id="tblStock" border="1"><tr class="rowHeader"><td>ID</td><td>Titre</td><td>Auteur</td><td>Prix</td><td>Stock</td><td>Sortie</td></tr>';
        for (i=0;i<this.stock.length;i++){
            chaine += '<tr class="';
            chaine += (i%2==0)?'rowPair':'rowImpair';
            chaine += '">';
            chaine += "<td>" + this.stock[i].id + "</td>";
            chaine += "<td>" + this.stock[i].titre + "</td>";
            chaine += "<td>" + this.stock[i].auteur + "</td>";
            chaine += "<td>" + this.stock[i].prix + "</td>";
            chaine += "<td>" + this.stock[i].stock + "</td>";
            chaine += "<td>" + this.stock[i].sortie + "</td>";
            chaine += "</tr>"
        }
        chaine += "</table>"
        return chaine;
    };
    
    this.search = function(text){
        var chaine ='<table id="tblStock" border="1"><tr class="rowHeader"><td>ID</td><td>Titre</td><td>Auteur</td><td>Prix</td><td>Stock</td><td>Sortie</td></tr>';
        for (i=0;i<this.stock.length;i++){
            if (this.stock[i].titre.toString().toUpperCase().indexOf(text.toUpperCase()) > -1) {
                chaine += '<tr class="';
                chaine += (i%2==0)?'rowPair':'rowImpair';
                chaine += '">';
                chaine += "<td>" + this.stock[i].id + "</td>";
                chaine += "<td>" + this.stock[i].titre + "</td>";
                chaine += "<td>" + this.stock[i].auteur + "</td>";
                chaine += "<td>" + this.stock[i].prix + "</td>";
                chaine += "<td>" + this.stock[i].stock + "</td>";
                chaine += "<td>" + this.stock[i].sortie + "</td>";
                chaine += "</tr>"
            }
        }
        chaine += "</table>"
        return chaine;
    };
}

/*
- Dans le fichier bd.js
	- Créer une classe stockBd() dont le constructeur instancie 2 propriétés de tableau "stock" et "stockByKey"
	- Créer une methode referencer(bd) qui vérifie que le paramètre soit un objet. Si c'est
	  le cas, il ajoute une entrée dans la propiété stockByKey (clef = id de la bd, valeur = indice dans le tableau stock)
	  on ajoute dans le tableau stock, l'objet ficheBd passé en paramètre
	- Créer une methode ajouter(bd) qui accèpte les même paramètres que notre classe ficheBd
	  cette fonction créer un objet ficheBd qu'elle ajoute dans l'arbre stock et stockByKey
	- Créer les methode stocker() et destocker() qui prennent en premier paramêtre l'id de 
	  la Bd à modifier, et en second paramètre, la quantité à modifier
	- Enfin, créer une methode toString() permettant d'afficher un tableau de toutes les Bd en stock
	  ce tableau sera en xhtml
                */