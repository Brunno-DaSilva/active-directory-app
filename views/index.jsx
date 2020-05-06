const React = require("react");

class Index extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />

          {/* Main StyleSheet */}
          <link rel="stylesheet" href="/css/style.css" />

          {/* FontAwesome */}

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossorigin="anonymous"
          />
          <title>Budget-Index Page</title>
        </head>
        <body>
          <div className="container">
            {users.map((userData, i) => {
              return (
                <div>
                  <h3>{userData.firstName}</h3>
                  <h3>{userData.lastName}</h3>
                  {userData.isActive ? <h4>Active</h4> : <h4>Not active</h4>}
                </div>
              );
            })}
          </div>

          <svg viewBox="0 0 100 25">
            <path fill="#1f2833" d="M0 30 V12 Q30 17 55 12 T100 11 V30z"></path>
          </svg>

          <footer>
            <p>
              2020 Bruno DaSilva <span> Active Directory App</span>
            </p>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Index;
