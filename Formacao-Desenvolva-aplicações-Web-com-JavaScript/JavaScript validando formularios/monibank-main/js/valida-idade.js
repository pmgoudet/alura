export default function maiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!verificaMaioridade(dataNascimento)) {
        campo.setCustomValidity('Você deve ser maior de idade');
    }
}

function verificaMaioridade (data) {
    const dataAtual = new Date ();
    const dataMais18 = new Date (data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}