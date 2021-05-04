import { Component } from 'react';
import './Produtos.css'

class Products extends Component {
      
    render(){
        return(
            this.props.produtos.map(x=>
                <div className={this.props.giveClass}>
                    <div className = "prodName">{x.name}</div>
                    <div className = "prodCategory">{x.category}</div>
                    <div className = "prodPrice">{`R$${(x.price).toFixed(2)}`}</div>
                    {this.props.showButton === "yes" ? <button className = "prodButton" onClick={()=> this.props.prodId(x.id)}>Adicionar</button> : <></>}
                </div>
                
                )
        )
    }
}
  
  export default Products;