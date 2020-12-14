import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { AppContext } from '../../../context/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'red',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    },
    typography: {
      button: {
        trxtTransform: 'none'
      }
    }
  }
});

const options = [
  'Cis Man',
  'Trans Man',
  'Trans Woman',
  'Cis Woman',
  'Non-binary'
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'linear-gradient(45deg, #181827 30%, #FF8E53 90%)',
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    },
    button: {
      backgroundColor: 'linear-gradient(45deg, #181827 30%, #FF8E53 90%)'
    }
  }
}));

const PartOne = () => {
  const { gender, setGender } = useContext(AppContext);
  const classes = useStyles();

  const handleClick = (e) => {
    setGender(e.target.innerText);
  };

  return (
    <>
      <div className={'main-q-holder'}>
        <h2 className={`form-question-su`}> How do you identify?</h2>
        {/* <div className={`answer-container-su`}> */}
        <div className={classes.root}>
          <ButtonGroup
            variant="contained"
            color="secondary"
            aria-label="outlined primary button group"
          >
            {options.map((identity) => (
              // <div
              //   key={identity}
              //   className={`button-identity-su`}
              //   id="gender"
              //   onClick={handleClick}
              //   value={identity}
              // >
              //   <p className={'button-identity-p'}>{identity}</p>
              // </div>
              <Button
                style={{ textTransform: 'none' }}
                key={identity}
                id="gender"
                onClick={handleClick}
                value={identity}
              >
                {identity}
              </Button>
            ))}
          </ButtonGroup>
          {gender && <p> {gender} </p>}
        </div>
      </div>
    </>
  );
};
export default PartOne;
