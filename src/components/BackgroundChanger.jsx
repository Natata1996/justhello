import {useState} from "react";

export default function BackgroundChanger (){
    const [isBlue, setIsBlue] = useState(false);
    return(

        <div style={{ backgroundColor: isBlue ? '#e0f7fa' : '#ffffff' }}>
            <p style={{ color: 'black ' }}>Натисни кнопку, щоб змінити настрій 🌤️</p>
            <button onClick={() => setIsBlue(!isBlue)}>Змінити фон</button>
        </div>
    )
}