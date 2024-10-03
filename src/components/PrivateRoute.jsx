import { memo } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import PropTypes from 'prop-types'

function PrivateRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
}

export default memo(PrivateRoute)
