# ROUTES UseEffects , useState

## UseEffects 

- every time when my components render useEffect is called but because we have put dependency array so it change the behaviour of its render and its optional
- if no dependenacy array useEffect is called on every render

### cases:
1) If no dependencyr array then use Effect is called on every render [default Behaviour]
```
 useEffect(() => {
    fetchData();
  }, []);
```
2) 
``` If dependency array is empty then use Effect is called on only initil render and just once when the component is render for the diest time
useEffect(() => {
    fetchData();
  }, []);
```
3) if we put something in dependeany array so it is only be called when the dependancy changes
```
useEffect(() => {
    fetchData();
  }, [searchText]);
```
## UseState

- never use usestate , never create state variable outside of your components[component ke andar use karna hai]  
- try to make useState on Top
- never use your use state hooks inside a (condition)if else , for loop and functions
```
if(){
    const[z,setZ]=useState(")
}
```
- create inconsistency

# ROUTER

- use react router dom

```
 npm i react-router-dom 
```

## Steps
1) go to app.js( route level app)
2) create routing configuration for that import browser router
```import { createBrowserRouter } from 'react-router-dom';``` it willl create routing configuration
3) 
```
function App() {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}
const appRouter = createBrowserRouter()
[we are creating a router (appRouter) and pass configuration ]
[configuration tells browser what will happen what will happen on specific path(routes)]

```
- createBrowserRouter will take a list of path
- and will contain two things path and element
 // array of object 1)define path and 2)what should happen on that path⬇️

 - when we have vreated configutaion then we have to provide to someone to render it so we need RouterProvider
 ```
 import React from 'react'
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import { createBrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}
const appRouter = createBrowserRouter([
  // array of object define path and what should happen on that path⬇️
  {
    path: "/",
    element: <App />
  },
  {
     path: "/about",
     element: <About />
  },
  {
    path: "/contact",
    element : <Contact/>
  }
])

      export default App

```


# HOW TO

1)  npm i react-router-dom 


# EXTRA

App BrowserRouter Routes Route

(App)(BR)(R)aa ka Dabb (RR)A

- [ghar]: A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

>Browser Router
Imagine your React app is like a house with different rooms. BrowserRouter is like the front door with an address. When someone (like a user or a link) wants to enter a specific room (page) in your house, they use the address on the front door.
In React, BrowserRouter helps your app understand the different addresses (URLs) people might type into their browser. It's like a map for your React app, telling it which room (component or page) to show when someone goes to a certain address (URL).

So, if your app is at http://yourwebsite.com, and someone goes to http://yourwebsite.com/about, BrowserRouter helps your app figure out that it should show the "About" room (or component) to the user.

> Routes:
Routes is like a collection of many Route instructions. It's a way to organize and define multiple routes for your application. Each Route inside Routes helps your app understand what to display for different parts of your website.

For example, you might have a Routes component that contains several Route components. Each Route corresponds to a different page or section of your app. Together, they make up the various pages or views of your application.

> Route:
Think of a Route as a set of instructions for your app. It says, "Hey, if the URL matches a certain pattern, show a specific component."

For instance, you might have a Route that says, "If the URL is /home, display the Home component." It's like a rulebook for your app to determine what to show when the user goes to different URLs.


## App
```
import React from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      {/* routes ke upar jo common component rahega wo dalna hai aur routes ke neeche jo jo raste hai usko dalna hai*/}
      <!-- jaise agar https://localhost1234/ pe pahuch jaynge hmlog HOME PE -->
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

## navbar
>NavLink is a component provided by the React Router library that is specifically designed for navigation links in a React application. It's an enhanced version of the traditional Link component with additional features. Here's the use of NavLink
````
import React from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [loginText, setLoginText] = useState("Login");

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="logo Image" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Conact Us</NavLink>
            </li>
            <li className="cart">
              <NavLink to="/cart">
                <img src={cart} alt="" />
              </NavLink>
            </li>

            <button
              className="loginBtn"
              onClick={() => {
                if (loginText === "Login") {
                  setLoginText("Logout");
                } else {
                  setLoginText("Login");
                }
              }}
            >
              {loginText}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

````