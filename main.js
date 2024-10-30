let contenedor = document.getElementById('canciones-lista')

axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    console.log(res.data.songs)

    res.data.songs.map((song) => {
        let div = document.createElement('div')

        div.setAttribute('class', 'panel-central__canciones__contenido__cancion')

        div.innerHTML =
        `<img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}" alt="album de ${song.album}">
        <div class="panel-central__canciones__contenido__cancion__descripcion">
            <div>
                <a href="#">${song.title}</a>
                <a href="#"><span>${song.author}</span></a>
            </div>
            <img src="/resources/SVG/Panel Central/like.svg" alt="">
        </div>`

        div.addEventListener('click', () => {
            document.getElementById('change-image').setAttribute('src', `https://api.institutoalfa.org/api/songs/image/${song.image.filename}`)
            document.getElementById('change-artista').innerHTML = song.author
            document.getElementById('change-titulo').innerHTML = song.title
            document.getElementById('change-music').setAttribute('src', `https://api.institutoalfa.org/api/songs/audio/${song.audio.filename}`)
            document.getElementById('play').setAttribute('src', `/resources/SVG/Panel Derecho/pause.svg`)
        })

        contenedor.appendChild(div)
    })
})

let audio = document.getElementById('change-music')

document.getElementById('play').addEventListener('click', () => {
    if (audio.paused) {
        audio.play()
        document.getElementById('play').setAttribute('src', `/resources/SVG/Panel Derecho/pause.svg`)
    } else {
        audio.pause()
        document.getElementById('play').setAttribute('src', `/resources/SVG/Panel Derecho/play.svg`)
    }
})