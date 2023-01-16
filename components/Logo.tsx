import Image from "next/image";
import React from "react";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
        alt="logo"
      />
      {<>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
