"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { DragAndDrop, H2, SaveIcon } from "../../atoms";

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
  const DrawExplanationText = ({ text }, index) => {
    const [text_, setText_] = useState(text);
    return (
      <Box
        className="flex justify-center items-center gap-3 w-full !bg-gray-primary"
        hover={false}
      >
        <Input
          placeholder="Texto de explicación"
          className="w-full"
          value={text_}
          onChange={(e) => {
            setText_(e.target.value);
            updateText(index, e.target.value);
          }}
        />
      </Box>
    );
  };

  const updateText = (index, text) => {
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
        <div className="flex w-full gap-5 justify-between">
          <H2>Explicación</H2>

          <PlusIcon className="h-5" onClick={addExplanationText}></PlusIcon>
        </div>
        <DragAndDrop
          droppableId={"explanation"}
          box={DrawExplanationText}
          updateItems={setExplanation}
          items={explanation}
          customKey={"uid"}
          gap={gap}
        />
      </Box>
    </>
  );
}
