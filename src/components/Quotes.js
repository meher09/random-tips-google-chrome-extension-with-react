import React, { useEffect, useState } from 'react';

const Quotes = ({ quotes }) => {
    const [quote, setQuote] = useState({})
    useEffect(() => {
        const randomChoice = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomChoice])
    }, [quotes])

    return (
        <div className='text-yellow-400 '>
            <h2 className='mb-6 font-bold text-2xl text-center'>আপনি জানেন কি ?</h2>

            <div className="text-white border p-6 rounded-lg">
                <p className='text-2xl'>{quote.line}

                </p>
                <p className='mt-5 text-right text-yellow-500 hover:text-yellow-600'><span className='text-white'>সুত্রঃ</span> <a href={quote.refer_link}>{quote.reference}</a></p>
            </div>
        </div>
    );
};

export default Quotes;