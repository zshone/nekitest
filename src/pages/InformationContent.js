import InformationsContent from "../components/InformationsContent/InformationsContent";
import { InfoContextProvider } from "../store/info-context";

const InformationContent = () => {
  return (
    <InfoContextProvider>
      <InformationsContent />
    </InfoContextProvider>
  );
};

export default InformationContent;
