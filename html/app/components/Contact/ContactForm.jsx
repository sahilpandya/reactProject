var React = require('react');
var SuccessResults=require('./SuccessResults.jsx');

var ContactForm = React.createClass({
	getInitialState:function(){
        return {
        	contact_details: [],
            name: '',
            email: '',
            phone: '',
            message: '',
            showResults: false
        }
    },
    onNameChange: function(e){
    	this.setState({name: e.target.value});
    },
    onEmailChange: function(e){
    	this.setState({email: e.target.value});
    },
    onPhoneChange: function(e){
    	this.setState({phone: e.target.value});
    },
    onMessageChange: function(e){
    	this.setState({message: e.target.value});
    },
    handleSubmit: function(e){
    	e.preventDefault();
    	this.state.contact_details.push({name: this.state.name, email: this.state.email, phone: this.state.phone, message: this.state.message});
    	console.log(this.state.contact_details);
    	this.setState({
    		name: '',
    		email: '',
    		phone: '',
    		message: '',
            showResults: true
    	});
    },
    showForm: function(){
        this.setState({ showResults: false });
    },
    render: function(){
    	return(
            <div>
            {this.state.showResults ? <div><SuccessResults /><button className="btn btn-danger" onClick={this.showForm}>Show Contact</button></div> :
        		<form role="form" onSubmit={ this.handleSubmit } className="form">
    			  <div className="form-group">
    			    <label for="name">Name*</label>
    			    <input type="text" className="form-control" id="name" placeholder="Enter full name" value={this.state.name} onChange={this.onNameChange} required />
    			  </div>
    			  <div className="form-group">
    			    <label for="email">Email*</label>
    			    <input type="email" className="form-control" id="email" placeholder="text@demo.com" value={this.state.email} onChange={this.onEmailChange} required />
    			  </div>
    			  <div className="form-group">
    			    <label for="phone">Phone Number</label>
    			    <input type="number" className="form-control" id="phone" placeholder="+91 9876543210" value={this.state.phone} onChange={this.onPhoneChange} />
    			  </div>
    			  <div className="form-group">
    			    <label for="message">Message</label>
    			    <textarea className="form-control" rows="5" id="message" placeholder="Hello" value={this.state.message} onChange={this.onMessageChange}></textarea>
    			  </div>
    			  <button type="submit" className="btn btn-primary" >Submit</button>
    			</form>
                }
            </div>
    	);
    }
});

module.exports=ContactForm;