import styles from "./styles.module.css";

const InputField = ({ label, type, placeholder,srcIcon }) => {
    return (
        <div className={styles["input-field"]}>
            <label htmlFor="" className={styles["label"]}>
                {label}
            </label>
            <div className={styles["input-wrapper"]}>
                <input type={type} placeholder={placeholder} className={styles["input"]} />
                {srcIcon && <img src={srcIcon} alt="" className={styles["watch__password"]} />}
            </div>
        </div>
    );
}

export default InputField;
