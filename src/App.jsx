
import ProductCard from './components/productCard'

function App() {
  return (
    <>
      <ProductCard 
        name="Bluetooth Speaker"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQohjiYZfl8iHWpol0pnwrpqMwLbQzBfDLPw&s"
        price="79.99"
        description="High quality wireless speaker"
      />

      <ProductCard 
        name="Wireless Headphones"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKlDGzNEVQdDQtqXYnbj_fgJU_HUpC2sM8A&s"
        price="129.99"
        description="Noise cancelling headphones"
      />

      <ProductCard 
        name="Smart Watch"
        image="https://media.wired.com/photos/68ccac118d273e101d2e0944/1:1/w_800,h_800,c_limit/Our%20Favorite%20Smartwatches%20Do%20Much%20More%20Than%20Just%20Tell%20Time.png"
        price="199.99"
        description="Track your fitness"
      />

      <ProductCard 
        name="Gaming Mouse"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXcM5oOGgzDpZMEjRv5gECsJqjAxmp1WP9w&s"
        price="49.99"
        description="RGB gaming mouse"
      />
    </>
  )
}

export default App