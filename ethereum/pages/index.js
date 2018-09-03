import React, { Component } from "react";
import factory from "../factory";
import Layout from '../components/layout';
import {Link} from '../routes';
import { Card, Grid, Button,Icon,Container } from 'semantic-ui-react';
class CampaignIndex extends Component {
    state = { campaignList: '' };
    async componentDidMount() {
        var rows = [];
             
        const campaigns = await factory.methods.listProperty().call();
        // console.log(campaigns);
        for (var i = 0; i < campaigns; i++) {
            const properties=await factory.methods.properties(i).call();
            console.log(properties);
             rows.push(properties.addr);
        } 
  
        this.setState({ campaignList: rows })
    }
    renderCardComponent() {
        let campaignList = this.state.campaignList.toString().split(',');
        console.log(campaignList);
        let items = campaignList.map((address,index) => {
       
            return {
                header: address,
                description: (<Link route={`/view/${address}/${index}`}><a>View Property</a></Link>),
                fluid: true
            }
        });
        return items;

    }
    render() {
        let paddingtop={
            'padding-top':'20px'
        }
        return (<div><Layout /><Container><h3  style={paddingtop}>Property List</h3>
        <Grid style={this.props.paddingtop}  stackable columns={2}  >      <Grid.Column width={12}>
        <Card.Group items={this.renderCardComponent()} />      </Grid.Column>
        <Grid.Column width={4}><Link route="/add/new"><a><Button size='large' icon labelPosition='right'>
        Add Property
        <Icon name='add' />
        </Button></a></Link></Grid.Column></Grid></Container></div>)
    }
}
export default CampaignIndex;
