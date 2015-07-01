	
	
	var pagesDisponibles = new Array(
			["Accueil","index.htm","Bienvenue sur "+projet["nom"]],
			["Recherche","recherche.htm","Votre recherche de BD"],
			["Commande","commande.htm","Votre panier"]
			);


	/**
	 * Affiche le menu du site
	 * @param	selectionne une chaine de caractère avec le nom du fichier selectionné
	 * @return  sortie directement via document.write()
	*/
	function affichePageMenu(selectionne)
	{
		var menuHtml = new String();
		var i = new Number();
		menuHtml += "<div id=\"menu\"><ul>";
		for (i = 0; i < pagesDisponibles.length; i++)
		{
			if(pagesDisponibles[i][1] == selectionne)
					cssSelect = " class=\"select\"";
			else	cssSelect = "";
			menuHtml += "<li"+cssSelect+"><a href=\""+pagesDisponibles[i][1]+"\" title=\""+pagesDisponibles[i][0]+"\">"+pagesDisponibles[i][0]+"</a></li>";
		}
		menuHtml += "</ul></div>";
		document.write(menuHtml);
	}		
	
