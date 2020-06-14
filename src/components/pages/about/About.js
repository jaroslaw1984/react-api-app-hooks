import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <div className="container__about">
        <header>
          <h1>About this application</h1>
          <p>Version: 1.0.0</p>
        </header>

        <main>
          <article>
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
          </article>

          <article>
            <h3>How it works...</h3>

            <h4>Select a gender.</h4>
            <span>--img--</span>
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
          </article>

          <article>
            <h4>Rate the person</h4>
            <span>--img--</span>
            <p>
              The application allows you to rate people, if you add stars, the
              application will remember your rating when the same person is
              displayed again
            </p>
          </article>

          <article>
            <h4>Add favorite person to bookmark</h4>
            <span>--img--</span>
            <p>
              If any person you like to add as a favorite you can do it by
              pressing an icon in the right corner. If you want to add the same
              person twice, the application will not allow to do that.
            </p>
          </article>

          <article>
            <h4>Favorite panel</h4>
            <span>--img--</span>
            <p>
              Favorite panel allow to mange people that were added to this
              bookmark also data are added to local storage in case when browser
              will be close or refresh and we don't wanna lose a persons that we
              added. Panel allow you to see more personal details or delete that
              person.
            </p>
          </article>

          <article>
            <h4>More details</h4>
            <span>--img--</span>
            <p>
              More details allow you see personal information about were the
              person lives, age, email. From details you can rate person and add
              to favorite panel.
            </p>
          </article>

          <Link to="/">
            <button className="button button__about--back">Back</button>
          </Link>
        </main>
      </div>
    </Fragment>
  );
};

export default About;
