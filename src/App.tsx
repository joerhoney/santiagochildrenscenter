import { useState } from "react";
import "./App.css";

function App() {
  //  const [count, setCount] = useState(0);
  //  <div className="card">
  //    <button onClick={() => setCount((count) => count + 1)}>
  //      count is {count}
  //    </button>
  //  </div>;

  return (
    <>
      <div
        className="bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url("./src/assets/scc-mock-1S.jpg")',
          height: "4792px",
        }}
      >
        <section className="p-5 m-0">
          <img
            src="src/assets/Santiago-Childrens-Center-logo.svg"
            alt="Santiago Childrens Center logo"
            className="logo pb-5"
          />
          <h1 className="text-deepgreen font-sans text-4xl">
            Your child, <br />
            nurtured <br />
            by nature
          </h1>
          <p className="py-3">
            A daycare where children are respected, encouraged, and developed in
            a warm, safe country atmosphere.
          </p>
          <a className="btn btn--shape my-2 mx-auto max-w-[240px]" href="#">
            EMAIL US
          </a>
          <div className="text-center text-color-aqua">
            <div className="font-bold">OR CALL</div>
            <div className="font-bold text-3xl">714-309-4237</div>
          </div>
          <div className="shape">
            <img src="./src/assets/o-0.jpg" alt="" />
          </div>
          <img src="./src/assets/o-1.jpg" alt="" />
          <img src="./src/assets/o-2.jpg" alt="" />
          <img src="./src/assets/o-3.jpg" alt="" />
        </section>
        <section>
          <h2>Benefits</h2>
        </section>
        <section>
          <h2>Testimonials</h2>
        </section>
        <section>
          <h2>FAQs</h2>
        </section>
        <section>
          <h2>Information</h2>
        </section>
        <section>
          <div>EMAIL US</div>
          <div>OR CALL 714-309-4237</div>
        </section>
      </div>
    </>
  );
}

export default App;
