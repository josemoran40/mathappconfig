import { Layout } from '../components/templates';
import { H1, Container, Input, PrimaryButton } from '../components/atoms';
export default function Home() {
  return (
   <Layout className={"flex flex-col items-center"}>
      <H1>Home</H1>
      <Container className={"w-custom-855 gap-4 flex justify-center flex-col items-center min-h-full"}>
        <H1>Login</H1>
        <Input placeholder={"Usuario"} />
        <Input placeholder={"Contraseña"} />
        <PrimaryButton>Login</PrimaryButton>
      </Container>
   </Layout>
  )
}
