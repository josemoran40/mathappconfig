"use client";
import { useEffect, useState } from "react";
import { Container, H1, Input, PrimaryButton, SpinnerIcon } from "../../atoms";
import axios from "../../../axios";
import { useRouter } from "next/navigation";
import { ExplanationForm, LevelsForm } from "../../molecules";

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
    </div>
  );
};
