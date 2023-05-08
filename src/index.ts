import { generatePassword } from "./passwordGenerator"
import { isInputElement } from "./utils"

const characterAmountRangeElement = document.getElementById('characterAmountRange')
const characterAmountNumberElement = document.getElementById('characterAmountNumber')
const includeLowercaseElement = document.getElementById('includeLowercase')

const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const formElement = document.getElementById('passwordGeneratorForm')
const passwordDisplayElement = document.getElementById('passwordDisplay')
const copyButtonElement = document.querySelector('#copyButton')

characterAmountNumberElement?.addEventListener('input', syncCharacterAmount)
characterAmountRangeElement?.addEventListener('input', syncCharacterAmount)

formElement?.addEventListener('submit', e => {
  e.preventDefault()
  handleGeneratePassword()
})

function handleGeneratePassword() {
  const characterAmountString = isInputElement(characterAmountNumberElement) ? characterAmountNumberElement.value : "10"
  const characterAmount = parseInt(characterAmountString)
  const includeUppercase = isInputElement(includeUppercaseElement) ? includeUppercaseElement.checked : false
  const includeLowercase = isInputElement(includeLowercaseElement) ? includeLowercaseElement.checked : false

  const includeNumbers = isInputElement(includeNumbersElement) ? includeNumbersElement.checked : false
  const includeSymbols = isInputElement(includeSymbolsElement) ? includeSymbolsElement.checked : false
  const password = generatePassword({ characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols })
  if (passwordDisplayElement) passwordDisplayElement.innerText = password
}

function syncCharacterAmount(e: HTMLElementEventMap["input"]) {
    if (!isInputElement(e.target)) {
      return 
    }
    const value = e.target.value
    if (isInputElement(characterAmountNumberElement)) characterAmountNumberElement.value = value
    if (isInputElement(characterAmountRangeElement)) characterAmountRangeElement.value = value
  }


  
  




