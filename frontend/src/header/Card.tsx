export default function Card({title, body, id}:{title:string, body: string, id: string}):JSX.Element{

    return (
        <>
        <div className = "card" style ={{width: "18rem"}}>
    <img className = "card-img-top" alt ="images" src = "https://picsum.photos/200"/>
      <p className = "card-text">{id}</p>
    <div className = "card-body">
      <h5 className = "card-title">{title}</h5>
      <p className = "card-text">{body}</p>
      <a href="#" className = "btn btn-primary">Go somewhere</a>
    </div>
        </div>

        </>
    )
}