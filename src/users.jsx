import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

class Users extends Component {
  state = {
    users: [],
    loading: true,
  };

  componentDidMount() {
    // Perform the data fetching here
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        this.setState({
          users: data.data, // Use data.data to access the array of users
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    const styles = {
      Blackcolor: {
        color: "black",
        padding: "5px",
      },
      name: {},
      lastname: {},
    };
    const { users, loading } = this.state;

    return (
      <div>
        {loading ? (
          <></>
        ) : (
          <div className="row">
            {users.map((user) => (
              <div key={user.id} className="col-4 text-center p-3">
                <img src={user.avatar} alt="" />
                <div style={styles.Blackcolor}>{user.first_name}</div>
                <div style={styles.Blackcolor}>{user.last_name}</div>
                <br />
                <button className="btn btn-info m-2">Update</button>
                <button className="btn btn-danger m-2">Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Users;
