const React = require("react");

class Index extends React.Component {
  render() {
    const { users } = this.props;
    console.log(this.props);
    console.log("somethings");

    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

          {/* Main StyleSheet */}
          <link rel="stylesheet" href="/css/style.css" />

          {/* FontAwesome */}

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossOrigin="anonymous"
          />
          <title>Index Page</title>
        </head>
        <body>
          <div className="wrapper">
            <div className="sidebar">
              <div className="logo">
                <img
                  src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574831158/imgs_starwars/imgs/BLOGO_k36v5y.png"
                  alt="logo"
                />
              </div>
              <ul>
                <li>
                  <a href="http://localhost:3001/users">
                    <i className="fas fa-home"></i>
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3001/users/new">
                    <i className="fas fa-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3001/users">
                    <i className="fas fa-users"></i>
                  </a>
                </li>
                <li>
                  <a href="http://www.bruno-dasilva.com/">
                    <i className="fas fa-cookie-bite"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="main_content">
              <div class="header">
                <div className="title">
                  <h1>Active Directory App</h1>
                </div>
                <div className="social-icons">
                  <div className="logo">
                    <img
                      src="https://res.cloudinary.com/duprwuo4j/image/upload/v1588899368/Logo/blogo-gray_doyoy3.png"
                      alt="logo"
                    />
                  </div>
                  <div className="info-Bruno">
                    <a
                      href="https://github.com/DaSilvaBrunoTexas"
                      target="_blank"
                    >
                      <i className="fab fa-github-alt"></i>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/bruno-dasilva/"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>

                    <a href="http://bruno-dasilva.com/" target="_blank">
                      <i class="fas fa-globe-americas"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="info">
                {users.map((user, index) => {
                  return (
                    <div class="demo__div people">
                      <div class="people__div people__div--img">
                        <img
                          src="https://source.unsplash.com/mEZ3PoFGs_k"
                          alt={user.firstName}
                          class="people__img"
                        />
                      </div>
                      <div class="people__div people__div--info">
                        <h2 class="people__name">
                          {user.firstName} {user.lastName}
                        </h2>
                        <p class="people__desc">
                          {user.description} Time waits for no man. Unless that
                          man is Chuck Norris. When Chuck Norris jumps into a
                          pool, he does not get wet, the water gets Chuck
                          Norris.
                        </p>
                      </div>
                      <div class="people__div people__div--name">
                        <h2 class="people-name">{user.jobTitle}</h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;
