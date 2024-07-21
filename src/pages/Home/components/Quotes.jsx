/* eslint-disable react/prop-types */

const Quote = ({val}) => {
  return (
    <div className='text-6xl'>{val||"Generate Quote"}</div>
  )
}

export default Quote