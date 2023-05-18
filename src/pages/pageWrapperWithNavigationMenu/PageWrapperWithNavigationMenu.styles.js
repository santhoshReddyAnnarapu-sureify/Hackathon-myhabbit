import { makeStyles } from '@material-ui/core';


const {
  theme: {
    global: { secondaryColor },
  },
} = config;

export const pageWrapperStyles = makeStyles({
  topNavigation: {
    background: 'white',
    paddingBottom: '16px',
    paddingTop: '16px',
    paddingLeft: '16%',
    color: secondaryColor,
  },
  cancelButton: {
    fontSize: '16px',
    marginLeft: '6px',
  },
  bodyWrapper: {
    display: 'flex',
    marginTop: '50px',
    marginLeft:'16%',
    [`@media ${device.mobile}`]: {
      marginLeft:'0%',
      padding:0,
    }
  },
  stepperWrapper: {
    [`@media ${device.mobile}`]: {
      display: 'none',
    },
  },
  stepperContainer: {
    width: '100%',
    paddingLeft: '0',
    '& .MuiStepLabel-label': { fontSize: '16px' },
    // '& .MuiStepIcon-completed': { color: secondaryColor },
    '& .MuiStepLabel-label.MuiStepLabel-active ': { fontWeight: 'bold' },
    // '& .MuiStepLabel-label.MuiStepLabel-active ': {
    //   color: 'black',
    //   fontWeight: '400',
    // },
    '& .MuiMenu-paper': {
      width: '40%',
      
    },
  },
  steps: {
    root: {
      '& .MuiMenuItem': {
        fontSize: '14px',
        whiteSpace: 'unset',
        fontWeight: 'bold',
      },
    },
    marginBottom: '10px',
  },
  stepLabel: {
    root: {
      '& .MuiMenuItem': {
        cursor:'pointer',
        fontSize: '14px',
        whiteSpace: 'unset',
        fontWeight: 'normal',
      },
    },
  },
  completedStep: {
    cursor:'pointer',
    root: {
      '& .MuiMenuItem': {
        cursor:'pointer',
        fontSize: '14px',
        whiteSpace: 'unset',
        fontWeight: 'bold',
      },
    },
  },
  contentHeading: {
    fontSize: '28px',
    fontWeight: '300',
    [`@media ${device.mobile}`]: {
      paddingLeft:24,
      paddingRight:24,
    }
  },
  contentSubHeading: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#767676',
    [`@media ${device.mobile}`]: {
      paddingLeft:24,
      paddingRight:24,
    }
  },
  actionButtonsWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    [`@media ${device.mobile}`]: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      
    }
  },
  submitBtn: {
    borderRadius: '2px',
    marginLeft: '16px',
    [`@media ${device.mobile}`]: {
      marginLeft: 0,
      width:'90%',
    }
  },
  continueBtn: {
    borderRadius: '2px',
    marginLeft: '16px',
    [`@media ${device.mobile}`]: {
      marginLeft: 0,
      width:'90%'
    }
  },
  backBtn:
  {
    [`@media ${device.mobile}`]: {
      marginLeft: 0,
      width:'90%',
    }
  },
  rightContent: {
    width: '681px',
    marginBottom:64,
    [`@media ${device.mobile}`]: {
      width:'100%',
    }
  },
  content: {
    marginBottom: '24px',
    
  }
});
