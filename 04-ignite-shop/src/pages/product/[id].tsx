import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()
  
  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        
        <p>Lorem ipsum dolor sit amet. Et autem quibusdam aut veniam consequuntur sit perferendis dolores et ipsam voluptatem quo velit vitae. Ut Quis impedit in deserunt reiciendis nam excepturi officiis qui eveniet fugit nam quibusdam dolorum quo veniam dolores et consequatur adipisci.</p>
        
        <button>
          Comprar Agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}