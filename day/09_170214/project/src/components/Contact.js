import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetail from './ContactDetail';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate'; 

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                {name: 'aman', phone: '010-4338-1630'},
                {name: 'betty', phone: '010-5173-8216'},
                {name: 'charlie', phone: '010-2396-1186'},
                {name: 'damon', phone: '010-7167-1150'}
            ],
            keyword: '',
            selectedKey: -1
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }

    handleClick(key) {
        console.log(key);
        this.setState({
            selectedKey: key
        });

        
    }

    handleCreate(contact) {
        this.setState({
            contactData: update(this.state.contactData,{$push: [contact]})
        });
    }

    handleRemove() {
        if(this.state.selectedKey < 0 ) {
            return;
        }
        this.setState({
            contactData: update(this.state.contactData, {$splice: [[this.state.selectedKey, 1]] } ),
            selectedKey: -1
        })
    }

    handleEdit(name,phone) {
        this.setState({
            contactData: update(this.state.contactData, {
                [this.state.selectedKey]: {
                    name: { $set: name },
                    phone: { $set: phone }
                }
            })
        })
    }


    render() {
        const maping = (data) => {
            data.sort((a,b) => {
                return a.name > b.name;
            });
            
            data = data.filter(
                (contact) => {
                    return contact.name.toUpperCase().indexOf(this.state.keyword.toUpperCase()) > -1;
            })
            
            return (
                data.map((contact,i) => {
                    return (
                        <ContactInfo contact={contact} key={i} onClick={ () => this.handleClick(i)}/>
                    )
                })
            )
        } 
        return (
            <div>
                <h1>Contact</h1>
                <input onChange={this.handleChange} type='text' placeholder='search' name='keyword' value={this.state.keyword}></input>
                <div>{maping(this.state.contactData)}</div>
                <ContactDetail isSelected={this.state.selectedKey != -1} 
                               contact={this.state.contactData[this.state.selectedKey]}
                               onRemove={this.handleRemove}
                               />
                <ContactCreate
                    onCreate={this.handleCreate}
                />
                
            </div>
        );
    }
}