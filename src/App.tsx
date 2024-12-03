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
        <section className="p-6 m-0">
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
          <a className="btn shape-S my-2 mx-auto max-w-[240px]" href="#">
            <div>EMAIL US</div>
          </a>
          <div className="text-center">
            <div className="font-bold text-forest">OR CALL</div>
            <div className="font-bold text-3xl text-forest pb-6">
              714-309-4237
            </div>
            <div className="flex align-center pb-20 justify-around w-5/6 mx-auto">
              <img
                src="src/assets/5-stars.svg"
                alt="5 stars"
                className="w-36 self-center ml-auto"
              />
              <div className="w-10 self-center">on</div>
              <img
                src="src/assets/yelp.svg"
                alt="Yelp logo"
                className="w-28 self-center mr-auto"
              />
            </div>
          </div>
          <div className="shape-L -mb-12 mx-auto w-max">
            <img
              src="./src/assets/o-0.jpg"
              alt="Cildren on our green campus, admiring a Tortoise."
            />
          </div>
        </section>

        <section className="shape-gradient px-6 py-24 m-0 text-black">
          <h2 className="font-serif text-2xl pb-2 font-bold text-black w-[240px]">
            Give Your Child The Best Start
          </h2>
          <div className="flex gap-6 py-5">
            <img
              className="text-black flex-shrink-0 w-8"
              src="./src/assets/diversity_3_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Icon of friends"
            />
            <p>Very small class sizes, typically between 6-10 students</p>
          </div>
          <div className="flex gap-6 py-5">
            <img
              className="text-black flex-shrink-0 w-8"
              src="./src/assets/celebration_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
            <p>
              A fun and challenging learning environment that sets up a love for
              learning and an enthusiasm for school
            </p>
          </div>
          <div className="flex gap-6 py-5">
            <img
              className="text-black flex-shrink-0 w-8"
              src="./src/assets/forum_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
            <p>Excellent communication with parents</p>
          </div>
          <div className="flex gap-6 py-5">
            <img
              className="text-black flex-shrink-0 w-8"
              src="./src/assets/volunteer_activism_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
            <p>
              A hands-on approach that acknowledges the unique learning styles
              for children, especially in the beginning years of school
            </p>
          </div>
          <div className="flex gap-6 py-5">
            <img
              className="text-black flex-shrink-0 w-8"
              src="./src/assets/multimodal_hand_eye_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
            <p>
              Incorporation of multiple intelligences (visual, verbal, logical,
              kinesthetic, etc.) to reach and engage each child
            </p>
          </div>
          <img
            className="mt-16 ml-auto -mb-32 w-[300px]"
            src="./src/assets/children-on-patio.jpg"
            alt="Children on our patio"
          />
          <img
            className="mr-auto -mb-40 w-[300px]"
            src="./src/assets/girl-on-pony-graded.webp"
            alt="A girl on Sweetie, our pony"
          />
        </section>

        <section className="px-6 pt-32 pb-24 m-0 text-deepgreen text-center">
          <h2 className="font-serif text-2xl pb-8 mx-auto font-bold text-black w-[280px]">
            What Other Parents Say About Us
          </h2>
          <div className="testimonial w-[240px] text-left mx-auto mb-8">
            <p>
              Their daycare has the benefits of a day care center, but with the
              feel of a family. Daycare doesn't close when they go on vacation
              or are sick because they have excellent subs.
            </p>
            <div className="flex gap-6 py-5">
              <div className="shape-S w-28">
                <img
                  src="./src/assets/testimonials/Jeri-D.jpg"
                  alt="Photo of Jeri D"
                />
              </div>
              <div className="text-aqua text-bold">
                Jeri D.
                <br />
                <img
                  src="./src/assets/5-stars.svg"
                  alt="5 stars"
                  className="w-24 mr-auto"
                />
              </div>
            </div>
          </div>
          <div className="testimonial w-[240px] text-left mx-auto mb-8">
            <p>
              They made us feel comfortable, welcomed, and they do genuinely
              love what they do. They have a great set up for the kids.
            </p>
            <div className="flex gap-6 py-5">
              <div className="shape-S w-28">
                <img
                  src="./src/assets/testimonials/Givanna-N.jpg"
                  alt="Photo of Jeri D"
                />
              </div>
              <div className="text-aqua text-bold">
                Givanna N.
                <br />
                <img
                  src="./src/assets/5-stars.svg"
                  alt="5 stars"
                  className="w-24 mr-auto"
                />
              </div>
            </div>
          </div>
          <div className="testimonial w-[240px] text-left mx-auto mb-8">
            <p>
              My 2 year old absolutely loves Miss Sarah and Miss Connie! I
              struggled to find a daycare that she enjoyed and this one was a
              perfect match from the start.
            </p>
            <div className="flex gap-6 py-5">
              <div className="shape-S w-28">
                <img
                  src="./src/assets/testimonials/Courtney-T.jpg"
                  alt="Photo of Jeri D"
                />
              </div>
              <div className="text-aqua text-bold">
                Courtney T.
                <br />
                <img
                  src="./src/assets/5-stars.svg"
                  alt="5 stars"
                  className="w-24 mr-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex align-center justify-around w-5/6 mx-auto">
            <div className="w-10 self-center ml-auto">on</div>
            <img
              src="src/assets/yelp.svg"
              alt="Yelp logo"
              className="w-28 self-center mr-auto"
            />
          </div>
        </section>

        <section className="shape-gradient px-6 py-12 m-0 text-black">
          <h2 className="font-serif text-2xl pb-2 font-bold text-black w-[240px]">
            Frequently Asked Questions
          </h2>
          <details>
            <summary>Are you a licensed school?</summary>
            <p>
              Yes, we are. This business has satisfied CA's requirements to be
              licensed. For the most up-to-date status and inspection reports,
              please view this provider's profile on CA's licensing website.
            </p>
          </details>
          <details>
            <summary>What do the licensing requirements include?</summary>
            <ul className="list-disc ml-4">
              <li>Complying with safety and health inspections</li>
              <li>Achieving the required levels of educational training</li>
              <li>Maintaining a minimum caregiver-to-child ratio</li>
              <li>Other state-defined requirements</li>
            </ul>
          </details>
          <details>
            <summary>Where is Santiago Children's Center?</summary>
            <p>
              We are located in the foothills of Orange Park Acres on a one acre
              lot.
            </p>
            <p>Address: 20362 S. Randall St., Orange, CA 92869</p>
            <p>Contact: Sarah Holtz, 714-478-0155</p>
          </details>
          <details>
            <summary>How long have you been in business?</summary>
            <p>Santiago Children's Center was established in 1983.</p>
          </details>
          <details>
            <summary>What does your Pre-K Program include?</summary>
            <ul className="list-disc ml-4">
              <li>Reading</li>
              <li>Math</li>
              <li>Science</li>
            </ul>
          </details>
          <details>
            <summary>What type of day care are you?</summary>
            <ul className="list-disc ml-4">
              <li>In-home/family day care</li>
              <li>Preschool (or nursery school or pre-k)</li>
            </ul>
            <p>Philosophy:</p>
            <ul className="list-disc ml-4">
              <li>Academic</li>
              <li>Developmental (play-based)</li>
              <li>Outdoor/nature</li>
            </ul>
          </details>
          <details>
            <summary>What services do you offer?</summary>
            <ul className="list-disc ml-4">
              <li>Services Offered</li>
              <li>Verified by Business</li>
              <li>In-home Child Care</li>
              <li>In-home Toddler Care</li>
              <li>Playgroups</li>
              <li>Preschool-aged child daycare</li>
              <li>Virtual Consultations</li>
              <li>Education-based Daycare</li>
              <li>In-home Infant Care</li>
              <li>Infant Daycare</li>
              <li>Potty Training</li>
              <li>Toddler Daycare</li>
            </ul>
          </details>
        </section>
        <section>
          <h2>Information</h2>
        </section>
        <section>
          <div>EMAIL US</div>
          <div>OR CALL 714-309-4237</div>
          <img src="./src/assets/o-1.jpg" alt="" />
          <img src="./src/assets/o-2.jpg" alt="" />
          <img src="./src/assets/o-3.jpg" alt="" />
        </section>
      </div>
    </>
  );
}

export default App;
