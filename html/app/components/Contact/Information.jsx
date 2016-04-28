var React = require('react');

var Information = React.createClass({
	render: function(){
		return(
			<div>
				<div className="bussiness">
	        		<h4>Auriga IT Consulting Pvt. Ltd.</h4>
	        		<p>Other Business Entities: <strong>Auriga IT Solutions Pvt Ltd.</strong></p>
	    		</div>
	    		<div className="mail"> 
	        		<h5>For Sales Queries : <a href="mailto:sales@aurigait.com">sales@aurigait.com</a></h5>
	        		<h5>For Career Queries: <a href="mailto:hr@aurigait.com">hr@aurigait.com</a></h5>
	        		<h5>For General Queries: <a href="mailto:contactus@aurigait.com">contactus@aurigait.com</a></h5>
	        		<p className="btm-buffer-0 top-buffer-5">Contact Number:</p>
	        		<p>HR : Jaipur <a href="tel:+917073031118">+91 70 73 03 11 18</a></p>
	        		<p>HR : Bangalore <a href="tel:+919686518195">+91 96 86 51 81 95</a></p>
	        		<p>Sales : <a href="tel:+919660968941">+91 96 60 968941</a></p>
	    		</div>
	    		<h5><strong>Jaipur:</strong></h5>
	    		<div className="location">
	    			<p>Second Floor, 305, Mahaveer Nagar – II, Opposite Maharani Farm Petrol Pump</p>
	    			<p>Jaipur</p>
	    			<p>Rajasthan – 302018</p>
	    			<p>India</p>
	    		</div>
	    		<h5><strong>Bangalore:</strong></h5>
	    		<div className="location">
	    			<p>Site No 36/37, Third Floor, Chinapahalli Layout, Marathalli Outer Ring Road, Above Airtel Showroom,</p>
	    			<p>Bangalore</p>
	    			<p>Karnataka – 560037</p>
	    			<p>India</p>
	    		</div>
    		</div>
		);
	}
});

module.exports=Information;