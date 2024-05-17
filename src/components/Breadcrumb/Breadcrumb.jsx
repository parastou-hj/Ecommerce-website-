import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../Breadcrumb/breadcrumb.css'
import { Link } from 'react-router-dom';

const BreadCrumb=(props)=> {
    const product=props.product;
  return (
    <Breadcrumb className='p-3'>
      <Breadcrumb.Item href=""><Link to='/'>Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item href=''><Link to={`/${product.category}`}>
      {product.category}
      </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb;