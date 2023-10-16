function transliterate(regexp_file) {

    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("msie")!=-1) { //IE
       var range = document.selection.createRange()
       txt = range.text;
       if (txt == '') {
         var str= window.document.formText.editSrc.value;
       }else{
         var str=range.text;
       }
    }
    else {
      str= window.document.formText.editSrc.value;
    }

    //---------------
      str = " " + str + " ";
      for ( i in regexp_file ) {
        str = str.replace( regexp_file[i][0], regexp_file[i][1] );
      }
      str = str.substring(1,str.length -1);
    //----------------
    if (agt.indexOf("msie")!=-1) { //IE
      if (txt == ''){
        window.document.formText.editSrc.value = str;
      }else{
        range.text = str;
        //if (!window.opera) txt = txt.replace(/\r/g,'')
        if (range.moveStart) range.moveStart('character', - txt.length)
        range.select() 
      }
    }
    else{
        window.document.formText.editSrc.value = str;
    }
 
    return true;
}

