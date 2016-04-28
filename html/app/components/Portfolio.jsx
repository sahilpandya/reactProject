 var React = require('react');
 var NoteActions=require('../actions/action');
 var portfolioAll = require('../../json/portfolio-all.json');
 var portfolioBusiness = require('../../json/portfolio-business.json');
 var CommonStore=require('../stores/CommonStore.js');

 var Portfolio = React.createClass({

 	getInitialState:function(){
        return {
            portfolio:[]
        }

    },
    componentDidMount: function(){
        var items = [];
        portfolioAll.map(function(item){
            items.push(item);
        });
        this.setState({portfolio: items});
        window.addEventListener('scroll', this.fixMe);
    },
     fixMe: function(){
        NoteActions.fixNav();
        console.log(1);
    },
    business: function(){
    	 var items = [];
        portfolioBusiness.map(function(item){
            items.push(item);
        });
        this.setState({portfolio: items});
    },
    all: function(){
    	 var items = [];
        portfolioAll.map(function(item){
            items.push(item);
        });
        this.setState({portfolio: items});
    },
    ecommerce: function(){
    	var self = this;
        $.getJSON("http://www.w3schools.com/angular/customers.php", function(result){
            //self.setState({portfolio: result});
            console.log(result);
        });
    },
 	  render: function() {
 	  	var block = this.state.portfolio;
		  return (
		 	<div className="container" onscroll="{this.fixMe}">
					<div className="portfolio-heading">
						<h1>PORTFOLIO</h1>
						<hr></hr>
						<p>Not just verbal promises - Solutions our Team has been a part of.</p>
					<div>
					<div className="container portfolio-content">
					
						<ul className="tabs">
							<li><button type="button" className="btn btn-link" onClick={this.all}>All</button></li>
							<li><button type="button" className="btn btn-link" onClick={this.business}>Business Enterprise</button></li>
							<li><button type="button" className="btn btn-link" onClick={this.ecommerce}>Ecommerce</button></li>
							<li><button type="button" className="btn btn-link" onClick={this.mobile}>Mobile Applications</button></li>
							<li><button type="button" className="btn btn-link" onClick={this.web}>Web & UI Design</button></li>
							<li><button type="button" className="btn btn-link" onClick={this.portal}>Web Portal</button></li>
						</ul>
					<div className="tab-content">
						<div id="home" className="tab-pane fade in active">
							<h1>HOME</h1>
							<div className="row">
								{block.map(function(m){
									return <div className="col-sm-4 col-xs-6 portfolio-container description "><a className="clients" href={m.url} target="_blank"><img src={m.image} alt={m.alt} width="100%" /><div className=""><h1>{m.heading}</h1><p>{m.text}</p></div></a></div>
								})}
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  		)
	}
});


module.exports= Portfolio;