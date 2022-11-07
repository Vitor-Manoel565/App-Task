import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useStaks } from "../src/hooks/useTasks";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { fetchTasks } = useStaks();
  useEffect(() => {
    fetchTasks();
  }, []);

  return <Component {...pageProps} />;
}
