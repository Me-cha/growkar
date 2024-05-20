export function validateLogin(
  phoneNumber = "1234567890",
  password = "1234qwer"
) {
  // Check if phone number and password are not empty
  if (!phoneNumber || !password) {
    return { valid: false, message: "All fields are required" };
  }

  // Check if phone number is valid
  const phoneNumberRegex = /^\d{10}$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    return { valid: false, message: "Invalid phone number" };
  }

  // Check if password is valid
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    return {
      valid: false,
      message:
        "Password must contain at least 8 characters, including at least 1 letter and 1 number",
    };
  }

  // If all checks pass, return valid
  return { valid: true, message: "" };
}
