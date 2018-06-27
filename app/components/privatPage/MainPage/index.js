import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import style from './style';
import MyPosts from '../../privatPage/MyPosts';
import FriendsPosts from '../../privatPage/FriendsPosts';
import Modal from '../../renderComponent/Modal';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});

class MainPage extends React.PureComponent {
  state = {
    show: false,
  };
  openModal = () => {
    this.setState({ ...this.state, show: !this.state.show });
  }
  closeModal = () => {
    this.setState({ ...this.state, show: false });
  }
  close
  render() {
    return (
      <React.Fragment>
        <div style={style.h1}>My App
        </div>
        <div style={style.containerBlock}>
          <div style={style.blockLeft}>
            <button
              style={style.blockLeft.btn}
            >
              <Link
                style={style.linkButton}
                href="/mainpage/myposts"
                to="/mainpage/myposts"
              >
                My post
              </Link>
            </button>
            <button style={style.blockLeft.btn}>
              <Link
                style={style.linkButton}
                href="/mainpage/friendsposts"
                to="/mainpage/friendsposts"
              >
                Post friends
              </Link>
            </button>
            <button
              style={style.blockLeft.btn}
              onClick={this.openModal}
            >
              Add new post
            </button>
          </div>
          <div style={style.blockRight}>
            <Route path="/mainpage/myposts" component={MyPosts} />
            <Route path="/mainpage/friendsposts" component={FriendsPosts} />
          </div>
        </div>
        <Modal show={this.state.show} onClose={this.closeModal} />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(MainPage);