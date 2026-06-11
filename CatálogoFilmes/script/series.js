const series = [{
    titulo: "Chaves",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_face/nSpP9aS9LAQd7wwzzOoCAYIluco.jpg",
    descricao: "Foi sem querer querendo.",
},
{
    titulo: "Breaking Bad",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_face/hGwm9Cj3CdbJIqQWNExQqiYmCd4.jpg",
    descricao: "Se lembre do meu nome.",
},
{
    titulo: "INVENCÍVEL",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_face/qhb7RWU9ad9a5m3HbeRRXzjaMXf.jpg",
    descricao: "Para salvar o universo, ele realmente precisará ser… INVENCÍVEL.",
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
    descricao: "No Vietnã, o vento não sopra. Ele mata.",
}]

const lista_series = document.getElementById("listaSeries");

function mostrarSeries(lista) {
    lista_series.innerHTML = ""
    lista.forEach(serie => {
        lista_series.innerHTML += `
        <div class="col-md-4">
            <div class="card card-serie h-100">
            <img src="${serie.imagem}" class="card-img-top">
            <div class="card-body">
                <h3>${serie.titulo}</h3>
                <p>${serie.descricao}</p>
                <button class="btn btn=dark" onclick="verDetalhes('${serie.titulo}')">Ver detalhes</button>
            </div>
            </div>
        </div>
        `
    })
}

mostrarSeries(series)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações do serie",
        icon: "info"
    })
}