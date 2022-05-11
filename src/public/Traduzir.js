// Traduzir codigo para texto

const Traduzir = async () => {
  var codigo = document.getElementById("Area-Text").value;
  var regex = /[2-9!@#¨$%^&*)(+=._-]+/g;
  
  if (codigo.match(regex)) {
    alert("Para traduzir precisa ser somente digitos 0 e 1!");


  } 
  else if(codigo.length<8){
    alert("Código precisa ter no mínimo 8 caracteres!");
    
  }
  else {
    // Retirar todos os espaços da frase

    var CodigoModificado = codigo.replace(/\s+/g, "");
    console.log(CodigoModificado);

    var text = [];
    var res = null;
    let num = 8;

    for (var i = 0; i < CodigoModificado.length; i++) {
      text.push(CodigoModificado[i]);

      if (text.length === num) {
        text.push(CodigoModificado[i].replace(CodigoModificado[i], " "));

        num += 9;
      }
    }
    // console.log(text)

    let data = text.join("");
    // console.log(data)
    var total = data.split(" ");
    // console.log(total)
    var verify = [];

    for (let i = 0; i < total.length; i++) {
      verify.push(total[i]);
      if (total[i] === "") {
        verify.pop(total[i]);
      }
    }

    // console.log(verify)
    var res = [];

    for (let i = 0; i < verify.length; i++) {
      res.push(verify[i]);
      res.splice(res.length, 0, " ");
    }
    console.log(res);

    const response = await fetch("http://localhost:3000/api/text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        codigo: res,
      }),
    });
    let result = await response.json();
    if (result.error) {
      alert(result.message);
    } else {
      alert(result.message);
      let codigo = result.ListaCodigo;
      let res = codigo.join("");
      // console.log(res)
      document.getElementById("Area-Code").innerHTML = res;
    }
  }
};
