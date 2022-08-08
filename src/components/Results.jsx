import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useStateContext } from "../contexts/StateContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
    const { results, loading, getResults, searchTerm } = useStateContext();
    const location = useLocation();

    useEffect(() => {
        if (searchTerm !== "") {
            if (location.pathname === "/videos") {
                getResults(`/search/q=${searchTerm} videos`);
            } else {
                getResults(`${location.pathname}/q=${searchTerm}&num=40`);
            }
        }
    }, [searchTerm, location.pathname]);

    if (loading) return <Loading />;

    switch (location.pathname) {
        case "/search":
            return (
                <div className='sm:px-56 flex flex-col justify-between space-y-6 pt-3'>
                    <p>
                        About {results.total} results ({String(results.ts).slice(0, 3)} seconds)
                    </p>
                    {results?.results?.map(({ link, title, description }, index) => (
                        <div key={index} className=' w-full'>
                            <a href={link} target='_blank' rel='noreferrer'>
                                <p className='text-xs'>{link.length > 30 ? link.substring(0, 30) : link}</p>
                                <p className='text-xl hover:underline dark:text-blue-300 text-blue-700  '>{title}</p>
                                <p className='text-sm  '>{description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case "/image":
            return (
                <div className='flex flex-wrap justify-center items-center'>
                    {results?.image_results?.map(({ image, link: { href, title } }, index) => (
                        <a href={href} target='_blank' key={index} rel='noreferrer' className='sm:p-3 p-5'>
                            <img src={image?.src} alt={title} loading='lazy' />
                            <p className='sm:w-36 w-36 break-words text-sm mt-2'>{title}</p>
                        </a>
                    ))}
                </div>
            );
        case "/news":
            return (
                <div className='sm:px-56 flex flex-col justify-between space-y-6 pt-3'>
                    {results?.entries?.map(({ id, links, source, title }) => (
                        <div key={id} className=' w-full '>
                            <a href={links?.[0].href} target='_blank' rel='noreferrer ' className='hover:underline '>
                                <p className='text-lg dark:text-blue-300 text-blue-700'>{title}</p>
                            </a>
                            <div className='flex gap-4'>
                                <a href={source?.href} target='_blank' rel='noreferrer' className='hover:underline hover:text-blue-300'>
                                    {" "}
                                    {source?.href}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            );
        case "/video":
            return (
                <div className='px-14 pt-4'>
                    <p>
                        About {results.total} results ({String(results.ts).slice(0, 3)} seconds)
                    </p>
                    <div className=' grid grid-cols-3 gap-3'>
                        {results?.results?.map((video, index) => (
                            <div key={index} className='p-2'>
                                <p className='text-xs'>{video.link.length > 30 ? video.link.substring(0, 30) : video.link}</p>
                                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700  '>{video.title.slice(0, 40)}</p>
                                <ReactPlayer url={video.additional_links?.[0].href} controls width='355px' height='200px' />
                            </div>
                        ))}
                    </div>
                </div>
            );
        default:
            return "Error...";
    }
};
