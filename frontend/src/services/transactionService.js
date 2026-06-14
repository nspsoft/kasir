import api from './api'

export const transactionService = {
  getAll: async (params = {}) => {
    const response = await api.get('/transactions', { params })
    return response.data
  },

  getById: async (id) => {
    const response = await api.get(`/transactions/${id}`)
    return response.data
  },

  create: async (transactionData) => {
    const response = await api.post('/transactions', transactionData)
    return response.data
  },

  update: async (id, transactionData) => {
    const response = await api.put(`/transactions/${id}`, transactionData)
    return response.data
  },

  delete: async (id) => {
    const response = await api.delete(`/transactions/${id}`)
    return response.data
  },

  getReceipt: async (id) => {
    const response = await api.get(`/transactions/${id}/receipt`)
    return response.data
  },

  printReceipt: async (id) => {
    const response = await api.get(`/transactions/${id}/receipt`, {
      responseType: 'blob',
    })
    return response.data
  },
}
