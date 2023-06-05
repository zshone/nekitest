import React, { useState, useEffect } from "react";

const InfoContext = React.createContext({
  informations: [],
  infoAreLoading: false,
});

export const InfoContextProvider = (props) => {
  const [informationData, setInformationData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const transformDate = (dateString) => {
      const dateArray = dateString.split("T");
      const date = dateArray[0];
      const dateFragments = date.split("-");
      const year = dateFragments[0];
      const month = dateFragments[1];
      const day = dateFragments[2];
      const transformedDate = `${day}.${month}.${year}.`;
      return transformedDate;
    };

    const fetchNotifications = async () => {
      setIsLoading(true);
      const response = await fetch(
        "http://sz-jg-122.onwebapp.io/api/notifications"
      );
      const responseData = await response.json();
      const transformedInfo = responseData.notifications.map((infoData) => {
        return {
          id: infoData.id.toString(),
          title: infoData.name,
          text: infoData.description,
          date: transformDate(infoData.time),
        };
      });
      setInformationData(transformedInfo);
      setIsLoading(false);
    };
    fetchNotifications();
  }, []);

  const contextValue = {
    informations: informationData,
    infoAreLoading: isLoading,
  };

  return (
    <InfoContext.Provider value={contextValue}>
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
