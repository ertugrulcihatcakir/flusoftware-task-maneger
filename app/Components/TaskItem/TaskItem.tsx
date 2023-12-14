"use cilent";

import formatDate from "@/app/utilis/formatDate";
import { useGlobalState } from '@/app/context/globalProvider';
import { edit, trash } from '@/app/utilis/Icons';
import React from 'react';
import styled from 'styled-components';


interface Props{
    title: string;
    description: string;
    date: string;
    isCompleted: boolean;
    id: string;
}
function TaskItem({ title, description, date, isCompleted, id }: Props) {
    const { theme, deleteTask, updateTask } = useGlobalState();
    return (
      <TaskItemStyled theme={theme}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p className="date">{formatDate(date)}</p>
        <div className="task-footer">
          {isCompleted ? (
            <button
              className="completed"
              onClick={() => {
                const task = {
                  id,
                  isCompleted: !isCompleted,
                };
  
                updateTask(task);
              }}
            >
              Completed
            </button>
          ) : (
            <button
              className="incomplete"
              onClick={() => {
                const task = {
                  id,
                  isCompleted: !isCompleted,
                };
  
                updateTask(task);
              }}
            >
              Incomplete
            </button>
          )}
          <button className="edit">{edit}</button>
          <button
            className="delete"
            onClick={() => {
              deleteTask(id);
            }}
          >
            {trash}
          </button>
        </div>
      </TaskItemStyled>
    );
  }

const TaskItemStyled = styled.div`
    padding: 1.2rem 1rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.borderColor2};
    box-shadow: ${(props) => props.theme.shadow7};
    border: 2px solid ${(props) => props.theme.borderColor2};

    height: 16rem;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    
    > h1 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .task-footer {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        button {
            border: none;
            outline: none;
            cursor: pointer;

            i {
            font-size: 1.4rem;
            color: ${(props) => props.theme.colorGrey2};
        }
        .completed,
        .incomplete {
            display: inline-block;
            padding: 0.4rem 1rem;
            background: ${(props) => props.theme.colorDanger};
            border-radius: 30px;
        }

        .completed {
            background: ${(props) => props.theme.colorGreenDark} !important;
        }
        .edit {
            margin-left: auto;
        }
    }

    .date {
        margin-top: auto;
    }

`;


export default TaskItem;