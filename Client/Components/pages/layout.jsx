import React from "react";
import { Link } from "react-router";
import Newsfeed from "./NewsfeedView";
import SignIn from './SignInSignUpView';
import Search from './SearchBar';
import Helper from '../../Helper/Helper';



export default class Layout extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      selected: 'something'
    };
  }

	navigate() {
		this.props.history.pushState(null, '/');
	}	
  
  setFilter(filter) {
    this.setState({selected : filter});
  }
  isActive(value){
    return ((value===this.state.selected) ? 'active':'default');
  }

  signout() {
  	Helper.signout();
  }

	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="navbar-header">
							<a href="/" className="navbar-brand">Perpetual Help Desk</a>
						</div>
						<div>
							<ul className="nav navbar-nav">
								<li className={this.isActive('')} onClick={ this.setFilter.bind(this, '')}>
									<Link to="search" >Search</Link>
								</li>
								<li className={this.isActive('newsfeed')} onClick={ this.setFilter.bind(this, 'newsfeed')}>
									<Link to="newsfeed">Newsfeed</Link>
								</li>
								<li className={this.isActive('profile')} onClick={ this.setFilter.bind(this, 'profile')}>
									<Link to="profile">Profile</Link>
								</li>
								<li className={this.isActive('signin')} onClick={ this.setFilter.bind(this, 'signin')}>
									<Link to="signin">Sign In/Up</Link>
								</li>
								<li onClick={ this.signout.bind(this) } >Sign Out</li>
							</ul>
						</div>
					</div>
				</nav>
				<div>
					{this.props.children}
				</div>
				
			</div>
		);
	}
}
//Side Navigation bar
				// <div className="col-md-2 sidebar">
				// 	<ul className="nav nav-sidebar">
				// 		<li><button onClick={this.navigate.bind(this)}>Home</button></li>
				// 		<li><Link to="SearchBar">Search</Link></li>
				// 		<li><Link to="newsfeed">newsfeed</Link></li>
				// 		<li><Link to="profile">Profile</Link></li>
				// 	</ul>
				// </div>