import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <div>
          <h1>Santiago Childrens Center</h1>
        </div>
        <div>2. image</div>
        <div>
          3. A headline that emphasizes the value, result or transformation Your
          services offer.
        </div>
        <div>
          4. A tagline to elaborate on the headline by clarifying how you get
          such results.
        </div>
        <div>5. A CTA (call to action): Call (/Text) Us @ 714-309-4237</div>
        <div>6. 5 stars on Yelp</div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </section>
      <section>Benefits</section>
      <section>Testimonials</section>
      <section>FAQs</section>
      <section>Information</section>
      <section>CTA</section>
    </>
  );
}

export default App;
