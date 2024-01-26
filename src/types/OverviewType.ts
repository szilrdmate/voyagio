export type OverviewProps = {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    info: DestinationInfo;
  };
  
  type DestinationInfo = {
    shortDescription: string;
    shortHistory: string;
  };