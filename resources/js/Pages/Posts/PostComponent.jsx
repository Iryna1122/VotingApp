import React from "react";

export default function PostComponent ()
{
    return(
        <div>
            <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">React Component with Controller</h2>

            <form action="" method="POST">
                @csrf
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="Summary"/>
                </div>
                <div>
                    <label htmlFor="email">text:</label>
                    <input type="text" id="" name="Short_Descrition"/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="Full_Text" rows="4"></textarea>
                </div>
                <div>
                    <button type="submit">create</button>
                </div>
            </form>
        </div>
    )
}
