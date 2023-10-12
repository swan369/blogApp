import Card from "./Card"
interface Data{
    id: number
    title: string,
    body: string,
    }
export default function Home({newData}:any):JSX.Element{
        return(
        <>
        <h1>Home</h1>
        {newData.map((item:Data) =>{
            return <Card key = {item.id} title= {item.title} body = {item.body}/>
        })}|
        </>
    )
   
}
