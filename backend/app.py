from flask import Flask
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)

def conectar():
    return pymysql.connect(
        host = "localhost",
        user = "root",
        password = "",
        database = "catalogo",
        cursorclass = pymysql.cursors.DictCursor
    )

@app.route("/")
def home():
    return "API funcionando"


@app.route("/filmes")
def listar_filmes():
    conexao = conectar()
    cursor = conexao.cursor()

    cursor.execute(
        "SELECT * FROM filmes"
    )

    filmes = cursor.fetchall()
    conexao.close()
    return filmes

app.run()