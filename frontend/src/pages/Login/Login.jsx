import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.css";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

const Login = () => {
    return (
        <div className={styles["login"]}>
            <Header />
            <form className={styles["login-form"]}>
                <div className={styles["form-header"]}>
                    <p className={styles["form-header__title"]}>
                        Вход в<br />личный кабинет
                    </p>
                    <p className={styles["form-header__text"]}>
                        Нет учётной записи?&nbsp;
                        <a href="/registration" className={styles["form-header__link"]}>
                            Зарегистрироваться
                        </a>
                    </p>
                </div>
                <div className={styles["login-date"]}>
                    <InputField label="E-mail" type="email" placeholder="Введите email" />
                    <InputField label="Пароль" type="password" placeholder="Введите пароль" />
                    <div className={styles["wrapper-checkbox"]}>
                        <input type="checkbox" className={styles["checkbox"]} />
                        <label htmlFor="" className={styles["checkbox__label"]}>
                            Даю&nbsp;
                        </label>
                    </div>
                    <Button value="Войти" />
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default Login;
