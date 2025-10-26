import { ReactElement } from "react";

export enum AlertType{
    BASIC="",
    INFO="alert-info",
    SUCCESS="alert-success",
    WARNING="alert-warning",
    ERROR="alert-error"
};

export function BasicAlert(props: {
    text: string;
    icon?: ReactElement;
    type?: AlertType;
}){
    const DefaultIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        );
    }
    return (
        <div role="alert" className={`alert my-5 select-none ${props.type !== undefined ? props.type : AlertType.BASIC}`}>
            <i className="stroke-info shrink-0 pt-1 inline-flex">
                {props.icon == undefined ? (<DefaultIcon />) : (props.icon)}
            </i>
            <span>
                {props.text}
            </span>
        </div>
    )
}