import React from 'react'
import Sidebar from './Common/Sidebar'
import Navbar from './Common/Navbar'

const MainContainer = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div
                style={{
                    height: '8vh'
                }}
            />
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Sidebar />
                <div style={{
                    height: '92vh',
                    overflowY: 'scroll',
                    width: '100%',
                    padding: "24px"

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