/* eslint-disable react/prop-types */
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import Button from "./Button";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const DeleteConfirm = ({ quote, newF, clickFunc,fetchF }) => {
	const ConfirmedDelete = async () => {
		const id = quote.id;
		const docRef = doc(db, "Quotes", id);
		await deleteDoc(docRef);
		newF("");
        fetchF();
		clickFunc(false);
	};
    const CancelDelete=()=>{
        clickFunc(false);
    }
	return <div>
        <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center">
			<div
				className="absolute h-screen w-full bg-orange-400/20 z-10"
				onClick={() => {
					clickFunc(false);
				}}></div>
			<div className="absolute h-[40vh] w-[40vh] bg-zinc-800 z-20 border rounded-xl p-9 flex items-center justify-center flex-col gap-10">
                Are you sure?
                <div className="flex gap-3">

                <Button buttonFunc={ConfirmedDelete}><FaThumbsUp/></Button>
                <Button buttonFunc={CancelDelete}><FaThumbsDown/></Button>
                </div>
            </div>
		</div>
    </div>;
};

export default DeleteConfirm;
