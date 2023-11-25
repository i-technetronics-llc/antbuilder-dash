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
export type CreateBooking = {
  personalData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  companyData: {
    companyName: string;
    websiteUrl: string;
    industry: string;
    countryName: string;
    state: string;
    employeeCount: number;
  };
  projectData: {
    projectTitle: string;
    projectBudget: number;
    projectDescription: string;
  };
};
