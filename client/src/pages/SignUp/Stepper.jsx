import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import FlareIcon from '@material-ui/icons/Flare';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import StarIcon from '@material-ui/icons/Star';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { PartOne, PartTwo, PartThree } from './Parts';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center'
  },
  active: {
    color: '#784af4'
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient(270deg, rgba(222,184,84,1) 43%, rgba(222,184,84,1) 100%)'
    }
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient(270deg, rgba(222,184,84,1) 43%, rgba(222,184,84,1) 100%)'
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundImage:
      'linear-gradient(270deg, rgba(222,184,84,1) 43%, rgba(222,184,84,1) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage:
      // 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      'linear-gradient(270deg, rgba(222,184,84,1) 43%, rgba(222,184,84,1) 100%)'
  }
});

//   const trackerStyles = makeStyles({
//       root: {
//         backgroundColor: 'transparent'
//       }
//   })

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  // const classesTwo = trackerStyles();
  const { active, completed } = props;

  const icons = {
    1: <FlareIcon />,
    2: <Brightness3Icon />,
    3: <StarIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: 'white'
  },
  tracker: {
    backgroundColor: 'transparent'
    // color: 'white'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  next: {
    marginRight: theme.spacing(1),
    backgroundColor: '#dfbc60',
    marginLeft: 'auto',
    justifySelf: 'flex-end'
  },
  back: {
    marginRight: theme.spacing(1),
    color: 'white'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    'Tell us how you identify',
    "Let's gather some data to generate your signs",
    'Set up your account'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PartOne />;
    case 1:
      return <PartTwo />;
    case 2:
      return <PartThree />;
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      {/* <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper> */}
      <Stepper
        className={classes.tracker}
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div style={{ display: 'flex', marginTop: '2em' }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.back}
              >
                Back
              </Button>
              <Button
                variant="contained"
                //   color="primary"
                onClick={handleNext}
                className={classes.next}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
