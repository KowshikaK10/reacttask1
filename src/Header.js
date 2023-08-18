import Booking from './Booking'
const Header = () => {
    return (
      <div className='header'>
      <header className='headerNav'>
        <img 
        src="https://d9hhrg4mnvzow.cloudfront.net/go.taboola.com/40-native-casestudies/db75de40-taboola-logo-white_1000000000000000000028.png" 
      alt="logo"/>
      
      <nav className='navbar'>
      <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Product</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
      </nav>
    </header>
    <Booking />
    </div>
    )
  }
  export default Header;