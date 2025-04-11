export const extractNumbers = (str:string) => {
  // Extraire tous les groupes de chiffres
  const numbers = str.match(/\d+/g);

  // Vérifier qu'on a bien trouvé au moins deux nombres
  if (!numbers || numbers.length < 2) {
    return "Moins de deux nombres trouvés";
  }

  // Retourner les deux premiers nombres sous forme de nombres (pas de string)
  return {
    firstNumber: parseInt(numbers[0], 10),
    secondNumber: parseInt(numbers[1], 10)
  };
}