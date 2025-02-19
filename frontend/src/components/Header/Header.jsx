import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";
import help from "../../assets/images/header/help.svg";
import notifications from "../../assets/images/header/notifications.svg";

const Header = () => {
    return (
        <div className={styles["header"]}>
            <div className={styles["container"]}>
                <div className={styles["header-logo"]}>
                    <img src={logo} alt="Логотип" className={styles["logo__image"]} />
                    <p className={styles["logo__text"]}>
                        Личный кабинет<br />потребителя
                    </p>
                </div>
                <div className={styles["header-actions"]}>
                    <img src={help} alt="" className={styles["action__img"]} />
                    <img src={notifications} alt="" className={styles["action__img"]} />
                </div>
            </div>
        </div >
    );
}

export default Header;
