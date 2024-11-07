import React from 'react'

const DefaultLayout = ({ children }) => {
    return (
        <div className=' dark:bg-boxdark-2 dark:text-body'>
            {/* page wrapper start */}
            <div className=' flex h-screen overflow-hidden'>
                {/* sidebar */}
                <div className=' bg-gray-500 w-45'>siderbar</div>
                {/* content area start */}
                <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
                    {/* header  */}
                    <div className=' bg-blue-500 h-13'>header</div>

                    <main className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                        <div>
                            {children}
                        </div>
                    </main>
                </div>
                {/* content area end */}
            </div>
            {/* page wrapper end  */}
        </div>
    )
}

export default DefaultLayout