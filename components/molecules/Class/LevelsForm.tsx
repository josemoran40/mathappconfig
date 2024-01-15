"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { DeleteIcon, DragAndDrop, H2 } from "../../atoms";
import { v4 as uuidV4 } from "uuid";

const Box = dynamic(() => import("../../atoms/").then((module) => module.Box));
const Input = dynamic(() =>
  import("../../atoms/").then((module) => module.Input)
);
const PlusIcon = dynamic(() =>
  import("../../atoms/").then((module) => module.PlusIcon)
);

import defaultClass from "../../../models/class.json";
import { toast } from "react-toastify";

export function LevelsForm({ levels, setLevels, gap = "gap-4" }) {
  const DrawLevels = ({ level, options, problem, clues }, index) => {
    const [level_, setLevel_] = useState(level);
    const [problem_, setProblem_] = useState(problem);
    return (
      <Box
        className="flex flex-col gap-5 w-full !bg-gray-primary"
        hover={false}
      >
        <div className="flex justify-between">
          <H2>Nivel {index + 1}</H2>
          <DeleteIcon
            className="h-5 hover:opacity-50 transition-all cursor-pointer"
            onClick={() => deleteLevel(index)}
          ></DeleteIcon>
        </div>
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
              <div
                key={indexOption + option.value}
                className="flex gap-2 items-end"
              >
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
                <div
                  className={`h-4 w-4 mb-custom-10 rounded-sm  cursor-pointer ${
                    option.answer ? "bg-green-700" : "bg-red-600"
                  }`}
                  onClick={() => {
                    updateCorrectAnswer(index, indexOption);
                  }}
                ></div>
              </div>
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
              <div className="flex gap-3 items-center" key={indexClue}>
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
                  onClick={() => {
                    removeClue(index, indexClue);
                  }}
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

  const removeClue = (index, indexClue) => {
    const newLevels = [...levels];
    newLevels[index].clues.splice(indexClue, 1);
    setLevels(newLevels);
  };

  const addLevel = () => {
    defaultClass.levels[0].uid = uuidV4();
    const newLevels = [...levels, defaultClass.levels[0]];
    setLevels(newLevels);
  };

  const deleteLevel = (index) => {
    if (levels.length == 1)
      return toast.error("No puedes eliminar todos los niveles");
    const newLevels = [...levels];
    newLevels.splice(index, 1);
    setLevels(newLevels);
  };

  const addClue = (index, length) => {
    updateLevelProperty(index, "", "clues", length);
  };

  const updateCorrectAnswer = (index, indexOption) => {
    const options = [...levels[index].options];
    options[indexOption].answer = !options[indexOption].answer;
    updateLevelProperty(index, options, "options");
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
