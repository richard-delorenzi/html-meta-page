function getElementsByClass(searchClass,node,tag) {
    var classElements = new Array();
    if (node == null) node = document;
    if (tag == null) tag = '*';
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;
    var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
    for (i = 0, j = 0; i < elsLen; i++) {
	if (pattern.test(els[i].className) ) {
	    classElements[j] = els[i];
	    j++;
	}
    }
    return classElements;
}

function selectStansa(n)
{
    var s = getElementsByClass("subpage",null,null);
    for (var i =0; i < s.length; i++){
	s[i].className="subpage invisable";
    }
    document.getElementById("stansa"+n).className="subpage visable";
}

window.onload = function()
{
    selectStansa(1);
}