import { useState, useEffect } from 'react';

export default function useDeviceDetect() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const breakpoint = 768;
    if (window.innerWidth < breakpoint) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    window.addEventListener('resize', () =>
      window.innerWidth < breakpoint ? setMobile(true) : setMobile(false)
    );
  }, []);

  return { isMobile };
}
