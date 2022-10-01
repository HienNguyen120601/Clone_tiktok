import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./Defaultlayout.module.css"
import classNames from "classnames/bind";
import { Route } from "react-router-dom";
import publicRoutes from "../../../routes"
const cx = classNames.bind(styles)
function Defaultlayout({ children }) {
    const [path, element] = publicRoutes();
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Route path="path" element="element" />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );

}

export default Defaultlayout;