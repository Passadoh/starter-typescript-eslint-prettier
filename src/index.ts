type NameType = string;
type NumberType = number;

export const shoutName = (name: NameType) => {
  return name.toUpperCase();
};

export const sum = (a: NumberType, b: NumberType) => {
  return a + b;
};
