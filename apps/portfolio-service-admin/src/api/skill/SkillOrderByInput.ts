import { SortOrder } from "../../util/SortOrder";

export type SkillOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  proficiencyLevel?: SortOrder;
  updatedAt?: SortOrder;
};
