import { useNavigate } from 'react-router-dom'
import Quote from './components/Quotes'
import Button from '../../components/Button'
import { collection, getDocs, query } from 'firebase/firestore'
import {db} from '../../config/firebase';
import { useEffect, useState } from 'react';
import AddNew from './components/AddNew';
const Home = () => {
  const [addVisible,setAddVisible]=useState(false);
  const [quoteNumber, setQuoteNumber] = useState("");
  const [quotesArray,setQuotesArray] = useState([]);
  const navigate = useNavigate();
  const generate = async () => {
    const randomNumber = Math.floor(Math.random()*quotesArray.length);
    console.log(randomNumber);
    console.log(quotesArray);
    setQuoteNumber(quotesArray[randomNumber].quote);
  }
  const add = ()=>{
    setAddVisible(true);
  }
  const edit = ()=>{
    navigate("/edit");
  }
  useEffect(()=>{
    const fetchQuotes = async ()=>{
      const q= query(collection(db,"Quotes"));
      const snapshot = await getDocs(q);
      const newQuotesArray = snapshot.docs.map((doc)=>({id: doc.id, quote: doc.data().quote}));
      setQuotesArray(newQuotesArray);
    }
    fetchQuotes();
  },[]);
  return (
    <div className='w-full gap-10 flex items-center justify-center'> 
      <Quote val={quoteNumber}/>
      {addVisible && <AddNew clickFunc={setAddVisible}/>}
      <div className='flex items-center justify-center w-full gap-3 absolute bottom-0 rounded-t-full h-[10vh] bg-indigo-950/50 hover:bg-indigo-900/50 transition-colors duration-300 z-0'>
        <Button buttonFunc={generate}>GENERATE</Button>
        <Button buttonFunc={add}>ADD</Button>
        <Button buttonFunc={edit}>EDIT</Button>
      </div>
    </div>
  )
}

export default Home