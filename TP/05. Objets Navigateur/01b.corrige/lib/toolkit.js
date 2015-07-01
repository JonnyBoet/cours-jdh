/**
 * Affiche l'arorescence d'une structure Javascript
 * @param	l'arbre a afficher (Array/Hashes/Objects)
 * @return  chaine de charactères avec la représentation de l'élément fournit
 */
function print_r(arr, level)
{
    var dumped_text = "";
    if (!level) level = 0;

    //The padding given at the beginning of the line.
    var level_padding = "";
    for (var j = 0; j < level + 1; j++) level_padding += "    ";

    if (typeof (arr) == 'object') { //Array/Hashes/Objects
        for (var item in arr) {
            var value = arr[item];

            if (typeof (value) == 'object') { //If it is an array,
                if (typeof (item) == 'string')
                    dumped_text += level_padding + "['" + item + "'] => (" + typeof (value) + ") \n";
                else
                    dumped_text += level_padding + "[" + item + "] => (" + typeof (value) + ") \n";
                dumped_text += level_padding + "( \n";
                dumped_text += print_r(value, level + 1);
                dumped_text += level_padding + ") \n";
            }
            else {
                dumped_text += level_padding + "[" + item + "] => \"" + value + "\"\n";
            }
        }
    }
    else { //Stings/Chars/Numbers etc.
        dumped_text = '(' + typeof (arr) + ') => "' + arr + '"';
    }
    return dumped_text;
}






var idQ = "ajaxsearchQuery";
var idB = "ajaxsearchBtn";
var idR = "ajaxsearchResult";



var ajaxsearch = {
    idQ: "ajaxsearchQuery",
    idB: "ajaxsearchBtn",
    idR: "ajaxsearchResult",
    init: function () {
        console.log('-- init ajaxsearch');
        ajaxsearch.qelement = document.getElementById(ajaxsearch.idQ);
        ajaxsearch.belement = document.getElementById(ajaxsearch.idB);
        ajaxsearch.relement = document.getElementById(ajaxsearch.idR);
        ajaxsearch.belement.addEventListener('click', ajaxsearch.search);
    },
    search: function () {
        console.log('-- recherche');
        var q = ajaxsearch.qelement.value;
        ajaxsearch.xmlhttp = new XMLHttpRequest();
        ajaxsearch.xmlhttp.open("get", './bd.json', true);
        ajaxsearch.xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajaxsearch.xmlhttp.onreadystatechange = ajaxsearch.response;
        ajaxsearch.xmlhttp.send(q);
    },
    response: function () {
        if (ajaxsearch.xmlhttp.readyState === 4)
        {
            if (ajaxsearch.xmlhttp.status === 200)
            {
                console.log('-- get positive response');
                console.log(ajaxsearch.xmlhttp.responseText);
                var bds = JSON.parse(ajaxsearch.xmlhttp.responseText);
                var list = "<ul>";
                for(var i = 0; i < bds.length; i++) {
                    var bd = bds[i];
                    list += "<li>"+bd.auteur+" - "+bd.name+"</li>";
                }
                list += "</ul>";
                ajaxsearch.relement.innerHTML = list;
            }
            else
            {
                console.log('-- get ' + ajaxsearch.xmlhttp.status + ' response');
            }
        }
    }
};