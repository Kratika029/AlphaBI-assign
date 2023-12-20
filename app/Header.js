import Image from 'next/image';
import {auth} from '../app/firebase/config'
import { signOut } from 'firebase/auth';
import logo2 from '../public/Logo.webp';
import style from '../public/main.module.css';
function Header(){
    
    const styles = {
        header:{
            
            backgroundColor: "grey",
            padding : "20px",
            display : "flex",
            width : "100%",
            // height : "110px",
            marginBottom : "20px",
            alignItems : "center",
            justifyContent: "spaceBetween",
            justifyContent : "center",
            boxShadow : "5px 5px 15px 2px",
            
        },

        
        btn:{
            fontSize : "20px",
            width : "10%"
        },
        icon:{
            height: "18px",
            width : "20%",
            marginLeft :"4px"
        },
        
        title:{
            color: "#FFFFFF",
            textAlign: "center",
        },
        im:{
          marginTop: "-20px",
          height : "120px",
          justifyContent : "center"
        }
      };
  return (
    <div className = "header">
       
        <div style = {styles.header}>
        <Image style ={styles.im} src = {logo2}/>
        
         <button className={style.btn2}
    onClick = {() => {  signOut(auth)
    sessionStorage.removeItem('user')
    
     }}
     >
     Log Out
    </button>
        </div> 
        
        
    </div>
  )
}

export default Header;