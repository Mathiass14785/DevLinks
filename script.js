function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('lighty') // mudando a class sem condiconal

    // pegar a tag img, e substituir a imagem
    const img = document.querySelector('#profile img')
    
    // subistituir a imagem
    if(html.classList.contains('lighty')) {
        img.setAttribute('src', './assets/MathyRed.png' )
    }else {
        img.setAttribute('src', './assets/mathDanger.png')
    }

}