import styles from './ListItem.module.css';
import { Trash } from 'phosphor-react'
 
interface ListItemProps{
    todoText: string;
}

export function ListItem({todoText}: ListItemProps){
    return (
        <ul className={styles.listItem}>
            <input type="checkbox"/>
            <label>{todoText}</label>
            <button><Trash /></button>
        </ul>
    )
}