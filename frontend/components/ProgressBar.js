import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: "75%"
  },
  linearProgress: {
    height: 20, 
  },
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    marginRight: '10px',
  },

});

function LinearProgressWithLabel(props) {
  const classes = useStyles();

  return (
    <Box className={classes.progressContainer}>
      <Box className={classes.progressBar} mr={1}>
        <LinearProgress
          variant="determinate"
          {...props}
          classes={{
            root: classes.linearProgress, 
            bar: classes.linearProgress, 
          }}
        />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired
};

export default function ProgressBar({perc}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={perc} />
    </div>
  );
}