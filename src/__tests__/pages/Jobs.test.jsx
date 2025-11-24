import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Jobs from '../../pages/Jobs'

describe('Jobs Page', () => {
  it('renderiza tabela de vagas', () => {
    render(<Jobs />)

    expect(
      screen.getByRole('heading', { name: /trabalhe conosco/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/novos talentos/i)
    ).toBeInTheDocument()

    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()

    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(3)

    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(3)

    expect(screen.getByText(/desenvolvedor front-end/i)).toBeInTheDocument()
    expect(screen.getByText(/analista de marketing/i)).toBeInTheDocument()

    const button = screen.getByRole('link', { name: /envie seu currículo/i })
    expect(button).toHaveAttribute('href', '/apply')
  })
})
