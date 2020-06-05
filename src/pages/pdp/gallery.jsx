import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LCarousel, SCarousel } from './pdp.styles';

export default class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null,
		};
	}

	componentDidMount() {
		this.setState({
			nav1: this.slider1,
			nav2: this.slider2,
		});
	}

	render() {
		const images = this.props.images;
		return (
			<div>
				<LCarousel>
					<Slider
						asNavFor={this.state.nav2}
						ref={(slider) => (this.slider1 = slider)}
					>
						{images &&
							images.map((i) => (
								<div key={i.url} className={'imgWpr'}>
									<img src={i.url} alt={'map'} />
								</div>
							))}
					</Slider>
				</LCarousel>
				<SCarousel>
					<Slider
						asNavFor={this.state.nav1}
						ref={(slider) => (this.slider2 = slider)}
						slidesToShow={4}
						swipeToSlide={true}
						focusOnSelect={true}
						slidesToScroll={1}
					>
						{images &&
							images.map((i) => (
								<div key={i.url} className={'imgWpr'}>
									<img src={i.url} alt={'map'} />
								</div>
							))}
					</Slider>
				</SCarousel>
			</div>
		);
	}
}
