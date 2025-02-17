let coleta = document.getElementById("coleta");
console.log("chegou em coleta");
coleta.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log("entrou em coleta");

    let nome = document.getElementById("name").value;
    let data = document.getElementById("txtData").value;
    let hora = document.getElementById("txtHour").value;
    let profundidade = document.getElementById("depth").value;
    let espacamento = document.getElementById("spacing").value;
    let info = document.getElementById("information").value;
    // let foto = document.getElementById("picture_input").value;


    console.log(nome);
    console.log(data);
    console.log(hora);
    console.log(profundidade);
    console.log(espacamento);
    console.log(info);
    // console.log(foto);

    alert("clicou em salvar");

    let amostras =  new Array();
    if(localStorage.hasOwnProperty("amostras")){
        amostras = JSON.parse(localStorage.getItem("amostras"));
    }
    amostras.push({nome, data, hora, profundidade, espacamento, info}); // os nomes das chaves são iguais ao valores, entao podemos exemplificar dessa forma
    localStorage.setItem("amostras", JSON.stringify(amostras));
});