import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { CAvatar } from '@coreui/react'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={5} xl={3} xxl={2}>
      <CWidgetStatsA
      value={
        <>
          <h5 className="mb-2">Revenue</h5>
          <h4 className="mb-2">$56,945</h4>
          <div className="d-flex flex-column justify-content-between align-items-center" style={{ minHeight: '65px' }}>
            <div className="d-flex mt-auto mb-1">
              <CAvatar color="green" style={{ backgroundColor: '#C4E538', color: '#009432', fontSize: '0.75rem', width: '7vh', height:'3.5vh' }} shape="rounded"> +45% </CAvatar> &nbsp;<h6> from 4.6%</h6>
            </div>
          </div>
        </>
      }
    />
    </CCol>
      <CCol sm={5} xl={3} xxl={2}>
      <CWidgetStatsA
      value={
        <>
          <h5 className="mb-2">Users</h5>
          <h4 className="mb-2">76.8%</h4>
          <div className="d-flex flex-column justify-content-between align-items-center" style={{ minHeight: '65px' }}>
            <div className="d-flex mt-auto mb-1">
              <CAvatar color="green" style={{ backgroundColor: '#ff7979', color: '#c23616', fontSize: '0.75rem', width: '7vh', height:'3.5vh' }} shape="rounded"> -1.7% </CAvatar> &nbsp;<h6> from 4.6%</h6>
            </div>
          </div>
        </>
      }
    />
    </CCol>
      <CCol sm={5} xl={3} xxl={2}>
      <CWidgetStatsA
      value={
        <>
          <h5 className="mb-2">New Signups</h5>
          <h4 className="mb-2">116</h4>
          <div className="d-flex flex-column justify-content-between align-items-center" style={{ minHeight: '65px' }}>
            <div className="mt-auto mb-1 ">
              <CAvatar color="green" style={{ backgroundColor: '#ced6e0', color: '#57606f', fontSize: '0.75rem', width: '7vh', height:'3.5vh', marginLeft:'-10vh' }} shape="rounded"> 0.00 </CAvatar> &nbsp;<h6> </h6>
            </div>
          </div>
        </>
      }
    />
    </CCol>
      <CCol sm={5} xl={3} xxl={2}>
      <CWidgetStatsA
      value={
        <>
          <h5 className="mb-2">Retention</h5>
          <h4 className="mb-2">12.67%</h4>
          <div className="d-flex flex-column justify-content-between align-items-center" style={{ minHeight: '65px' }}>
            <div className="d-flex mt-auto mb-1">
              <CAvatar color="green" style={{ backgroundColor: '#C4E538', color: '#009432', fontSize: '0.75rem', width: '7vh', height:'3.5vh' }} shape="rounded"> +0.6% </CAvatar> &nbsp;<h6> from 4.6%</h6>
            </div>
          </div>
        </>
      }
    />
    </CCol>
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
