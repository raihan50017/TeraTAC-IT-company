import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';
import { HeroShaped, Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  heroBackgroundLight: {
    background:
      'linear-gradient(0deg, rgba(77, 5, 232, .9), rgba(77, 5, 232, .9)),url(https://c0.wallpaperflare.com/preview/918/958/450/adult-blond-hair-blurred-background-businesspeople.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  heroBackgroundDark: {
    background:
      'linear-gradient(0deg, rgba(0, 0, 0, .9), rgba(0, 0, 0, .9)),url(https://c0.wallpaperflare.com/preview/918/958/450/adult-blond-hair-blurred-background-businesspeople.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  fontWeight900: {
    fontWeight: 900,
  },
  leftSideContent: {
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    },
  },
  heroShaped: {
    '& .hero-shaped__image': {
      backgroundColor: theme.palette.alternate.main,
    },
    [theme.breakpoints.down('sm')]: {
      '& .hero-shaped__image': {
        position: 'relative',
      },
      '& .hero-shaped__wrapper': {
        flexDirection: 'column',
      },
    },
  },
  imageAnimation: {
    background: `url("https://assets.maccarianagency.com/the-front/web-screens/home/home-hero-bg-light.png")`,
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'scroll',
    backgroundSize: '400px auto',
    animation: `$slideshow 50s linear infinite`,
    width: '600%',
    height: '600%',
    backgroundColor: theme.palette.alternate.dark,
    top: '-25%',
    left: '-100%',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      backgroundSize: '800px auto',
    },
  },
  imageAnimationDark: {
    background: `url("https://assets.maccarianagency.com/the-front/web-screens/home/home-hero-bg-dark.png")`,
  },
  '@keyframes slideshow': {
    '0%': {
      transform: 'rotate(-13deg) translateY(-25%)',
    },
    '100%': {
      transform: 'rotate(-13deg) translateY(-80%)',
    },
  },
}));

const Hero = ({ themeMode = 'light', className, ...rest }) => {
  const classes = useStyles();

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Transform your business to the next level with our
      <br />
      <TypedText
        component="span"
        variant="h2"
        color="secondary"
        className={classes.fontWeight900}
        typedProps={{
          strings: ['interactive', 'remote ', 'IT solutions'],
          typeSpeed: 50,
          loop: true,
        }}
      />
    </Typography>
  );

  const subtitle =
    'We provide comprehensive and professional remote IT services through consulting, design and implementation, emergency and breakdown support, and partner assistance across North America. When you work with us, you can feel confident you get the same level of comfort and support that you would receive with a trusted and experienced team in house. ';

  const docsButton = (
    <Button
      size="large"
      variant="outlined"
      color="primary"
      component="a"
      href="/documentation"
    >
      Documentation
    </Button>
  );

  const buyButton = (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component="a"
      href="/home"
    >
      Get started
    </Button>
  );

  const leftSideContent = (
    <SectionHeader
      title={title}
      subtitle={subtitle}
      align="left"
      titleProps={{
        variant: 'h2',
        color: 'textPrimary',
      }}
      ctaGroup={[docsButton, buyButton]}
      data-aos="fade-right"
      disableGutter
      className={classes.leftSideContent}
    />
  );
  return (
    <div style={{}} className={themeMode === 'dark' ? classes.heroBackgroundDark: classes.heroBackgroundLight} {...rest}>
      <Section>
        <SectionHeader
          titleWhite = {themeMode === 'dark' ? "":"white" }
          subTitleWhite = {themeMode === 'dark' ? "":"rgba(255,255,255, 0.9)" }
          title={title}
          subtitle={subtitle}
          align="left"
          titleProps={{
            variant: 'h2',
            color: 'textPrimary',
          }}
          ctaGroup={[buyButton]}
          data-aos="fade-right"
          disableGutter
          className={classes.leftSideContent}
        />
      </Section>
      {/* <HeroShaped
        className={classes.heroShaped}
        leftSide={leftSideContent}
        rightSide={(
          <div
            className={clsx(
              classes.imageAnimation,
              themeMode === 'dark' ? classes.imageAnimationDark: '',
            )}
          />
        )}
      /> */}
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Theme mode
   */
  themeMode: PropTypes.string,
};

export default Hero;
