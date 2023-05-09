//Überprüfung, ob Element ein HTML-Eingabeelement ist
export function isInputElement(e: HTMLElement | EventTarget | null): e is HTMLInputElement {
    return (e as HTMLInputElement | null)?.value != null || (e as HTMLInputElement | null)?.checked != null
  }