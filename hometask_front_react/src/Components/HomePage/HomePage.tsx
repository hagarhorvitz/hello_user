import { useEffect, useState, type JSX } from "react";
import css from "./HomePage.module.css";
import { NavLink, useLocation } from "react-router-dom";
import Sunflower from '../../assets/sunflower.png'


export function HomePage(): JSX.Element {

    const location = useLocation();
    const [toast, setToast] = useState(location?.state?.toastMessage ?? null);

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 2500);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    return (
        <div className={css.HomePage}>
            {toast && (
                <div className={css.Alert}>
                    {toast}
                </div>
            )}
            <div className={css.HomePageWrapper}>
                <div className={css.LeftDiv}>
                    <img src={Sunflower} alt='sunflower' className={css.HomeSunflower} />
                </div>

                <div className={css.RightDiv}>
                    <h1>What is your name? </h1>
                    <NavLink to="/new_username">Click to Enter New Username</NavLink>
                </div>
            </div>
        </div>
    );
}
