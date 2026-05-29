const filmes = [{
    titulo: "Vingadores",
    imagem: "https://themoviedb.org/t/p/w300_and_h450_face/tCyp6aqOhqGxg6dU0OOIPhOAAne.jpg",
    descricao: "Os maiores heróis da terra unidos.",
},
{
    titulo: "Batman",
    imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    descricao: "O cavaleiro das trevas",
},
{
    titulo: "Homem-Aranha",
    imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    descricao: "O amigo da vizinhança",
},
{
    titulo: "A Queda! As Últimas Horas de Hitler",
    imagem: "https://media.themoviedb.org/t/p/w533_and_h300_face/cmyrTgVrfsQNlQG4o6m7E5HoP0L.jpg",
    descricao: "Abril de 1945, uma nação aguarda... A Queda!"
},
{
    titulo: "Top Gun - Asas Indomáveis",
    imagem: "https://media.themoviedb.org/t/p/w533_and_h300_face/dBgxEkWe17R0AJDAvAhpeVELQx2.jpg",
    descricao: "Voe com o melhor dos melhores.",
},
{
    titulo: "Nascido Para Matar",
    imagem: "https://media.themoviedb.org/t/p/w533_and_h300_face/3k2TRmqMjgt7tcwkYwZQdctnty3.jpg",
    descricao: "No Vietnã, o vento não sopra. Ele mata."
}]

const lista_filmes = document.getElementById("listaFilmes");

function mostrarFilmes(lista) {
    lista_filmes.innerHTML = ""
    lista.forEach(filme => {
        lista_filmes.innerHTML += `
        <div class="col-md-4">
            <div class="card card-filme h-100">
            <img src="${filme.imagem}" class="card-img-top">
            <div class="card-body">
                <h3>${filme.titulo}</h3>
                <p>${filme.descricao}</p>
                <button class="btn btn=dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
            </div>
            </div>
        </div>
        `
    })
}

mostrarFilmes(filmes)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações do filme",
        icon: "info"
    })
}