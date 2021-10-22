import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 520,
  },
}));

const Story = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
            <SectionHeader
              title="Our story"
              subtitle="With extended years of industry experience, our highly skilled team is passionate about bringing you the most advanced technologies and techniques. We only work with the best possible tools and stay head of the latest trends in technology, so you don’t have to. We are always willing and ready to help you achieve your goals. We’re constantly training and educating our team members on deep technical skills to provide you a competitive edge in your industry. 

              Our self-managed and fully automated systems provide you with ultimate convenience in your business. This ensures everything runs smoothly on your end 24/7, creating no extra work for you. You can trust you’re in good hands and your IT processes are running efficiently and effectively with us. Our integrated solutions simplify IT processes for countless clients like you across many industries. With our extensive years of service, our experts are committed to understanding your unique needs to increase efficiencies and productivity while reducing cost and minimizing risk.
              "
              disableGutter
              align="justify"
              subtitleProps={{
                color: 'textPrimary',
                variant: 'body1',
              }}
            />
          </div>
        </Grid>
        <Grid
          item
          container
          justify={isMd ? 'flex-end' : 'flex-start'}
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://cdn.betakit.com/wp-content/uploads/2018/06/rawpixel-678089-unsplash1-1050x700.jpg"
            alt="Our story"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Story.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Story;
