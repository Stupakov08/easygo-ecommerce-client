import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './profile.form';
import { Header, SubHeader } from './profile.styles';

const Profile = () => {
	return (
		<div className='sign-in'>
			<Header>Profile</Header>
			<SubHeader>Here is you profile information</SubHeader>
			<ProfileForm />
		</div>
	);
};

export default connect(null, null)(Profile);
