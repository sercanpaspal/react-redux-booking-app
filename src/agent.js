import axios from 'axios'

const api = axios.create({
  baseURL: 'https://61277ddac2e8920017bc0d01.mockapi.io/hotel-reservation/v1',
})

api.interceptors.response.use((response) => response.data)

const Hotel = {
  list: () => api.get('/hotels'),
  detail: (id) => api.get(`/hotel-details/${id}`),
}

const Coupon = {
  get: (code) => api.get(`/coupons?code=${code}`),
}

const Reservation = {
  create: (data) => api.post(`/hotel-bookings`, data),
  update: (id, data) => api.put(`/hotel-bookings/${id}`, data),
  delete: (id) => api.delete(`/hotel-bookings/${id}`),
}

export default {
  Hotel,
  Coupon,
  Reservation,
}
