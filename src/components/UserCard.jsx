 export default function UserCard({name, age,isOnline}) {



    return (
        <>
        <p> Name: {name}</p>
        <p> Age: {age} </p>
        <p> State : {isOnline ? "Online" :"Offline"} </p>
        </>
    )

 }