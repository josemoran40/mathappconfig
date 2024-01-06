"use client";
import { useEffect, useState } from "react";
import { Container, Input, PrimaryButton, SpinnerIcon } from "../../atoms";
import axios from "../../../axios";
import { useRouter } from "next/navigation";
import { EditOption } from "../../molecules";

export const ClassForm = ({ uid }) => {
  const router = useRouter();
  const [class_, setClass_] = useState<ClassData | null>(null);
  const [name, setName] = useState("");
  const [levels, setLevels] = useState<Level[]>([]);
  const [explanation, setExplanation] = useState<Explanation[]>([]);

  useEffect(() => {
    axios
      .get("/api/class/" + uid)
      .then((response) => {
        setClass_(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (class_) {
      setName(class_.class);
      setLevels(class_.levels);
      setExplanation(class_.explanation);
    }
  }, [class_]);

  return (
    <div className="flex flex-col gap-8 w-full">
      {class_ ? (
        <>
          <Container
            className={
              "w-full py-10 px-10 gap-4 flex justify-center flex-col items-center min-h-full"
            }
          >
            <div className="w-full gap-5 flex flex-col items-end">
              <Input
                label={"Clase"}
                onChange={(e) => setName(e.target.value)}
                placeholder={"Nombre de la clase"}
                value={class_.class}
              />
              <PrimaryButton>Guardar</PrimaryButton>
            </div>
          </Container>

          <Container
            className={
              "w-full py-10 px-10 gap-4 flex justify-center flex-col items-center min-h-full"
            }
          >
            {explanation.map((item, index) => {
              return <EditOption className={""}>{item.text}</EditOption>;
            })}
          </Container>
        </>
      ) : (
        <SpinnerIcon className="h-10" />
      )}
    </div>
  );
};
