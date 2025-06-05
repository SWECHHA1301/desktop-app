import React from 'react'
import TotalItem from './Components/TotalBlock/TotalItem'
import SellingItem from './Components/SellingItem/SellingItem'
import PayMethod from './Components/PaymentAndAccount/PayMethod'
export default function Dashboard() {
  const styles = {
  dashBoard: {
    backgroundColor: '#E2E6F3',
    width: '100%',
    fontFamily: 'Arial, Helvetica, sans-serif',
    height: 'auto',
  },
  title: {
    color: '#3658BF',
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '100%',
  },
  elementContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  collectionBlock: {
    marginTop: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: '24px',
  },
  totalItems: {
    marginTop: '24px',
  },
};

  return (
    <>
    <div style={styles.dashBoard}>
      <div style={styles.elementContainer}>

        <div>
      <h2 style={styles.title}>Dashboard</h2>
      </div>

      <div style={styles.totalItems}>
        <TotalItem/>
      </div>

       <div  style={styles.collectionBlock}>
       <SellingItem/>

       <PayMethod/>
       </div>

      </div>
    </div>
    </>
  )
}
