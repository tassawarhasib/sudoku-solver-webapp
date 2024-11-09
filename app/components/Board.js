import styles from "../styles/Game.module.css";

const Board = (props) => {
    return <div className={styles.board} {...props} />;
};

export default Board;