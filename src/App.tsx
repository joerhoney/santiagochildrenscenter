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
      <section className="md:flex md:gap-8">
        <div className="md:w-1/2">
          <img
            src="src/assets/Santiago-Childrens-Center-logo.svg"
            alt="Santiago Childrens Center logo"
            className="logo pb-5"
          />
          <h1 className="font-sans text-4xl text-deepgreen">
            Your child, <br />
            nurtured <br />
            by nature
          </h1>
          <p className="py-8">
            A daycare where children are respected, encouraged, and developed in
            a warm, safe country atmosphere.
          </p>
          <div className="text-center md:flex md:place-items-start md:gap-8">
            <a
              className="btn shape-S md:max-w-1/2 mx-auto my-4 max-w-[240px] md:block md:shrink md:basis-1/3"
              href="#"
            >
              <div>EMAIL US</div>
            </a>
            <div className="text-center md:grow md:text-left">
              <div className="font-bold text-forest">OR CALL</div>
              <div className="pb-6 text-3xl font-bold text-forest">
                714-309-4237
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-5/6 justify-around pb-20 text-center md:ml-0 md:w-max md:text-left">
            <img
              src="src/assets/5-stars.svg"
              alt="5 stars"
              className="ml-auto w-36 self-center"
            />
            <div className="w-10 self-center text-center">on</div>
            <img
              src="src/assets/yelp.svg"
              alt="Yelp logo"
              className="mr-auto w-28 self-center"
            />
          </div>
        </div>
        <div className="pt-6 md:w-1/2">
          <div className="shape-L mx-auto -mb-12 w-max md:w-full">
            <img
              className="w-full"
              src="./src/assets/o-0.jpg"
              alt="Cildren on our green campus, admiring a Tortoise."
            />
          </div>
        </div>
      </section>

      <section className="shape-gradient m-0 px-6 py-24 text-black">
        <h2 className="w-[240px] pb-2 font-serif text-2xl font-bold text-black">
          Give Your Child The Best Start
        </h2>
        <div className="flex gap-6 py-5">
          <img
            className="w-8 flex-shrink-0 text-black"
            src="./src/assets/diversity_3_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Icon of friends"
          />
          <p>Very small class sizes, typically between 6-10 students</p>
        </div>
        <div className="flex gap-6 py-5">
          <img
            className="w-8 flex-shrink-0 text-black"
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
            className="w-8 flex-shrink-0 text-black"
            src="./src/assets/forum_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
          />
          <p>Excellent communication with parents</p>
        </div>
        <div className="flex gap-6 py-5">
          <img
            className="w-8 flex-shrink-0 text-black"
            src="./src/assets/volunteer_activism_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
          />
          <p>
            A hands-on approach that acknowledges the unique learning styles for
            children, especially in the beginning years of school
          </p>
        </div>
        <div className="flex gap-6 py-5">
          <img
            className="w-8 flex-shrink-0 text-black"
            src="./src/assets/multimodal_hand_eye_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
          />
          <p>
            Incorporation of multiple intelligences (visual, verbal, logical,
            kinesthetic, etc.) to reach and engage each child
          </p>
        </div>
        <img
          className="-mb-32 ml-auto mt-16 w-[300px]"
          src="./src/assets/children-on-patio.jpg"
          alt="Children on our patio"
        />
        <img
          className="-mb-40 mr-auto w-[300px]"
          src="./src/assets/girl-on-pony-graded.webp"
          alt="A girl on Sweetie, our pony"
        />
      </section>

      <section className="m-0 px-6 pb-24 pt-32 text-center text-deepgreen">
        <h2 className="mx-auto w-[280px] pb-8 font-serif text-2xl font-bold text-black">
          What Other Parents Say About Us
        </h2>
        <div className="testimonial mx-auto mb-8 w-[240px] text-left">
          <p>
            Their daycare has the benefits of a day care center, but with the
            feel of a family. Daycare doesn't close when they go on vacation or
            are sick because they have excellent subs.
          </p>
          <div className="flex gap-6 py-5">
            <div className="shape-S w-28">
              <img
                src="./src/assets/testimonials/Jeri-D.jpg"
                alt="Photo of Jeri D"
              />
            </div>
            <div className="text-bold text-aqua">
              Jeri D.
              <br />
              <img
                src="./src/assets/5-stars.svg"
                alt="5 stars"
                className="mr-auto w-24"
              />
            </div>
          </div>
        </div>
        <div className="testimonial mx-auto mb-8 w-[240px] text-left">
          <p>
            They made us feel comfortable, welcomed, and they do genuinely love
            what they do. They have a great set up for the kids.
          </p>
          <div className="flex gap-6 py-5">
            <div className="shape-S w-28">
              <img
                src="./src/assets/testimonials/Givanna-N.jpg"
                alt="Photo of Jeri D"
              />
            </div>
            <div className="text-bold text-aqua">
              Givanna N.
              <br />
              <img
                src="./src/assets/5-stars.svg"
                alt="5 stars"
                className="mr-auto w-24"
              />
            </div>
          </div>
        </div>
        <div className="testimonial mx-auto mb-8 w-[240px] text-left">
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
            <div className="text-bold text-aqua">
              Courtney T.
              <br />
              <img
                src="./src/assets/5-stars.svg"
                alt="5 stars"
                className="mr-auto w-24"
              />
            </div>
          </div>
        </div>
        <div className="align-center mx-auto flex w-5/6 justify-around">
          <div className="ml-auto w-10 self-center">on</div>
          <img
            src="src/assets/yelp.svg"
            alt="Yelp logo"
            className="mr-auto w-28 self-center"
          />
        </div>
      </section>

      <section className="shape-gradient m-0 px-6 py-12 text-black">
        <h2 className="w-[240px] pb-2 font-serif text-2xl font-bold text-black">
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
          <ul className="ml-4 list-disc">
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
          <ul className="ml-4 list-disc">
            <li>Reading</li>
            <li>Math</li>
            <li>Science</li>
          </ul>
        </details>
        <details>
          <summary>What type of day care are you?</summary>
          <ul className="ml-4 list-disc">
            <li>In-home/family day care</li>
            <li>Preschool (or nursery school or pre-k)</li>
          </ul>
          <p>Philosophy:</p>
          <ul className="ml-4 list-disc">
            <li>Academic</li>
            <li>Developmental (play-based)</li>
            <li>Outdoor/nature</li>
          </ul>
        </details>
        <details>
          <summary>What services do you offer?</summary>
          <ul className="ml-4 list-disc">
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
        <div className="mx-auto my-14 w-[240px]">
          <div className="flex gap-6 py-4">
            <img
              className="w-8 flex-shrink-0 text-black"
              src="./src/assets/schedule_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
            <p>
              Hours
              <br />
              8:00 AM - 5:00 PM
              <br />
              Monday - Friday
            </p>
          </div>
          <div className="flex gap-6 py-4">
            <img
              className="w-8 flex-shrink-0 text-black"
              src="./src/assets/flag_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
            <p>Established in 1983</p>
          </div>
        </div>
        <div className="shape-L mx-auto -mb-8 w-3/4">
          <img src="./src/assets/o-2.jpg" alt="" />
        </div>
      </section>

      <section className="shape-gradient pb-8 pt-16">
        <a className="btn shape-S mx-auto my-4 max-w-[240px]" href="#">
          <div>EMAIL US</div>
        </a>
        <div className="text-center">
          <div className="font-bold text-forest">OR CALL</div>
          <div className="pb-6 text-3xl font-bold text-forest">
            714-309-4237
          </div>
        </div>
      </section>

      <footer className="copy-S px-6 py-14">
        <p>©2024 Santiago Children Center</p>
        <p>20362 S Randall st. Orange Ca 92869</p>
        <p>
          Website by <a href="https://joerhoney.com">joerhoney.com</a>
        </p>
      </footer>
    </>
  );
}

export default App;
