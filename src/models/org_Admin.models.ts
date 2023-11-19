export type singlefeature = {
  name: string;
  description: string;
  subFeatures: string[];
  userStory: string[];
  remark: string;
};
export type feature = {
  id: number;
  name: string;
  features: string;
  featuresDrill: singlefeature[];
};
