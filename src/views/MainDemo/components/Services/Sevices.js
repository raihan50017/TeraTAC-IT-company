import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, colors } from '@material-ui/core';
import { IconAlternate, SectionHeader } from 'components/molecules';
import { DescriptionListIcon, Section } from 'components/organisms';

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
}));

const data = [
  {
    icon: 'fas fa-layer-group',
    title: 'Consulting Services',
    subtitle:
      'Our strategic consulting services focus on understanding your business and your most critical issues and opportunities. We work with you to find unique ways to transform your business by utilizing our skills and expertise. We offer profound and functional know-how to provide you with a competitive edge. Our unique approach allows us to collaborate with you to enhance core aspects of your business.',
  },
  {
    icon: 'fab fa-sketch',
    title: 'Design and Implementation',
    subtitle:
      'We work with you to first understand your unique needs and goals as it relates to your IT solutions. From there, our highly skilled experts will create premium designs that involve break-through technical trends for real-world scenarios that deliver top results. Our solutions are completely tailored to your needs, and we work collaboratively with you to implement and manage the final result.',
  },
  {
    icon: 'fas fa-code',
    title: 'Emergency and Breakdown Support',
    subtitle:
      "With 24/7 support provided by TeraTAC, you never have to worry about downtime. We provide emergency and breakdown support no matter what time of day or what time zone you’re on. We’re always available and willing to help when you need it most. You can rest assured you’re in safe hands with us. ",
  },
  {
    icon: 'fas fa-handshake',
    title: 'Partner Assistance for Value Added Resellers',
    subtitle:
      "Our partner assistance to Value Added Resellers (VARs) will provide creative solutions to upgrade your offering and bring more value to your customers. Our systems integrate seamlessly with your business process applications to increase your value and competitiveness in the market. We have reliable technologies, are cloud ready, provide flexible pricing models, and will provide an easy connection with your business.",
  },
];
const Services = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
   
  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Our Services
      <Typography component="span" variant="inherit" color="primary"></Typography>
    </Typography>
  );

  const subtitle = 'With extensive experience in the technology industry related to infrastructure, user experience, and applications, we specialize in providing custom remote solutions that involve designing, implementing, and managing your IT processes. This enables you to minimize risk and transform your businesses ahead of the competition';

  return (
    <div className={className} {...rest}>
      <Section narrow className={classes.noPaddingBottom}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleProps={{
            variant: 'h2',
            color: 'textPrimary',
          }}
          data-aos="fade-up"
        />
      </Section>
      <Section className={classes.noPaddingTop}>
        <Grid container spacing={isMd ? 4 : 2}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} sm={4} data-aos={'fade-up'}>
              <DescriptionListIcon
                title={item.title}
                subtitle={item.subtitle}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="medium"
                    color={colors.indigo}
                  />
                }
                align="left"
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Services;
