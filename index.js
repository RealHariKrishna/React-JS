const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Divya", lastName: "Guddeti" };
const className = "greeting";
const element = (
  <div>
    <h1 className={className}>Hello {fullName(user)} !</h1>
    <p className={className}>Good to see you here.</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
