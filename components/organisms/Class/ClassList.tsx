"use client";
import { useEffect, useState } from "react";
import { Container, H1, Box, PlusIcon, SpinnerIcon } from "../../atoms";
import axios from "../../../axios";
import { useRouter } from "next/navigation";

export const ClassList = () => {
  const router = useRouter();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("/api/class")
      .then((response) => {
        console.log(response.data);
        setClasses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container
      className={
        "w-full py-10 px-10 gap-4 flex justify-center flex-col items-center min-h-full"
      }
    >
      <div className="flex w-full gap-5 justify-between items-center">
        <H1>Clases</H1>

        <PlusIcon
          className="h-5 hover:opacity-50"
          onClick={() => {}}
        ></PlusIcon>
      </div>
      <>
        {classes.length != 0 ? (
          <div className="grid lg:grid-cols-3 gap-5 w-full">
            <>
              {classes.map((item, index) => {
                return (
                  <Box
                    key={index}
                    className="hover:opacity-50"
                    onClick={() => router.push(`/class/${item.uid}`)}
                  >
                    {item.class}
                  </Box>
                );
              })}
            </>
          </div>
        ) : (
          <SpinnerIcon className="h-10" />
        )}
      </>
    </Container>
  );
};
