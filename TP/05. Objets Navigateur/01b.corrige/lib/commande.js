	
	/**
	 * Verifie l'information d'une adresse IP
	*/
	function verifieIp()
{
     expReg = /^((([01]?[0-9]?[0-9])|(2[0-4][0-9])|(25[0 -5]))[.]){3}(([0-1]?[0-9]?[0-9])|(2[0-4][0-9])|(25[0 -5])){1}$/
     leip = document.forms[0].ip.value;
     tab = leip.search(expReg);
     if (tab!=-1)
          result = "Adresse IP valide";
     else result = "Adresse IP fausse";
     document.forms[0].result.value = result;
}

	
	
	
	
	
	function met_en(quoi)
	{
	     var deja = false ;
	     if (window.getSelections)
	        txt = window.getSelection();
	     else if (document.getSelection)
	       txt = document.getSelection() ;
	     else if (document.selection)
	       txt = document.selection.createRange().text;
	     init(document.formu.texte.value);
	}
	
	
	function init(txt)
	{
	     document.getElementById("voirtxt").innerHTML = txt.replace( /\n/g,"<br/>")
	}
