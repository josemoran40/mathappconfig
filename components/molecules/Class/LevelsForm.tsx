"use client";
import React from "react";
import { Box, DnD, PlusIcon } from "../../atoms";

export function LevelsForm({ levels, setLevels, gap = "gap-4" }) {
  const drawLevels = ({ level }) => {
    return <Box>{level}</Box>;
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
