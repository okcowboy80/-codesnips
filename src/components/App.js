import { Component } from "react";
import MyNav from './MyNav';
import Main from './Main';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      author: 'User1'
    }
    this.authorHandler = this.authorHandler.bind(this)
  }

  authorHandler(value) {
    this.setState({author: value})
  }
  
  render() {
    return(
      <>
        <MyNav onAuthorSet={this.authorHandler}/>
        <Main author={this.state.author} />
      </>
    )
  }
}

export default App;
