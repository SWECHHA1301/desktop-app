export function Details() {
  return (
    <div
      style={{
        borderBottom: '1px solid #D4DAED',
        padding: '16px 24px',
        // marginTop: '8px',
      }}
    >
      <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '12px' }}>Details</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '14px', marginBottom: '4px',color:'#797979' }}>Unit type</label>

        <select
          style={{
            backgroundColor: '#E3E6EE',
            border: 'none',
            padding: '9px 16px',
            borderRadius: '5px',
            width: '390px',
            fontSize: '12px',
            appearance: 'none',
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>\")",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px center',
            backgroundSize: '16px',
          }}
        >
          <option>Unit</option>
        </select>

        <div style={{ display: 'flex', marginLeft:'16px'}}>
          <div style={{ fontSize: '12px', color: '#555' }}>
            <div style={{ marginBottom: '4px', display:'flex',gap:'20px'}}>
              <span style={{ fontWeight: '400' ,width:'88px'}}>Primary Unit</span> <p>:</p> <span style={{ color: 'black' }}>in unit</span>
            </div>
            <div style={{display:'flex',gap:'20px'}}>
              <span style={{ fontWeight: '400' ,width:'88px'}}>Secondary Unit</span> : <span style={{ color: 'black' }}>in unit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
