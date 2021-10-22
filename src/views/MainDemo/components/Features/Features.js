import React from 'react';
import PropTypes from 'prop-types';
import { Grid, colors, makeStyles } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
}));

const data = [{
  icon: 'fas fa-cubes',
  color: colors.indigo,
  title: 'Expert level services ',
  subtitle: 'We provide expert level services with deep understanding of modern information technology systems, processes, and techniques for your business. We’re always prepared and equipped to handle any situation.',
}, {
  icon: 'fas fa-palette',
  color: colors.indigo,
  title: 'Immediate remote engagement',
  subtitle: 'Our solutions offer immediate, on-demand, and remote engagement (via WebEx) with certified, top-level professionals for emergency and troubleshooting support so you never have to worry about extended downtimes.',
}, {
  icon: 'fas fa-code',
  color: colors.indigo,
  title: 'Key industry knowledge',
  subtitle: 'Our vast industry and client experience allows you the opportunity to have key insights into receiving optimal and advanced support from professionals who have expertise in multiple vendor products and technologies.',
}, {
  icon: 'fas fa-rocket',
  color: colors.indigo,
  title: '24/7 Support',
  subtitle: 'When you work with us, we guarantee 24/7 on-demand support for your business from our globally spread team of consultants. No matter what time of day, or which time zone you’re on, we always have your systems and IT needs covered.',
}, {
  icon: 'fas fa-hand-holding-heart',
  color: colors.indigo,
  title: 'Ability to self-manage',
  subtitle: 'Our unique and flexible approach allows you to fully self-manage all our services directly through our website. You can login anytime, from anywhere to manage any custom service we provide to you. ',
}];

const subtitle = 'At TeraTAC, we specialize in creating innovative solutions that deliver premium quality output to your organization, no matter what size, industry, or geolocation. We have a strong commitment to maintaining the lowest customer response times and only hire highly experienced technical consultants who possess advanced level, industry recognized technical certifications. ';


const Features = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Our Specialties/Who we are"
        subtitle={subtitle}
        fadeUp
        titleProps={{
          variant: 'h3',
          color: 'textPrimary',
          className: classes.fontWeight900,
        }}
      />
      <Grid container spacing={2}>
        {data.map((adv, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={6}
            md={4}
            data-aos="fade-up"
          >
            <CardBase
              liftUp
              variant="outlined"
              style={{ borderTop: `5px solid ${adv.color[500]}` }}
            >
              <DescriptionListIcon
                icon={
                  <IconAlternate
                    fontIconClass={adv.icon}
                    color={adv.color}
                    shape="circle"
                    size="small"
                  />
                }
                title={adv.title}
                subtitle={adv.subtitle}
                align="left"
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
