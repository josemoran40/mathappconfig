"use client";
import { useEffect, useState } from "react";
import { Container, H1, Input, PrimaryButton, SpinnerIcon } from "../../atoms";
import axios from "../../../axios";
import { ExplanationForm, LevelsForm } from "../../molecules";
import { toast } from "react-toastify";

export const ClassForm = ({ uid_ }) => {
  const [class_, setClass_] = useState<ClassData | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);
  const [explanation, setExplanation] = useState<Explanation[]>([]);

  useEffect(() => {
    axios
      .get("/api/class/" + uid_)
      .then((response) => {
        setClass_(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateClass = () => {
    const classUpdated: ClassData = {
      ...class_,
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

  useEffect(() => {
    if (class_) {
      setLevels(class_.levels);
      setExplanation(class_.explanation);
    }
  }, [class_]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {class_ ? (
        <>
          <Container
            className={
              "w-full lg:p-10 p-3 gap-4 flex justify-center flex-col items-center min-h-full"
            }
          >
            <H1>{class_.class}</H1>
            <Input
              label={"Class name"}
              onChange={(e) => console.log(e.target.value)}
              value={class_.class}
              placeholder={"Class name"}
            />
            <ExplanationForm
              explanation={explanation}
              setExplanation={setExplanation}
            />
            <LevelsForm levels={levels} setLevels={setLevels} />
          </Container>
        </>
      ) : (
        <SpinnerIcon className="h-10" />
      )}
      {class_ ? (
        <div className="sticky w-fit bottom-4 left-full pr-2">
          <PrimaryButton onClick={() => updateClass()}>Guardar</PrimaryButton>
        </div>
      ) : null}
    </div>
  );
};
