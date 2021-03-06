import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../assets/cm-logo.svg';
import ExpandableCard from '../components/ExpandableCard';
import PageWrapper from '../components/PageWrapper';
import ROUTES from '../components/Router/RouteConfig';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      textAlign: 'center',
    },
    logoContainer: {
      marginTop: '-5vh',
    },
    actionText: {
      marginTop: '-10vh',
    },
    button: {
      margin: '1em 0',
    },
    cardContent: {
      fontFamily: 'Bilo',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: '22pt',
    },
    spacing: {
      marginTop: '-20px',
      marginBottom: '20px',
    },
  })
);

const ClimatePersonality: React.FC<{}> = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <PageWrapper bgColor="#EFE282">
      <Grid
        item
        sm={12}
        lg={4}
        container
        direction="row"
        alignItems="center"
        className={classes.logoContainer}
      >
        <Grid item xs={3}>
          <Logo width="76" data-testid="climate-mind-logo" />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h4">Good to meet you!</Typography>
        </Grid>
      </Grid>

      <Grid item>
        <Box ml={2} mr={2} mb={1}>
          <Typography
            variant="h6"
            align="center"
            className={classes.typography}
          >
            Lets find out your climate personality
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <ExpandableCard title="What's a Climate Personality?">
          <Typography className={`${classes.cardContent} ${classes.spacing}`}>
            To make decisions we each employ three personal values.
          </Typography>
          <Typography className={classes.cardContent}>
            These values can be linked to climate concepts and Climate Mind
            works by giving you a personal view of how climate change is
            affecting you now.
          </Typography>
        </ExpandableCard>
      </Grid>

      <Grid item>
        <Box pr={5} pl={5} className={classes.actionText}>
          <Typography className={classes.typography}>
            Read each statement and decide how much you are like or not like
            that.
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <Box>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => history.push(ROUTES.ROUTE_QUIZ)}
          >
            Take the quiz
          </Button>
        </Box>
      </Grid>
    </PageWrapper>
  );
};

export default ClimatePersonality;
