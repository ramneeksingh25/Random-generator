import {  addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../config/firebase";

// eslint-disable-next-line react/prop-types
const AddNew = ({ clickFunc }) => {
	const [value, setValue] = useState("");
    const [messageVisible,setMessageVisible]=useState(false);
    const addQuote = async ()=>{
        if(!value) return;
        await addDoc(collection(db, "Quotes"), {
            quote: value
          });
          setMessageVisible(true)
          setTimeout(() => {
              clickFunc(false);
          }, 1000);
    }
	return (
		<div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center">
			<div
				className="absolute h-screen w-full bg-orange-400/20 z-10"
				onClick={() => {
					clickFunc(false);
				}}></div>
			<div className="absolute h-[40vh] w-[40vh] bg-zinc-800 z-20 border rounded-xl p-9">
				<div className="relative w-full my-3 py-1 text-blue-400">
					<input
						id="quote"
                        value={value}
						className="border-b border-blue-800 dark:border-blue-300 bg-transparent py-1 w-full focus:outline-none focus:border-orange-600/70 dark:focus:border-orange-300/70  focus:border-b-2 transition-colors peer duration-300"
						onChange={(e) => {
							setValue(e.target.value);
						}}
					/>
					<label
						htmlFor="quote"
						className={`absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:text-orange-600/70 dark:peer-focus:text-orange-300/70 peer-focus:-top-4 transition-all duration-300  ${value != "" && " -top-[15px] text-xs text-blue-500"}`}>
						Enter Quote:
					</label>
				</div>
                <div>
                    <button className="bg-orange-500 text-white rounded-xl py-2 px-4 hover:bg-orange-600 transition-colors duration-300" onClick={addQuote}>
                        ADD QUOTE
                    </button>
                    <button className="bg-orange-500 text-white rounded-xl py-2 px-4 hover:bg-orange-600 transition-colors duration-300" onClick={async()=>{
                        const clip =await navigator.clipboard.readText()
                        console.log(clip);
                        setValue(clip);
                    }}>Copy from clipboard</button>
                </div>
                {messageVisible && <div className="text-green-400">Successfully Added New Quote! </div>}
			</div>
		</div>
	);
};

export default AddNew;
