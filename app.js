const prompt = require('prompt-sync')();

 let numero1 = prompt('Qual é o primeiro número?: ')
 let numero2 = prompt('Qual é o segundo número?: ')
 let operador = prompt('Operação desejada: ')
 let resultado

 numero1 = parseFloat(numero1)
 numero2 = parseFloat(numero2)

 if (typeof numero1 == 'number' && typeof numero2 == 'number') {
    switch(operador) {
        case '+':
            resultado = numero1 + numero2;
            console.log(`Resultado da soma: ${resultado}`)
            break;
        case '-':
            resultado = numero1 - numero2
            console.log(`Resultado da subtração: ${resultado}`)
            break;
            case 'x':
                resultado = numero1 * numero2
                console.log(`Resultado da multiplicação: ${resultado} `)
                break;
            case '%':
                resultado = numero1 * numero2 && numero1 / numero2
                console.log(`Resultado da porcentagem: ${resultado}`)
                break;
            case '/':
                resultado = numero1 / numero2
                console.log(`Resultado da dividão: ${resultado}`)
                break;
            default:
                console.log(`                    
        ____________                    
        |          |
        |***ERRO***|
        |__________|   

Operação ou número não identificado!!!!`)
                break;
    }
} else {
    console.log(`                    
        ____________                    
        |          |
        |***ERRO***|
        |__________|   

Operação ou número não identificado!!!!`)
}
