import React, { Component } from 'react';
import { Input, Button, Container, Form, Message } from 'semantic-ui-react';
import Layout from '../../components/layout';
import factory from '../../factory';
import web3 from '../../web3';
import {Router} from '../../routes';
export default class CampaignNewComponent extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    }
    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true,errorMessage:'' });
        try {
            let ownerName = this.state.ownerName;
            let address=this.state.address;
            let propertyName=this.state.propertyName;
            const accounts = await web3.eth.getAccounts();
            await factory.methods.addProperty(ownerName,address,propertyName)
            .send({from:accounts[0],gas:'3000000'})
            Router.pushRoute("/");
        }
        catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
    }
    render() {
        let paddingtop = {
            'padding-top': '20px'
        }

        return (<div><Layout /><Container><h3 style={paddingtop}>Add New Campaign</h3>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field><label>Owner Name</label><Input required onChange={event => { this.setState({ ownerName: event.target.value }); return event.target.value; }} labelPosition='right' /></Form.Field>
                <Form.Field><label>Address</label><Input required label="0x"  onChange={event => { this.setState({ address: event.target.value }); return event.target.value; }} labelPosition='right' /></Form.Field>
                <Form.Field><label>Property Name</label><Input required  onChange={event => { this.setState({ propertyName: event.target.value }); return event.target.value; }} labelPosition='right' /></Form.Field>
                <Button loading={this.state.loading} primary>Submit</Button>
                <Message error negative>
                    <Message.Header>Oopss!!!</Message.Header>
                    <p>{this.state.errorMessage}</p>
                </Message>
            </Form></Container></div>)
    }
}
