let main__img = document.querySelectorAll(".main__img");


function randomSize(min,max) {
    min = Math.ceil(40);
    max = Math.ceil(150);
    return Math.floor(Math.random() * (max - min)) + min;
}





function rotatePointers(){
    main__img.forEach(function(main__img){
        let x = (main__img.getBoundingClientRect().left) + (main__img.clientWidth / 2);
        let y = (main__img.getBoundingClientRect().top) + (main__img.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        main__img.style.transform = "rotate(" + rot + "deg)";
    })
}

document.querySelector("body").addEventListener("mousemove",rotatePointers);