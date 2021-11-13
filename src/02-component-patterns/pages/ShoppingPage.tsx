import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

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
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Ebleee'} />
                    <ProductCard.Buttons/>
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={''} />
                    <ProductButtons/>
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={''} />
                    {/* <ProductButtons/> */}
                </ProductCard>
            </div>
        </div>
    )
}
