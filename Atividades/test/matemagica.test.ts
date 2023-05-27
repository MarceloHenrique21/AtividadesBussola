import { describe, test, expect } from '@jest/globals'
import { Matemagica } from '../src/TDD/Matemagica'

describe ('somatorias', () => {
    // Soma
    test ('retorna a soma de dois valores numericos', () => {
        const matemagica =  new Matemagica()
        
        expect(matemagica.soma(1,2)).toBe(3)
    })

    test('deve retornar um erro de mistura entre string e numero', () => {

        const matemagica = new Matemagica()
        expect(matemagica.soma('teste', 1)).toBe('Você só pode realizar somas com operadores numéricos!')
    })
    
    // Subtracao
    test ('retorna a Subtracao de dois valores numericos', () => {
        const matemagica =  new Matemagica()
        
        expect(matemagica.Subtração(5,2)).toBe(3)
    })

    test('deve retornar um erro de mistura entre string e numero', () => {

        const matemagica = new Matemagica()
        expect(matemagica.Subtração(1, 'teste')).toBe('Você só pode realizar Subtracoes com operadores numéricos!')
    })


    //Divisao
    test ('retorna a divisao de dois valores numericos', () => {
        const matemagica =  new Matemagica()
        
        expect(matemagica.Divisao(5,2)).toBe(3)
    })

    test('deve retornar um erro de mistura entre string e numero', () => {

        const matemagica = new Matemagica()
        expect(matemagica.Divisao(1, 'teste')).toBe('Você só pode realizar divisao com operadores numéricos!')
    })

    //Multiplicacao
    test ('retorna a multiplicacao de dois valores numericos', () => {
        const matemagica =  new Matemagica()
        
        expect(matemagica.Multiplicacao(5,2)).toBe(3)
    })

    test('deve retornar um erro de mistura entre string e numero', () => {

        const matemagica = new Matemagica()
        expect(matemagica.Multiplicacao(1, 'teste')).toBe('Você só pode realizar multiplicacoes com operadores numéricos!')
    })

})