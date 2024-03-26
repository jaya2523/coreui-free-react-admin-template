import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, text: 'Zepplin' },
      amount: 686.00,
      status: 'Active',
      userId: 114423,
      joined: 'October',
      group: 'Design',
    },
    {
      avatar: { src: avatar2 , text: 'Figma'},
      amount: 864.00,
      status: 'Active',
      userId: 76223,
      joined: 'June',
      group: 'Finance',
    },
    {
      avatar: { src: avatar3, text:'Meta' },
      amount: 176.00,
      status: 'Cancelled',
      userId: 8945,
      joined: 'March',
      group: 'Coding',
    },
    {
      avatar: { src: avatar4, text:'Angular' },
      amount: 49.00,
      status: 'Active',
      userId: 11467,
      joined: 'February',
      group: 'Marketing',
    },
    {
      avatar: { src: avatar5, text:'Vue' },
      amount: 999.00,
      status: 'Active',
      userId: 67385,
      joined: 'October',
      group: 'Finance',
    },
  ];

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4">
      <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Performance
              </h4>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
            </CCol>
          </CRow>
          <MainChart />
          <CRow className="d-flex justify-content-center">
            <CCol className="d-flex align-items-center justify-content-center">
            
              <div
                className="dot mr-2"
                style={{
                  backgroundColor: '#375dcb',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                }}
              ></div>&nbsp;
              <span>Instagram</span>&nbsp;&nbsp;
              <div
                className="dot mr-2"
                style={{
                  backgroundColor: '#009e60',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                }}
              ></div>&nbsp;
              <span className="me-3">Facebook</span>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Installed apps</CCardHeader>
            <CCardBody>
            <CTable striped responsive>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>Source</CTableHeaderCell>
          <CTableHeaderCell>Amount</CTableHeaderCell>
          <CTableHeaderCell>Status</CTableHeaderCell>
          <CTableHeaderCell>User ID</CTableHeaderCell>
          <CTableHeaderCell>Joined</CTableHeaderCell>
          <CTableHeaderCell>Group</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {tableExample.map((item, index) => (
          <CTableRow key={index}>
            <CTableDataCell><img src={item.avatar.src} alt="Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />&nbsp;<b>{item.avatar.text}</b></CTableDataCell>
            <CTableDataCell>{item.amount}</CTableDataCell>
            <CTableDataCell>{item.status}</CTableDataCell>
            <CTableDataCell>{item.userId}</CTableDataCell>
            <CTableDataCell>{item.joined}</CTableDataCell>
            <CTableDataCell>{item.group}</CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
