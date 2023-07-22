import React, { PureComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

class Skeletonloading extends Component {
  state = {};
  render() {
    const styles = {
      image_section: {
      borderRadius: "50%",
      },
      name: {},
      lastname: {},
    };
    return (
      <>
        <div className="col-4">
          <div style={styles.image_section}></div>
        </div>
      </>
    );
  }
}

export default Skeletonloading;
