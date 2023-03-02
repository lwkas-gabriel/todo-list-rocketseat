import styles from './ListItem.module.css';
import { Trash } from 'phosphor-react'
import { useState } from 'react';
 
interface ListItemProps{
    item: ListItemType;
    onDeleteTask: (text: string) => void;
}

export interface ListItemType{
    todoText: string;
    isCompleted: boolean;
}

export function ListItem({item, onDeleteTask}: ListItemProps){
    const [isCompleted, setIsCompleted] = useState(item.isCompleted);

    function handleOnChangeCheck(){
        setIsCompleted(state => !state);
        item.isCompleted = isCompleted;
    }

    function handleDeleteTask(){
        onDeleteTask(item.todoText);
    }

    return (
        <ul className={styles.listItem}>
            <input checked={item.isCompleted} onChange={handleOnChangeCheck} type="checkbox"/>
            <label className={item.isCompleted ? styles.taskFisinhed : ''}>{item.todoText}</label>
            <button onClick={handleDeleteTask} title='Deletar Tarefa'><Trash /></button>
        </ul>
    )
}