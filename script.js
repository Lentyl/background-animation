const cloud = document.querySelectorAll('.anim-bg');
console.log(cloud);


document.addEventListener('mousemove', (e) => {



    const {
        clientX,
        clientY
    } = e;

    const centerX = clientX - window.innerWidth / 2;
    const centerY = clientY - window.innerHeight / 2;

    cloud.forEach(el => {
        const ratioX = el.getAttribute('ratioX')
        const ratioY = el.getAttribute('ratioY')

        el.style.transform = `translate(${centerX*ratioX}px,${centerY*ratioY}px )`
    })


})