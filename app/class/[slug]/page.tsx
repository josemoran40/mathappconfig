"use client";

import { GetServerSideProps } from "next";
import { ClassForm } from "../../../components/organisms";

import { Layout } from "../../../components/templates";
import { resetServerContext } from "react-beautiful-dnd";

export default function Home() {
  return (
    <Layout className={"flex flex-col items-center"}>
      <ClassForm />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext();

  return { props: { data: [] } };
};
