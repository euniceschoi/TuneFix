Genre = React.createClass({
	propTypes: {

		// genre: React.PropTypes.object.isRequired
	},

	render() {
		return (
			<li>{this.props.genre.text}</li>

			);
	}
});