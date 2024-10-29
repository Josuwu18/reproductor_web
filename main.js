let contenedor = document.getElementById('canciones-lista')

axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    console.log(res.data.songs)

    res.data.songs.map((song) => {
        let div = document.createElement('div')

        div.setAttribute('class', 'panel-central__canciones__contenido__cancion')

        div.innerHTML =
        `<img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}">
        <div class="panel-central__canciones__contenido__cancion__descripcion">
            <div>
                <a href="#">${song.title}</a>
                <a href="#"><span>${song.author}</span></a>
            </div>
            <img src="/resources/SVG/Panel Central/like.svg" alt="">
        </div>`

        contenedor.appendChild(div)
    })
})