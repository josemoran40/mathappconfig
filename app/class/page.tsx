import { ClassList } from "../../components/organisms";
import { Layout } from "../../components/templates";

export default function Home() {
  return (
    <Layout className={"flex flex-col items-center"}>
      <ClassList />
    </Layout>
  );
}
