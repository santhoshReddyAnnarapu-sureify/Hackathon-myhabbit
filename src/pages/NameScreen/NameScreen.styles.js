import { makeStyles } from '@material-ui/core';

export const NameStyles = makeStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '32px',
      marginTop: '8px',
      boxShadow:
        ' 0px 1px 1px rgba(59, 83, 105, 0.14), 0px 1px 3px rgba(59, 83, 105, 0.12)',
      
    },
    heading: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px',
      color: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listInfo: {
      fontSize: '16px',
      fontWeight: 400,
    },
    toggleBox: {
      marginTop:16,
      marginLeft: '32px',
    },
    footer: {
      fontWeight: 600,
      fontSize: '14px',
    },
    ulList: {
      marginBottom: '40px',
      marginTop: '20px',
    },
    orderedNumberedList:
    {
      marginTop:'20px',
      marginBottom: '40px',
    },
    numberFeild: {
      margin: '15px 0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    labelStyle:{
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      display:'table',
    },
    iconStyle:
    {
      display:'table-cell'
    },
    checkboxStyle:
    {
      '& .MuiFormControl-root': 
      {
        display: 'flex',
        alignItems: 'baseline',
        padding: 0,
      },
    },
    listItem:
    {
      margin:'0 0 0 24px',
      padding:0,
    }
  });