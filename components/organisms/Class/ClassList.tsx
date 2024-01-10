"use client";
import { useEffect, useState } from "react";
import {
  Container,
  H1,
  Box,
  PlusIcon,
  SpinnerIcon,
  DeleteIcon,
} from "../../atoms";
import axios from "../../../axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const ClassList = () => {
  const router = useRouter();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getClasses();
  }, []);

  const deleteClass = (uid) => {
    axios
      .delete("/api/class/" + uid)
      .then((response) => {
        console.log(response);
        toast.success("Clase eliminada");
        getClasses();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error al eliminar la clase");
      });
  };

  const getClasses = () => {
    axios
      .get("/api/class")
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          onClick={() => {
            router.push("/class/new");
          }}
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
                    <div className="flex justify-between w-full">
                      {item.class}
                      <DeleteIcon
                        className="h-5 hover:opacity-50 transition-all cursor-pointer"
                        onClick={() => deleteClass(item.uid)}
                      ></DeleteIcon>
                    </div>
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
