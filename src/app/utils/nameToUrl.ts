export const nameToUrl = (name:string) => {
  // Convertir le texte en minuscule
  let nameUrl = name.toLowerCase();
  // Remplacer les espaces par des tirets
  nameUrl = nameUrl.replace(/ /g, "-").replace(/\./g, "");
  return nameUrl;
}