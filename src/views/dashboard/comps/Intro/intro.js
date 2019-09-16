import React, { PureComponent } from 'react';

export const Intro = () => {
    return (
        <div className="content">
        <h1 className="title">Get started by adding a contact.</h1>
        <p>
          Welcome to this non-partisan relational advocacy tool. Thank you for agreeing to
          reach out to your family, friends, and community to help engage them in voting.
          There is no more effective get out the vote effort than people getting the
          people they know to vote.
        </p>

        <p>
          This tool revolves around your contacts. When you add a contact, you will be
          presented with a list of tasks for that person. Some are pretty critical:
          registering them to vote, getting them to request an advance ballot, and getting
          them to vote. Others are engagement tasks along the way to those milestones. As
          you complete tasks, you will receive points, so you can see how you&apos;re
          doing.
        </p>

        <p>
          We encourage you to list at least ten people you know, and take the first step:
          matching them up to the public voter file. If you can&apos;t find a match, we
          have instructions for checking for errors or getting in touch to see if they are
          registered to vote, and registering them if they are not.
        </p>

        <p>Here is a brief overview of the points you may earn:</p>
        <ul>
          <li>For having 10 or more contacts: 10 pts.</li>
          <li>For matching a contact to a record in the voter file: 1 pt. each</li>
          <li>
            For each contact, related to the primary election, then again for the general
            election:
          </li>
          <li>
            <ul>
              <li>Contact applies for an advance ballot by mail: 5 pts.</li>
              <li>
                Contact votes early (submits ballot by mail or votes in advance in
                person): 5 pts.
              </li>
              <li>
                Contact votes (any which way, early, or on election day): 10-40 pts.
                depending on the contact&apos;s record of voting. Those who vote every
                election garner fewer points than those who vote infrequently. We&apos;re
                creating a culture of voting here!
              </li>
            </ul>
          </li>
          <li>Additional, self-reporting tasks will be made available for 1 pt. each.</li>
        </ul>
        <p>
          In the end, you make all the difference. Your enthusiasm, your dedication to
          creating a culture of voting will convince your circle to get out and become
          engaged, too. Thank you.
        </p>
      </div>
    );
}