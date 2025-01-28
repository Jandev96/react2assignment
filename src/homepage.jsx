import { useEffect, useState } from "react";
import axios from'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from "./component";
import { Button, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './style/style.css'








function Homepage(){
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            setProducts(res.data)
        })


    },[])


    return(
        <> 
         <Nav fill variant="" className="navbar" defaultActiveKey="/home" style={{height:'70px', display:'flex', flexDirection:'row', textAlign:'center',alignItems:'center'}} >
      <Nav.Item  >
        <Nav.Link  style={{fontSize:'30px', color:'white'}} href="/home">FakeStore</Nav.Link>
      </Nav.Item>
      <Form inline>
        <Row>
          <Col xs="auto"  style={{paddingRight:'0px'}}>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto" style={{paddingLeft:'0px', marginRight:'10px'}}>
            <Button  type="submit" variant="success">Submit</Button>
          </Col>
        </Row>
      </Form>
     
    </Nav>
        
        
        
        
        
         <Container className="contain">
                <Row>
            {products.map((product,index)=>{
                
                return(
                    
                
                <Col className="column" key={product.id} xs={12} sm={6} md={4} lg={4} xl={3} style={{padding:'0px 5px'}}>
                    <Cards product={product}/>

                    </Col>
               
               
                
            )



            })}
        </Row>
        </Container>
        </>
    )
}
export default Homepage