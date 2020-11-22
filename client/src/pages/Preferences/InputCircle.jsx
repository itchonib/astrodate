import React from 'react';
import { Checkbox } from '@material-ui/core';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    // backgroundColor: '#181826',
    // color: '#181826',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    borderRadius: 50,
    width: 16,
    height: 16,
    //   boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#181826',
    //   backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    //   '$root.Mui-focusVisible &': {
    //     outline: '2px auto rgba(19,124,189,.6)',
    //     outlineOffset: 2,
    //   },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#ffd76e',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: '#DFBC60'
    }
  }
});

const InputCircle = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Checkbox
        className={classes.root}
        disableRipple
        // color="default"
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        inputProps={{ 'aria-label': 'decorative checkbox' }}
        {...props}
      />
    </div>
  );
};

export default InputCircle;
