import headerStyles from '../styles/Header.module.css';

const Header = () => {
   return (
      <div>
         <h1 className={headerStyles.title}>
            <span>Web Dev</span>Newz
         </h1>
         <p className={headerStyles.description}>
            Keep up to date with the latest Web Dev Newz
         </p>
         {/* <style jsx>
            {`
               .title {
                  color: red;
               }
            `}
         </style> */}
      </div>
   );
};

export default Header;
