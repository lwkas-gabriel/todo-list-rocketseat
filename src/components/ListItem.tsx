import styles from './ListItem.module.css';
import { Trash } from 'phosphor-react'
 
export function ListItem(){
    return (
        <ul className={styles.listItem}>
            <input type="checkbox" id="html" name="fav_language" value="HTML" />
            <label>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
            <button><Trash /></button>
        </ul>
    )
}