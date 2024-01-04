"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { DnD, H2 } from "../../atoms";

const Box = dynamic(() => import("../../atoms/").then((module) => module.Box));
const Input = dynamic(() =>
  import("../../atoms/").then((module) => module.Input)
);
const PlusIcon = dynamic(() =>
  import("../../atoms/").then((module) => module.PlusIcon)
);

export function ExplanationForm({
  explanation,
  setExplanation,
  gap = "gap-4",
}) {
  const drawExplanationText = ({ text }, index) => {
    const [text_, setText_] = useState(text);
    return (
      <Box
        className="flex justify-center items-center gap-3 w-full bg-blue-300"
        hover={false}
      >
        <Input
          placeholder="Texto de explicación"
          className="w-full"
          value={text_}
          onChange={(e) => setText_(e.target.value)}
        />
        <PlusIcon
          className="h-5 cursor-pointer hover:opacity-50 transition-all"
          onClick={() => updateText(index, text_)}
        ></PlusIcon>
      </Box>
    );
  };

  const updateText = (index, text) => {
    console.log(index, text);
    const newExplanation = [...explanation];
    newExplanation[index].text = text;
    setExplanation(newExplanation);
  };

  const addExplanationText = () => {
    const newExplanation = [...explanation, { level: "Factor comun 4" }];
    setExplanation(newExplanation);
  };

  return (
    <>
      <Box className="w-full flex justify-center flex-col gap-3" hover={false}>
        <H2>Explicación</H2>
        <DnD
          droppableId={"explanation"}
          box={drawExplanationText}
          updateItems={setExplanation}
          items={explanation}
          customKey={"text"}
          gap={gap}
        />
        <Box className="w-full flex justify-center">
          <PlusIcon className="h-10" onClick={addExplanationText}></PlusIcon>
        </Box>
      </Box>
    </>
  );
}

// https://github.com/colbyfayock/my-final-space-characters/blob/master/src/App.js
