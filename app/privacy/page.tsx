import { LoginForm } from "../../components/organisms";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Layout } from "../../components/templates";
import { H1, H2 } from "../../components/atoms";

export default function Home() {
  return (
    <Layout className={""}>
      <H1>Política de Privacidad</H1>
      <br />
      <p>
        Última actualización: 18 de febrero de 2024
        <br />
        <br />
        Esta Política de Privacidad describe cómo FactorXpert recopila, utiliza
        y comparte la información personal de los usuario de nuestra aplicación
        móvil FactorXpert, disponible en la tienda de Google Play Store.
        <br />
        <br />
        <H2 className="font-semibold">Información que Recopilamos</H2>
        <ul className="">
          <li>
            Al utilizar nuestra aplicación, podemos recopilar cierta información
            personal identificable de los usuarios, que puede incluir, entre
            otros, los siguientes datos:
          </li>
          <ul className="list-disc pl-6">
            <li>
              Información de registro: Cuando usted se registra en nuestra
              aplicación, podemos recopilar su dirección de correo electrónico y
              contraseña.
            </li>
          </ul>
        </ul>
        <br />
        <p>
          <H2 className="font-semibold">Uso de la Información Recopilada</H2>{" "}
          Utilizamos la información que recopilamos para los siguientes
          propósitos:
        </p>
        <ul className="list-disc pl-6">
          <li>Para permitirle acceder y utilizar nuestra aplicación.</li>
          <li>
            Para personalizar su experiencia y ofrecerle contenido y servicios
            relevantes.
          </li>
          <li>
            Para mejorar nuestra aplicación y desarrollar nuevos servicios.
          </li>
          <li>
            Para proteger nuestros derechos y propiedad, así como para cumplir
            con las leyes y regulaciones aplicables.
          </li>
        </ul>
        <br />
        <p>
          <H2 className="font-semibold">Compartir Información con Terceros</H2>{" "}
          Nos comprometemos a no vender, alquilar ni compartir su información
          personal con terceros, excepto en las siguientes circunstancias:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Cuando sea necesario para proporcionarle los servicios solicitados
            por usted.
          </li>
          <li>
            Cuando estemos legalmente obligados a hacerlo, en respuesta a una
            solicitud de una autoridad gubernamental u orden judicial.
          </li>
          <li>
            Cuando sea necesario para proteger nuestros derechos, propiedad o
            seguridad, así como los de nuestros usuarios u otros.
          </li>
          <li>
            Cuando contemos con su consentimiento para compartir su información.
          </li>
        </ul>
        <br />
        <p>
          <H2 className="font-semibold">Seguridad de la Información </H2>{" "}
          Implementamos medidas de seguridad técnicas, administrativas y físicas
          para proteger la información personal de nuestros usuarios contra
          accesos no autorizados, divulgación, alteración o destrucción.
        </p>
        <br />
        <p>
          <H2 className="font-semibold">
            Cambios en esta Política de Privacidad
          </H2>{" "}
          Nos reservamos el derecho de actualizar esta Política de Privacidad en
          cualquier momento. Le recomendamos revisar periódicamente esta página
          para estar al tanto de cualquier cambio. La fecha de la última
          actualización se indicará al principio de esta Política de Privacidad.
        </p>
        <br />
        <p>
          <H2 className="font-semibold">Contacto</H2> Si tiene alguna pregunta
          sobre esta Política de Privacidad, puede ponerse en contacto con
          nosotros a través de{" "}
          <a href="email:juoma101@gmail.com">juoma101@gmail.com</a>.
        </p>
      </p>
    </Layout>
  );
}
