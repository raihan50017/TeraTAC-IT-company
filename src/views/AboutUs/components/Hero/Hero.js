import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    minHeight: 400,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
    zIndex:5,
  },
  overlay:{
    position:"absolute",
    top:"0",
    left:"0",
    bottom:"0",
    right:"0",
    backgroundColor:"rgba(0,0,0,.8)",
    zIndex:2,
  }
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Image
        src="https://assets.maccarianagency.com/the-front/photos/about/hero-image.png"
        srcSet="https://assets.maccarianagency.com/the-front/photos/about/hero-image.png 2x"
        alt="About"
        className={classes.image}
        lazyProps={{
          width: '100%',
          height: '100%',
        }}
      />
      <Section className={classes.section}>
        <SectionHeader
          title="About us"
          subtitle="At TeraTAC, we provide a unique approach in how we remotely collaborate with your business. We pride ourselves in our innovative hands-on approach that removes IT work from your team and allows you to have more time to focus on your core business product. Our comprehensive remote offerings streamline tasks, improve processes, and reduce cost for you."
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h3',
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        />
      </Section>
      <div className={classes.overlay}></div>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
