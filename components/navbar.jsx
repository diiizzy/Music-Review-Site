import { Lora } from "next/font/google";
import styles from './navbar.module.css'

const lora = Lora({
  subsets: ['latin'],
  style: ['italic'],
});

export default function NavBar() {
    return (
        <div className={`${lora.className} ${styles.loraText}`}>
            next up list
        </div>
    );
}