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

export function LevelsForm({ levels, setLevels, gap = "gap-4" }) {
  const drawLevels = ({ level, options, color, problem }, index) => {
    const [level_, setLevel_] = useState(level);
    const [color_, setColor_] = useState(color);
    const [options_, setOptions_] = useState(options);
    const [problem_, setProblem_] = useState(problem);
    return (
      <Box
        className="flex flex-col gap-5 w-full !bg-gray-primary"
        hover={false}
      >
        <div className="flex gap-3 justify-between">
          <Input
            value={level_}
            onChange={(e) => setLevel_(e.target.value)}
            placeholder={"Descripción"}
            label={"Descripción"}
          />
        </div>
        <div className="flex gap-3 justify-between">
          <Input
            value={problem_}
            onChange={(e) => setLevel_(e.target.value)}
            placeholder={"Problema"}
            label={"Problema"}
          />
          <Input
            className=""
            classNameInput="!py-0 !px-0 h-9"
            type="color"
            label="Color"
            value={color_}
            onChange={(e) => setColor_(e.target.value)}
          />
        </div>
        <div className="w-full border-t-1 border-black"></div>
        <div className="grid grid-cols-2 gap-3">
          <Input
            value={options_[0]?.value}
            onChange={(e) => setLevel_(e.target.value)}
            placeholder={"Nombre de nivel"}
            label={"Opción 1"}
          />
          <Input
            value={options_[1]?.value}
            onChange={(e) => setLevel_(e.target.value)}
            placeholder={"Nombre de nivel"}
            label={"Opción 2"}
          />
          <Input
            value={options_[2]?.value}
            onChange={(e) => setLevel_(e.target.value)}
            placeholder={"Nombre de nivel"}
            label={"Opción 3"}
          />
          <Input
            value={options_[3]?.value}
            onChange={(e) => setLevel_(e.target.value)}
            placeholder={"Nombre de nivel"}
            label={"Opción 4"}
          />
        </div>
      </Box>
    );
  };

  const addLevel = () => {
    const newLevels = [...levels, { level: "Factor comun 4" }];
    setLevels(newLevels);
  };

  return (
    <>
      <Box className="w-full flex justify-center flex-col gap-4" hover={false}>
        <div className="flex w-full gap-5 justify-between">
          <H2>Niveles</H2>

          <PlusIcon className="h-5" onClick={addLevel}></PlusIcon>
        </div>
        <DnD
          droppableId={"levels"}
          box={drawLevels}
          updateItems={setLevels}
          items={levels}
          gap={gap}
          customKey={"level"}
        />
      </Box>
    </>
  );
}

// https://github.com/colbyfayock/my-final-space-characters/blob/master/src/App.js
