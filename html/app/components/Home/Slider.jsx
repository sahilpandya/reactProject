var React = require('react');
var sliderJson = require('../../../json/slider.json');

var Slider = React.createClass({
	getInitialState:function(){
        return {
            slides:[]
        }

    },
	componentDidMount: function(){
        var items = [];
        sliderJson.map(function(item){
            items.push(item);
        });
        this.setState({slides: items});
    },
	render: function(){
		var block = this.state.slides;
		return(
			<div id="myCarousel" className="carousel slide" data-ride="carousel">
			    <ol className="carousel-indicators">
			      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
			      <li data-target="#myCarousel" data-slide-to="1"></li>
			      <li data-target="#myCarousel" data-slide-to="2"></li>
			      <li data-target="#myCarousel" data-slide-to="3"></li>
			      <li data-target="#myCarousel" data-slide-to="4"></li>
			      <li data-target="#myCarousel" data-slide-to="5"></li>
			      <li data-target="#myCarousel" data-slide-to="6"></li>
			      <li data-target="#myCarousel" data-slide-to="7"></li>
			      <li data-target="#myCarousel" data-slide-to="8"></li>
			      <li data-target="#myCarousel" data-slide-to="9"></li>
			    </ol>
			    <div className="clearfix carousel-inner text-center" role="listbox">
					<div className="item active">
						<div className="row">
							<div className="col-xs-4">
								<a href="http://www.aurigait.com/our-portfolio/commonfloor/" target="_blank">
									<h2>Commonfloor.com</h2>
									<p>Find your dream home.</p>
									<img src="images/img1.jpg" alt="Commonfloor.com" width="100%" />
								</a>
							</div>
							<div className="col-xs-4">
								<a href="http://www.aurigait.com/our-portfolio/esl-eat-shop-love/" target="_blank">
									<img src="images/img2.jpg" alt="ESL- Eat Shop Love" width="100%" />
									<h2>ESL- Eat Shop Love</h2>
									<p>ESL is a Magento Based Ecommerce where You can shop, connect and live through amazing moments, all at one place.</p>
								</a>
							</div>
							<div className="col-xs-4">
								<a href="http://www.aurigait.com/our-portfolio/shopclues-website/" target="_blank">
									<h2>Shopclues.com</h2>
									<p>India`s largest managed online marketplace developed on CS Cart.</p>
									<img src="images/img3.jpg" alt="Shopclues.com" width="100%" />
								</a>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="row">
							<div className="col-xs-4">
								<a href="http://www.aurigait.com/our-portfolio/edukart-website/" target="_blank">
									<img src="images/img4.jpg" alt="Edukart.com" width="100%" />
									<h2>Edukart.com</h2>
									<p>Webportal for India`s leading online education company.</p>
								</a>
							</div>
							<div className="col-xs-4">
								<a href="http://www.aurigait.com/our-portfolio/exclusivelyin" target="_blank">
									<h2>Exclusively.in</h2>
									<p>Designer`s Store - Buy Indian Suits, Lenghas, Saris, Dresses, Jewelery and Accessories Online.</p>
									<img src="images/img5.jpg" alt="Exclusively.in" width="100%" />
								</a>
							</div>
							<div className="col-xs-4">
								<a href="http://www.aurigait.com/our-portfolio/logiqids/" target="_blank">
									<img src="images/img6.jpg" alt="LogIQids" width="100%" />
									<h2>LogIQids</h2>
									<p>LogIQids - An online platform to offer logical reasoning as a curriculum.</p>
								</a>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="row">
							<div className="col-xs-4">
								<a href="http://www.aurigait.com/our-portfolio/faida-com-indias-first-on-line-barter-portal/" target="_blank">
									<h2>Faida.com – India’s First online barter portal</h2>
									<p>Faida.com – India’s First online barter portal</p>
									<img src="images/img7.jpg" alt="Faida.com – India’s First online barter portal" width="100%" />
								</a>
							</div>
							<div className="col-xs-4">
								<a href="http://www.aurigait.com/our-portfolio/angara-website/" target="_blank">
									<img src="images/img8.jpg" alt="Angara.com" width="100%" />
									<h2>Angara.com</h2>
									<p>An online store developed on Magento to showcase wide range of jewelery products.</p>
								</a>
							</div>
							<div className="col-xs-4">
								<a href="http://www.aurigait.com/our-portfolio/droom-in/" target="_blank">
									<h2>Droom.in</h2>
									<p>India`s first mobile marketplace to buy and sell new and used automobiles.</p>
									<img src="images/img9.jpg" alt="Droom.in" width="100%" />
								</a>
							</div>
						</div>
					</div>
			    </div>
			    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
			      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			      <span className="sr-only">Previous</span>
			    </a>
			    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
			      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			      <span className="sr-only">Next</span>
			    </a>
			</div>
		);
	}
});

module.exports=Slider;

<div className="item active">
	<a href="http://www.aurigait.com/our-portfolio/commonfloor/"><div className="col-xs-4"><h2>Commonfloor.com</h2><p>Find your dream home</p><img src={"images/img1.jpg"} alt="Commonfloor.com" width="100%" /></div></a>
</div>