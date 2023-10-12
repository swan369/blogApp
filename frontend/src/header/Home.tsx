import Card from "./Card"
import {v4 as getId} from "uuid"
interface Data{
    id: number;
    title: string;
    body: string;
    }
export default function Home({newData}:{newData:Array<Data>|null}):JSX.Element{
        return(
        <>
        <h1>Home</h1>
        {newData && newData.map((item:Data|null) =>{
            if (item){
                return <Card key = {getId()} title= {item.title} body = {item.body} id = {getId()}/>
            }
            return null
        })}|
        </>
    )
   
}
