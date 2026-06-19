create database catalogo;
use catalogo;
create table filmes (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table series (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table avioes (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

select * from filmes;

insert into filmes (titulo, imagem, descricao) values ("Vingadores", "https://themoviedb.org/t/p/w300_and_h450_face/tCyp6aqOhqGxg6dU0OOIPhOAAne.jpg", "Os maiores heróis da terra unidos."),
("Batman", "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", "O cavaleiro das trevas"),
("Homem-Aranha", "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg", "O amigo da vizinhança"),
("A Queda! As Últimas Horas de Hitler", "https://media.themoviedb.org/t/p/w533_and_h300_face/cmyrTgVrfsQNlQG4o6m7E5HoP0L.jpg", "Abril de 1945, uma nação aguarda... A Queda!"),
("Top Gun - Asas Indomáveis", "https://media.themoviedb.org/t/p/w533_and_h300_face/dBgxEkWe17R0AJDAvAhpeVELQx2.jpg", "Voe com o melhor dos melhores."),
("Nascido Para Matar", "https://media.themoviedb.org/t/p/w533_and_h300_face/3k2TRmqMjgt7tcwkYwZQdctnty3.jpg", "No Vietnã, o vento não sopra. Ele mata.");

select * from series;

insert into series (titulo, imagem, descricao) values ("Chaves", "https://www.themoviedb.org/t/p/w600_and_h900_face/nSpP9aS9LAQd7wwzzOoCAYIluco.jpg", "Foi sem querer querendo."),
("Breaking Bad", "https://www.themoviedb.org/t/p/w600_and_h900_face/hGwm9Cj3CdbJIqQWNExQqiYmCd4.jpg", "Se lembre do meu nome."),
("INVENCÍVEL", "https://www.themoviedb.org/t/p/w600_and_h900_face/qhb7RWU9ad9a5m3HbeRRXzjaMXf.jpg", "Para salvar o universo, ele realmente precisará ser… INVENCÍVEL."),
("Chapolin Colorado", "https://www.themoviedb.org/t/p/w600_and_h900_face/nuOrzFX2UrfCFWDKE6sBdugoKeP.jpg", "Sigam-me os bons!"),
("Mestres do Ar", "https://www.themoviedb.org/t/p/w600_and_h900_face/wUIUzCouKHc0PjfMdTB9q9J8Z5G.jpg", "Uma equipe, uma guerra"),
("Generation Kill", "https://www.themoviedb.org/t/p/w600_and_h900_face/wiihoYOODwh82xVzPoiaztlg6c9.jpg", "No Iraque, o vento não sopra. Ele mata.");

select * from avioes;

insert into avioes (titulo, imagem, descricao) values ("F-15E", "https://upload.wikimedia.org/wikipedia/commons/e/e6/F-15E_takes_on_fuel_from_KC-10.jpg", "Caça multifunção, produzido pela Boeing, porém inicialmente feito pela McDonnell Douglas"),
("F/A-18F", "https://upload.wikimedia.org/wikipedia/commons/d/de/US_Navy_071203-N-8923M-074_An_F-A-18F_Super_Hornet%2C_from_the_Red_Rippers_of_Strike_Fighter_Squadron_%28VFA%29_11%2C_makes_a_sharp_turn_above_the_flight_deck_aboard_the_Nimitz-class_nuclear-powered_aircraft_carrier_USS_Harry_S._Truman.jpg", "Caça multifunção naval, feito pela Boeing, uma atualização de seu predecessor, o F/A-18 ''Legacy'' Hornet"),
("F-14D", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg/1280px-US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg", "Caça multifunção naval com asa de geometria variável, feito pela Grumman"),
("F-16C", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/F-16_Fighting_Falcon.jpg/1280px-F-16_Fighting_Falcon.jpg", "Caça multifunção produzido pela Lockheed Martin, mas inicialmente feito pela General Dynamics"),
("F-35", "https://media.defense.gov/2014/Mar/11/2000783826/-1/-1/0/140310-F-NG006-007.JPG", "Caça multifunção furtivo de quinta geração, feito pela Lockheed Martin"),
("F-22", "https://aeromagazine.uol.com.br/media/uploads/lockheed_martin_f_22_raptor.jpg", "Caça de superioridade aérea furtivo de quinta geração, feito pela Lockheed Martin");