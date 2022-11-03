const emailValidation = (email) => {
  const emailReg = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  );
  if (!email) {
    return { status: false, errorMsg: "*Email is Required" };
  }
  if (!emailReg.test(email)) {
    return { status: false, errorMsg: "*Enter Valid email" };
  }
  return { status: true, errorMsg: "None" };
};
const nameValidation = (name) => {
  if (!name) {
    return { status: false, errorMsg: "*Name is Required" };
  }
  if (name.length <= 3) {
    return { status: false, errorMsg: "*Name length must be Greater than 3" };
  }
  return { status: true, errorMsg: "None" };
};
const contactValidation = (contact) => {
  if (!contact) {
    return { status: false, errorMsg: "*Contact is Required" };
  }
  if (contact.length !== 10) {
    return { status: false, errorMsg: "*Enter Valid Contact Number" };
  }
  if (contact.substr(0, 1) === 0) {
    return { status: false, errorMsg: "*Enter Valid Contact Number" };
  }
  return { status: true, errorMsg: "None" };
};
export const validate = (email, contact, firstName, lastName) => {
  const emailValidator = emailValidation(email);
  const fnameValidator = nameValidation(firstName);
  const lnameValidator = nameValidation(lastName);
  const contactValidator = contactValidation(contact);
  if (fnameValidator.status === false) {
    return { status: fnameValidator.status, errorMsg: fnameValidator.errorMsg };
  }
  if (lnameValidator.status === false) {
    return { status: lnameValidator.status, errorMsg: lnameValidator.errorMsg };
  }
  if (emailValidator.status === false) {
    return { status: emailValidator.status, errorMsg: emailValidator.errorMsg };
  }
  if (contactValidator.status === false) {
    return {
      status: contactValidator.status,
      errorMsg: contactValidator.errorMsg,
    };
  }
  return { status: true, errorMsg: "none" };
};
