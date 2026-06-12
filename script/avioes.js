const avioes = [{
    titulo: "F-15E",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/e/e6/F-15E_takes_on_fuel_from_KC-10.jpg",
    descricao: "Caça multifunção, produzido pela Boeing, porém inicialmente feito pela McDonnell Douglas",
},
{
    titulo: "F/A-18F",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/d/de/US_Navy_071203-N-8923M-074_An_F-A-18F_Super_Hornet%2C_from_the_Red_Rippers_of_Strike_Fighter_Squadron_%28VFA%29_11%2C_makes_a_sharp_turn_above_the_flight_deck_aboard_the_Nimitz-class_nuclear-powered_aircraft_carrier_USS_Harry_S._Truman.jpg",
    descricao: "Caça multifunção naval, feito pela Boeing, uma atualização de seu predecessor, o F/A-18 'Legacy' Hornet",
},
{
    titulo: "F-14D",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg/1280px-US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg",
    descricao: "Caça multifunção naval com asa de geometria variável, feito pela Grumman",
},
{
    titulo: "F-16C",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/F-16_Fighting_Falcon.jpg/1280px-F-16_Fighting_Falcon.jpg",
    descricao: "Caça multifunção produzido pela Lockheed Martin, mas inicialmente feito pela General Dynamics"
},
{
    titulo: "F-35",
    imagem: "https://media.defense.gov/2014/Mar/11/2000783826/-1/-1/0/140310-F-NG006-007.JPG",
    descricao: "Caça multifunção furtivo de quinta geração, feito pela Lockheed Martin",
},
{
    titulo: "F-22",
    imagem: "https://aeromagazine.uol.com.br/media/uploads/lockheed_martin_f_22_raptor.jpg",
    descricao: "Caça de superioridade aérea furtivo de quinta geração, feito pela Lockheed Martin",
}]

const lista_avioes = document.getElementById("listaAvioes");

function mostrarAvioes(lista) {
    lista_avioes.innerHTML = ""
    lista.forEach(aviao => {
        lista_avioes.innerHTML += `
        <div class="col-md-4">
            <div class="card card-aviao h-100">
            <img src="${aviao.imagem}" class="card-img-top">
            <div class="card-body">
                <h3>${aviao.titulo}</h3>
                <p>${aviao.descricao}</p>
                <button class="btn btn=dark" onclick="verDetalhes('${aviao.titulo}')">Ver detalhes</button>
            </div>
            </div>
        </div>
        `
    })
}

mostrarAvioes(avioes)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações do avião",
        icon: "info"
    })
}