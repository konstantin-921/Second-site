import React from 'react';
import PropTypes from 'prop-types';
import ItemHero from '../ItemHero/index';
import Loader from '../Loader/index';

class ListOfHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayHeroes: [],
      renderState: {},
    };
    this.handleChangeOpen = this.handleChangeOpen.bind(this);
    this.showAllState = this.showAllState.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.heroes !== this.state.arrayHeroes) {
      const { heroes } = nextProps;
      console.log(heroes);
      const renderState = {};
      heroes.forEach((element) => {
        renderState[element.name] = false;
      });
      this.setState({ renderState, arrayHeroes: heroes });
    }
  }

  handleChangeOpen(flag, name) {
    const renderState = { ...this.state.renderState };
    renderState[name] = flag;
    this.setState({ renderState });
  }

  showAllState() {
    console.log(this.state.renderState);
  }

  renderHeroes() {
    const { arrayHeroes } = this.state;
    return arrayHeroes.map((hero) => {
      return (
        <ItemHero
          changeOpen={this.handleChangeOpen}
          key={hero.name}
          hero={hero}
        />
      );
    });
  }

  render() {
    const heroes = this.renderHeroes();
    const { loading } = this.props;
    const render = (loading === false) ? heroes : <Loader text="Loading data..." />;
    return (
      <div>
        <button onClick={this.showAllState}>Show state</button>
        <div>{render}</div>
      </div>
    );
  }
}

ListOfHeroes.propTypes = {
  loading: PropTypes.bool.isRequired,
  heroes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    mass: PropTypes.string,
    height: PropTypes.string,
  })).isRequired,
};

export default ListOfHeroes;
