import * as React from "react";
import "./App.css";
import AFSlides from "./components/AFSlides";

import logo from "./assets/icons/Santiago-Childrens-Center-logo.svg";
import stars from "./assets/icons/5-stars.svg";
import yelp from "./assets/icons/yelp.svg";
import children_watching_turtle_ai2x from "./assets/photos/children_watching_turtle_ai2x.jpg";
import children_watching_terrarium_ai2x from "./assets/photos/children_watching_terrarium_ai2x.jpg";
import children_looking_at_horse from "./assets/photos/children_looking_at_horse.webp";
import girl_n_horse_looking_at_each_other from "./assets/photos/girl_n_horse_looking_at_each_other.jpg";
import diversity_3_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 from "./assets/icons/diversity_3_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import celebration_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 from "./assets/icons/celebration_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import forum_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 from "./assets/icons/forum_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import volunteer_activism_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 from "./assets/icons/volunteer_activism_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import multimodal_hand_eye_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 from "./assets/icons/multimodal_hand_eye_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import children_on_patio_ai4x from "./assets/photos/children_on_patio_ai4x.jpg";
import girl_on_pony_graded from "./assets/photos/girl_on_pony_graded.webp";
import JeriD from "./assets/testimonials/JeriD.jpg";
import GivannaN from "./assets/testimonials/GivannaN.jpg";
import CourtneyT from "./assets/testimonials/CourtneyT.jpg";
import schedule_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 from "./assets/icons/schedule_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import flag_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 from "./assets/icons/flag_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import children_grooming_horse from "./assets/photos/children_grooming_horse.webp";
import children_playing_on_playground from "./assets/photos/children_playing_on_playground.webp";
import children_n_teacher from "./assets/photos/children_n_teacher.webp";

