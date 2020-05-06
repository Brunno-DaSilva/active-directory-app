# Active Directory App

### Overview:

Creating an ADA CRUD App step-by-step using MongoDB, Express, React Views, and Node.

`The intension of this guide is to provide a workflow and structure when building a CRUD app.`

### Creating a CRUD APP

1. Create Your file directory:
   ○ mkdir new-repo
   ○ cd new-repo
   ○ touch server-name.js

2. Install Dependencies:
   `npm i express express-react-views react react-dom mongoose`

3. Go to server.js
   a. Require express and add variable app

   ```
   //================
   // Dependencies
   //================
        const express = require("express");
        const app = express();

   ```

4) Add Initial Middleware

   ```
   //=============================
   // Required Middleware Engine
   //=============================
    app.set("view engine", "jsx");
    app.engine("jsx", require("express-react-views").createEngine());

    // Tells express to parse data from POST request:
    app.use(express.urlencoded({ extended: false }));

    app.use(express.json());
    app.use(express.static("public"));

   ```

5) Add app.listen

   ```
   // //=============================
   // // Listening on Port 3000
   // //=============================
    app.listen(port, () => {
      console.log(`Ascoltando al porto... ${port}`);
    });
   ```

6) The 7 restful routes:

   a. Presentational Routes=>

   ```
   //==================================================================
   * Presentational Routes *
   Index: shows a list of all of our resources and has * linked to New, Edit, & Delete * New: shows a form to create a new resource lined to create * Show: shows one individual resource from our list * EDIT: Shows a form to update a resource linked to our Update route
   //==================================================================
   ```

   b. Functional Routes=>

   ```
   //==================================================================

   Functional Routes * Create: creates a new resource using app.post() | Post * Delete: deletes a resource use app.delete() | Destroy * Update: updates a resource | PUT

   //==================================================================

   ```

7. Generate the New Route

   ```
   //====================
   //       New
   //====================
        app.get("/user/new", (req, res) => {
          res.render("New");
        });

   ```

8) Generate the Create Route

   ```
   //====================
   //    Create Route
   //====================
        app.post("/users/", (req, res) => {
          req.body.isActive === "on"
            ? (req.body.isActive = true)
            : (req.body.isActive = false);
          res.redirect("/budgets");
        });

   ```

9) Add mongoose
   a. Add as dependency and pass it below the Middleware
   b. Install if not already installed `npm i mongoose`

   ```
   //=============================
   //      Dependencies
   //=============================
        const express = require("express");
        const app = express();
        const mongoose = require("mongoose");
   ...
   ...
   // =============================
   //      Mongoose Connection
   // =============================
        mongoose.connect("mongodb://localhost:27017/activeDirectoryApp", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        mongoose.connection.once("open", () => {
          console.log("connected to mongo");
    });
   ```

##### Important: activeDirectoryApp can be called anything that relates to your app

10. Create Models
    a. mkdir models touch `modelsname.js`

11. Create schema and models in the `modelsname.js` file
    a. Add the dependencies and Require mongoose
    b. Add the User schema

    ```
        //=============================
        //      Users Schema
        //=============================

            const userSchema = new userSchema( {
                firstName: { type: String, required: true },
                lastName: { type: String, required: true },
                email: { type: String, required: true },
                phone: { type: String, required: true },
                department: { type: String, required: true },
                jobTitle: { type: String, required: true },
                jobDescription: { type: String, required: true },
                createdOn: { type: Date, default: Date.now },
                isActive:
                Boolean, }, { timestamps: true } );

    ```

    c. Create a Models from the schema

    ```
    //=============================
    //         User Models
    //=============================

        const User = mongoose.model("User", userSchema);

    ```


    d. Export the created Models
        ```
        //=============================
        //      Export User Models
        //=============================
            module.exports = User;

        ```

12. Require Your created Model
    a. Go to Server.js
    b. At the top dependencies add the created models
    `const User = require("./models/users.js");`

13. Handles the data submitted by the form

    ```
     //Use Model to crate User document
          User.create(req.body, (error, createdUser) => {
          // once created - respond to client    
            res.redirect("/users");
          });
    ```

14. Create the View and Index.jsx to check the new additions
    a. Create a views directory and JSX file
    b. Add a form
    c. The form action and method needs to match the server side data structure
    d. The name of the input, in your form, will directly correspond to the data you are using on your schema

15. In the index.jsx:
    a. De structure the data from our database
    `const { users } = this.props;`

    b. Map over the de-structured variable

    ```
    {users.map((userData, i) => {
        return (
            <div>
                <h3>{userData.firstName}</h3>
                <h3>{userData.lastName}</h3>
                </div>
            );
    })}
    ```

    16. Blaaaa
    17. Blaasasasa
    18. blahsjdjdjsds
    19.
