// User types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  emailVerified: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UserProfile {
  userId: string
  phone?: string
  address?: string
  dateOfBirth?: Date
  taxId?: string
  riskTolerance: 'low' | 'medium' | 'high'
  investmentGoals: string[]
}

// Account types
export interface Account {
  id: string
  userId: string
  accountNumber: string
  type: 'checking' | 'savings' | 'investment'
  balance: number
  currency: string
  status: 'active' | 'suspended' | 'closed'
  createdAt: Date
  updatedAt: Date
}

// Transaction types
export interface Transaction {
  id: string
  accountId: string
  type: 'deposit' | 'withdrawal' | 'transfer' | 'dividend' | 'fee'
  amount: number
  currency: string
  description: string
  status: 'pending' | 'completed' | 'failed' | 'cancelled'
  reference: string
  metadata?: Record<string, any>
  createdAt: Date
}

// Investment types
export interface Investment {
  id: string
  userId: string
  name: string
  type: 'stocks' | 'bonds' | 'mutual_funds' | 'etf' | 'crypto'
  amount: number
  currentValue: number
  returnRate: number
  riskLevel: 'low' | 'medium' | 'high'
  startDate: Date
  maturityDate?: Date
  status: 'active' | 'matured' | 'cancelled'
}

// Portfolio types
export interface Portfolio {
  userId: string
  totalValue: number
  totalInvested: number
  totalReturn: number
  returnPercentage: number
  diversification: {
    stocks: number
    bonds: number
    mutual_funds: number
    etf: number
    crypto: number
  }
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  timestamp: Date
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// Form types
export interface LoginFormData {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}

export interface DepositFormData {
  amount: number
  paymentMethod: 'bank_transfer' | 'credit_card' | 'debit_card'
  accountId: string
}

export interface WithdrawalFormData {
  amount: number
  accountId: string
  bankAccount: {
    accountNumber: string
    routingNumber: string
    accountName: string
  }
}