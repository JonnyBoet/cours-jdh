	/**
	 * Affiche le menu du site
	 * @param	selectionne une chaine de caractère avec le nom du fichier selectionné
	 * @return  sortie directement via document.write()
	*/
	function print_r(arr,level) 
	{
		var dumped_text = "";
		if(!level) level = 0;
	
		//The padding given at the beginning of the line.
		var level_padding = "";
		for(var j=0;j<level+1;j++) level_padding += "    ";
	
		if(typeof(arr) == 'object') { //Array/Hashes/Objects
	 		for(var item in arr) {
	  			var value = arr[item];
	 
	  			if(typeof(value) == 'object') { //If it is an array,
	   				if(typeof(item) == 'string')
		   				dumped_text += level_padding + "['" + item + "'] => ("+ typeof(value) + ") \n";
		   			else 
		   				dumped_text += level_padding + "[" + item + "] => ("+ typeof(value) + ") \n";
		   			dumped_text += level_padding + "( \n";
	   				dumped_text += print_r(value,level+1);
	  				dumped_text += level_padding + ") \n";
	   			} 
	  			else {
	   				dumped_text += level_padding + "[" + item + "] => \"" + value + "\"\n";
	  			}
	 		}
		} 
		else { //Stings/Chars/Numbers etc.
	 		dumped_text = '(' + typeof(arr) + ') => "'+arr+'"';
		}
		return dumped_text;
	} 
