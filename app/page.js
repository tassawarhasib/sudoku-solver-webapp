import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Game from "./components/Game";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Game />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
