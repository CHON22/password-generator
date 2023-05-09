
//Import der Module 
import { generatePassword } from "./passwordGenerator"
import { isInputElement } from "./utils"

//Deklaration und Initalisierung der Variablen
const characterAmountRangeElement = document.getElementById('characterAmountRange')
const characterAmountNumberElement = document.getElementById('characterAmountNumber')
const includeLowercaseElement = document.getElementById('includeLowercase')

const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const formElement = document.getElementById('passwordGeneratorForm')
const passwordDisplayElement = document.getElementById('passwordDisplay')
const copyButtonElement = document.querySelector('#copyButton')

//Event-Listener für 'input' hinzufügen
characterAmountNumberElement?.addEventListener('input', syncCharacterAmount)
characterAmountRangeElement?.addEventListener('input', syncCharacterAmount)


//Event-Listener für 'submit' hinzufügen
formElement?.addEventListener('submit', e => {
  e.preventDefault()
  handleGeneratePassword()
})

//Funktion zur Überpüfung der Eingabewerte
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

//Synchronisierung der Zeichenmenge 
function syncCharacterAmount(e: HTMLElementEventMap["input"]) {
    if (!isInputElement(e.target)) {
      return 
    }
    const value = e.target.value
    if (isInputElement(characterAmountNumberElement)) characterAmountNumberElement.value = value
    if (isInputElement(characterAmountRangeElement)) characterAmountRangeElement.value = value
  }

  //Kopieren des Textes in die Zwischenablage 
  function copyToClipboard(text: string | undefined) {
    if (!text) {
      return 
    }
    const textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
  }

  //Event-Listener für das Kopieren des Passworts
  copyButtonElement?.addEventListener("click", function() {
    copyToClipboard(passwordDisplayElement?.innerText);
  });

  //Event-Listener für das Laden der Seite
  document.addEventListener('DOMContentLoaded', function() {
    handleGeneratePassword();
  });

  
  




