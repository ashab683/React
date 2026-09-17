import { createRoot } from 'react-dom/client'
import './style.css'
import React from 'react'

function Card(props) {
	const { key, title, image, brand, price } = props

	return (
		<div className="card" key={key}>
			<img src={image} alt="iphone" />
			<div className="card-content">
				<h3>{title}</h3>
				<p>{brand}</p>
				<p>
					<b>${price}</b>
				</p>
			</div>
		</div>
	)
}

const root = createRoot(document.getElementById('root'))

console.log('Hello world!!!')

fetch('https://dummyjson.com/products/category/smartphones')
	.then((res) => res.json())
	.then((data) => {
		root.render(
			<div className="container">
				{data.products.map((product) => {
					return (
						<Card
							key={product.id}
							title={product.title}
							brand={product.brand}
							price={product.price}
							image={product.thumbnail}
						/>
					)
				})}
			</div>,
		)
	})

function Card2() {
	return <h1>hello</h1>
}

const h1 = <h1>hello world</h1>
console.log(h1)

// root.render({
//   $$typeof: Symbol.for('react.element'),
//   type:Card,
// //react component is a react element which type is function and return react element
//   ref:null,
//   props:{
//      title:'iPhone 13',
//      image:'https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp',
//          brand:'apple',
//          price:'$899',
//          key:1
//   }
// })
