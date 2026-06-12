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
    titulo: "Chapolin Colorado",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_face/nuOrzFX2UrfCFWDKE6sBdugoKeP.jpg",
    descricao: "Sigam-me os bons!"
},
{
    titulo: "Mestres do Ar",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_face/wUIUzCouKHc0PjfMdTB9q9J8Z5G.jpg",
    descricao: "Uma equipe, uma guerra",
},
{
    titulo: "Generation Kill",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_face/wiihoYOODwh82xVzPoiaztlg6c9.jpg",
    descricao: "No Iraque, o vento não sopra. Ele mata.",
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