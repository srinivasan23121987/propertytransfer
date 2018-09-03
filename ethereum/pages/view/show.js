import React, { Component } from "react";
import factory from "../../factory";
import Layout from '../../components/layout';
import {Link} from '../../routes';
import { Button, Card, Image,Container } from 'semantic-ui-react'

class Propertytends extends Component {
    
    static async getInitialProps(props) {
        console.log(props.query.address);
      const getProperty=await factory.methods.getPropertyDetails(props.query.address,"prop1").call();


          console.log(JSON.stringify(getProperty))
        //   this.setState({items:items})
    }
  render(){
    let paddingtop={
        'padding-top':'20px'
    }
      return( <div><Layout /><Container>
        <Card.Group style={paddingtop}>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
 
  </Card.Group></Container>
          </div>);
  }
}
  

export default Propertytends
