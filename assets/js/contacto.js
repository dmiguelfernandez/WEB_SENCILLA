const validation = new JustValidate(".main_contact");
let isValidate = false;

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "El nombre es obligatorio",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Mínimo 3 caracteres",
    },
    {
      rule: "maxLength",
      value: 15,
      errorMessage: "Máximo 15 caracteres",
    },
  ])
  .addField("#surname", [
    {
      rule: "required",
      errorMessage: "El apellido es obligatorio",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Mínimo 3 caracteres",
    },
    {
      rule: "maxLength",
      value: 15,
      errorMessage: "Máximo 15 caracteres",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "El email es obligatorio",
    },
    {
      rule: "email",
      errorMessage: "Email no válido",
    },
  ])
  .addField("#gender", [
    {
      rule: "required",
      errorMessage: "El género es obligatorio",
    },
  ])
  .addField("#born_date", [
    {
      rule: "required",
      errorMessage: "Fecha obligatoria",
    },
  ])
  .addField("#age", [
    {
      rule: "required",
      errorMessage: "La edad es obligatorio",
    },
    {
      rule: "integer",
      errorMessage: "Solo válidos los números",
    },
  ])
  .onSuccess((e) => {
    isValidate = true;
    e.currentTarget.submit();
  });
