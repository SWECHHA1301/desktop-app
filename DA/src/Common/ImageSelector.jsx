import { useState } from 'react';
import { Pencil } from 'lucide-react';


export default function ImageSelector() {

const styles ={

  uploadBox:{
  display:'flex',
  justifyContent:'center',
  width:'100%'
  },
    uploadContainer:{
       
         width: '164px',
      
          height: '135px',
 position: 'relative',
 border: '2px solid #797979',
          borderRadius: '10px',
            
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundcolor:' #f9f9f9',
    },
   
    imagePlaceholder :{
 width: '60px',
          height: '40px',
          backgroundColor: '#aaa',
          borderRadius: '4px',
        
    },

    imagePreview :{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
        },

    uploadIcon :{
          position: 'absolute',
          bottom:'-8px' ,
          right: '-8px',
          width: '24px',
          height: '24px',
          backgroundColor:' #fff',
          border:'1px solid #888' ,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight:' bold',
          fontSize:' 14px',
          cursor: 'pointer',
          // zIndex: '2',
           borderRadius:'50px'
        },

        plusSign: {
          fontSize: '18px',
          fontWeight:'bold' ,
          marginTop: '-2px',
          width:'30px',
          height:'30px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        },
}

    const [previewUrl, setPreviewUrl] = useState(null);
     const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewUrl(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
  return (
   <>
       {/* Image Upload */}
       <div style={styles.uploadBox}>
          <div style={styles.uploadContainer}>
            <div >
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" style={styles.imagePreview} />
              ) : (
                <div style={styles.imagePlaceholder}/>
              )}
              <label style={styles.uploadIcon}>
                {previewUrl ? (
                  <Pencil size={14} color="#333" />
                ) : (
                  <span style={styles.plusSign}>+</span>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </label>
            </div>
          </div></div>
   </>
  )
}
