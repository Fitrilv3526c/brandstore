'use client'
import { useState } from 'react'
import { useCartStore } from '@/hook/CartStore'
import { toast } from 'sonner'

const CheckoutPage = () => {
  const cart = useCartStore((state) => state.cart)
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    country: '',
    streetAddress: '',
    city: '',
    state: '',
    postcode: '',
    phone: '',
    email: '',
    paymentMethod: '',
  })

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    country: '',
    streetAddress: '',
    city: '',
    state: '',
    postcode: '',
    phone: '',
    email: '',
    paymentMethod: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { ...errors }

    if (!form.firstName) {
      newErrors.firstName = 'First Name is required'
      isValid = false
    } else {
      newErrors.firstName = ''
    }

    if (!form.lastName) {
      newErrors.lastName = 'Last Name is required'
      isValid = false
    } else {
      newErrors.lastName = ''
    }

    if (!form.country) {
      newErrors.country = 'Country/Region is required'
      isValid = false
    } else {
      newErrors.country = ''
    }

    if (!form.streetAddress) {
      newErrors.streetAddress = 'Street Address is required'
      isValid = false
    } else {
      newErrors.streetAddress = ''
    }

    if (!form.city) {
      newErrors.city = 'City is required'
      isValid = false
    } else {
      newErrors.city = ''
    }

    if (!form.state) {
      newErrors.state = 'State/Province is required'
      isValid = false
    } else {
      newErrors.state = ''
    }

    if (!form.postcode) {
      newErrors.postcode = 'Postcode/ZIP is required'
      isValid = false
    } else {
      newErrors.postcode = ''
    }

    if (!form.phone) {
      newErrors.phone = 'Phone number is required'
      isValid = false
    } else {
      newErrors.phone = ''
    }

    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'A valid Email Address is required'
      isValid = false
    } else {
      newErrors.email = ''
    }

    if (!form.paymentMethod) {
      newErrors.paymentMethod = 'Please select a payment method'
      isValid = false
    } else {
      newErrors.paymentMethod = ''
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const isValid = validateForm()

    if (isValid) {
      toast.success('Order placed successfully!')
    } else {
      toast.error(
        'Please fill in all required fields and select a payment method.'
      )
    }
  }

  return (
    <div className='container mx-auto px-4 p-20'>
      <h1 className='text-5xl font-bold text-center text-gray-600 mb-20'>
        Checkout
      </h1>

      <div className='lg:flex justify-center gap-10'>
        <div className='lg:w-1/2 mb-8 border p-8'>
          <h2 className='text-2xl font-semibold mb-4'>Billing Details</h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label htmlFor='firstName' className='block mb-2'>
                  First Name
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={form.firstName}
                  onChange={handleChange}
                  className='w-full p-2 border rounded bg-white'
                />
                {errors.firstName && (
                  <p className='text-red-500 text-sm'>{errors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor='lastName' className='block mb-2'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={form.lastName}
                  onChange={handleChange}
                  className='w-full p-2 border rounded bg-white'
                />
                {errors.firstName && (
                  <p className='text-red-500 text-sm'>{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label htmlFor='country' className='block mb-2'>
                  Country/Region
                </label>
                <input
                  type='text'
                  id='country'
                  name='country'
                  value={form.country}
                  onChange={handleChange}
                  className='w-full p-2 border rounded bg-white'
                />
                {errors.firstName && (
                  <p className='text-red-500 text-sm'>{errors.country}</p>
                )}
              </div>

              <div>
                <label htmlFor='streetAddress' className='block mb-2'>
                  Street Address
                </label>
                <input
                  type='text'
                  id='streetAddress'
                  name='streetAddress'
                  value={form.streetAddress}
                  onChange={handleChange}
                  className='w-full p-2 border rounded bg-white'
                />
                {errors.firstName && (
                  <p className='text-red-500 text-sm'>{errors.streetAddress}</p>
                )}
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label htmlFor='city' className='block mb-2'>
                  Town/City
                </label>
                <input
                  type='text'
                  id='city'
                  name='city'
                  value={form.city}
                  onChange={handleChange}
                  className='w-full p-2 border rounded bg-white'
                />
                {errors.firstName && (
                  <p className='text-red-500 text-sm'>{errors.city}</p>
                )}
              </div>

              <div>
                <label htmlFor='state' className='block mb-2'>
                  State/Province
                </label>
                <input
                  type='text'
                  id='state'
                  name='state'
                  value={form.state}
                  onChange={handleChange}
                  className='w-full p-2 border rounded bg-white'
                />
                {errors.firstName && (
                  <p className='text-red-500 text-sm'>{errors.state}</p>
                )}
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label htmlFor='postcode' className='block mb-2'>
                  Postcode/ZIP
                </label>
                <input
                  type='text'
                  id='postcode'
                  name='postcode'
                  value={form.postcode}
                  onChange={handleChange}
                  className='w-full p-2 border rounded bg-white'
                />
                {errors.firstName && (
                  <p className='text-red-500 text-sm'>{errors.postcode}</p>
                )}
              </div>

              <div>
                <label htmlFor='phone' className='block mb-2'>
                  Phone
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={form.phone}
                  onChange={handleChange}
                  className='w-full p-2 border rounded bg-white'
                />
                {errors.firstName && (
                  <p className='text-red-500 text-sm'>{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor='email' className='block mb-2'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                className='w-full p-2 border rounded bg-white'
              />
              {errors.firstName && (
                <p className='text-red-500 text-sm'>{errors.email}</p>
              )}
            </div>
          </form>
        </div>

        <div className='lg:w-1/3 border p-8'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-600'>
            Order Details
          </h2>
          <div className=''>
            <div className='border-b p-4 flex justify-between'>
              <h3 className='text-lg font-semibold text-gray-600 '>Product</h3>
              <h3 className='text-lg font-semibold text-gray-600 '>
                Sub Totals
              </h3>
            </div>
            <div className='space-y-4'>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className='flex justify-between border-b p-4'
                >
                  <span className='text-sm'>{item.title}</span>
                  <span className='text-sm'>
                    ${item.price} x {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className='border-b p-4 text-lg'>
              <span className='font-semibold'>Total: </span>
              <span className=' font-bold'>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className='mt-6'>
            <h3 className='text-xl font-semibold mb-4'>Payment Method</h3>
            <div className='flex flex-col space-y-4'>
              <label>
                <input
                  type='radio'
                  name='paymentMethod'
                  value='cashOnDelivery'
                  checked={form.paymentMethod === 'cashOnDelivery'}
                  onChange={handleChange}
                  className='mr-2'
                />
                Cash on Delivery
              </label>
              <label>
                <input
                  type='radio'
                  name='paymentMethod'
                  value='jazzCash'
                  checked={form.paymentMethod === 'jazzCash'}
                  onChange={handleChange}
                  className='mr-2'
                />
                Jazz Cash
              </label>
              <label>
                <input
                  type='radio'
                  name='paymentMethod'
                  value='easypaisa'
                  checked={form.paymentMethod === 'easypaisa'}
                  onChange={handleChange}
                  className='mr-2'
                />
                Easypaisa
              </label>
              <label>
                <input
                  type='radio'
                  name='paymentMethod'
                  value='bankTransfer'
                  checked={form.paymentMethod === 'bankTransfer'}
                  onChange={handleChange}
                  className='mr-2'
                />
                Bank Transfer
              </label>
              {errors.paymentMethod && (
                <p className='text-red-500 text-sm'>{errors.paymentMethod}</p>
              )}
            </div>
          </div>

          <div className='mt-6'>
            <button
              onClick={handleSubmit}
              className='w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer'
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
