var React = require('react');
var NoteActions=require('../actions/action.js');
var CommonStore=require('../stores/CommonStore.js');

var Footer = React.createClass({
	getInitialState:function(){
        return {
        	pass: 'sawan'
        }
    },
	componentDidMount: function(){
		$("#demo").hide();
	},
	handleFooter: function() {
		NoteActions.toggleFooter(this.state.pass);
	},
    render: function() {
    	return (
    		<div className="container">
    			<div className="aurigaFooter row">
    				
    				<div className="services">
    					<div className="">
						    
						  <div className="row">
						  		<div className="copy-right col-sm-4"><span> Copyright © 2015, All Rights Reserved</span></div>
						  		 <button type="button" className=" btn-info col-sm-4"  data-target="#demo" onClick={this.handleFooter}>Services<span className="arrow"></span></button>
						  		 <div className="social col-sm-4">
			    					<ul>
			    						<li><a className="spriteHome fb" href="#"></a></li>
			    						<li><a className="spriteHome in" href="#"></a></li>
			    						<li><a className="spriteHome gplus" href="#"></a></li>
			    						<li><a className="spriteHome rss" href="#"></a></li>
			    					</ul>
			    				</div>
						  </div>
						  <div id="demo" className="row footer-content">
						   	<div className="col-sm-3 col-xs-6">
						   		<h3>MEAN</h3>
						   		<ul>
						   			<li><a href="#"><span className="glyphicon glyphicon-triangle-right"></span>Node</a></li>
						   			<li><a href="#"><span className="glyphicon glyphicon-triangle-right"></span>Angular</a></li>
						   			<li><a href="#"><span className="glyphicon glyphicon-triangle-right"></span>Mongo DB</a></li>
						   			
						   		</ul>
						   	</div>
						   	<div className="col-sm-3 col-xs-6">
						   		<h3>E Commerce</h3>
						   		<ul>
						   			<li><a href="#"><span className="glyphicon glyphicon-triangle-right"></span>Magento</a></li>
						   			<li><a href="#"><span className="glyphicon glyphicon-triangle-right"></span>Woocommerce</a></li>
						   			
						   		</ul>
						   	</div>
						   	<div className="col-sm-3 col-xs-6">
						   		<h3>Mobility</h3>
						   		<ul>
						   			<li><a href="#"><span className="glyphicon glyphicon-triangle-right"></span>Android</a></li>
						   			<li><a href="#"><span className="glyphicon glyphicon-triangle-right"></span>Hybrid</a></li>
						   			<li><a href="#"><span className="glyphicon glyphicon-triangle-right"></span>Mobile Web Design</a></li>
						   		</ul>
						   	</div>
						   		<div className="col-sm-3 col-xs-6">
						   		<h3>Web</h3>
						   		<ul>
						   			<li><a href="#"><span className="glyphicon glyphicon-triangle-right"></span>Web-PHP</a></li>
						   			<li><a href="#"><span className="glyphicon glyphicon-triangle-right"></span>UX-UI</a></li>
						   			<li><a href="#"><span className="glyphicon glyphicon-triangle-right"></span>Open Source</a></li>
						   			<li><a href="#"><span className="glyphicon glyphicon-triangle-right"></span>HTML/CSS</a></li>
						   		</ul>
						   	</div>

						  </div>
						  
						</div>
    				</div>
    				
    			</div>
    		</div>
    		)
    	}
   });

module.exports=Footer;