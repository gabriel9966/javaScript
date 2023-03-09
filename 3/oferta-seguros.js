const cliente = {
    /*chave =>*/ nome:/*<=*/"osvaldo",
        idade:40,
        cpf:"23174018-12",
        email:"agohd@gdka.com",
        fones:["12730172031","1391072039"],
        dependentes: [
            {
            nome:"julio",
            parentesco:"filho",
            dataNascimento:"15/11/1998"},
            {
            nome:"lara",
            parentesco:"filha",
            dataNascimento:"13/04/2004"}
        ],
        saldo:100,
        depositar: function(valor){this.saldo = this.saldo + valor}
    }
            //          um array com todas as keys
    /*const propsClientes = Object.keys(cliente)
    console.log(propsClientes)*/

    function oferecerSeguro(obj){
        const propsClientes = Object.keys(obj);
        //includes = inclue dentro do array ou objeto, devolve true ou false
        if(propsClientes.includes("dependentes")){
            console.log(`oferta de seguro de vida para ${obj.nome}`)
        }
    }
    oferecerSeguro(cliente)
    console.log(Object.values(cliente))/*devolve os valores*/ 
    console.log(Object.entries(cliente))/*devolve os valores e chaves*/ 
