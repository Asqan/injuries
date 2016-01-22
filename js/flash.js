function migotanie(id) {
 
    obj = document.getElementById(id);
 
    obj.style.visibility = (obj.style.visibility=="hidden")
                           ?'visible':'hidden';
 
    setTimeout("migotanie('" + id + "')", 500);
}
 
migotanie('flashing');
