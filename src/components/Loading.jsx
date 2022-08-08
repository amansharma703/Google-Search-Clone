import React from "react";
import { Oval } from "react-loader-spinner";

export const Loading = () => (
    <div className='flex justify-center items-center '>
        <Oval
            height={30}
            width={30}
            color='#5C8AF0'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor='#5C8AF0'
            strokeWidth={4}
            strokeWidthSecondary={4}
        />
    </div>
);
