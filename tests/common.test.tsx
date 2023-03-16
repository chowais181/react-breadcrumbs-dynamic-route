import * as React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import 'jest-canvas-mock'

import { Breadcrumbs } from '../src'
const routes = [
  { name: 'Dashboard', url: '/dashboard' },
  { name: 'Purchase Orders List', url: '/purchase-orders' },
]

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Breadcrumbs routes={routes} />
      </MemoryRouter>,
    )
  })
})
