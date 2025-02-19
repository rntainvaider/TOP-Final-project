import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import styles from "./styles.module.css";
import eye from "../../assets/images/eye.svg";

const Registration = () => {
    return (
        <div>
            <Header />
            <form className={styles["registration-form"]}>
                <div className={styles["form-header"]}>
                    <p className={styles["form-header__title"]}>
                        Регистрация
                    </p>
                    <p className={styles["form-header__text"]}>
                        Уже есть учётная запись?&nbsp;
                        <a href="!#" className={styles["form-header__link"]}>
                            Войти
                        </a>
                    </p>
                </div>
                <div className={styles["form-date"]}>
                    <InputField label="Фамилия" type="text" placeholder="Введите фамилию" />
                    <InputField label="Имя" type="text" placeholder="Введите имя" />
                    <InputField label="Отчество" type="text" placeholder="Введите отчество" />
                    <InputField label="Номер" type="text" placeholder="Введите номер телефона" />
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default Registration;
