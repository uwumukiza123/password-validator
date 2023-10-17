export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  if (typeof password !== "string") password = String(password);
  if (forbiddenPasswords.includes(password)) return false;
  // check if password does't contain special characters
  if (!/^[a-zA-Z0-9]{10}$/.test(password)) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  // check if password is ascending or descending 
  if (
    /(?:0123|2345|3456|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|3210)/.test(
      password
    )
  )
    return false;
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  return true;
}

