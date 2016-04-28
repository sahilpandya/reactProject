var React = require('react');

var Careers = React.createClass({

    handleEdit:function(id,event){
        event.preventDefault();
        this.props.onEdit(id);
        this.props.onSelect(id);
    },

    render: function() {

        return (
			<div className="wrapper">
				<div className="title-wrap">
					<h2 className="page-title">Careers</h2>
					<p>Who has not dreamt of Working with Friends for a Lifetime? Come Join in!</p>
				</div>
				<div className="article-container row">
					<div className="col-sm-6">
						<h2>Why Auriga</h2>
						<p>Auriga IT aims to be recognized as the most fun place to work at. We, at Auriga IT, not only believe in quality of our work but also in quality of life. The team often indulges in team building activities including regular company outings and one can expect a lot of laughter around.</p><br/>
						<p>
							Auriga is a name of a constellation of stars and we strongly believe that there is a star in each one of us & we inspire our team members to sharpen their skills both professionally and personally.
						</p>
					</div>
					<div className="col-sm-6 requirments">
						<h3>Open Positions</h3>
						<ul>
							<li><a href="#">Android Developer (2+ Experience)</a></li>
							<li><a href="#">IOS Developer</a></li>
							<li><a href="#">UI Developer (JS Developer)</a></li>
							<li><a href="#">Team Lead - PHP/Node.JS</a></li>
							<li><a href="#">UX/UI Designer</a></li>
						</ul>
					</div>
				</div>
			</div>
        )
    }
});

module.exports=Careers;