import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className={styles["container"]}>
                <div className={styles["footer-content"]}>
                    <div className={styles["footer-logo"]}>
                        <img src={logo} alt="" className={styles["logo__image"]} />
                        <p className={styles["logo__text"]}>
                            ©ООО “ДТС”, 2025
                        </p>
                    </div>
                    <address className={styles["footer-address"]}>
                        <p className={styles["address__title"]}>
                            Офис обслуживания
                        </p>
                        <p className={styles["address__text"]}>
                            г. Батайск, ул. Козлова, д. 32
                        </p>
                        <p className={styles["address__text"]}>
                            Тел:&nbsp;
                            <a href="tel:+78635221242" className={styles["address__link"]}>
                                +7 (86352) 24-25-2
                            </a>
                        </p>
                        <p className={styles["address__text"]}>
                            Пн- Пт: 17:00 - 22:00
                        </p>
                        <p className={styles["address__text"]}>
                            Сб-Вс: выходной
                        </p>
                        <p className={styles["address__text"]}>
                            <a href="mailto:mail@mail.ru" className={styles["address__link"]}>
                                mail@mail.ru
                            </a>
                        </p>
                    </address>
                </div>
            </div>
        </div>
    );
}

export default Footer;
