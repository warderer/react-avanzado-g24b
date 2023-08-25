describe('Funcinalidad del Login', () => {
  it('Mi aplicación carga leyendo Home cuando visita /', () => {
    // 1: Arrange: Setup de la aplicacion
    cy.visit('/')

    // 2: Act: Obtener contenedor
    cy.get('h1')
      .first().contains('Home') // 3: Assert: Espero que tenga un resultado
    cy.get('h1')
      .last().contains('Bienvenido')
  })

  it("Prueba el login como CUSTOMER", () => {
    cy.intercept('POST', 'http://localhost:3000/login').as('login')

    // 1: Arrange
    cy.visit('/login')

    // 2: Act
    cy.doLogin("drstrange@marvel.com", 'multiverso')

    cy.wait('@login')

    // 3: Assert
    cy.get('h1')
      .first().contains('Home')
  })

  it("Prueba el login como ADMIN", () => {
    cy.intercept('POST', 'http://localhost:3000/login').as('login')

    // 1: Arrange
    cy.visit('/login')

    // 2: Act
    cy.doLogin('superman@dc.com', 'superman')

    // 3: Assert
    cy.get('h1')
      .first().contains('Secret')
  })
})
