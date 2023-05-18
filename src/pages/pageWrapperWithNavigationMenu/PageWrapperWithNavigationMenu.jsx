import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Step,
  StepLabel,
  Stepper,
  ThemeProvider
} from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { kebabCase, snakeCase } from 'lodash';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import config from '../../../config';
// import { lsMaterialTheme } from '../../../utils/themeUtils';
// import { verifyScreenWidth } from '../utils';
import { pageWrapperStyles } from './PageWrapperWithNavigationMenu.styles';

const {
  theme: {
    global: { secondaryColor },
  },
} = config;

const useWindowSize = () => {
  const [size, setSize] = useState([window.screen.width, window.screen.height]);
  useLayoutEffect(() => {
    function updateScreenSize() {
      setSize([window.screen.width, window.screen.height]);
    }
    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);
  return size;
};

const PageWrapperWithNavigationmenu = props => {
  const {
    stepperHeading,
    navigationMenu,
    onContinue,
    onBack,
    onSubmit,
    onCancel,
    onNavigate,
    children,
    activeMenuId,
    disabled,
    submitBtnTxt
  } = props;
  const styles = pageWrapperStyles();
  const history = useHistory();
  const cancelRef = useRef();

  const [screenWidth, screenHeight] = useWindowSize();


  const resetFocus = () =>{
    if (cancelRef?.current) {
      cancelRef.current.focus();
    }
    window.scrollTo(0, 0);
  }

  const handleNavigation = (menu, idx) => {
    resetFocus();
    onNavigate && onNavigate(menu, idx);
  };

  const handleContinue = () => {
    resetFocus();
    onContinue && onContinue();
  };

  const handleBack = () => {
    resetFocus();
    onBack && onBack();
  };

  const handleSubmit = () => {
    onSubmit && onSubmit();
  };

  return (
    <ThemeProvider>
      <div
        className={styles.topNavigation}
        id="cancel-button-wrapper"
        data-testid={navigationMenu[activeMenuId].heading}
      >
        <span
          role="button"
          tabIndex={0}
          disabled={disabled}
          data-testid="withdrawal-cancel-button"
          onClick={() => {
            onCancel();
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              history.goBack();
              onCancel();
            }
          }}
          ref={cancelRef}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <span className={styles.cancelButton}>Cancel</span>
        </span>
      </div>
      <div className={styles.bodyWrapper}>
        <div className={styles.stepperWrapper}>
          <div data-testid="stepper-heading">{stepperHeading}</div>
          <Stepper
            activeStep={activeMenuId - 1}
            orientation="vertical"
            style={{ background: 'transparent' }}
            connector={false}
            className={styles.stepperContainer}
            aria-valuemin="1"
            aria-valuemax="4"
            aria-valuenow={activeMenuId}
            data-testid="stepper-container"
            disabled={disabled}
          >
            {navigationMenu.map(
              (step, index) =>
                !step.isHidden && (
                  <Step
                    className={styles.steps}
                    key={step.name}
                    onClick={() => !disabled && handleNavigation(step, index)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        return !disabled && handleNavigation(step, index);
                      }
                    }}
                    disabled={disabled}
                    data-testid={`step-${snakeCase(step.name)}`}
                  >
                    <StepLabel
                      className={`${styles.stepLabel} ${index < activeMenuId &&
                        styles.completedStep}`}
                      disabled={disabled}
                      icon={
                        index < activeMenuId ? (
                          <CheckCircleIcon style={{ color: secondaryColor }} />
                        ) : (
                          <RadioButtonUncheckedIcon color="disabled" />
                        )
                      }
                      tabIndex={index >= activeMenuId ? -1 : 0}
                      aria-label={`${step.name},${
                        index >= activeMenuId
                          ? 'stage in progress,'
                          : 'stage completed,'
                      }`}
                    >
                      {step.name}
                    </StepLabel>
                  </Step>
                )
            )}
          </Stepper>
        </div>
        <div className={styles.rightContent}>
          <div>
            {!!activeMenuId && (
              <>
                <div className={styles.contentHeading} data-testid={`${kebabCase(navigationMenu[activeMenuId].heading)}-heading`}>
                  {navigationMenu[activeMenuId].heading}
                </div>
                <div className={styles.contentSubHeading} data-testid={`${kebabCase(navigationMenu[activeMenuId].subHeading)}-sub-heading`}>
                  {navigationMenu[activeMenuId].subHeading}
                </div>
              </>
            )}
          </div>
          <div className={styles.content}>{children}</div>
          <div className={styles.actionButtonsWrapper}>
            {/* {verifyScreenWidth(screenWidth) && */}
              navigationMenu[activeMenuId].hasBackBtn && (
                <Button
                  className={styles.backBtn}
                  onClick={handleBack}
                  data-testid="withdrawal-back-button"
                  startIcon={<ArrowBackIos />}
                  disabled={disabled}
                >
                  Back
                </Button>
              )

            {navigationMenu[activeMenuId].hasContinueBtn && (
              <Button
                className={styles.continueBtn}
                color="secondary"
                onClick={handleContinue}
                variant="contained"
                data-testid="withdrawal-continue-button"
                endIcon={<ArrowForwardIos />}
                disabled={disabled}
              >
                Continue
              </Button>
            )}
            {navigationMenu[activeMenuId].hasSubmitBtn && (
              <Button
                className={styles.submitBtn}
                color="secondary"
                onClick={handleSubmit}
                variant="contained"
                disabled={disabled}
                data-testid={`withdrawal-${submitBtnTxt || 'Submit'}-button`}
              >
                {submitBtnTxt || 'Submit'}
              </Button>
            )}
            {/* {!verifyScreenWidth(screenWidth) && */}
              navigationMenu[activeMenuId].hasBackBtn && (
                <Button
                  className={styles.backBtn}
                  onClick={handleBack}
                  data-testid="back-button"
                  startIcon={<ArrowBackIos />}
                  disabled={disabled}
                >
                  Back
                </Button>
              )
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PageWrapperWithNavigationmenu;
