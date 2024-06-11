import Image from "next/image";

function Logo (props:any) {
    const {renderDefault,title}=props

  return (
  <div className="flex items-center space-x-2">
  <Image className="rounded-full object-cover" src="/public/images/logo/Logo.png" alt="logo" width={50} height={50} />
  <>{renderDefault(props)}</>
  </div>
  )
    
  
};

export default Logo;

