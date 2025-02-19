import styles from "./styles.module.css";

const Button = ({value}) => {
    return (
        <button className={styles["button"]}>
            {value}
        </button>
     );
}

export default Button;
