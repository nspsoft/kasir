import api from './api'

export const reportService = {
  getDailySalesReport: async (date) => {
    const response = await api.get('/reports/sales/daily', {
      params: { date },
    })
    return response.data
  },

  getMonthlySalesReport: async (month, year) => {
    const response = await api.get('/reports/sales/monthly', {
      params: { month, year },
    })
    return response.data
  },

  getYearlySalesReport: async (year) => {
    const response = await api.get('/reports/sales/yearly', {
      params: { year },
    })
    return response.data
  },

  getCategoryReport: async (params = {}) => {
    const response = await api.get('/reports/category', { params })
    return response.data
  },

  getTopProducts: async (limit = 10) => {
    const response = await api.get('/reports/top-products', {
      params: { limit },
    })
    return response.data
  },

  getSummary: async () => {
    const response = await api.get('/reports/summary')
    return response.data
  },

  exportReport: async (reportType, params = {}) => {
    const response = await api.get(`/reports/export/${reportType}`, {
      params,
      responseType: 'blob',
    })
    return response.data
  },
}
