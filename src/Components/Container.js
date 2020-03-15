import React from 'react'
import withAppContext from '../Contexts/App/withAppContext'

const Container = props => {
  const { children, context, className, ...others } = props
  const { state, actions } = context
  return (
    <div className={`content-wrap${className ? ` ${className}` : ''}`} {...others}>
      {state.status === actions.APP_STATUS_TYPE.LOADING && (
        <div id="loading-screen" style={styles.spinner}>
          <span style={styles.loadingText}>Loading...</span>
        </div>
      )}
      {children}
    </div>
  )
}

const styles = {
  spinner: {
    position: 'fixed',
    zIndex: 99,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loadingText: {
    fontSize: '1.5em'
  }
}

export default withAppContext(Container)
