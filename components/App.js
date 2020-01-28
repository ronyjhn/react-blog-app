import React from 'react';
import api from '../api';

class App extends React.Component{

  state={ users:[],isLoading:true};

  async componentDidMount(){

    const response = await api.get('users');
    const users = await response.data;
    this.setState({users: users, isLoading:false});
    
  }

  renderUsers(){
    return this.state.users.map( user=>{
      return <div  key={user.id} className='item'>{user.name}</div>
    });

  }

  render(){
    if(this.state.isLoading){
      return <div>Loading.....</div>
    }
    return <div className='list'>{this.renderUsers()}</div>;
  }

}

export default App;