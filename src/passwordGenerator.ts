//Zeichencodes für verschiedene Zeichentypen
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

//Funktion zum Erzeugen eines Arrays von Zahlen 
function arrayFromLowToHigh(low: number, high: number) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }

  //Definition der Passwort Optionen
  type PasswordOptions = {
    characterAmount: number
    includeLowercase: boolean
    includeUppercase: boolean
    includeNumbers: boolean
    includeSymbols: boolean
  }

//Generierung des Passworts
export function generatePassword({ characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols }: PasswordOptions) {
    let charCodes: number[] = []
    if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
  }