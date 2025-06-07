import React from 'react'
import Sidebar from './Common/Sidebar'
import Navbar from './Common/Navbar'
import SidebarDrawer from './Common/SidebarDrawer'

const MainContainer = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '5px'
            }}>
                <Sidebar />
                <div style={{
                    height: '92vh',
                    overflowY: 'scroll',
                    width: '100%',
                    padding: "24px",
                }}>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}

export default MainContainer