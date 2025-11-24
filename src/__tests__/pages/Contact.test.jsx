import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from '../../pages/Contact'

describe('Contact Page', () => {
  it('exibe formulário com campos acessíveis', () => {
    render(<Contact />)

    const heading = screen.getByRole('heading', { name: /fale conosco/i })
    expect(heading).toBeInTheDocument()

    const nameInput = screen.getByLabelText(/nome/i)
    expect(nameInput).toHaveAttribute('type', 'text')
    expect(nameInput).toHaveAttribute('placeholder', 'Digite seu nome')

    const emailInput = screen.getByLabelText(/email/i)
    expect(emailInput).toHaveAttribute('type', 'email')

    const message = screen.getByLabelText(/mensagem/i)
    expect(message).toHaveAttribute('rows', '3')

    const submitButton = screen.getByRole('button', { name: /enviar/i })
    expect(submitButton).toBeInTheDocument()
  })
})
