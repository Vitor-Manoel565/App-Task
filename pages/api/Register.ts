import axios from "axios";

const URL = "http://localhost:4000/auth/register";

export const Register = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
) => {
  try {
    const response = await axios.post(URL, {
      email,
      password,
      confirmPassword,
      name,
    });
    return {
      data: response.data,
      sucess: true,
      message: "User created successfully",
    };
  } catch (error: any) {
    return {
      message: error.response?.data?.message || "Erro ao cadastrar usuário",
      sucess: false,
    };
  }
};
