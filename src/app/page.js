import Image from "next/image";
import styles from "./page.module.css";
import { Lora } from "next/font/google";
import AlbumList from "../../components/albumlist";
import NavBar from "../../components/navbar";

const lora = Lora({
  subsets: ['latin'],
  style: ['italic'],
});

export default function Home() {
  return (
    <div>
      <AlbumList />
      <NavBar />
    </div>
  );
}
