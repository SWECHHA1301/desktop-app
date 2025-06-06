import React, {useState,useEffect } from 'react';
import { HelpCircle } from 'lucide-react';
import { Logo } from './Icons';

const Navbar = () => {
    const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);

  const styles = {
  navbar: {
    width: '100%',
    height: '8vh',
    backgroundColor: '#E2E6F3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    borderBottom: '1px solid #000000',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  navbarLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    width: '40px',
    height: '40px',
  },
  navbarDate: {
    fontSize: '14px',
    color: '#3658BF',
    paddingLeft: '8px',
  },
  navbarCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  searchWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    left: '12px',
    transform: 'translateY(-50%)',
    color: '#999',
    fontSize: '16px',
  },
  searchInput: {
    width: '100%',
    height: '40px',
    padding: '8px 12px 8px 36px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  iconsNavbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  iconsSvgNavbar: {
    width: '20px',
    height: '20px',
    color: '#333',
    cursor: 'pointer',
  },
  profile: {
    width: '42px',
    height: '40.5px',
  },
};


  return (
    <nav style={styles.navbar}>
  <div style={styles.navbarLeft}>
    <div style={styles.logo}>
       <Logo />
    </div>
    <span style={styles.navbarDate}>{currentDate}</span>
  </div>

<div style={styles.navbarCenter}>
  <div style={styles.searchWrapper}>
    <i  style={styles.searchIcon}  className="fa fa-search" aria-hidden="true"></i>
    <input type="text" placeholder="Search" style={styles.searchInput} />
  </div>
</div>

  <div style={styles.iconsNavbar}>
        <HelpCircle style={styles.iconsSvgNavbar} size={18} />
        <svg style={styles.iconsSvgNavbar}  xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
        <path d="M24.7163 20.4543C23.9935 19.1674 22.9191 15.5259 22.9191 10.7697C22.9191 7.91339 21.8215 5.17408 19.8676 3.15437C17.9138 1.13466 15.2638 0 12.5007 0C9.7375 0 7.08752 1.13466 5.13368 3.15437C3.17984 5.17408 2.08218 7.91339 2.08218 10.7697C2.08218 15.5272 1.00648 19.1674 0.283696 20.4543C0.0991206 20.7815 0.00127013 21.1532 1.2282e-05 21.532C-0.00124557 21.9108 0.0941339 22.2831 0.276532 22.6116C0.45893 22.9401 0.721896 23.2131 1.03891 23.403C1.35593 23.5929 1.71578 23.6931 2.08218 23.6933H7.3969C7.63727 24.9092 8.27651 26.0019 9.2065 26.7866C10.1365 27.5714 11.3002 28 12.5007 28C13.7011 28 14.8648 27.5714 15.7948 26.7866C16.7248 26.0019 17.364 24.9092 17.6044 23.6933H22.9191C23.2854 23.6928 23.6451 23.5925 23.9619 23.4025C24.2788 23.2125 24.5415 22.9395 24.7238 22.6111C24.906 22.2826 25.0013 21.9103 25 21.5317C24.9987 21.153 24.9008 20.7814 24.7163 20.4543ZM12.5007 25.8473C11.8545 25.8471 11.2242 25.6398 10.6967 25.2541C10.1691 24.8684 9.77022 24.3231 9.55483 23.6933H15.4465C15.2311 24.3231 14.8322 24.8684 14.3046 25.2541C13.7771 25.6398 13.1468 25.8471 12.5007 25.8473ZM2.08218 21.5394C3.08496 19.757 4.16588 15.6268 4.16588 10.7697C4.16588 8.48466 5.044 6.2932 6.60708 4.67744C8.17015 3.06167 10.2901 2.15394 12.5007 2.15394C14.7112 2.15394 16.8312 3.06167 18.3942 4.67744C19.9573 6.2932 20.8354 8.48466 20.8354 10.7697C20.8354 15.6228 21.9137 19.753 22.9191 21.5394H2.08218Z" fill="black"/>
        </svg>
        <svg style={styles.profile} xmlns="http://www.w3.org/2000/svg" width="42" height="41" viewBox="0 0 42 41" fill="none">
        <path d="M21 0C16.8466 0 12.7865 1.18764 9.33303 3.41274C5.8796 5.63784 3.18798 8.80045 1.59854 12.5007C0.00909897 16.2009 -0.406771 20.2725 0.403518 24.2006C1.21381 28.1287 3.21386 31.7369 6.15077 34.5689C9.08767 37.4009 12.8295 39.3295 16.9031 40.1109C20.9767 40.8922 25.1991 40.4912 29.0364 38.9585C32.8736 37.4259 36.1534 34.8304 38.4609 31.5003C40.7684 28.1702 42 24.2551 42 20.25C41.9941 14.8811 39.7797 9.73373 35.8427 5.93735C31.9058 2.14097 26.5677 0.00566965 21 0ZM10.1123 33.7824C11.2809 32.0201 12.8908 30.5697 14.7935 29.5651C16.6963 28.5605 18.8307 28.0339 21 28.0339C23.1693 28.0339 25.3037 28.5605 27.2065 29.5651C29.1092 30.5697 30.7191 32.0201 31.8877 33.7824C28.7747 36.117 24.9436 37.3845 21 37.3845C17.0564 37.3845 13.2253 36.117 10.1123 33.7824ZM14.5385 18.6923C14.5385 17.46 14.9174 16.2553 15.6274 15.2307C16.3374 14.206 17.3466 13.4074 18.5273 12.9358C19.708 12.4642 21.0072 12.3408 22.2606 12.5813C23.514 12.8217 24.6653 13.4151 25.569 14.2865C26.4727 15.1579 27.0881 16.2681 27.3374 17.4767C27.5867 18.6854 27.4587 19.9382 26.9697 21.0767C26.4806 22.2152 25.6524 23.1884 24.5898 23.873C23.5272 24.5576 22.278 24.9231 21 24.9231C19.2863 24.9231 17.6428 24.2666 16.431 23.0981C15.2192 21.9296 14.5385 20.3448 14.5385 18.6923ZM34.2785 31.6231C32.4768 29.1056 29.9435 27.158 26.9971 26.0251C28.5798 24.8231 29.7347 23.1753 30.3012 21.311C30.8678 19.4466 30.8177 17.4584 30.158 15.6228C29.4984 13.7871 28.2619 12.1953 26.6206 11.0687C24.9793 9.94215 23.0147 9.33676 21 9.33676C18.9853 9.33676 17.0207 9.94215 15.3794 11.0687C13.7381 12.1953 12.5016 13.7871 11.842 15.6228C11.1823 17.4584 11.1323 19.4466 11.6988 21.311C12.2653 23.1753 13.4202 24.8231 15.0029 26.0251C12.0565 27.158 9.52317 29.1056 7.72155 31.6231C5.445 29.1545 3.95704 26.1039 3.43683 22.8387C2.91662 19.5735 3.38635 16.2329 4.78946 13.2192C6.19256 10.2054 8.46921 7.64706 11.3453 5.85213C14.2213 4.0572 17.5741 3.10223 21 3.10223C24.4259 3.10223 27.7787 4.0572 30.6547 5.85213C33.5308 7.64706 35.8074 10.2054 37.2106 13.2192C38.6137 16.2329 39.0834 19.5735 38.5632 22.8387C38.043 26.1039 36.555 29.1545 34.2785 31.6231Z" fill="black"/>
        </svg>
      </div>
</nav>
  );
};

export default Navbar;


