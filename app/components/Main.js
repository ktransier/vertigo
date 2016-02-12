var React = require('react');
var ReactDOM = require('react-dom');

var movies = [{
    title: "Vertigo",
    director: "Alfred Hitchcock",
    year: 1946
  },
  {
    title: "Strangers on a Train",
    director: "Alfred Hitchcock",
    year: 1951
  }];

var MovieListApp = React.createClass({
  render: function(){
    return (
      <div>
        <MovieList data={this.props.data} />
      </div>
    );
  }
});

var MovieList = React.createClass({

  render: function(){
    var movies = this.props.data
    var moviesArray = movies.map(function(movie){
      return (
        <MovieRow title={ movie.title } director={ movie.director } year={movie.year} />
      );
    })

    return (
      <div>
        {moviesArray}
      </div>
    );
  }
});

var MovieRow = React.createClass({
  render: function(){
    return (
      <div>
        Title: {this.props.title}
        Director: {this.props.director}
        Year: {this.props.year}
      </div>
    )
  }
});

ReactDOM.render(<MovieListApp data={movies} />, document.getElementById("app"))
