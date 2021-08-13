import * as Yup from 'yup'

export const HotelRoomFormValidationSchema = Yup.object().shape({
  room_type: Yup.string().required('Oda Tipi Seçimi gereklidir.'),
  room_scenic: Yup.string().required('Manzara Seçimi gereklidir.'),
})

export const HotelSearchFormValidationSchema = ({ max_adult_size = 5 }) =>
  Yup.object().shape({
    hotel_id: Yup.string().required('Otel gereklidir.'),
    start_date: Yup.date('Tarih olmalıdır.').required(
      'Başlangıç Tarihi gereklidir.',
    ),
    end_date: Yup.date('Tarih olmalıdır.').required('Bitiş Tarihi gereklidir'),
    adult: Yup.number('Sayı olmalıdır.')
      .min(1, 'Yetişkin Sayısı en az 1 olmalıdır.')
      .max(
        max_adult_size,
        `Yetişkin Sayısı en fazla ${max_adult_size} olmalıdır.`,
      )
      .required('Yetişkin Sayısı gereklidir'),
    child: Yup.number('Sayı olmalıdır'),
  })

export const CreditCardFormValidationSchema = Yup.object().shape({
  card_name: Yup.string().required('Kart Üzerindeki İsim gereklidir.'),
  card_number: Yup.string()
    .length(16, 'Kart Numarası 16 karakterden oluşmalıdır.')
    .required('Kart Numarası gereklidir.'),
  card_cvv: Yup.string()
    .min(3, 'CVV minimum 3 karakter olmalıdır.')
    .max(4, 'CVV maksimum 4 karakter olmalıdır.')
    .required('CVV gereklidir.'),
  card_date_month: Yup.string().required('Ay gereklidir.'),
  card_date_year: Yup.string().required('Yıl gereklidir.'),
})

export const CouponFormValidationSchema = Yup.object().shape({
  coupon_code: Yup.string(),
})
