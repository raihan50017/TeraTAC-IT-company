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

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <h1>Technologies</h1>
        <Typography variant="body1">
          Our innovative and growing services focus on deployments, daily
          operations, and on-demand trouble shooting in the following technology
          areas.
        </Typography>
        <br></br>
        <h1>Enterprise Networking</h1>
        <Typography variant="body1">
          Our professional service solutions provide optimal network reliability
          and service quality for your business. Our systems remotely support
          all your network needs at a fraction of the cost. We reduce the
          business impact of IT emergencies by immediately responding to any
          occurrences or unforeseen issues. Our solutions cover all aspects of
          your network from technical support in routing and switching,
          wireless, voice, and network security functions.
        </Typography>
        <br></br>
        <h1>Cloud Architecture</h1>
        <Typography variant="body1">
          TeraTAC’s cloud architecture services utilize the latest technology to
          provide comprehensive guidance and address cloud adoption and
          optimization constraints. We support cloud deployments, migrations,
          and operations that integrate core infrastructure and strategy along
          with increased security. This ensures you can innovate efficiently
          with the latest cloud capabilities. This will also help minimize any
          risks by utilizing extremely safe and secure cloud platforms while
          reducing downtime.
        </Typography>
        <br></br>
        <h1>Cyber Security</h1>
        <Typography variant="body1">
          TeraTAC cyber security solutions offer premium technology to assess,
          reduce, and manage your risk. We support cyber security deployments,
          operations, threat mitigation, and remediation services based on your
          unique requirements. Our team of experts along with our technology
          provide deep understanding of complex cyber security issues to protect
          your business, data, users, and assets. Our systems provide continuous
          insight into finding critical threats for faster and more efficient
          response time.
        </Typography>
        <br></br>
        <h1>Data Center Networking</h1>
        <Typography variant="body1">
          We support deployments, operations, and troubleshooting data center
          infrastructure technologies. This includes software, hardware, and
          cloud services. As applications continue to migrate to cloud
          environments, data centers and their networks need scalable
          constructs, automation based on pre-disposed policy, and refined and
          seamless operations with public clouds.
        </Typography>
        <br></br>
        <h1>Virtualization</h1>
        <Typography variant="body1">
          Converting to virtualization helps control heavy workloads across data
          centers. It also helps reduce energy consumption and IT
          infrastructure. Our comprehensive virtualization solution utilizes the
          latest advanced technology trends. We’ll help your business convert to
          a virtualized IT environment to transform your business and streamline
          your IT processes.
        </Typography>
      </Section>
    </div>
  );
};

export default About;
