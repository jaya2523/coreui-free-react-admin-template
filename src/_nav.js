import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApplications,
  cilApps,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilEnvelopeClosed,
  cilFolder,
  cilGrid,
  cilLifeRing,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Dashboard',
  },
  {
    component: CNavGroup,
    name: 'Dashboard',
    // to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Analytics',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Finance',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Job Board',
        to: '/404',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Messages',
    // to: '/dashboard',
    icon: <CIcon icon={cilEnvelopeClosed} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Analytics',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Finance',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Job Board',
        to: '/404',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Friends',
    // to: '/dashboard',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Analytics',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Finance',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Job Board',
        to: '/404',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Apps',
    // to: '/dashboard',
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Analytics',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Finance',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Job Board',
        to: '/404',
      }
    ],
  },
  {
    component: CNavTitle,
    name: 'Pages',
  },
  {
         component: CNavGroup,
        name: 'Help Center',
        // to: '/dashboard',
        icon: <CIcon icon={cilLifeRing} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Error 404',
            to: '/404',
          },
          {
            component: CNavItem,
            name: 'Error 500',
            to: '/500',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'File Manager',
        // to: '/dashboard',
        icon: <CIcon icon={cilFolder} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Login',
            to: '/404',
          },
          {
            component: CNavItem,
            name: 'Register',
            to: '/register',
          },
        ],
      },
]

export default _nav
