import React, { PureComponent } from "react";
import RegularComp from "./RegularComp";
import PureCom from "./PureCom";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anuj",
    };
  }

  componentDidMount() {
    setInterval(()=>this.setState({ name: "Anuj" }), 2000);
  }
  render() {
    console.log("Parent component render...");
    return (
      <div>
        <RegularComp name={this.state.name} />
        <PureCom name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
