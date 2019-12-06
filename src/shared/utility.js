export const updatedObject = (state, newValues) => ({ ...state, ...newValues });

export const validation = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.type === "email") {
    isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && isValid;
  }

  if (rules.type === "password") {
    isValid = value.length >= 6 && isValid;
  }

  return isValid;
};
