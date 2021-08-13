import React, { useEffect, useState } from 'react'
import RadioList from '../RadioList'
import RoomScenicItem from '../RoomScenicItem'
import RoomTypeItem from '../RoomTypeItem'
import Footer from '../Footer'
import Button from '../Button'
import { saveHotelRoomForm, goPage } from '../../constants/actions'
import { connect } from 'react-redux'
import { Formik, Form } from 'formik'
import FormField from '../FormField'
import { HotelRoomFormValidationSchema } from '../../constants/formValidationSchemas'
import { HOTEL_DATE_PAGE } from '../../constants/pages'
import './index.scss'

const HotelRoomForm = ({ hotel, reservation, saveHotelRoomForm, goPage }) => {
  const [values, setValues] = useState({})

  const { room_type, room_scenic } = hotel

  const { start_date, end_date, adult } = reservation

  const day = Math.ceil(
    (new Date(end_date) - new Date(start_date)) / (1000 * 60 * 60 * 24),
  )

  useEffect(() => {
    setValues({
      room_type: '',
      room_scenic: '',
      ...reservation,
    })
  }, [reservation])

  const onSubmit = (values) => saveHotelRoomForm(values)

  return (
    <Formik
      enableReinitialize={true}
      initialValues={values}
      validationSchema={HotelRoomFormValidationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="hotel-room-form">
          <div>
            <FormField name="room_type">
              {() => (
                <RadioList
                  name="room_type"
                  label="Oda Tipi Seçimi"
                  items={room_type}
                  value={values.room_type}
                  onChange={(value) => setFieldValue('room_type', value)}
                >
                  {(item) => (
                    <RoomTypeItem day={day} adult={adult} roomType={item} />
                  )}
                </RadioList>
              )}
            </FormField>
          </div>

          <div>
            <FormField name="room_scenic">
              {() => (
                <RadioList
                  name="room_scenic"
                  label="Manzara Seçimi"
                  items={room_scenic}
                  value={values.room_scenic}
                  onChange={(value) => setFieldValue('room_scenic', value)}
                >
                  {(item) => <RoomScenicItem roomScenic={item} />}
                </RadioList>
              )}
            </FormField>
          </div>

          <Footer>
            <Button type="button" onClick={() => goPage(HOTEL_DATE_PAGE)}>
              Geri
            </Button>

            <Button type="submit">Kaydet ve Devam Et</Button>
          </Footer>
        </Form>
      )}
    </Formik>
  )
}

const mapStateToProps = ({ hotel, reservation }) => ({
  hotel: hotel.data,
  reservation: reservation.data,
})

const mapDispatchToProps = { saveHotelRoomForm, goPage }

export default connect(mapStateToProps, mapDispatchToProps)(HotelRoomForm)
