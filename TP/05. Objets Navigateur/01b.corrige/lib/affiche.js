	
	var projet = new Array();
	projet["nom"]    = new String("BDPhilia");
	projet["auteur"] = new String("Christophe");
	projet["copy"]   = new String("&copy; 2009 STARTX");
	

	/**
	 * Affiche le bandeau du haut pour le site
	 * @return   sortie directement via document.write()
	*/
	function affichePageBandeauHaut()
	{
		htmlData = "<div id=\"bandeau\">&nbsp;</div>";
		document.write(htmlData);
	}
	
	/**
	 * Affiche le bandeau de titre
	 * @param	selectionne une chaine de caractère avec le nom du fichier selectionné
	 * @return  sortie directement via document.write()
	*/
	function affichePageTitre(selectionne)
	{
		var i = new Number();
		for (i = 0; i < pagesDisponibles.length; i++)
			if(pagesDisponibles[i][1] == selectionne)
				document.write("<div id=\"titre\"><h1>"+pagesDisponibles[i][2]+"</h1></div>");
	}
	

	/**
	 * Affiche le pied de page du site
	 * @param	selectionne une chaine de caractère avec le nom du fichier selectionné
	 * @return  sortie directement via document.write()
	*/
	function affichePagePied()
	{
		var piedHtml = new String();
		piedHtml += "<div id=\"pied\">";
		piedHtml += "<span>"+projet["copy"]+" - ";
		piedHtml += "Réalisé par "+projet["auteur"]+"</span></div>";
		document.write(piedHtml);
	}
	
	
		
