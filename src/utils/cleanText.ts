export function cleanText(textOriginal: string): string {
  const textoLimpio = textOriginal
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
  return textoLimpio;
}
