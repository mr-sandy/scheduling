export interface Country {
  code: string;
  name: string;
}

export interface RetailerOptions {
  retailerId: string,
  singleStore?: boolean,
  multiStore?: boolean,
  banners?: boolean,
}

export interface Bom {
  id?: string;
  name?: string;
  client?: string;
  salesLead?: string;
  arr?: number;
  countries?: Country[];
  requestedLiveDate?: string;
  expectedContractStartDate?: string;
  fundamentals?: {
    fixTheBasics?: boolean;
    sellTheBenefits?: boolean;
    easyToBuy?: boolean;
    smartPricingAndPromo?: boolean;
    winningCampaigns?: boolean;
    deliverValueThatCounts?: boolean;
    listenToTheShoppersVoice?: boolean;
    excuteYourCategoryVision?: boolean;
  };
  categories?: string[];
  averageSkusPerCategory?: number;
  gatherFrequency?: string;
  scorecards?: {
    digitalShelfScorecardBranded?: boolean;
    digitalShelfScorecardCompetitor?: boolean;
    enterprise?: boolean;
    cars?: boolean;
    carsPds?: boolean;
    pdskMw?: boolean;
    pdskFood?: boolean;
  };
  publicationService?: {
    walmart?: boolean;
    target?: boolean;
    kroger?: boolean;
    traitedData?: boolean;
  };
  pimIntegration?: boolean;
  bigQueryAccess?: boolean;
  dataQualityDashboard?: boolean;
  nonStandardProductRequirements?: string;
  retailers?: RetailerOptions[];
  apps?: RetailerOptions[];
}
