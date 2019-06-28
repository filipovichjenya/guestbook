import React from "react";

import FormComponent from "./components/FormComponent";
import MessagesBlock from "./components/MessagesBlockComponent";

import Spinner from 'react-bootstrap/Spinner'



class App extends React.Component {
  constructor() {
    super();
    this.state = { messages: [], isLoading: true, isError: false }
  }
  async componentDidMount() {
    try {
      const response = await fetch('/messages');
      if (response.status === 500) throw new Error('Internal Server Error');

      const messages = await response.json();
      this.setState({ messages, isLoading: false });

    } catch (error) {
      this.setState({ isError: true });
      console.log(error);
    }
  }

  updateData = (value) => {
    this.setState((state) => {
      state.messages.push(value)
      return { messages: state.messages }
    })
  }
  render() {
    if(this.state.isError) return (<h2 className="text-center mt-5">Sorry Internal Server Error</h2>)
    return (
      <div className="p-3">
        <h1 className="text-center">GuestBook</h1>
        <div className="d-flex flex-column">
          <FormComponent updateData={this.updateData} />
          {this.state.isLoading ? <Spinner style={{ margin: 'auto' }} animation="border" variant="info" /> : <MessagesBlock data={this.state} />}
        </div>
      </div>
    )
  }
}


export default App;
