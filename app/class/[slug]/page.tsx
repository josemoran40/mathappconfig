"use client";

import { GetServerSideProps } from "next";
import { ClassForm } from "../../../components/organisms";

import { Layout } from "../../../components/templates";
import { resetServerContext } from "react-beautiful-dnd";

export default function Home({ params }: { params: { slug: string } }) {
  return (
    <Layout className={"flex flex-col items-center"}>
      <ClassForm uid={params.slug} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext();

  return { props: { data: [] } };
};
