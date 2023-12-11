import React from 'react';
import Head from 'next/head';

const ConstructionPage = () => {
    return (
        <>
            <Head>
                <title>Under Construction</title>
            </Head>
            <div className="flex justify-center items-center h-screen bg-gray-200">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-sapphire">Our Website is Under Construction</h1>
                    <p className="mt-2">We&apos;re working on something exciting! We&apos;ll be back soon.</p>
                </div>
            </div>
        </>
    );
};

export default ConstructionPage;