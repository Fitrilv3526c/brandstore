import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const data = [
  {
    title: 'Sales',
    descroption: 'Vestibulum ante ipsum primis in faucibus orci luctus.',
    contact: '1800 123 4567',
  },
  {
    title: 'Complaints',
    descroption: 'Vestibulum ante ipsum primis in faucibus orci luctus.',
    contact: '1900 223 8899',
  },
  {
    title: 'Returns',
    descroption: 'Vestibulum ante ipsum primis in faucibus orci luctus.',
    contact: 'returns@mail.com',
  },
  {
    title: 'Marketing',
    descroption: 'Vestibulum ante ipsum primis in faucibus orci luctus.',
    contact: '1700 444 5578',
  },
]

const ContactPage = () => {
  return (
    <>
      <div className='bg-[#f5f7f9] py-24'>
        <div className='flex flex-col items-center '>
          <h2 className='text-2xl font-semibold '>Have any queries?</h2>
          <h1 className='text-4xl font-bold my-8 tracking-wide'>
            We&apos;re here to help.​
          </h1>
          <span className='block h-[1px] w-14 bg-black mt-4'></span>
        </div>

        <div className='flex justify-center items-center flex-wrap gap-10 mt-20'>
          {data.map((item) => (
            <div
              key={item.contact}
              className='w-[270px] shadow-2xs py-6 bg-white rounded-2xl border flex flex-col justify-center items-center gap-5'
            >
              <h2 className='text-2xl font-semibold'>{item.title}</h2>
              <p className='text-center'>{item.descroption}</p>
              <p className='text-blue-700 text-xl font-semibold'>
                {item.contact}
              </p>
            </div>
          ))}
        </div>

        <div className='flex flex-wrap md:flex-nowrap justify-center gap-10 mt-24 px-4'>
          <div className='max-w-[550px] w-full h-auto text-center lg:text-left'>
            <h4 className='text-lg font-bold'>Don&apos;t be a stranger!</h4>
            <h2 className='text-4xl font-bold my-7'>You tell us. We listen.</h2>
            <p className='tracking-tight mt-16'>
              Cras elementum finibus lacus nec lacinia. Quisque non convallis
              nisl, eu condimentum sem. Proin dignissim libero lacus, ut
              eleifend magna vehicula et. Nam mattis est sed tellus.
            </p>
          </div>
          <div className='bg-white max-w-[500px]  lg:max-w-[550px] w-full rounded-2xl h-auto shadow-2xl p-10'>
            <form className='flex flex-col gap-6'>
              <Input
                type='text'
                placeholder='Name'
                className='px-4 py-6 text-2xl'
              />
              <Input
                type='text'
                placeholder='Subject'
                className='px-4 py-6 text-2xl'
              />
              <Input
                type='email'
                placeholder='Email'
                className='px-4 py-6 text-2xl'
              />
              <Textarea
                placeholder='Message'
                className='min-h-[250px] resize-none'
              />

              <Button className='bg-blue-600 py-5 text-lg cursor-pointer hover:bg-blue-700'>
                Submit Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
