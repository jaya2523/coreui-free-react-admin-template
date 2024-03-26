import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import routes from '../routes'

const AppContent = () => {
  return (
    <CContainer className="px-4" lg>
      <div className="d-flex justify-content-between align-items-center p-3 bg-dark text-white rounded-pill shadow-sm mb-3">
        <div className='ml-9'>
          Unlock premium stats<br /> 
          <small>Get up to 10TB of storage for a limited time</small>
        </div>
        <button type="button" className="btn btn-light btn-sm rounded-pill">Upgrade</button> {/* Changed class to className */}
      </div>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
