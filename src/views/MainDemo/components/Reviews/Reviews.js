import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(2),
  },
  fontWeight900: {
    fontWeight: 900,
  },
  disablePadding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const reviewGroup1 = [
  {
    name: 'Financial institutes',
    date: 'December 11, 2020',
    feedback: `Best Customer Support I have ever got, Just awesome product. I bought template bundle from another agency but only because of their customer support behaviour I returned and turned to this product. It was one of the best decisions I have taken becasue This team supported me a lot and always available for any querries and they provide really helpful answers. Definitely I'll look for more products from this company.`,
  },
  {
    name: 'Manufacturing companies',
    date: 'November 11, 2020',
    feedback: `I've been working with the product, building out a new site. I'm so very, very happy with the quality of the code and the use of best practices. I've been able to modify existing components and make updates that are required for my use case with absolute ease. I've only started to explore the Figma components, but having them available is a big deal for us and we will utilize them more in upcoming development efforts. I've personally learned a great deal by studying and exploring this kit. This has been well worth the effort and I'm very satisfied.`,
  },
];

const reviewGroup2 = [
  {
    name: 'School districts',
    date: 'November 9, 2020',
    feedback: `Absolutely loved it . This product truly deserves 10 out of 10 and I'm grateful for the developers who built this for saving me tons of time  Specially grateful for the quality of the code .very well done`,
  },
  {
    name: 'Daniel Still',
    date: 'November 8, 2020',
    feedback: `The code is structured incredibly well, and the design is clean and easy to work with. Typescript would be the icing on the cake, but otherwise it is perfect!`,
  },
];

const reviewGroup3 = [
  {
    name: 'Healthcare institutes',
    date: 'November 5, 2020',
    feedback: `This multipurpose template helped shave out numerous hours from our development process by providing ready made responsive components. I am very satisfied with the quality of the product and will consider using it in the future.`,
  },
  {
    name: 'Professional services firms',
    date: 'November 3, 2020',
    feedback: `This is one of the best purchases I have EVER made. Beautiful, dynamic code with media considerations and the proper project structure you could envision. The documentation is so clear & helpful and has taught me so much in terms of how to think the 'React way'. Then on top of that, the customer service is fantastic. Detailed responses that also teach me stuff not included in this purchase! Gevorg and his team are top notch, cannot understate my happiness with this purchase.`,
  },
];

const Reviews = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Customers who benefit from our services"
        titleProps={{
          variant: 'h2',
          className: classes.fontWeight900,
        }}
        align="center"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {reviewGroup1.map((review, index) => (
            <Card key={index} className={classes.card}>
              <CardContent>
                <List disablePadding>
                  <ListItem disableGutters className={classes.disablePadding}>
                    <ListItemText
                      primary={review.name}
                      secondary={review.date}
                    />
                  </ListItem>
                  <ListItem disableGutters className={classes.disablePadding}>
                    <ListItemText primary={review.feedback} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          {reviewGroup2.map((review, index) => (
            <Card key={index} className={classes.card}>
              <CardContent>
                <List disablePadding>
                  <ListItem disableGutters className={classes.disablePadding}>
                    <ListItemText
                      primary={review.name}
                      secondary={review.date}
                    />
                  </ListItem>
                  <ListItem disableGutters className={classes.disablePadding}>
                    <ListItemText primary={review.feedback} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          {reviewGroup3.map((review, index) => (
            <Card key={index} className={classes.card}>
              <CardContent>
                <List disablePadding>
                  <ListItem disableGutters className={classes.disablePadding}>
                    <ListItemText
                      primary={review.name}
                      secondary={review.date}
                    />
                  </ListItem>
                  <ListItem disableGutters className={classes.disablePadding}>
                    <ListItemText primary={review.feedback} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

Reviews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Reviews;
