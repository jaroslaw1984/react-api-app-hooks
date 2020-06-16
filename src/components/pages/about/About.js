import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import img_1 from "../../../assets/images/img_1.jpg";
import img_2 from "../../../assets/images/img_2.jpg";
import img_3 from "../../../assets/images/img_3.jpg";
import img_4 from "../../../assets/images/img_4.jpg";
import img_5 from "../../../assets/images/img_5.jpg";

const About = () => {
  return (
    <Fragment>
      <div className="container__about">
        <header>
          <h1>About this application</h1>
          <p>Version: 1.0.0</p>
        </header>

        <main>
          <section>
            <p>
              This application allow you search your other half that can be male
              or female. If you find a person that you like it, add that person
              to favorite bookmark or just rate the person. In the favorite
              panel you have the ability to manage people by removing them or
              can check details about the person you are interested in by
              clicking the "More" button. You will find personal details where
              he/she lives, age, e-mail. If you have not rated this person
              before, you can do it there as well.
            </p>
          </section>

          <section>
            <h2>How it works...</h2>

            <h3>Select a gender.</h3>
            <img src={img_1} alt="Gender selection" />
            <p>
              After you select a gender you will see fetched data from outer
              free API for generating random user data that is call{" "}
              <a
                href="https://randomuser.me/"
                alt="https://randomuser.me/"
                className="link"
              >
                randomuser.me
              </a>
            </p>
          </section>

          <section>
            <h3>Rate the person</h3>
            <img src={img_2} alt="See how to rate a person" />
            <p>
              The application allows you to rate people, if you add stars, the
              application will remember your rating when the same person is
              displayed again
            </p>
          </section>

          <section>
            <h3>Add favorite person to bookmark</h3>
            <img src={img_3} alt="See how to add person to bookmark" />
            <p>
              If any person you like to add as a favorite you can do it by
              pressing an icon in the right corner. If you want to add the same
              person twice, the application will not allow to do that.
            </p>
          </section>

          <section>
            <h3>Favorite panel</h3>
            <img src={img_4} alt="Favorite panel options" />
            <p>
              Favorite panel allow to mange people that were added to this
              bookmark also data are added to local storage in case when browser
              will be close or refresh and we don't wanna lose a persons that we
              added. Panel allow you to see more personal details or delete that
              person.
            </p>
          </section>

          <section>
            <h3>More details</h3>
            <img src={img_5} alt="How details are view" />
            <p>
              More details allow you see personal information about were the
              person lives, age, email. From details you can rate person and add
              to favorite panel.
            </p>
          </section>

          <Link to="/">
            <button className="button button__about--back" alt="Back">
              Back
            </button>
          </Link>
        </main>
      </div>
    </Fragment>
  );
};

export default About;
