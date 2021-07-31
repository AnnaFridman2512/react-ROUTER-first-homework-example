import {useParams} from "react-router-dom";

export default function User(){
    const {name} = useParams();

    return (
        <h1>Hi {name} !!!</h1>
    );
}