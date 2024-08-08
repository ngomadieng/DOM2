document.addEventListener('DOMContentLoaded', function(){

    var box= document.getElementById('color-box');
    var btn= document.getElementById('change-color-btn');

    //Genere une couleur aleatoire en utilisant des valeurs RVB

    function getRandomColor(){

        let r= Math.floor(Math.random()*256);
        let g= Math.floor(Math.random()*256);
        let b= Math.floor(Math.random()*256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    //Ajoute un ecouteur d'evenement a l'element change-color-btn
    btn.addEventListener('click', function(){
        box.style.background= getRandomColor();
    })


})