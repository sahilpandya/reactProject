var React = require('react');
var Header=require('./Header.jsx');
var ContactForm=require('./Contact/ContactForm.jsx');
var Information=require('./Contact/Information.jsx');

var Contact = React.createClass({
	render: function(){
		return(
			<div className="contact">
                <div className="contect-section row">
                	<h2>CONTACT US</h2>
                	<h3>The First Step, and we can make History!</h3>
                	<div className="col-sm-5">
                		<ContactForm />
                	</div>
                	<div className="col-sm-1"></div>
                	<div className="col-sm-5 address">
                		<Information />
                	</div>
                	<div className="map">
                		<iframe src="https://www.google.com/maps/d/embed?mid=z3fuYHKpHPkk.krVQbk3f8tpg" width="100%" height="480"></iframe>
                	</div>
                </div>
	        </div>
		);
	}
});

module.exports=Contact;