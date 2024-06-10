import data  from '../utils/data.json';
import Image from "next/image";
import React from 'react'

const GridPage: React.FC = () => {
return (
    <div className='grid grid-cols-3 gap-4'>
        {data.cgm.map((item, index) => (
            <div key={index} className='rounded-lg bg-black-200'>
                <a href={item.url} target='_blank' rel='noopener noreferrer'>
                    <h2 className='text-lg font-semibold mb-2'>
                        {item.title}
                        <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-mode'>
                            -&gt;
                        </span>
                    </h2>
                </a>
            
                <p>
                    <Image src={item.url} alt={item.title}
                        width={363}
                        height={322}>
                    </Image>
                </p>
            </div>
        ))}   
    </div>
)};

export default GridPage;