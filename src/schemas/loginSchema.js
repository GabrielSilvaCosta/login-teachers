// src/schemas/loginSchema.js
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email().required("Email é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
});

export default loginSchema;
