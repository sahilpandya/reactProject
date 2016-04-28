
var React = require('react');
var clientJson = require('../../../json/clients.json');
var Clients = React.createClass({
	getInitialState:function(){
        return {
            clientsDetail:[]
        }

    },
	componentDidMount: function(){
        var items = [];
        clientJson.map(function(item){
            items.push(item);
        });
        this.setState({clientsDetail: items});
    },
	render: function(){
		var block = this.state.clientsDetail;
		return(
			<div className="row client"> 
                <h2>CLIENTS</h2>
                { block.map(function(l){
                	return <div className="col-sm-3 col-xs-6"><a href={l.url} target="_blank"><img src={l.image} alt={l.alt} width="100%" /></a></div>
                }) }

            </div>
		)
	}

});

module.exports=Clients;