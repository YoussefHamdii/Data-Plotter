const capitalizeFirstLetter = (word) => {
  if (typeof word !== "string") return word;
  let firstletter = word.charAt(0);
  return `${firstletter.toUpperCase()}${word.slice(1)}`;
};

export { capitalizeFirstLetter };
