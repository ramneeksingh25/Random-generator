/* eslint-disable react/prop-types */

import { MdDelete, MdEdit } from "react-icons/md";
import Button from "./Button";
import { useState } from "react";
import DeleteConfirm from "./DeleteConfirm";
import Edit from "./Edit";

const Quote = ({ val,setVal,fetchF}) => {
	const [editVisible,setEditVisible] = useState(false);
  const [deleteConfirm,setDeleteConfirm] = useState(false);
  const edit = ()=>{
    setEditVisible(true)
  }
  const deleteQuote = ()=>{
	setDeleteConfirm(true)
  }
	return (
		<>
			<div className="text-6xl bg-red">{val.quote || "Generate Quote"}</div>
			{val&&<>
			<div className="flex w-full items-center justify-around">
				<Button buttonFunc={deleteQuote}><MdDelete/></Button>
				<Button buttonFunc={edit}><MdEdit/></Button>
			</div>
			</>
			}
			{editVisible && <Edit clickFunc={setEditVisible} quote={val} newF={setVal}/>}
			{deleteConfirm && <DeleteConfirm clickFunc={setDeleteConfirm} quote={val} newF={setVal} fetchF={fetchF}/>}
		</>
	);
};

export default Quote;
