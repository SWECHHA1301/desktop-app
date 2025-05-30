export default function ProductInfo() {
  return (
    <div
      style={{
        padding: '16px',
        borderBottom: '1px solid #D4DAED',
        borderTop: '1px solid #D4DAED',
        marginTop: '8px'
      }}
    >
      <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Product Info</h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 160px',
        }}
      >
        {/* Left side inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginBottom: '4px', fontSize: '14px' }}>Product Name *</label>
            <input
              type="text"
              style={{
                width: '390px',
                height: '27px',
                padding: '10px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                backgroundColor: '#E3E6EE',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginBottom: '4px', fontSize: '14px' }}>Product Code</label>
            <input
              type="text"
              style={{
                width: '390px',
                height: '27px',
                padding: '10px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                backgroundColor: '#E3E6EE',
              }}
            />
          </div>
        </div>

        {/* Image upload placeholder */}
        <div
          style={{
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '164px',
              height: '135px',
              border: '2px solid #797979',
              borderRadius: '10px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f9f9f9',
              right: '194px'
            }}
          >
            <div
              style={{
                width: '60px',
                height: '40px',
                backgroundColor: '#aaa',
                borderRadius: '4px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-8px',
                right: '-8px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: '1px solid #888',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row with description and product type */}
     
<div
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 160px',
  }}
>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label style={{ marginBottom: '4px', fontSize: '14px' }}>Product Description</label>
    <textarea
      style={{
        width: '396px',
        height: '93px',
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        backgroundColor: '#E3E6EE',
        resize: 'none',
      }}
    />
  </div>

  <div style={{ marginLeft: '-194px', marginTop: '8px', display: 'flex', flexDirection: 'column' }}>
    <label style={{ fontSize: '14px', marginBottom: '6px', marginTop: '56px' }}>Product Type</label>
    <select
      style={{
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#E3E6EE',
        height: '27px',
        width: '360px',
      }}
    >
      <option>Product</option>
      <option>Service</option>
    </select>
  </div>
</div>

    </div>
  );
}

