"use client";
import { useEffect, useState } from "react";
import { Container, H1, Input, PrimaryButton, SpinnerIcon } from "../../atoms";
import axios from "../../../axios";
import { ExplanationForm, LevelsForm } from "../../molecules";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import defaultClass from "../../../models/class.json";
import { useRouter } from "next/navigation";

export const ClassForm = ({ uid_ }) => {
  const [class_, setClass_] = useState<ClassData | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);
  const [explanation, setExplanation] = useState<Explanation[]>([]);
  const [className, setClassName] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (uid_ !== "new") return getClass();
    getDefaults();
  }, []);

  const getDefaults = async () => {
    defaultClass.uid = uuidv4();
    for (const level of defaultClass.levels) {
      level.uid = uuidv4();
    }
    for (const explanation of defaultClass.explanation) {
      explanation.uid = uuidv4();
    }

    setClass_(defaultClass);
  };

  const getClass = () => {
    axios
      .get("/api/class/" + uid_)
      .then((response) => {
        setClass_(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateClass = () => {
    const classUpdated: ClassData = {
      ...class_,
      class: className,
      levels: levels,
      explanation: explanation,
    };

    axios
      .put("/api/class/" + uid_, classUpdated)
      .then((response) => {
        console.log(response);
        toast.success("Clase actualizada");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error al actualizar la clase");
      });
  };

  const createClass = () => {
    const classCreated: ClassData = {
      ...class_,
      class: className,
      levels: levels,
      explanation: explanation,
    };

    axios
      .post("/api/class", classCreated)
      .then((response) => {
        toast.success("Clase creada");
        router.replace("/class/" + response.data.uid);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error al crear la clase");
      });
  };

  useEffect(() => {
    if (class_) {
      setLevels(class_.levels);
      setExplanation(class_.explanation);
      setClassName(class_.class);
    }
  }, [class_]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {class_ ? (
        <Container
          className={
            "w-full lg:p-10 p-3 gap-4 flex justify-center flex-col items-center min-h-full"
          }
        >
          <H1>{className}</H1>
          <Input
            label={"Nombre de la clase"}
            onChange={(e) => setClassName(e.target.value)}
            value={className}
            placeholder={"Nombre de la clase"}
          />
          <ExplanationForm
            explanation={explanation}
            setExplanation={setExplanation}
          />
          <LevelsForm levels={levels} setLevels={setLevels} />
        </Container>
      ) : (
        <SpinnerIcon className="h-10" />
      )}
      {class_ ? (
        <div className="sticky w-fit bottom-4 left-full pr-2">
          <PrimaryButton
            onClick={() => {
              if (uid_ === "new") createClass();
              else updateClass();
            }}
          >
            Guardar
          </PrimaryButton>
        </div>
      ) : null}
    </div>
  );
};
