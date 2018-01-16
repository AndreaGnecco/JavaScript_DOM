var dadosCliente = {
    endereco: {
        pais : '',
        cidade : '',
        estado : '',
        endereco1: '',
        endereco2 : ''
    },

    contato : {
        nome : '',
        sobrenome : '',
        email : '',
        fone : ''
        }
};

function validarFormulario(){
    //gerar objeto endereco baseado nos dados do validarFormulario
    objEndereco = {
        pais : document.getElementById('selection_country').value,
        cidade : document.getElementById('selection_city').value,
        estado : document.getElementById('state').value,
        endereco1 : document.getElementById('ad1').value,
        endereco2 : document.getElementById('ad2').value
    };

    dadosCliente.endereco = objEndereco;
    console.log(objEndereco);

    //gerar objeto contato
    objContato = {
        nome : document.getElementById('name').value,
        sobrenome : document.getElementById('lastname').value,
        email : document.getElementById('email').value,
        fone : document.getElementById('phone').value
    };

    dadosCliente.contato = objContato;
    console.log(objContato);
}

    
    
