
// eslint-disable-next-line react/prop-types
const Button = ({buttonFunc,children}) => {
  return (
    <div className={`text-xl font-semibold cursor-pointer bg-transparent border-[3px] border-orange-600 text-white py-2 px-3 rounded-full hover:bg-orange-600 hover:text-indigo-950 transition-colors duration-300 text-center flex items-center justify-center gap-3`} onClick={buttonFunc}>{children}</div>
  )
}

export default Button