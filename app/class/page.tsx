
import {  ClassContainer } from '../../components/organisms';

import 'react-toastify/dist/ReactToastify.css';
import { Layout } from '../../components/templates';

export default function Home() {

  return (
    <Layout className={"flex flex-col items-center"}>
        <ClassContainer/>
    </Layout>
  )
}
