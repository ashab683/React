
const container = (
  <div className="container" id="container">
    <section>
      <p>the library for web and native user interfaces</p>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1280px-React_Logo_SVG.svg.png"
        style={{
          width: "200px",
          borderRadius: "8px",
          padding: "16px"
        }}
      />
    </section>

    <section>
      <form>
        <div className="input-group">
          <label htmlFor="username">username</label>
          <input id="username" />
        </div>

        <div className="input-group">
          <label htmlFor="password">password</label>
          <input id="password" type="password" />
        </div>
      </form>
    </section>
  </div>
);


// const user = 'ashab'

// const h2 = <h2>hello {user}</h2>
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);



 