const {separator, operador, operar} = require('./function.js');


describe('operar specs', () => {
  /*    
    0a- ""     -> 0
    0b - null   -> null
    0c - "null"   -> null
    0d- "undefine"->"undefine"  //quero confirmar que me devuelve undefine || null
    0e- NaN -> NaN    
    1a - 7     -> 7
    1b - "7"   -> 7
    1c - 0     -> 0
    1d - "0"   -> 0
    1e - enithing != int -> 0


    
    2 - "1,1"  -> 2
    2b- "2,10" -> 12
    3 - "1,2,3"-> 6
    a1- "a"    -> 0
    a2- "5a"   -> 5
    a2- "2,a"  -> 2
    a3- "2,a,5"-> 7
    a4- "2a,3" -> 5
    a5- "2a,3f,6&,5,*"->16
    
    //1- "//#/3#2" ->5
    //2- "//#/3,2" ->0
    //3- "//%/3%2" ->5
    //4- "//&/3a&2"->5

    &&1- "&&*&3,3"     ->9

    &&2- "&&*&//&/3&3" ->9

    &&3- "//&/&&*&3&3" ->9
  */

   
  it('0a-entra_vacío-sale-vacío', () => {
    // Arrange
    let expectedResult = '';
    // Act
    let givenResult = operar('');
    // Assert
    expect(expectedResult).toEqual(givenResult)
  })

  it('0b-entra_null-sale-null', () => {  //queiro confimar que se sacar éste dato y no un string="null"
    // Arrange
    let expectedResult = null;
    // Act
    let givenResult = operar(null);
    // Assert
    expect(expectedResult).toEqual(givenResult)
  })

  it("0c-entra_'null'-sale-'null'", () => {
    // Arrange
    let expectedResult = 'null';
    // Act
    let givenResult = operar('null');
    // Assert
    expect(expectedResult).toEqual(givenResult)
  })

  it("0d-entra_NaN-sale-NaN", () => {  
    // Arrange
    let expectedResult = NaN;
    // Act
    let givenResult = operar(NaN);
    // Assert
    expect(expectedResult).toEqual(givenResult)
  })

  it("1a-entra_7-sale-7", () => {  
    // Arrange
    let expectedResult = 7;
    // Act
    let givenResult = operar(7);
    // Assert
    expect(expectedResult).toEqual(givenResult)
  })

  it("1b-entra_'7'-sale-7", () => {
    // Arrange
    let expectedResult = 7;
    // Act
    let givenResult = operar('7');
    // Assert
    expect(expectedResult).toEqual(givenResult)
  })

  it("1c-entra_0-sale-0", () => {  
    // Arrange
    let expectedResult = 0;
    // Act
    let givenResult = operar(0);
    // Assert
    expect(expectedResult).toEqual(givenResult)
  })

  it("1d-entra_'0'-sale-0", () => {  
    // Arrange
    let expectedResult = 0;
    // Act
    let givenResult = operar('0');
    // Assert
    expect(expectedResult).toEqual(givenResult)
  })
 
  
  it("1e-entra_'#'-sale-0", () => {  
    // Arrange
    let expectedResult = 0;
    // Act
    let givenResult = operar('h');
    // Assert
    expect(expectedResult).toEqual(givenResult)
  })

  
  it("1e-entra_'#'-sale-0", () => {  
    // Arrange
    let expectedResult = 0;
    // Act
    let givenResult = operar('#');
    // Assert
    expect(expectedResult).toEqual(givenResult)
  })
 

})