/* eslint-disable react/prop-types */

import { MdEdit } from "react-icons/md";
import Button from "./Button";

const Quote = ({ val, edit }) => {
	return (
		<>
			<div className="text-6xl">{val.quote || "Generate Quote"}</div>
			{val&&<Button buttonFunc={edit}><MdEdit/></Button>}
		</>
	);
};

export default Quote;
