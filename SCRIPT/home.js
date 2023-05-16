document.addEventListener('click', e => {
    let setas
    if (e.target.matches('.setas')){
        setas = e.target
    }else{
        setas = e.target.closest('.setas')
    }

    if(setas != null) clickSeta(setas)
})


function clickSeta(setas){
    const slider = setas.closest('.home-slider').querySelector('.slider')
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))

    if (setas.classList.contains('seta-esq')){
        slider.style.setProperty('--slider-index', sliderIndex - 1)
    }

    if (setas.classList.contains('seta-dir')){
        slider.style.setProperty('--slider-index', sliderIndex + 1)
    }
}