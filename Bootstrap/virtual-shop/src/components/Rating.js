import React,{useState} from "react";

const Rating= ()=>{
    //implementar una logica
    const [rating, setRating] = useState(0);
    const [comment, setComment]=useState('');
    const handleRatingSubmit=()=>{
        console.log('Rating',rating),
        console.log('Comment',comment);
    };
    return(
        <div>
            <h4>Calificar este Producto</h4>
            <select onChange={(e)=>setRating(e.target.value)} value={rating}>
                {[1,2,3,4,5].map(r=><option key={r} value={r}>{r}</option>)}
            </select>
        
        <textarea
         placeholder="Deja tu comentario..."
         onChange={(e)=>setComment(e.target.value)}
         value={comment}/>
         <button onClick={handleRatingSubmit}>Calificar</button>
         </div>
    );
};
export default Rating;