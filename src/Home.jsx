import Quote from './components/Quotes'
import Button from './components/Button'
import { collection, getDocs, query } from 'firebase/firestore'
import {db} from './config/firebase';
import { useEffect, useState } from 'react';
import AddNew from './components/AddNew';
import Edit from './components/Edit';
import { RiAiGenerate } from 'react-icons/ri';
import { MdAdd } from 'react-icons/md';
const Home = () => {
  const [addVisible,setAddVisible]=useState(false);
  const [editVisible,setEditVisible] = useState(false);
  const [quote, setQuote] = useState("");
  const [quotesArray,setQuotesArray] = useState([]);
  const generate = async () => {
    const randomNumber = Math.floor(Math.random()*quotesArray.length);
    console.log(randomNumber);
    console.log(quotesArray);
    setQuote(quotesArray[randomNumber]);
  }
  const add = ()=>{
    setAddVisible(true);
  }
  const edit = ()=>{
    setEditVisible(true)
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
      <Quote val={quote} edit={edit} editV={setEditVisible}/>
      {addVisible && <AddNew clickFunc={setAddVisible}/>}
      {editVisible && <Edit clickFunc={setEditVisible} quote={quote} newF={setQuote}/>}
      <div className='flex items-center justify-center w-full gap-3 absolute bottom-0 rounded-t-full h-[10vh] bg-indigo-950/50 hover:bg-indigo-900/50 transition-colors duration-300 z-0'>
        <Button buttonFunc={generate}>GENERATE <RiAiGenerate/> </Button>
        <Button buttonFunc={add}>ADD <MdAdd/></Button>
      </div>
    </div>
  )
}

export default Home