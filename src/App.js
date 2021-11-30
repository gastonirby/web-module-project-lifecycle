import React from 'react';
import './index.css';

class App extends React.Component {
  render() {
    return(
    <div>
      <h1>Github Info</h1>
      <form>
        <input/>
        <button>Search</button>
      </form>

      <div className='userCard'>
        <img src='https://avatars.githubusercontent.com/u/91291366?v=4'/>
        <a target='_blank' href='https://github.com/gastonirby'><h3>Gaston</h3></a>
        <p>(gastonirby)</p>
        <p>Total Repos: 37</p>
        <p>Total Followers: 14</p>
      </div>
      <div className='followers'>
        <div className='follower'>
          <img width='20%' src='https://avatars.githubusercontent.com/u/45055471?v=4'/>
          <a target='_blank' href='https://github.com/Jmz0127' ><p>Jmz0127</p></a>
        </div>
        <div className='follower'>
          <img width='20%' src='https://avatars.githubusercontent.com/u/45055471?v=4'/>
          <a target='_blank' href='https://github.com/Jmz0127' ><p>Jmz0127</p></a>
        </div>
        <div className='follower'>
          <img width='20%' src='https://avatars.githubusercontent.com/u/45055471?v=4'/>
          <a target='_blank' href='https://github.com/Jmz0127' ><p>Jmz0127</p></a>
        </div>
      </div>

    </div>);
  }
}

export default App;
