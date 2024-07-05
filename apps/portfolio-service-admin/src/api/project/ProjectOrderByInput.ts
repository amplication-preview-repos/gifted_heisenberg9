import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  githubLink?: SortOrder;
  id?: SortOrder;
  liveDemoLink?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
