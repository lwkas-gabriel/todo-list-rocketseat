import styles from './ListItem.module.css';
import { Trash } from 'phosphor-react'
import { useState } from 'react';
 
interface ListItemProps{
    item: ListItemType;
    onDeleteTask: (text: Date) => void;
    onChangeState: (text:string, state:boolean) => void
}

export interface ListItemType{
    id: Date;
    todoText: string;
    isCompleted: boolean;
}

export function ListItem({item, onDeleteTask, onChangeState}: ListItemProps){
    const [isCompleted, setIsCompleted] = useState(item.isCompleted);

    function handleOnClickCheck(){
        setIsCompleted(!item.isCompleted);
        item.isCompleted = !isCompleted;
        console.log(isCompleted);
    }

    function handleOnChangeCheck(){
        onChangeState(item.todoText, item.isCompleted);
    }

    function handleDeleteTask(){
        onDeleteTask(item.id);
        setIsCompleted(false);
        item.isCompleted = false;
    }

    return (
        <li className={styles.listItem}>
            <input checked={item.isCompleted} onChange={handleOnChangeCheck} onClick={handleOnClickCheck} type="checkbox"/>
            <label className={item.isCompleted ? styles.taskFisinhed : ''}>{item.todoText}</label>
            <button onClick={handleDeleteTask} title='Deletar Tarefa'><Trash /></button>
        </li>
    )
}