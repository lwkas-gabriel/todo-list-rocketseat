import styles from './ListItem.module.css';
import { Trash } from 'phosphor-react'
import { useState } from 'react';
 
interface ListItemProps{
    todoText: string;
    onDeleteTask: (text: string) => void;
}

export function ListItem({todoText, onDeleteTask}: ListItemProps){
    const [isChecked, setIsChecked] = useState(false);

    function handleOnChangeCheck(){
        setIsChecked(state => !state) 
    }

    function handleDeleteTask(){
        onDeleteTask(todoText);
    }

    return (
        <ul className={styles.listItem}>
            <input onClick={handleOnChangeCheck} type="checkbox"/>
            <label className={isChecked ? styles.taskFisinhed : ''}>{todoText}</label>
            <button onClick={handleDeleteTask} title='Deletar Tarefa'><Trash /></button>
        </ul>
    )
}