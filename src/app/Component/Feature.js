function Feature(props) {
  const containerStyles = props.containerStyles;

  return(
    <div  style={{paddingBlock: "2.5rem", paddingInline:"2.5rem"}}className="flex flex-col items-center justify-center p-4 gap-6 bg-gray-200 rounded-lg shadow-md w-full hover:shadow-lg hover:gap-8 transition-shadow duration-300 ease-in-out">
      <div className ="w-15 h-15 text-2xl font-bold bg-[var(--primary)] p-10 rounded-4xl shadow-lg flex items-center justify-center">{props.number}</div>
      <h2 className="text-2xl font-semibold text-center text-gray-600">{props.title}</h2>
      <p className="text-center text-gray-700">{props.text}</p>
    </div>
  )
}

export default Feature;
