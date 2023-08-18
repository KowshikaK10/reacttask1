import { FaFacebook ,FaInstagram,FaYoutube,FaWhatsapp} from "react-icons/fa";

const Footer = () => {
    const date=new Date();
  return (
    <div className='footer'>
      <ul>
        <li>
        <img 
        src="https://d9hhrg4mnvzow.cloudfront.net/go.taboola.com/40-native-casestudies/db75de40-taboola-logo-white_1000000000000000000028.png" 
          alt="logo"/>
        </li>
        <li> <FaFacebook  size={30}/> <FaInstagram size={30}/> <FaYoutube size={30}/> <FaWhatsapp size={30}/></li>
        <li>
          Copyright &copy;{date.getFullYear()}
        </li>
      </ul>
      
      
    </div>
  )
}

export default Footer