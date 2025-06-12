const Card = (props) => {
    return (
        <div style={{padding:"2.5rem 2rem"}} className="flex flex-col justify-center items-center gap-3 bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
        <div style={{padding:"1rem, marginBottom:2rem"}} className="flex items-center justify-center w-20 h-20 bg-emerald-100  rounded-4xl">{props.icon}</div>
        <h2 className="text-gray-600 text-center">{props.title}</h2>
        <p className="text-gray-400 text-center">{props.text}</p>
        </div>
    );
}

export default Card;