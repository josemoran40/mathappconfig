"use client";
import React from "react";
import { Box, DnD, Input, PlusIcon } from "../../atoms";

export function LevelsForm({ levels, setLevels, gap = "gap-4" }) {
  const drawLevels = ({ level, options }) => {
    return (
      <Box className="flex flex-col gap-3 w-full" hover={false}>
        {level}
        <Input placeholder="Nivel 1" className="w-full" />{" "}
        <DnD
          droppableId={"options" + level.level}
          box={({ value, answer }) => (
            <div
              className={`p-1 rounded-sm ${
                answer ? "bg-green-600 text-white" : ""
              }`}
            >
              {value}
            </div>
          )}
          updateItems={() => console.log("update")}
          items={options}
        />
      </Box>
    );
  };

  const addLevel = () => {
    const newLevels = [...levels, { level: "Factor comun 4" }];
    setLevels(newLevels);
  };

  return (
    <>
      <DnD
        droppableId={"levels"}
        box={drawLevels}
        updateItems={setLevels}
        items={levels}
      />
      <Box className="w-full flex justify-center">
        <PlusIcon className="h-10" onClick={addLevel}></PlusIcon>
      </Box>
    </>
  );
}

// https://github.com/colbyfayock/my-final-space-characters/blob/master/src/App.js
