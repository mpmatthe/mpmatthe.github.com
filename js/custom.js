function removeAllDates(){
    var elements = document.getElementsByClassName('article-date');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

window.onload = removeAllDate;