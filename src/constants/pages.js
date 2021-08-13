import { lazy } from 'react'
import { Calendar, Bed, CreditCard } from '../components/Icons'

export const HOTEL_DATE_PAGE = 0
export const HOTEL_ROOM_PAGE = 1
export const CHECKOUT_PAGE = 2
export const CHECKOUT_CONFIRMATION_PAGE = 3

export default [
  {
    label: 'Otel ve Tarih Seçimi',
    Component: lazy(() => import('../pages/Search')),
    Icon: Calendar,
    hasStep: true,
  },
  {
    label: 'Otel Tipi ve Manzara Seçimi',
    Component: lazy(() => import('../pages/Hotel')),
    Icon: Bed,
    hasStep: true,
  },
  {
    label: 'Önizleme ve Ödeme İşlemleri',
    Component: lazy(() => import('../pages/Checkout')),
    Icon: CreditCard,
    hasStep: true,
  },
  {
    label: 'Rezervasyon Kaydı Tamamlandı',
    Component: lazy(() => import('../pages/Confirmation')),
    hasStep: false,
  },
]
