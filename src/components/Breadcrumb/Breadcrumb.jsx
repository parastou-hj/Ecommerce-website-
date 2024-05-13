import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../Breadcrumb/breadcrumb.css'

const BreadCrumb=(props)=> {
    const product=props.product
    console.log(product)
  return (
    <Breadcrumb>
      <Breadcrumb.Item className='bread-item' href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href={product.category}>
       {product.category}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb;