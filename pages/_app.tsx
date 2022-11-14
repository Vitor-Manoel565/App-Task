import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useStaks } from "../src/hooks/useTasks";
import { useEffect } from "react";
import { useAuth } from "../src/hooks/useAuth";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { fetchTasks } = useStaks();
  const { token, setToken } = useAuth();
  const router = useRouter();
  const pathName = router.pathname;

  

  const publicRoutes = ["/Login", "/Cadastro"];

  useEffect(() => {
    const _token = localStorage.getItem("tasks@token");

    if (!_token && !publicRoutes.includes(pathName)) {
      router.push("/Login");
      return;
    }
    setToken(_token);
    

  }, []);


  useEffect(() => {
    if (!token) return;
    console.log("Token encontrado", token);
    fetchTasks();
  }, [token]);

  return <Component {...pageProps} />;
}
