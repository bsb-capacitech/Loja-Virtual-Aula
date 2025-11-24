import { render, screen, within } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Layout from '../../components/Layout'
import { useCart } from '../../hooks/useCart'
import { useAuth } from '../../hooks/useAuth'

vi.mock('../../hooks/useCart', () => ({
  useCart: vi.fn()
}))

vi.mock('../../hooks/useAuth', () => ({
  useAuth: vi.fn()
}))

const renderWithRouter = (ui) =>
  render(<BrowserRouter>{ui}</BrowserRouter>)

describe('Layout Component', () => {
  beforeEach(() => vi.clearAllMocks())

  it('renderiza links de navegação', () => {
    useCart.mockReturnValue({ cartItems: [] })
    useAuth.mockReturnValue({ user: null })

    renderWithRouter(<Layout />)

    expect(screen.getByRole('link', { name: /minha loja/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /produtos/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sobre/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contato/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /trabalhe conosco/i })).toBeInTheDocument()
  })

  it('não exibe badge quando carrinho está vazio', () => {
    useCart.mockReturnValue({ cartItems: [] })
    useAuth.mockReturnValue({ user: null })

    renderWithRouter(<Layout />)

    const cartLink = screen.getByRole('link', { name: /carrinho/i })
    
    expect(cartLink).toBeInTheDocument()
    // procura números DENTRO do link
    expect(
      within(cartLink).queryByText(/[0-9]+/)
    ).not.toBeInTheDocument();
  })

  it('exibe badge quando carrinho tem itens', () => {
    useCart.mockReturnValue({
      cartItems: [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 1 }
      ]
    })
    useAuth.mockReturnValue({ user: null })

    renderWithRouter(<Layout />)

    const badge = screen.getByText('2')
    expect(badge).toBeInTheDocument()
  })

  it('exibe botão de login quando não há usuário', () => {
    useCart.mockReturnValue({ cartItems: [] })
    useAuth.mockReturnValue({ user: null })

    renderWithRouter(<Layout />)

    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument()
  })

  it('exibe saudação + botão de logout quando usuário está logado', () => {
    useCart.mockReturnValue({ cartItems: [] })
    useAuth.mockReturnValue({
      user: { displayName: 'João Silva' },
      logout: vi.fn()
    })

    renderWithRouter(<Layout />)

    expect(screen.getByText(/olá, joão silva/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sair/i })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /login/i })).not.toBeInTheDocument()
  })
})
