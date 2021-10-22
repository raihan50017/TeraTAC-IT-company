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
    zIndex:9,
  },
  overlay:{
    position:"absolute",
    top:"0",
    left:"0",
    right:"0",
    bottom:"0",
    zIndex:5,
    backgroundColor:"rgba(0,0,0,.8)"
  }
}));


const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Image
        src="https://png.pngtree.com/thumb_back/fw800/background/20210115/pngtree-digital-backend-banner-technology-concept-particle-background-design-image_520150.jpg"
        srcSet="https://png.pngtree.com/thumb_back/fw800/background/20210115/pngtree-digital-backend-banner-technology-concept-particle-background-design-image_520150.jpg 2x"
        alt="About"
        className={classes.image}
        lazyProps={{
          width: '100%',
          height: '100%',
        }}
      />
      <Section className={classes.section}>
        <SectionHeader
          title="Contact us"
          subtitle="Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions."
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
