App = React.createClass({
  getGenres() {
    return [
      { _id: 1, text: "Hip-Hop" },
      { _id: 2, text: "Rock" },
      { _id: 3, text: "Trance" }
    ];
  },
 
  renderGenres() {
    return this.getGenres().map((genre) => {
      return <Genre key={genre._id} genre={genre} />;
    });
  },
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Choose a Genre</h1>
        </header>
 
        <ul>
          {this.renderGenres()}
        </ul>
      </div>
    );
  }
});