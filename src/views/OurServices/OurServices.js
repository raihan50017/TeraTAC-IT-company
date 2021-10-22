import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Contact,
  Gallery,
  Hero,
  Partners,
  Story,
  Team,
  WhoWeAre,
} from './components';

import { team, companies, mapData, gallery } from './data';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionPartners: {
    boxShadow: '0 5px 20px 0 rgba(90, 202, 157, 0.05)',
    '& .section-alternate__content': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
}));

const OurServices = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <h1>Our Services</h1>
        <Typography variant="body1">
          With extensive experience in the technology industry related to
          infrastructure, user experience, and applications, we specialize in
          providing custom remote solutions that involve designing,
          implementing, and managing your IT processes. This enables you to
          minimize risk and transform your businesses ahead of the competition.{' '}
        </Typography>
        <br></br>
        <h1>We offer the following robust services:</h1>
        <h1>Consulting Services</h1>
        <Typography variant="body1">
          Our strategic consulting services focus on understanding your business
          and your most critical issues and opportunities. We work with you to
          find unique ways to transform your business by utilizing our skills
          and expertise. We offer profound and functional know-how to provide
          you with a competitive edge. Our unique approach allows us to
          collaborate with you to enhance core aspects of your business.
        </Typography>
        <br></br>
        <h1>Design and Implementation</h1>
        <Typography variant="body1">
          We work with you to first understand your unique needs and goals as it
          relates to your IT solutions. From there, our highly skilled experts
          will create premium designs that involve break-through technical
          trends for real-world scenarios that deliver top results. Our
          solutions are completely tailored to your needs, and we work
          collaboratively with you to implement and manage the final result.
        </Typography>
        <br></br>
        <h1>Emergency and Breakdown Support</h1>
        <Typography variant="body1">
          With 24/7 support provided by TeraTAC, you never have to worry about
          downtime. We provide emergency and breakdown support no matter what
          time of day or what time zone you’re on. We’re always available and
          willing to help when you need it most. You can rest assured you’re in
          safe hands with us.
        </Typography>
        <br></br>
        <h1>Partner Assistance for Value Added Resellers</h1>
        <Typography variant="body1">
          Our partner assistance to Value Added Resellers (VARs) will provide
          creative solutions to upgrade your offering and bring more value to
          your customers. Our systems integrate seamlessly with your business
          process applications to increase your value and competitiveness in the
          market. We have reliable technologies, are cloud ready, provide
          flexible pricing models, and will provide an easy connection with your
          business.
        </Typography>
        <br></br>
        <h1>Premium vendors</h1>
        <Typography variant="body1">
          We’re proud to utilize the latest technology and currently support
          premium products from our growing list of vendors.
        </Typography>
        <h3> Cisco</h3>
        <h3>Palo Alto</h3>
        <h3>Juniper</h3>
        <h3>Fortinet</h3>
        <h3>AWS</h3>
        <h3>Microsoft</h3>
        <h3>VMware</h3>
        <h3>Silver Peak</h3>
        <h3>Velo Cloud</h3>
        <h3>Aruba</h3>
      </Section>
    </div>
  );
};

export default OurServices;
