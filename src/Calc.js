import React,{useState}from "react";
import {render} from "react-dom";


const Calculator = ()=>{
    
    const [data, setData] = useState("");
    //data have been set to an empty string//
    const calcBtn = [];
    //console.log(calcBtn)
    const numericalValues = [9,8,7,6,5,4,3,2,1,0,".","%"];
    numericalValues.map((items)=>{
        //mapped over the array in order ti retun to return a list from of number values
       calcBtn.push(
           <button onClick={e=>{
               setData(data + e.target.value)}} 
              key={items} value={items}
            className="btn-calc">
             {items}

           </button>
        )
    })
    
   
   
    //Mapped over this array to return a list of numbers

    return(
        <div className="container">
            <div className="calculator">
                <div className="inputArea">
                    {data}   
                </div>
                
                <div className="gridbtn">
                <button className='subgrid' onClick={()=>setData(data.substr(0, data.length-1))}>
                        Clear 
                   </button>
                   
                  <button className='subgrids' onClick={()=>setData("")}>
                        AC  
                   </button>
                    
                </div>
                
                <div className="grid">
                   {calcBtn} 
                    
                  
                </div>
                <div className="gridOperators mobileOperators">
                    <button onClick={e=>setData(data + e.target.value)} value="+" className="operatorBtn  operatorSpan">+</button>
                    <button onClick={e=>setData(data + e.target.value)} value="*" className="operatorBtn operatorSpan">*</button>
                    <button onClick={e=>setData(data + e.target.value)} value="-" className="operatorBtn operatorSpan" >-</button>
                    <button onClick={e=>setData(data + e.target.value)} value="/" className="operatorBtn operatorSpan">/</button>
                    <button onClick={e=>{

                        try {
                            setData(
                                String(eval(data)).length > 3 &&
                                String(eval(data)).includes(".")

                                ? String(eval(data)).toFixed(4)
                                : String(eval(data))
                            )
                                

                            
                        } 
                        catch (error) {
                            console.log(error)
                            
                        }
                    }} value="=" className="operatorBtn  operatorEquals"
                    >
                        =
                    </button>
                    
                </div>
                
              
            </div>

        </div>
    )


    

};


render(<Calculator/>, document.getElementById("root"))
                