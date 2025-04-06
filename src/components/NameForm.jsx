import {useState} from "react";


export default function NameForm() {
    const [name, setName] = useState("");
    const [greeting, setGreeting] = useState("");

    function Showing  () {

        if(name === ""){
           setTimeout(()=>{
               setGreeting("Hello")
           },1000) ;
        }else{
            setTimeout(() => {
                setName("");
                setGreeting("Hello " + name + " !");
            }, 1000);

        }


    }


    return (
        <>

            <label>
                <input type={"text"} value={name} onChange=
                    {(e) =>
                        setName(e.target.value)}/>
            </label>

            <div>
                <button onClick={Showing}>Show name</button>
            </div>


            {greeting}
        </>
    );
}