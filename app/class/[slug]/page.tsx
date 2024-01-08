"use client";
import { ClassForm } from "../../../components/organisms";

import { Layout } from "../../../components/templates";

export default function Home({ params }: { params: { slug: string } }) {
  return (
    <Layout className={"flex flex-col items-center"}>
      <ClassForm uid_={params.slug} />
    </Layout>
  );
}
