var dadosCliente = {
    endereco: {},
    contato: {}
};

function validarFormulario() {

    event.preventDefault();

    if (validarEndereco() && validarContato())
        console.log('validação está ok.. pode prosseguir');
    else
        console.log('validação não passou.. preencher todos os campos');
};

function validarEndereco() {
    //gerar objeto endereco baseado nos dados do formulario
    objEndereco = {
        pais: document.getElementById('selection_country').value,
        cidade: document.getElementById('selection_city').value,
        estado: document.getElementById('state').value,
        endereco1: document.getElementById('ad1').value,
        endereco2: document.getElementById('ad2').value,
    };

    //verificar se os dados estão preenchidos
    if (objEndereco.pais == '0') {
        return false;
    } else if (objEndereco.cidade.trim().length == '0') {
        return false;
    } else if (objEndereco.estado.trim().length == 0) {
        return false;
    } else if (objEndereco.endereco1.trim().length == 0) {
        return false;
    } else if (objEndereco.endereco2.trim().length == 0) {
        return false;
    } else {//validação ok
        //grava o objeto endereço no objeto dadosCliente
        dadosCliente.endereco = objEndereco;
        //retorno da função
        return true;
    }


function validarContato(_objContato) {
     //gerar objeto contato baseado nos dados do formulario
    objContato = {
        nome: document.getElementById('name').value,
        sobrenome: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        fone: document.getElementById('phone').value,
    };

    if(objContato.nome == 0) {
        return false;
    } else if(objContato.sobrenome == 0) {
        return false;
    } else if(objContato.email == 0) {
        return false;
    } else {
        return true;
    }


     if(document.getElementById('s_input').checked ){
         var pacote1 = document.getElementById('s_input').value;
     } else if(document.getElementByI('u_input').checked){
        var pacote2 = document.getElementById('u_input');
     } else {
         return false;
     }

     objContato = {
        pacote : pacote,
};

         console.log( pacote )
}
