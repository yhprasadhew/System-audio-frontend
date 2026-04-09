import './productCard.css'
import { useNavigate } from 'react-router-dom'

export default function ProductCard(props) {
  const navigate = useNavigate();

  return ( 
    <div 
      className="card"
      onClick={() => navigate(`/product/${props.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img className="card-img" src={props.image} alt={props.name} />
      <h3 className="title">{props.name}</h3>
      <p className="price">LKR {props.price}</p>
      <p className="desc">{props.description}</p>
    </div>
  )
}