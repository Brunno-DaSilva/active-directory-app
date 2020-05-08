const React = require("react");

class New extends React.Component {
  render() {
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
                  <h1>New page</h1>
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
                <div className="form-container">
                  <form action="/users" method="POST">
                    First Name: <input type="text" name="firstName" />
                    <br />
                    LastName: <input type="text" name="lastName" />
                    <br />
                    Email: <input type="email" name="email" />
                    <br />
                    Phone: <input type="text" name="phone" />
                    <br />
                    Department: <input type="text" name="department" />
                    <br />
                    Job Title: <input type="text" name="jobTitle" />
                    <br />
                    Job Description:
                    <input type="text" name="jobDescription" />
                    <br />
                    Created on: <input type="date" name="createdOn" />
                    <br />
                    Is active: <input type="checkbox" name="isActive" />
                    <br />
                    <input type="submit" name="" value="Create User" />
                  </form>

                  <div className="form-img-holder">
                    <img
                      src="https://res.cloudinary.com/duprwuo4j/image/upload/v1588902667/imgs_starwars/EcommerceProject/add-user-form_yqkokh.png"
                      alt="contact form"
                    />
                  </div>
                </div>

                {/* end info container */}
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = New;
