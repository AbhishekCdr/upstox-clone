import React, { useEffect, useRef, memo } from "react";

const TradingViewWidget = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `{
        "symbols": [
          {
            "description": "",
            "proName": "BSE:SENSEX"
          }
        ],
        "isTransparent": true,
        "showSymbolLogo": false,
        "colorTheme": "light",
        "locale": "en"
      }`;
    container.current.appendChild(script);

    // Cleanup function
    return () => {
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container__widget "
      ref={container}
    ></div>
  );
};

export default memo(TradingViewWidget);
