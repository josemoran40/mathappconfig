"use client";
import { useState } from "react";
import { Container, H1, PrimaryButton, Input } from "../../atoms";
import { toast } from "react-toastify";
import axios from "../../../axios";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    axios
      .post(
        "/api/login/create",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        toast.success("Inicio de sesión exitoso");
        router.push("/class");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Usuario o contraseña incorrectos");
      });
  };

  return (
    <Container
      className={
        "w-full lg:w-custom-485 py-10 px-10 gap-4 flex justify-center flex-col items-center min-h-full"
      }
    >
      <H1>Mathapp Config</H1>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"Correo"}
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"Contraseña"}
        type={"password"}
      />
      <PrimaryButton onClick={login}>Iniciar sesión</PrimaryButton>
    </Container>
  );
};
