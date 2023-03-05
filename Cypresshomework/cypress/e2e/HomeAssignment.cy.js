describe('temperature-converter', () => {
  it('Successfully loads', () => {
    cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/')
  })
  it('Test case # 1 - Verify default values on Temperature Converter page.', () => {
    cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/')
    // Step 1 - Verify header.
    cy.get('h1').contains("Temperature Converter")
    // Step 2 - Verify all static text beside Conversion section.
    cy.get('p').contains("Enter the value of the temperature you would like to convert and select its unit. Then select the unit you want to convert to.")
    //TBD

    // Step 3 - Verify that 'input', 'convertFrom', 'convertTo', 'Go' and 'answer' in 'Conversion section' have default values.
    cy.get('label').contains("Convert")
    cy.get('input[name=userInput]').should('have.value', '')
    cy.get('select.standardOptionsList[name="convertFrom"]').contains("degree Celsius").should('have.value', '0')
    cy.get('label').contains("to")
    cy.get('select.standardOptionsList[name="convertTo"]').contains("degree Celsius").should('have.value', '0')
    cy.get('input#convertBtn').should('have.value', 'Convert Temperature')
    cy.get('div[id=answer]').should('have.value', '')
    
  })
  it('Test case # 2 - negative scenario - Verify Conversion section on Temperature Converter page.', () => {
    cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/')
    // Step 1 - Type "qwerty" in 'input'
    cy.get('input[name=userInput]').type('qwerty')
    // Step 2 - Change 'convertTo' to value 1 ('degree Fahrenheit')
    cy.get('select.standardOptionsList[name="convertTo"]').select(1).contains("degree Fahrenheit")
    // Step 3 - Verify that 'input' value equal 0
    cy.get('input[name=userInput]').should('have.value', '0')
    // Step 4 - Verify that 'answer' have value equal '0 degree Celsius = 32 degree Fahrenheit'
    cy.get('div[id=answer]').contains('0 degree Celsius = 32 degree Fahrenheit')

  })
  it('Test case # 3 - positive scenario - Verify Conversion section on Temperature Converter page.', () => {
    cy.visit('https://www.theonlineconverter.co.uk/temperature-converter/')
    // Step 1 - Type 12 in 'input'
    cy.get('input[name=userInput]').type('12')
    // Step 2 - Change 'convertFrom' to value 1 ('degree Fahrenheit')
    cy.get('select.standardOptionsList[name="convertFrom"]').select(1).contains("degree Fahrenheit")
    // Step 3 - Change 'convertTo' to value 3 ('degree Reaumur')
    cy.get('select.standardOptionsList[name="convertTo"]').select(3).contains("degree Reaumur")
    // Step 4 - Verify that 'input' value equal 12
    cy.get('input[name=userInput]').should('have.value', '12')
    // Step 5 - Verify that 'answer' value equal '12 degree Fahrenheit = -8.8888889 degree Reaumur'
    cy.get('div[id=answer]').contains('12 degree Fahrenheit = -8.8888889 degree Reaumur')

  })
})