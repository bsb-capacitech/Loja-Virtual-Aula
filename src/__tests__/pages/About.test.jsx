import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from '../../pages/About'

describe('About Page', () => {
  it('renderiza conteúdo estático corretamente', () => {
    // Smoke test
    render(<About />)

    // Headings
    const heading = screen.getByRole('heading', { name: /sobre nós/i })
    expect(heading).toBeInTheDocument()

    const missionHeading = screen.getByRole('heading', { name: /missão/i })
    expect(missionHeading).toBeInTheDocument()

    // Parágrafos
    expect(
      screen.getByText(/nossa loja virtual foi fundada/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/produtos de alta qualidade/i)
    ).toBeInTheDocument()
  })
})
