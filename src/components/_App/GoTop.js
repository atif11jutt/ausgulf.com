import React from 'react';
import * as Icon from 'react-feather';

const GoTop = ({ scrollStepInPx, delayInMs }) => {

  const [thePosition, setThePosition] = React.useState(false);
  const timeoutRef = React.useRef(null);

  const updateScroll = () => {
    if (window.scrollY > 170) {
      setThePosition(true);
    } else {
      setThePosition(false);
    }
  };

  React.useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      document.addEventListener("scroll", updateScroll);
    }

    return () => {
      document.removeEventListener("scroll", updateScroll);
      isMounted = false;
    };
  }, [])

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  }

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, delayInMs);
  }

  const renderGoTopIcon = () => {
    return (
      <button
        type="button"
        className={`go-top ${thePosition ? 'active' : ''}`}
        onClick={scrollToTop}
        aria-label="go to top"
      >
        <Icon.ArrowUp />
      </button>
    )
  }

  return (
    <React.Fragment>
      {renderGoTopIcon()}
    </React.Fragment>
  )
}

export default GoTop;