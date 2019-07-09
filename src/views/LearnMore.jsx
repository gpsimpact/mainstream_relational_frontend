import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


class LearnMore extends PureComponent {
  render() {
    return (
      <section id="page-content">
        <Container>
          <Row bsPrefix={"row justify-content-center py-5"}>
            <Col md={8}>
                <h1 className="page-title">Learn More</h1>

                <h3 className="section-title">About the Voter to Voter Project </h3>

                <p>Voter to Voter is a relational engagement get out the vote project. We ask Ambassadors to connect with the people they already know: family, friends, or co-workers, to encourage them to vote. Studies have found that this is much more effective than hearing from strangers, and our results bear this out.</p>

                <p>Voting Ambassadors are the lifeblood of our program. As an Ambassador, you will have a personal dashboard on this site. On that dashboard, you can add the people you know, connect them to public voter data, and then encourage them through the process of voting. </p>

                <p><Link to={'/join'} className="section-link ">Join Voter to Voter now </Link></p>


                <h3 className="section-title">Bring A Team</h3>
                <p>Do you have five or ten friends who’d like to do this? Do you belong to an organization, like a church, a business association, or a community group? Not only can you have a team, but as the Team Lead, you can get an overview of how your team is doing! If you’re interested in fielding a Team on Voter to Voter get in touch with us at <a href="mailto:contact@votertovoter.org">contact@votertovoter.org</a></p>


                <h3 className="section-title">It's Easy</h3>
                <p>Our online tool brings you the power of public voter data, the same information political parties and candidates use. With just a web browser, on desktop or mobile, you can see if your friends, family, or co-workers have voted yet, and remind them of the importance of voting.</p>


                <h3 className="section-title"> We Support You</h3>
                <p>The Voter to Voter project and staff will support you the whole way! We have online communities, weekly video chats, and regular emails full of tips and ideas, reminders about important dates, and suggested actions. In addition, we hold trainings throughout the election season, and you’re just an email away from personal help! Get in touch at <a href="mailto:contact@votertovoter.org">contact@votertovoter.org</a></p>

                <h3 className="section-title">Success Stories</h3>
                <p>We have so many stories from Ambassadors who have seen real success with this program. Family they never thought would vote. Friends who always said they weren’t “political.” Co-workers who just never got around to it.</p>

            </Col>
          </Row>
        </Container>


      </section>
    );
  }
}

export default LearnMore;
