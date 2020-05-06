const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New page</h1>
        <form action="/user" method="POST">
          firstName: <input type="text" name="firstName" />
          <br />
          lastName: <input type="text" name="lastName" />
          <br />
          Email: <input type="checkbox" name="email" />
          <br />
          Phone: <input type="checkbox" name="phone" />
          <br />
          Department: <input type="text" name="department" />
          <br />
          Job Description: <input type="text" name="jobDescription" />
          <br />
          Created on: <input type="date" name="createdOn" />
          <br />
          Is active: <input type="checkbox" name="isActive" />
          <br />
          <input type="submit" name="" value="Create User" />
        </form>
      </div>
    );
  }
}

module.exports = New;
