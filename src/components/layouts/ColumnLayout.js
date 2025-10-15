import "./column-layout.css";


export const ColumnLayout =({columns}) =>{
    return <div className={"column-layout"}>
        {columns.map((column, index) => (
            <div key={index} className={"column"}>
                {column}
            </div>
        ))}
    </div>;
}