import React, { useEffect, useRef, memo } from "react";

const TradingViewWidget = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BSE:SENSEX",
          "interval": "15",
          "timezone": "Asia/Kolkata",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "hide_side_toolbar": false,
          "withdateranges": true,
          "hotlist": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);

    // Cleanup function
    return () => {
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container__widget"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
};

export default memo(TradingViewWidget);
