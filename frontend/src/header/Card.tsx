export default function Card({title, body}:{title:string, body: string}):JSX.Element{

    return (
        <>
        <div className = "card" style ={{width: "18rem"}}>
    <img className = "card-img-top" alt ="images" src = "https://picsum.photos/200"/>
    <div className = "card-body">
      <h5 className = "card-title">{title}</h5>
      <p className = "card-text">{body}</p>
      <a href="#" className = "btn btn-primary">Go somewhere</a>
    </div>
        </div>

        </>
    )
}