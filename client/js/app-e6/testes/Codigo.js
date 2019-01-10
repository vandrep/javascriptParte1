class Codigo{

    constructor(texto){
        if(!this._valida(texto)) throw new Error(`O texto ${texto} não é um código válido.`);
        this._texto = texto;
    }

    _valida(texto){
        return /\D{3}-\D{2}-\d{2}/.test(texto);
    }

    get texto(){
        return this._texto;
    }
    static validaCodigo(codigo){
        (/\D{3}-\D{2}-\d{2}/
            .test(codigo) ? 
            alert('Código válido'):
            alert('Código inválido'));
    }
}