function validarCPF() {
    var cpf = document.getElementById("cpf").value;
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (cpfValido.test(cpf) == true) {
        alert("CPF Válido");
    } else {
        alert("CPF Inválido");
    }
}

function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}

function enviarcampos() {
    var nome = formuser.nome.value;
    if (nome == "") {
        alert("Preencha o campo Nome do Funcionário.");
        formuser.nome.focus();
        return false;
    }
    var cpf = formuser.cpf.value;
    if (cpf == "") {
        alert("Preencha o campo CPF.");
        formuser.cpf.focus();
        return false;
    }
    var pis = formuser.pis.value;
    if (pis == "") {
        alert("Preencha o campo PIS");
        formuser.pis.focus();
        return false;
    }
    var data = formuser.data.value;
    if (data == "") {
        alert("Preencha o campo Data de Admissão");
        formuser.data.focus();
        return false;
    }
    var sexo = formuser.sexo.value;
    if (sexo == "") {
        alert("Preencha o campo SEXO");
        formuser.sexo.focus();
        return false;
    }
    var email = formuser.email.value;
    if (email == "") {
        alert("Preencha o campo E-mail do Funcionário");
        formuser.email.focus();
        return false;;
    }
    var salario = formuser.salario.value;
    if (salario == "") {
        alert("Preencha o campo Salário do Funcionário");
        formuser.salario.focus();
        return false;;
    }

    const fields = {
        "nome": formuser.nome.value,
        "CPF": formuser.cpf.value,
        "PIS": formuser.pis.pis,
        "data_adm": formuser.data.value,
        "sexo": formuser.sexo.value,
        "email": formuser.email.value,
        "salario": formuser.salario.value,
        
    };
    
    console.log(fields);

    const objetojson = JSON.stringify(fields)

    console.log(objetojson);

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://beginner-api.herokuapp.com/save");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            const objetosalvo = JSON.parse(xhr.responseText);
            if (objetosalvo.Sucesso != undefined) {
                alert("Cadastro Efetuado!");
            } else {
                alert("Erro de Formulário!");
            }
        }
    }
    xhr.send(objetojson);
}