import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
 
test('Page', () => {
  render(<Page params={{
    slug: ''
  }} searchParams={{}} />)
  expect(screen.getByRole('heading', { level: 1 })).toBeDefined()
})
