import React from "react";

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      showPassword: false,
    };
    this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this),
    this.handleLogin = this.handleLogin.bind(this);
    console.log("constructor");
  }
  handleChangeInput(e) {
    const {name, value} = e.target;
    this.setState({
        [name] : value
    });  
  }
  handleLogin() {
  console.log(this.state)
  }
  handleChangeCheckBox(e) {
    const checked = e.target.checked;
    console.log(checked);
    this.setState({
      showPassword: checked,
    });
  }
 
  componentDidMount(){
    console.log("componentDidMount");
  }
  render() {
    console.log("render")
    return (
      <div>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={this.handleChangeInput}
        />
        <input
          type={this.state.showPassword ? "text" : "password"}
          placeholder="password"
          name="password"
          onChange={this.handleChangeInput}
        />
        <input type="checkbox" onChange={this.handleChangeCheckBox} />
        <button onClick={this.handleLogin}>login</button>
      </div>
    );
  }
}
export default Auth;
