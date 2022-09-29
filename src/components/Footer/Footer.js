import React from "react";

const Footer = () => {
  return (
    <div className="border-2 border-black">
      <h1>1. How does React work?</h1>
      <h1>
        Answer: ReactJS divides the UI into isolated reusable pieces of code
        known as components. React components work similarly to JavaScript
        functions as they accept arbitrary inputs called properties or props.
        It's possible to have as many components as necessary without cluttering
        your code.
      </h1>
      <h1>2. Difference of Props vs State?</h1>
      <h1>
        Answer: Props are used to pass data from one component to another. The
        state is a local data storage that is local to the component only and
        cannot be passed to other components. The this. setState property is
        used to update the state values in the component
      </h1>
      <h1>3. What can useEffect do beside fetching?</h1>
      <h1>
        Answer: Fetching data from an API, communicating with a database, and
        sending logs to a logging service are all considered side-effects, as
        it's possible to have a different output for the same input. For
        example, your request might fail, your database might be unreachable, or
        your logging service might have reached its quota. This is why useEffect
        is the hook for us - by fetching data, we're making our React component
        impure, and useEffect provides us a safe place to write impure code.
      </h1>
    </div>
  );
};

export default Footer;
