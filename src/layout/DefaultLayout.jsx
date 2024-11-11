import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const DefaultLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className=' dark:bg-boxdark-2 dark:text-body'>
            {/* page wrapper start */}
            <div className=' flex h-screen overflow-hidden'>
                {/* sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* content area start */}
                <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
                    {/* header  */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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