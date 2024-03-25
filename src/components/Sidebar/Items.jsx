import React, { useEffect, useRef, memo } from "react";

const TradingViewWidget = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `{
        "colorTheme": "light",
        "dateRange": "D",
        "showChart": false,
        "locale": "en",
        "width": "100%",
        "height": "100%",
        "largeChartUrl": "",
        "isTransparent": true,
        "showSymbolLogo": true,
        "showFloatingTooltip": true,
        "tabs": [
          {
            "title": "Indices",
            "symbols": [
              {
                "s": "BSE:SENSEX"
              },
              {
                "s": "BSE:RELI1!"
              },
              {
                "s": "BSE:SBIN"
              }
            ],
            "originalTitle": "Indices"
          },
          {
            "title": "Futures",
            "symbols": [
              {
                "s": "CME_MINI:ES1!",
                "d": "S&P 500"
              },
              {
                "s": "CME:6E1!",
                "d": "Euro"
              },
              {
                "s": "COMEX:GC1!",
                "d": "Gold"
              },
              {
                "s": "NYMEX:CL1!",
                "d": "WTI Crude Oil"
              },
              {
                "s": "NYMEX:NG1!",
                "d": "Gas"
              },
              {
                "s": "CBOT:ZC1!",
                "d": "Corn"
              }
            ],
            "originalTitle": "Futures"
          }
          
        ]
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
      style={{ height: "100%", width: "100%" }}
      ref={container}
    ></div>
  );
};

export default memo(TradingViewWidget);
