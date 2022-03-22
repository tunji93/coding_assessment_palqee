export const sortCharacters = (data, value) => {
  return data.sort((a, b) => {
    const nameA = a[value].name
      ? a[value].name.toUpperCase()
      : a[value].toUpperCase();
    const nameB = b[value].name
      ? b[value].name.toUpperCase()
      : b[value].toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

export const filterCharacters = (data, value) => {
  return data.filter(
    (character) => character.value.indexOf(value.toLowerCase()) > -1
  );
};
