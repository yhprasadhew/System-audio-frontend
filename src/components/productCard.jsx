import './productCard.css'

export default function ProductCard(props) {

  console.log(props);

  return ( 
    <div className="card">

      <img 
        className="card-img"
        src={props.image}
        alt={props.name}
      />

      <h3 className="title">{props.name}</h3>

      <p className="price">LKR {props.price}</p>

      <p className="desc">{props.description}</p>

    </div>
  )
}