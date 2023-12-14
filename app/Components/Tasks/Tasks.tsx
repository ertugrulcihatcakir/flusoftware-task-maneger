"use client";

import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from 'styled-components';
import TaskItem from "../TaskItem/TaskItem";
import { plus } from "@/app/utilis/Icons";

interface Props{
    title: string;
    tasks: any[];
}

function Tasks({ title, tasks }: Props){
    const { theme, } = useGlobalState ();

    return (
        <TaskStyled theme={theme}>
            <h1>{title}</h1>

            <div className="tasks grid">
                {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    date={task.date}
                    isCompleted={task.isCompleted}
                    id={task.id}
                />
                ))}
                <button className="create-task">
                    {plus}
                    Add New Task
                </button>
            </div>
        </TaskStyled>
    )
}

const TaskStyled = styled.div`
    width: 100%;
    padding: 2rem;
    height: 100%;
    position: relative;

    overflow-y: auto;
    
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;

    &::-webkit-scrollbar{
        width: 0.5rem;
    }

    .tasks {
      margin: 2rem 0;
    }

    .btn-rounded {
      position: fixed;
      top: 4.9rem;
      right: 5.1rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
  
      background-color: ${(props) => props.theme.colorBg};
      border: 2px solid ${(props) => props.theme.borderColor2};
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
      color: ${(props) => props.theme.colorGrey2};
      font-size: 1.4rem;
  
      display: flex;
      align-items: center;
      justify-content: center;
  
      @media screen and (max-width: 768px) {
        top: 3rem;
        right: 3.5rem;
      }
    }

    > h1 {
        font-size: clamp(1.5rem, 2vw, 2rem);
        font-weight: 800;
        position: relative;
    
        &::after {
          content: "";
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 3rem;
          height: 0.2rem;
          background-color: ${(props) => props.theme.colorPrimaryGreen};
          border-radius: 0.5rem;
        }
      }
    
      .create-task {
        height: 16rem;
        color: ${(props) => props.theme.colorGrey2};
        font-weight: 600;
        cursor: pointer;
        border-radius: 1rem;
        border: 3px dashed ${(props) => props.theme.colorGrey5};
        transition: all 0.3s ease;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    
        i {
          font-size: 1.5rem;
          margin-right: 0.2rem;
        }
    
        &:hover {
          background-color: ${(props) => props.theme.colorGrey5};
          color: ${(props) => props.theme.colorGrey0};
        }
      }
`;

export default Tasks;