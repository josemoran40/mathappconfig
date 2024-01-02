"use client";
import { useState } from "react";
import { Container, H1, Input } from "../../atoms";
import { LevelsForm } from "../../molecules";
import { useRouter } from "next/navigation";

export const ClassForm = () => {
  const router = useRouter();

  const classDefault = {
    class: "General",
    teacherEmail: "ana@gmail.com",
    explanation: [
      { text: "El factor comun es 3" },
      {
        text: "La factorización por término común está ligada a una de las propiedades de los números reales",
      },
    ],
    levels: [
      {
        level: "Factor comun 1",
        problem: "3y+6x",
        options: [
          {
            answer: false,
            value: "3(x+3y)",
          },
          {
            value: "3(2x+y)",
            answer: true,
          },
          {
            value: "3(2x-y)",
            answer: false,
          },
          {
            value: "3(x+2y)",
            answer: false,
          },
        ],
        color: "#3498DB",
        clues: ["x+1", "y+1", "x+y"],
      },
      {
        level: "Factor comun 2",
        problem: "3y+6x",
        options: [
          {
            answer: false,
            value: "3(x+3y)",
          },
          {
            value: "3(2x+y)",
            answer: true,
          },
          {
            value: "3(2x-y)",
            answer: false,
          },
          {
            value: "3(x+2y)",
            answer: false,
          },
        ],
        color: "#3498DB",
        clues: ["x+1", "y+1", "x+y"],
      },
      {
        level: "Factor comun 3",
        problem: "3y+6x",
        options: [
          {
            answer: false,
            value: "3(x+3y)",
          },
          {
            value: "3(2x+y)",
            answer: true,
          },
          {
            value: "3(2x-y)",
            answer: false,
          },
          {
            value: "3(x+2y)",
            answer: false,
          },
        ],
        color: "#3498DB",
        clues: ["x+1", "y+1", "x+y"],
      },
    ],
  };

  const [levels, setLevels] = useState(classDefault.levels);

  return (
    <Container
      className={
        "w-full py-10 px-10 gap-4 flex justify-center flex-col items-center min-h-full"
      }
    >
      <H1>{classDefault.class}</H1>
      <Input
        label={"Class name"}
        onChange={(e) => console.log(e.target.value)}
        value={classDefault.class}
        placeholder={"Class name"}
      />
      <Input
        label={"Teacher email"}
        disabled={true}
        value={classDefault.teacherEmail}
        onChange={(e) => console.log(e.target.value)}
        placeholder={"teacher email"}
      />
      <LevelsForm levels={levels} setLevels={setLevels} />
    </Container>
  );
};
