class DateHelper{
    constructor(){
        throw new Error("Não instancie esta classe");
    }

    static textoParaData(texto){

        if(!/\d{2}\/\d{2}\/\d{4}/.test(texto))
            throw new Error("Deve estar no formato dd/mm/aaaa");
        return new Date(...texto.split('/').reverse().map((item,indice) => item - indice % 2));

    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
}