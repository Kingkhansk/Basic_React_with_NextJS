const page = ({ params }) => {
  return (
    <div className='text-center mt-3'> Your ID is : { params.id }</div>
  )
}

export default page