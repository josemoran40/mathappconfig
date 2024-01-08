"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { DeleteIcon, DragAndDrop, H2 } from "../../atoms";

const Box = dynamic(() => import("../../atoms/").then((module) => module.Box));
const Input = dynamic(() =>
  import("../../atoms/").then((module) => module.Input)
);
const PlusIcon = dynamic(() =>
  import("../../atoms/").then((module) => module.PlusIcon)
);

export function LevelsForm({ levels, setLevels, gap = "gap-4" }) {
  const DrawLevels = ({ level, options, problem, clues }, index) => {
    const [level_, setLevel_] = useState(level);
    const [problem_, setProblem_] = useState(problem);
    return (
      <Box
        className="flex flex-col gap-5 w-full !bg-gray-primary"
        hover={false}
      >
        <H2>Nivel {index + 1}</H2>
        <div className="flex gap-3 justify-between">
          <Input
            value={level_}
            onChange={(e) => {
              setLevel_(e.target.value);
              updateLevelProperty(index, e.target.value, "level");
            }}
            placeholder={"Descripción"}
            label={"Descripción"}
          />
        </div>
        <div className="flex gap-3 justify-between">
          <Input
            value={problem_}
            onChange={(e) => {
              setProblem_(e.target.value);
              updateLevelProperty(index, e.target.value, "problem");
            }}
            placeholder={"Problema"}
            label={"Problema"}
          />
        </div>
        <div className="w-full border-t-1 border-black opacity-30"></div>
        <H2>Opciones</H2>
        <div className="grid grid-cols-2 gap-3">
          {options.map((option, indexOption) => {
            return (
              <Input
                value={option?.value}
                onChange={(e) =>
                  updateLevelProperty(
                    index,
                    e.target.value,
                    "options",
                    indexOption,
                    "value"
                  )
                }
                placeholder={"Nombre de nivel"}
                label={`Opción ${index + 1}`}
              />
            );
          })}
        </div>
        <div className="w-full border-t-1 border-black opacity-30"></div>
        <div className="flex justify-between items-center">
          <H2>Pistas</H2>
          <PlusIcon
            className="h-5 hover:opacity-50 transition-all cursor-pointer"
            onClick={() => addClue(index, clues.length)}
          ></PlusIcon>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {clues.map((clue, indexClue) => {
            return (
              <div className="flex gap-3 items-center">
                <Input
                  value={clue}
                  onChange={(e) =>
                    updateLevelProperty(
                      index,
                      e.target.value,
                      "clues",
                      indexClue
                    )
                  }
                  placeholder={"Pista"}
                />
                <DeleteIcon
                  className="h-5 hover:opacity-50 transition-all cursor-pointer"
                  onClick={() => {}}
                ></DeleteIcon>
              </div>
            );
          })}
        </div>
      </Box>
    );
  };

  const updateLevelProperty = (
    index,
    value,
    property,
    property2 = null,
    property3 = null
  ) => {
    const newLevels = [...levels];
    if (property3) {
      newLevels[index][property][property2][property3] = value;
    }
    if (property2) {
      newLevels[index][property][property2] = value;
    } else {
      newLevels[index][property] = value;
    }
    setLevels(newLevels);
  };

  const addLevel = () => {
    const newLevels = [...levels, { level: "Factor comun 4" }];
    setLevels(newLevels);
  };

  const addClue = (index, length) => {
    updateLevelProperty(index, "", "clues", length);
  };

  return (
    <>
      <Box className="w-full flex justify-center flex-col gap-4" hover={false}>
        <div className="flex w-full gap-5 justify-between">
          <H2>Niveles</H2>

          <PlusIcon
            className="h-5 cursor-pointer"
            onClick={addLevel}
          ></PlusIcon>
        </div>
        <DragAndDrop
          droppableId={"levels"}
          box={DrawLevels}
          updateItems={setLevels}
          items={levels}
          gap={gap}
          customKey={"uid"}
        />
      </Box>
    </>
  );
}

// https://github.com/colbyfayock/my-final-space-characters/blob/master/src/App.js
