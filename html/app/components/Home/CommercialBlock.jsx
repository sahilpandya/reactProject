var React = require('react');
var commercialJson = require('../../../json/data.json');

var CommercialBlock = React.createClass({
	getInitialState:function(){
        return {
            commercial:[]
        }

    },
	componentDidMount: function(){
        var items = [];
        commercialJson.map(function(item){
            items.push(item);
        });
        this.setState({commercial: items});
    },
	render: function(){
		var block = this.state.commercial;
		return(
			<div className="row commercial"> 
                { block.map(function(l){
                	return <div className="col-sm-4 text-center item"><a href={l.url}><h2>{l.heading}</h2></a><p>{l.text}</p></div>
                }) }

            </div>
		)
	}

});

module.exports=CommercialBlock;