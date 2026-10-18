import { useState } from "react"

export const Todo = () => {

    // ali=>red,
    // black 

    let [data, setData] = useState(

        ["ali", "omer", "saqib", "baber"]
    )

    return (
        <div>
            <h1>Todo App</h1>
            {
                data.map((v, i) => {
                    return (
                        v.toString().startsWith("a") == true ?
                            <h1 ></h1>
                            :
                            v.toString().length == 6 ?
                                <h1></h1>
                                :
                                <h1></h1>

                    )

                })
            }
        </div>
    )
}