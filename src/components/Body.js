import {ColumnLayout} from "./layouts/ColumnLayout";
import {Links} from "./Links";
import {News} from "./News";
import {Images} from "./Images";

export const Body = () => {

    return <ColumnLayout
        columns={[
            <Links/>,
            <News/>,
            <Images/>,
        ]}
    />;
}