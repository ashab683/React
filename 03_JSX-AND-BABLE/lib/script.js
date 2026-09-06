const container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "container"
}, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, "the library for web and native user interfaces"), /*#__PURE__*/React.createElement("img", {
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1280px-React_Logo_SVG.svg.png",
  style: {
    width: "200px",
    borderRadius: "8px",
    padding: "16px"
  }
})), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "username"), /*#__PURE__*/React.createElement("input", {
  id: "username"
})), /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "password"
}, "password"), /*#__PURE__*/React.createElement("input", {
  id: "password",
  type: "password"
})))));

// const user = 'ashab'

// const h2 = <h2>hello {user}</h2>
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);