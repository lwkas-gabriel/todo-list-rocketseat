import styles from './ListItem.module.css';
import { Trash } from 'phosphor-react'
 
interface ListItemProps{
    todoText: string;
    onDeleteTask: (text: string) => void;
}

export function ListItem({todoText, onDeleteTask}: ListItemProps){
    function handleDeleteTask(){
        onDeleteTask(todoText);
    }

    return (
        <ul className={styles.listItem}>
            <input type="checkbox"/>
            <label>{todoText}</label>
            <button onClick={handleDeleteTask} title='Deletar Tarefa'><Trash /></button>
        </ul>
    )
}