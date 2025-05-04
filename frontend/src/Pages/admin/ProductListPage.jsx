import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {toast} from 'react-toastify'

import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetProductsQuery, useCreateProductMutation , useDeleteProductMutation } from '../../slices/productsApiSlice';
import { Link } from 'react-router-dom';

const ProductListPage = () => {
  const {data: products, isLoading, error, refetch} = useGetProductsQuery()

  const [createProduct, {isLoading: loadingCreate}] = useCreateProductMutation()

  const [deleteProduct, {isLoading: loadingDelete}] = useDeleteProductMutation()
  
  const deleteHandler = async (id) => {
    if(window.confirm('Are you sure?')) {
      try {
        await deleteProduct(id)
        toast.success('Product deleted!')
        refetch()
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }    
  }

  async function createProductHandler () {
    if(window.confirm('Are you sure you want to create a new product?')) {
      try {
        await createProduct()
        refetch()
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }

  return (
    <>
      <Row className='align-items-center'>
          <Col>
            <h1>Products</h1>
          </Col>
          <Col className='text-end'>
            <Button onClick={createProductHandler} className='m-3 btn-sm'>
              <FaEdit /> Create Product
            </Button>
          </Col>
      </Row>

    {loadingCreate && <Loader/>}
    {isLoading ? (<Loader/>) : error ? <Message variant={'danger'}>{error}</Message> : (
      <>
        <Table striped hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>PRICE</th>
              <th>Category</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                  <Button variant='light' className='btn-sm mx-2'>
                    <FaEdit/>
                  </Button>
                  </LinkContainer>
                  <Button onClick={() => deleteHandler(product._id)} variant='danger' className='btn-sm'>
                    <FaTrash style={{color: 'white'}}/>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          </Table>      
      </>
    )}

    </>
  )
}

export default ProductListPage
