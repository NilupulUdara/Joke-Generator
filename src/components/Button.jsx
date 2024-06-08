export const Button = (props) => {
  return (
    <div>
        <button className="bg-white text-black p-2 rounded-md text-xl" onClick={props.callApi}>
          Click to Generate
        </button>
    </div>
  )
}
