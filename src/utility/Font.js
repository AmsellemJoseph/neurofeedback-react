import React, { useEffect } from 'react'
import WebFont from 'webfontloader';

const Font = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Josefin Sans', 'Lato', 'Gentium Book Basic','Roboto','Lora']
      }
    });
  }, []);

  return (
    <div>

    </div>
  )
}

export default Font