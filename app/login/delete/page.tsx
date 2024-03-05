import { LoginForm } from "../../../components/organisms";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { DeleteFormAccount } from "../../../components/organisms/LoginForm/DeleteForm";
import { Layout } from "../../../components/templates";

export default function Home() {
  return (
    <Layout
      className={"flex flex-col items-center justify-center min-h-screen"}
    >
      <DeleteFormAccount />
      <ToastContainer theme="colored" />
    </Layout>
  );
}
