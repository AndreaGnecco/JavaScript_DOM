var dadosCliente = {
    endereco: {
        pais : '',
        cidade : ''
    },

    contato : {
        nome : '',
        email : ''
        }
};

function validarFormulario(){
    //gerar objeto endereco baseado nos dados do validarFormulario
    objEndereco = {
        pais : document.getElementById('selection_country').value
    };

    dadosCliente.endereco = objEndereco;
    console.log(objEndereco);
    
    //gerar objeto contato
    objContato = {
        nome : document.getElementById('name').value
    };

    dadosCliente.contato = objContato;
    console.log(objContato);
}

    
    