function App() {
  //  const [count, setCount] = useState(0);
  //  <div className="card">
  //    <button onClick={() => setCount((count) => count + 1)}>
  //      count is {count}
  //    </button>
  //  </div>;

  return (
    <>
      {/* 
        H E R O
        =======
      */}
      <section className="section md:flex md:gap-8">
        <div className="md:w-5/12">
          <img
            src={logo}
            alt="Santiago Childrens Center logo"
            className="logo pb-5"
          />
          <h1 className="font-sans text-4xl text-deepgreen">
            Your child, <br />
            nurtured <br />
            by nature
          </h1>
          <p className="max-w-[420px] pt-8">
            A daycare where children are respected, encouraged, and developed in
            a warm, safe country atmosphere.
          </p>
          <div className="stacker gap-8 py-8 text-center md:gap-8 lg:place-items-start lg:py-12">
            <a
              className="btn shape-S m-auto flex max-w-[240px] justify-center align-middle md:ml-0"
              href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#97;&#114;&#97;&#104;&#46;&#115;&#97;&#110;&#116;&#105;&#97;&#103;&#111;&#99;&#104;&#105;&#108;&#100;&#101;&#110;&#115;&#99;&#101;&#110;&#116;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
              target="_blank"
            >
              <div>EMAIL US</div>
            </a>
            <div className="m-auto text-center md:ml-0 md:w-max md:text-left">
              <div className="font-bold text-forest">OR CALL</div>
              <div className="text-3xl font-bold text-forest">
                &#55;&#49;&#52;&#45;&#52;&#55;&#56;&#45;&#48;&#49;&#53;&#53;
              </div>
            </div>
          </div>
          <a
            href="https://www.yelp.com/biz/santiago-childrens-center-orange"
            target="_blank"
            className="mx-auto flex max-w-[290px] justify-around pb-20 text-center md:ml-0 md:w-max md:pb-2 md:text-left"
          >
            <img
              src={stars}
              alt="5 stars"
              className="ml-auto w-full min-w-0 max-w-36 self-center"
            />
            <div className="self-center px-2 text-center">on</div>
            <img
              src={yelp}
              alt="Yelp logo"
              className="mr-auto w-full min-w-0 max-w-28 self-center"
            />
          </a>
        </div>
        <div className="md:w-7/12">
          <AFSlides
            className="shape-L mx-auto -mb-16 md:-mb-24"
            interval={10000}
          >
            <img
              className="slide w-full"
              src={children_watching_turtle_ai2x}
              alt="Cildren on our green campus, admiring a Tortoise."
            />
            <img
              className="slide w-full"
              src={children_watching_terrarium_ai2x}
              alt="Cildren on our green campus, admiring a Tortoise."
            />
            <img
              className="slide w-full"
              src={children_looking_at_horse}
              alt="Cildren on our green campus, admiring a Tortoise."
            />
            <img
              className="slide w-full"
              src={girl_n_horse_looking_at_each_other}
              alt="Cildren on our green campus, admiring a Tortoise."
            />
          </AFSlides>
        </div>
      </section>

      {/* 
        B E N E F I T S
        ===============
      */}
      <section className="section shape-gradient py-24 text-black md:flex md:gap-8">
        <div className="grow">
          <h2 className="w-[240px] pb-2 font-serif text-2xl font-bold text-black">
            Give Your Child The Best Start
          </h2>
          <div className="flex gap-6 py-5">
            <img
              className="w-8 flex-shrink-0 text-black"
              src={diversity_3_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24}
              alt="Icon of friends"
            />
            <p>Very small class sizes, typically between 6-10 students</p>
          </div>
          <div className="flex gap-6 py-5">
            <img
              className="w-8 flex-shrink-0 text-black"
              src={celebration_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24}
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
              src={forum_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24}
              alt=""
            />
            <p>Excellent communication with parents</p>
          </div>
          <div className="flex gap-6 py-5">
            <img
              className="w-8 flex-shrink-0 text-black"
              src={volunteer_activism_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24}
              alt=""
            />
            <p>
              A hands-on approach that acknowledges the unique learning styles
              for children, especially in the beginning years of school
            </p>
          </div>
          <div className="flex gap-6 py-5">
            <img
              className="w-8 flex-shrink-0 text-black"
              src={multimodal_hand_eye_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24}
              alt=""
            />
            <p>
              Incorporation of multiple intelligences (visual, verbal, logical,
              kinesthetic, etc.) to reach and engage each child
            </p>
          </div>
        </div>
        <div className="shrink basis-[700px]">
          <div className="ml-8 w-auto">
            <div className="addFuncSlides">
              <img
                className="-mb-[40%] ml-auto w-auto"
                src={children_on_patio_ai4x}
                alt="Children on our patio"
              />
            </div>
          </div>
          <div className="mr-8">
            <div className="addFuncSlides">
              <img
                className="-mb-40 mr-auto w-auto"
                src={girl_on_pony_graded}
                alt="A girl on Sweetie, our pony"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 
        T E S T I M O N I A L S
        =======================
      */}
      <section className="section pb-24 pt-32 text-center text-deepgreen">
        <h2 className="mx-auto w-[280px] pb-8 font-serif text-2xl font-bold text-black">
          What Other Parents Say About Us
        </h2>
        <div className="cards mx-auto max-w-[300px] gap-8 md:max-w-none md:gap-12">
          <div className="card text-left">
            <p>
              Their daycare has the benefits of a day care center, but with the
              feel of a family. Daycare doesn't close when they go on vacation
              or are sick because they have excellent subs.
            </p>
            <div className="flex gap-6 py-5">
              <div className="shape-S w-28">
                <img src={JeriD} alt="Photo of Jeri D" />
              </div>
              <div className="text-bold text-aqua">
                Jeri D.
                <br />
                <img src={stars} alt="5 stars" className="mr-auto w-24" />
              </div>
            </div>
          </div>
          <div className="card text-left">
            <p>
              They made us feel comfortable, welcomed, and they do genuinely
              love what they do. They have a great set up for the kids.
            </p>
            <div className="flex gap-6 py-5">
              <div className="shape-S w-28">
                <img src={GivannaN} alt="Photo of Jeri D" />
              </div>
              <div className="text-bold text-aqua">
                Givanna N.
                <br />
                <img src={stars} alt="5 stars" className="mr-auto w-24" />
              </div>
            </div>
          </div>
          <div className="card text-left">
            <p>
              My 2 year old absolutely loves Miss Sarah and Miss Connie! I
              struggled to find a daycare that she enjoyed and this one was a
              perfect match from the start.
            </p>
            <div className="flex gap-6 py-5">
              <div className="shape-S w-28">
                <img src={CourtneyT} alt="Photo of Jeri D" />
              </div>
              <div className="text-bold text-aqua">
                Courtney T.
                <br />
                <img src={stars} alt="5 stars" className="mr-auto w-24" />
              </div>
            </div>
          </div>
        </div>
        <div className="align-center mx-auto flex w-5/6 justify-around gap-4 pt-8">
          <div className="ml-auto self-center">on</div>
          <a
            href="https://www.yelp.com/biz/santiago-childrens-center-orange"
            target="_blank"
            className="mr-auto block w-28 self-center"
          >
            <img src={yelp} alt="Yelp logo" />
          </a>
        </div>
      </section>

      {/* 
        F A Q S
        =======
      */}
      <section className="section shape-gradient py-12 text-black">
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
          <p>Contact: Sarah Holtz, "714-478-0155" </p>
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
            <li>Babycare (8+ months)</li>
            <li>Potty Training</li>
            <li>Toddler Daycare</li>
          </ul>
          <p>
            <em>* If your child has siblings, please contact us.</em>
          </p>
        </details>
      </section>

      {/* 
        G E N E R A L   I N F O
        =======================
      */}
      <section className="section flex flex-col md:flex-row">
        <div className="mx-auto basis-[300px] self-center md:mr-0">
          <div className="flex gap-6 py-4">
            <img
              className="w-8 flex-shrink-0 text-black"
              src={schedule_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24}
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
              src={flag_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24}
              alt=""
            />
            <p>Established in 1983</p>
          </div>
        </div>
        <div className="-mb-16 mr-auto mt-12 basis-[400px] md:-mb-24">
          <div className="shape-L">
            <AFSlides interval={10500}>
              <img
                src={children_grooming_horse}
                alt="Children grooming horse"
              />
              <img
                src={children_playing_on_playground}
                alt="Children playing on playground"
              />
              <img src={children_n_teacher} alt="Children and teacher" />
            </AFSlides>
          </div>
        </div>
      </section>

      {/* 
        C T A
        =====
      */}
      <section className="section pb-8 pt-24">
        <div className="stacker gap-8 py-8 text-center md:gap-12 lg:py-12">
          <a
            className="btn shape-S m-auto flex max-w-[320px] justify-center align-middle md:mr-0"
            href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#97;&#114;&#97;&#104;&#46;&#115;&#97;&#110;&#116;&#105;&#97;&#103;&#111;&#99;&#104;&#105;&#108;&#100;&#101;&#110;&#115;&#99;&#101;&#110;&#116;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
            target="_blank"
          >
            <div>EMAIL US</div>
          </a>
          <div className="m-auto text-center md:ml-0 md:w-max md:text-left">
            <div className="font-bold text-forest">OR CALL</div>
            <div className="text-3xl font-bold text-forest">
              &#55;&#49;&#52;&#45;&#52;&#55;&#56;&#45;&#48;&#49;&#53;&#53;
            </div>
          </div>
        </div>
      </section>

      {/* 
        F O O T E R
        ===========
      */}
      <footer className="section shape-gradient copy-S py-14">
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
