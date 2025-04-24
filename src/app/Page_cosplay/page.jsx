import styles from './page.module.css';
import Image from 'next/image';
import Evento from '@/components/Evento';

export default function PageCosplay() {
    return (
        <div    className={styles.container}> 
            <div className={styles.containerLimitado}>
            <Evento />
             
                
            </div>
        </div>
    )
}