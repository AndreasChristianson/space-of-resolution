import './site-layout.css';
import {Header} from "../Header";
import {Body} from "../Body";
import {Footer} from "../Footer";

export const SiteLayout = () => {
    return (
        <div className="layout-container">
            <div className="layout-header">
                <Header/>
            </div>
            <div className="layout-body">
                <Body/>
            </div>
            <div className="layout-footer">
                <Footer/>
            </div>
        </div>
    );
}
