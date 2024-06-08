/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário de inscrição', () => {
        cy.get(':nth-child(1) > .Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get(':nth-child(1) > .Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Thiago Monte')
        cy.get('input[name="email"]').type('thiagomonte@test.com')
        cy.get('input[name="telefone"]').type('92 12345678')
        cy.get('input[name="endereco"]').type('Avenida Front end, bairro FullStack, Manaus-AM')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('cursando-superior')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
})