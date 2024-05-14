import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../Breadcrumb/breadcrumb.css'

const BreadCrumb=(props)=> {
    const product=props.product;
  return (
    <Breadcrumb className='p-3'>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href={`/${product.category}`}>
       {product.category}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb;