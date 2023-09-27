
import {createContext, useState} from "react";


const DataContext = createContext({}); 


export const DataProvider  = ({Children}) => {
        const [title, settitle] = useState('Editing post');

        return (
                <DataContext.Provider 
                        value={{title , settitle}}
                >
                {Children}
                </DataContext.Provider>
        )

}

export default DataContext;



