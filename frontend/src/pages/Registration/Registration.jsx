import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import styles from "./styles.module.css";

const Registration = () => {
    return (
        <div className={styles["registration"]}>
            <Header />
            <form className={styles["registration-form"]}>
                <div className={styles["form-header"]}>
                    <p className={styles["form-header__title"]}>
                        Регистрация
                    </p>
                    <p className={styles["form-header__text"]}>
                        Уже есть учётная запись?&nbsp;
                        <a href="/login" className={styles["form-header__link"]}>
                            Войти
                        </a>
                    </p>
                </div>
                <div className={styles["registration-date"]}>
                    <InputField label="Фамилия" type="text" placeholder="Введите фамилию" />
                    <InputField label="Имя" type="text" placeholder="Введите имя" />
                    <InputField label="Отчество" type="text" placeholder="Введите отчество" />
                    <InputField label="Номер" type="text" placeholder="Введите номер телефона" />
                    <div className={styles["wrapper-checkbox"]}>
                        <input type="checkbox" className={styles["checkbox"]} />
                        <label htmlFor="" className={styles["checkbox__label"]}>
                            Даю&nbsp;
                            <a href="!#" className={styles["checkbox__link"]}>
                                согласие на обработку<br />моих персональных данных.
                            </a>
                        </label>
                    </div>
                    <Button value="Дальше" />
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default Registration;
