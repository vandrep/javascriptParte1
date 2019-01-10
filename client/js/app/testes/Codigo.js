'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Codigo = function () {
    function Codigo(texto) {
        _classCallCheck(this, Codigo);

        if (!this._valida(texto)) throw new Error('O texto ' + texto + ' n\xE3o \xE9 um c\xF3digo v\xE1lido.');
        this._texto = texto;
    }

    _createClass(Codigo, [{
        key: '_valida',
        value: function _valida(texto) {
            return (/\D{3}-\D{2}-\d{2}/.test(texto)
            );
        }
    }, {
        key: 'texto',
        get: function get() {
            return this._texto;
        }
    }], [{
        key: 'validaCodigo',
        value: function validaCodigo(codigo) {
            /\D{3}-\D{2}-\d{2}/.test(codigo) ? alert('Código válido') : alert('Código inválido');
        }
    }]);

    return Codigo;
}();
//# sourceMappingURL=Codigo.js.map