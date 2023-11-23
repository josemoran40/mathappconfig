"use client"
import { useState } from "react";
import { Container, H1, PrimaryButton, Input, Box, PlusIcon } from "../../atoms"
import { toast } from 'react-toastify';
import axios from "../../../axios";
import { useRouter } from 'next/navigation'

export const ClassContainer = () => {

    const router = useRouter();


    return (
        <Container className={"w-full py-10 px-10 gap-4 flex justify-center flex-col items-center min-h-full"}>
            <H1>Clases</H1>
            <div className="grid grid-cols-3 gap-5 w-full">
                <Box>
                    Nivel 1
                </Box>
                <Box>
                    Nivel 2
                </Box>
                <Box>
                    Nivel 3
                </Box>
                <Box>
                    Nivel 4
                </Box>
                <Box>
                    Nivel 5
                </Box>
                <Box className="justify-center hover:opacity-50">
                    <PlusIcon className="w-9"/>
                </Box>
            </div>
        </Container>
    )
}
