import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

import "../styles/custom-styles.css"

const product = {
    id: 1,
    title: 'A Book Title',
    img: 'https://picsum.photos/200',
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                <ProductCard product={product} className="bg-dark">
                    <ProductCard.Image className="card-image"  />
                    <ProductCard.Title title={'Ebleee'} className="text-white text-bold" style={{color:"lightblue"}} />
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={product} className="bg-dark" style={{backgroundColor:"red"}}>
                    <ProductImage className="card-image" />
                    <ProductTitle title={''} className="text-white text-bold" />
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>
            </div>
        </div>
    )
}
