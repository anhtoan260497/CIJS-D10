import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import cloneDeep from "lodash.clonedeep";

highchartsMap(Highcharts);

const initOptions = {
  chart: {
    height: "500",
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    min: 0,
    stops: [
      [100, "#FFC4AA"],
      [200, "#FF8A66"],
      [300, "#FF392B"],
      [400, "#B71525"],
      [500, "	#7A0826"],
    ],
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "bottom",
  },
  series: [
    {
      mapData: {},
      name: "Dân số",
      joinBy: ["hc-key", "key"],
    },
  ],
};

function Map(props) {
  const [mapData, setMapData] = useState({});

  const [optionData, setOptionData] = useState({});

  const [mapLoaded, setMapLoaded] = useState(false);

  const chartRef = useRef(null);

  useEffect(() => {
    const getMapData = async () => {
      if (props.countryCode !== "Global") {
        const mapData = await import(
          `@highcharts/map-collection/countries/${props.countryCode}/${props.countryCode}-all.geo.json`
        );
        setMapData(mapData);
      }
    };
    getMapData();
  }, [props.countryCode]);

  useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      const fakeData = mapData.features.map((feature, index) => ({
        key: feature.properties["hc-key"],
        value: index,
      }));

      setOptionData(() => ({
        ...initOptions,
        title: {
          text: mapData.title,
        },
        series: [
          { ...initOptions.series[0], mapData: mapData, data: fakeData },
        ],
      }));

      if (!mapLoaded) setMapLoaded(true);
    }
  }, [mapData, mapLoaded]);
  
  useEffect(() => {
    if (chartRef && chartRef.current) {
      chartRef.current.chart.series[0].update({
        mapData,
      });
    }
  }, [optionData, mapData]);

  if (!mapLoaded) return null;

  return (
    <div className="map-container">
      <HighchartsReact
     highcharts={Highcharts}
     options={cloneDeep(optionData)}
     constructorType={'mapChart'}
     ref={chartRef}
      />
    </div>
  );
}

export default Map;
