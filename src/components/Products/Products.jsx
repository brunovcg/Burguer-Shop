import { Component } from 'react';
import './Produtos.css'

class Products extends Component {
      
    render(){
        return(
            this.props.produtos.map(x=>
                <ul className={this.props.giveClass} key={x.id}>
                    <li className = "prodName">{x.name}</li>
                    <li className = "prodCategory">{x.category}</li>
                    <li className = "prodPrice">{`R$${(x.price).toFixed(2)}`}</li>
                    {this.props.showButton === "yes" ? <button className = "prodButton" onClick={()=> this.props.prodId(x.id)}>Adicionar</button> : <></>}
                </ul>
                
                )
        )
    }
}
  
  export default Products;