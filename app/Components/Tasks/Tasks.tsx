"use client";
import React from "react";
import styled from 'styled-components';
import CreateContent from "../Models/CreateContent";
import themes from "@/app/context/themes";

function Tasks(){
    return <TaskStyled theme={themes}>
        <CreateContent />
    </TaskStyled>
}

const TaskStyled = styled.div`
    width: 100%;
    padding: 2rem;
    height: 100%;

    overflow-y: auto;
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;

    &::-webkit-scrollbar{
        width: 0.5rem;
    }
`;

export default Tasks;