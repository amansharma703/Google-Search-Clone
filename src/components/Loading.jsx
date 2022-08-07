import React from "react";
import { Oval } from "react-loader-spinner";

export const Loading = () => (
    <div className='flex justify-center items-center '>
        <Oval
            height={40}
            width={40}
            color='#4fa94d'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor='#4fa94d'
            strokeWidth={3}
            strokeWidthSecondary={3}
        />
    </div>
);
