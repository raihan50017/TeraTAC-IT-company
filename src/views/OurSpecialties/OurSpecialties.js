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

const OurSpecialties = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <h1>Our Specialties/Who we are</h1>
        <Typography variant="body1">
          At TeraTAC, we specialize in creating innovative solutions that
          deliver premium quality output to your organization, no matter what
          size, industry, or geolocation. We have a strong commitment to
          maintaining the lowest customer response times and only hire highly
          experienced technical consultants who possess advanced level, industry
          recognized technical certifications.
        </Typography>
        <br></br>
        <h1>Expert level services </h1>
        <Typography variant="body1">
          We provide expert level services with deep understanding of modern
          information technology systems, processes, and techniques for your
          business. We’re always prepared and equipped to handle any situation.
        </Typography>
        <br></br>
        <h1>Immediate remote engagement </h1>
        <Typography variant="body1">
          Our solutions offer immediate, on-demand, and remote engagement (via
          WebEx) with certified, top-level professionals for emergency and
          troubleshooting support so you never have to worry about extended
          downtimes.
        </Typography>
        <br></br>
        <h1>Key industry knowledge </h1>
        <Typography variant="body1">
          Our vast industry and client experience allows you the opportunity to
          have key insights into receiving optimal and advanced support from
          professionals who have expertise in multiple vendor products and
          technologies.
        </Typography>
        <br></br>
        <h1>24/7 Support </h1>
        <Typography variant="body1">
          When you work with us, we guarantee 24/7 on-demand support for your
          business from our globally spread team of consultants. No matter what
          time of day, or which time zone you’re on, we always have your systems
          and IT needs covered.
        </Typography>
        <br></br>
        <h1>Ability to self-manage </h1>
        <Typography variant="body1">
          Our unique and flexible approach allows you to fully self-manage all
          our services directly through our website. You can login anytime, from
          anywhere to manage any custom service we provide to you.
        </Typography>
        <br></br>
        <h1>Customers who benefit from our services </h1>
        <Typography variant="body1">
          We provide our innovative and advanced solutions for a wide variety of
          industries across North America, including small, medium, and large
          sized businesses. Industries that have benefitted from our services
          include:
          <ul style={{ margin: '0px', padding: '0px' }}>
            <li> Financial institutes</li>
            <li> Manufacturing companies</li>
            <li> School districts</li>
            <li>Government entities</li>
            <li>Healthcare institutes</li>
            <li>Professional services firms</li>
            <li> Value Added Resellers (VARs) in the IT industry</li>
          </ul>
        </Typography>
      </Section>
    </div>
  );
};

export default OurSpecialties;
