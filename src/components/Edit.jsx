/* eslint-disable react/prop-types */
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react'
import { db } from '../config/firebase';
import Button from './Button';

const Edit = ({ clickFunc,quote,newF }) => {
	const [value, setValue] = useState(quote.quote);
    const submitEdit = async ()=>{
        const docRef = doc(db,"Quotes",quote.id)
        await updateDoc(docRef, {
            quote: value
        });
        newF({quote: value}); 
        clickFunc(false);
    }
	return (
		<div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center">
			<div
				className="absolute h-screen w-full bg-orange-400/20 z-10"
				onClick={() => {
					clickFunc(false);
				}}></div>
			<div className="absolute h-[40vh] w-[40vh] bg-zinc-800 z-20 border rounded-xl p-9 flex items-center justify-center flex-col gap-10">
            <div className="relative w-full my-3 py-1">
					<input
						id="quote"
                        value={value}
						className="border-b border-blue-800 dark:border-blue-300 bg-transparent py-1 w-full focus:outline-none focus:border-orange-600/70 dark:focus:border-orange-300/70 focus:text-orange-300 focus:border-b-2 transition-colors duration-300"
						onChange={(e) => {
							setValue(e.target.value);
						}}
					/>
				</div>
                <Button buttonFunc={submitEdit}>SUBMIT EDIT</Button>
            </div>
		</div>
	);
};

export default Edit