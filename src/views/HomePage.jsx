import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import ALL_ORGS from "../data/queries/allOrgs";

class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <section className="hero is-vtov-blue is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Relational GOTV</h1>
              <h2 className="subtitle">
                Organize your contacts to make a difference.
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <h2>Ready to make a difference?</h2>
                  <p>
                    Welcome to the online tool for the non-partisan{" "}
                    <a href="https://www.be-a-voter.org/voter_to_voter">
                      Voter to Voter project.
                    </a>
                    Welcome to the online tool for the non-partisan Voter to
                    Voter project. We are using this website to connect voting
                    ambassadors with the every day voters they know. As an
                    ambassador for your team, you'll have a dashboard where you
                    can identify your friends, family, or peers, and guide them
                    through the process of becoming engaged voters. The tool
                    will let you keep track of their progress, and will provide
                    tips, timely messaging, and optional tasks to help you get
                    them to vote. This project is strictly non-partisan, and the
                    tool imposes no specific position or policy messaging,
                    except, of course, that voting is important.
                  </p>
                  <h3>Here's how you can get involved:</h3>
                  <ol>
                    <li>
                      If you've been pointed here by a team or organization,
                      find them in the list below, click, and join their
                      efforts.
                    </li>
                    <li>
                      If you've heard about Voter to Voter but want to learn
                      more,{" "}
                      <a href="https://www.be-a-voter.org/voter_to_voter">
                        visit our Be A Voter website
                      </a>{" "}
                      and sign up to get an overview training of the effort and
                      this tool.
                    </li>
                    <li>
                      If you have questions, contact Lindsay at{" "}
                      <a href="mailto:lindsay@mainstreamcoalition.org">
                        lindsay@mainstreamcoalition.org
                      </a>{" "}
                      or call <a href="tel:9132201400">(913) 220-1400.</a>
                    </li>
                    <li>
                      <strong>Don’t want to wait?</strong> See <a href="https://docs.google.com/document/d/1Utl20IjP9uhVjeZO-aPi2v6u9LBDZwkWHC4rFEHHqPg/edit">these simple instructions</a> and <a href="https://votertovoter.org/org/mainstream">click here to sign up for MainStream’s Team!</a>
                    </li>
                  </ol>
                  <p>
                    If you have any questions, you can{" "}
                    <a href="https://www.be-a-voter.org/voter_to_voter">
                      learn more about Voter to Voter at our website.
                    </a>
                  </p>
                  <h2>Voter to Voter Partner Teams</h2>
                  <p>
                    Find your team in the list below and click to learn more
                    about them, contact them, or register as an ambassador for
                    their Voter to Voter effort. Thank you for being engaged.
                  </p>
                  <Query
                    query={ALL_ORGS}
                    variables={{
                      limit: 200,
                      orderBy: [{ sort: "name", direction: "ASC" }]
                    }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return <div className="loader" />;
                      if (error) return <p>Error!</p>;
                      return (
                        <ul>
                          {data.organizations.items.map(org => (
                            <li key={org.id}>
                              <Link to={`/org/${org.slug}`}>{org.name}</Link>
                            </li>
                          ))}
                        </ul>
                      );
                    }}
                  </Query>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
