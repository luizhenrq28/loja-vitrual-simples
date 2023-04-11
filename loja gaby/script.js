const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    const btns = carousel.querySelectorAll('.carousel i');
    let isDragging = false,
        startX,
        scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;

    });


    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3;
        carousel.scrollLeft = scrollLeft - walk;
    });

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const cardWidth = carousel.querySelector('img').clientWidth + 14;
            if (btn.id === 'left') {
                carousel.scrollLeft -= cardWidth;
            } else{
                carousel.scrollLeft += cardWidth;
            }
        });
    });
})


