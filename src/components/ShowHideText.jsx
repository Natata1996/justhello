import { useState } from "react";

export default function ShowHideText() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Сховати текст" : "Показати текст"}
            </button>

            {isVisible && <p>Це чарівний текст ✨</p>}

        </div>
    );
}