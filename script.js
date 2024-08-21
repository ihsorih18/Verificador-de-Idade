function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'images/bebem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/jovemm.jpeg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/adulto.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'images/idoso.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'images/bebef.jpeg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/jovemf.jpeg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/adulta.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'images/idosa.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}