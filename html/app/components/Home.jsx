var React = require('react');
var Slider=require('./Home/Slider.jsx');
var CommercialBlock=require('./Home/CommercialBlock.jsx');
var Clients=require('./Home/Clients.jsx');

var Home = React.createClass({
	getInitialState:function(){
        return {
            id:null
        }

    },
    onEdit:function(id){
        this.setState({currentlyEdited:id});
    },

    onAdd:function(){
        this.setState({currentlyEdited:null});
    },
    render: function() {
        return (
        	<div className="home">
	            <div className="row slider">
	                <h1 className="titletext">Excellent Services. Great Solutions. Lifetime of Relationships</h1>
	                <Slider />
	            </div>
	            <CommercialBlock />
	            <Clients />
	        </div>
        );
    }
});

module.exports=Home;
