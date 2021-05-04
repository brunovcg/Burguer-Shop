import { Component } from 'react';
import Products from '../Products/Products'
import './MenuContainer.css'

class MenuContainer extends Component {

    
  
    render(){
        return(
            <div  className="prodContainer">
                <Products produtos={this.props.menu} prodId={this.props.prodId} showButton={this.props.showButton}/>
            </div>
        )
    }
  }
  
  export default MenuContainer;