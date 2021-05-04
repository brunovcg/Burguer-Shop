
import { Component } from 'react';
import './App.css';
import MenuContainer from './components/MenuContainer/MenuContainer'

class App extends Component {

  state = {
    products: [
      { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 10.90 },
      { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 9.70 },
      { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 5.30 },
      { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 10.30 },
      { id: 5, name: 'Guaraná', category: 'Bebidas', price: 5.50 },
      { id: 6, name: 'Coca', category: 'Bebidas', price: 7.00 },
      { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.50 },
    ],
    filteredProducts: [],
    currentSale: { saleDetails: [] },
    total: 0,
  }
  
  showProducts = () => {
    const {products, filteredProducts} = this.state
      
    return (products.filter( x => x.name.includes(filteredProducts)))
   
  }

  handClick = (productId) => {

    const {products} = this.state
    const {saleDetails} = this.state.currentSale  

    if (!saleDetails.includes(products.find(x=>x.id===productId))){

      this.somaTotal( products.find(x=>x.id===productId).price )

      this.setState({currentSale: {saleDetails: [...saleDetails, products.find(x=>x.id===productId)]}})
     }  else {alert(`A pedido do Extra: Você não pode selecionar itens duplicados! Duplicado = ${products.find(x=>x.id===productId).name}..`)}
  
     
  }

  somaTotal = (index) => {
  
    const {total} = this.state
    
    this.setState({total: Math.round((total + index)*100)/100})
  }


  showSale = () =>{
       
    return this.state.currentSale.saleDetails
  }
  
  render(){
  
    return (
      
      <div className="App">
        <main className="App-header">
        <div className="filtroBox">
            <h3>Filtro:</h3>
            <input 
              className ="filtered" 
              onChange={(e)=>this.setState({filteredProducts:[e.target.value] })}
              placeholder="digite para filtrar automaticamente..."
            />
        </div>
            
          <MenuContainer menu={this.showProducts()} prodId={this.handClick} showButton={"yes"} giveClass={"prod"}/>

          <h2 className ="shopTitle">No Carrinho</h2>
          <div className = "Subtotal">{`Subtotal R$ ${(this.state.total).toFixed(2)}`}</div>
          <div className = "shopContainer">

            <MenuContainer menu={this.showSale()} giveClass={"prodVitrine"}></MenuContainer>

          </div>
    
        </main>
      </div>
    );
  }
}

export default App;
