export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  // if (typeof password !== "string") password = String(password);

  if (password.length !== 10) return false;

  // check if password is digits or number
  const isDigitsOrNumber = /[^a-zA-Z0-9]+$/;
  // checking if there is special characters or not
  // const specialChar = /^[a-zA-Z0-9\s!$%^&*()_+|~=`{}\[\]:";'<>?,.\\-]+$/;
  const upperCase = /[A-Z]+$/;
  const lowerCase = /[a-z]+$/;
  const upperOrLower = /^[A-Za-z]+$/;
  // const sequence = /^(?!.*(012|123|234|345|456|567|678|789)|(\d)\1{2,}).*$/;
  // const sequence =
  //   /^(?!.*(?:012|123|234|345|456|567|678|789))(?=.*[a-zA-Z]).*$/;
  const sequence =
    /(012|123|234|345|456|567|678|789|987|876|765|654|543|432|321|210)/;

  if (isDigitsOrNumber.test(password)) return false;
  // if (!specialChar.test(password)) return false;
  if (!sequence.test(password)) return false;
  if (upperOrLower.test(password)) return false;
  if (forbiddenPasswords.includes(password)) return false;
  if (!upperCase.test(password) || !lowerCase.test(password)) return false;

  const setOfPassword = new Set([...password]);
  console.log({ password });
  if (setOfPassword.size < 4) return false;

  return true;
}
