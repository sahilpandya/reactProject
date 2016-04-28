var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({

    handleEdit:function(id,event){
        event.preventDefault();
        this.props.onEdit(id);
        this.props.onSelect(id);
    },

    render: function() {
        return (
    <div className="row">
      <div className="row">
        <div className="logo pull-left col-sm-4"><Link to='/'><img src="images/aurigait-logo1.png"/></Link></div>
       	<div className="auriga-nav col-sm-8">
          <div className="hiring"><a href="#">We are hiring!!!</a></div>
          <nav className="navbar navbar-default">
            <div className="">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
             </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Company</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Overview</a></li>
                      <li><a href="#">Our Team</a></li>
                      <li><a href="#">Our Approach</a></li>
                      <li><a href="#">Technologies</a></li>
                      <li><a href="#">Engagement Model</a></li>
                      <li><a href="#">clients</a></li>
                    </ul>
                  </li>
                </ul>
                 <ul className="nav navbar-nav">
                    <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Web Portal Development</a></li>
                      <li><a href="#">Open Source Integration</a></li>
                      <li><a href="#">Enterprise Application</a></li>
                      <li><a href="#">Web and UI Design</a></li>
                      <li><a href="#">NodeJs</a></li>
                       <li><a href="#">Internet Making</a></li>
                    </ul>
                  </li>
                </ul>
                 <ul className="nav navbar-nav">
                    <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Solutions</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Web Portal Development</a></li>
                      <li><a href="#">Open Source Integration</a></li>
                      <li><a href="#">Enterprise Application</a></li>
                      <li><a href="#">Web and UI Design</a></li>
                      <li><a href="#">NodeJs</a></li>
                       <li><a href="#">Internet Making</a></li>
                    </ul>
                  </li>
                </ul>
                 <ul className="nav navbar-nav">
                    <li className="dropdown">
                    <Link to='/Portfolio'>Portfolios</Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav">
                    <li className="dropdown">
                    <Link to='/careers'>Careers</Link>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="nav navbar-nav">
                    <li className="dropdown">
                    <Link to='/Contact'>Contact Us</Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav">
                    <li className="dropdown ">
                    <a href="#" className="dropdown-toggle blog-last" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
                
              </div>
            </div>
          </nav>
       </div>
      </div>
    </div>
    )
  }
});

module.exports=Header;
