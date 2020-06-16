import React, { useEffect } from 'react';
import { get } from '../../redux/category/category.actions';
import { connect } from 'react-redux';
import { List, Category, Title } from './homepage.styles';

const HomePage = ({ get, list }) => {
	useEffect(() => {
		get();
	}, []);

	return (
		<List>
			{list &&
				list.map((item) => (
					<Category key={item._id} to={`/list?c=${item.title}`}>
						<img src={item.image.url} alt='' />
						<Title>{item.title}</Title>
					</Category>
				))}
		</List>
	);
};
const mapDispatchToProps = (dispatch) => ({
	get: () => {
		dispatch(get());
	},
});
const mapStateToProps = ({ categories }) => ({
	list: categories.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
