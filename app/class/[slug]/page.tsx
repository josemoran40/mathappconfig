import { ClassForm } from "../../../components/organisms";
import { Layout } from "../../../components/templates";

export default function Home({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  return (
    <Layout className={"flex flex-col items-center"}>
      <ClassForm uid={params.slug} />
    </Layout>
  );
}
