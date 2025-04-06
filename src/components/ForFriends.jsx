import {useState} from "react";

export default function ForFriend () {

    const [showImage, setShowImage] = useState(false);

    return (
        <div className="text-center mt-20">

            <button className={"cursor-grab text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-8 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"}  onClick={() => setShowImage(!showImage)}>
                Click here
            </button>

            {showImage && (
                <>
                    <img
                        src="/cat.png"
                        alt="сюрприз"

                        width={200}
                        height={200}
                        className="mt-5 w-64 mx-auto rounded-xl shadow-lg"

                    />
                    <p className="text-white text-2xl font-bold px-8 py-6">I am a supper programmer 😂 </p>


                </>

            )}
        </div>
    );

}