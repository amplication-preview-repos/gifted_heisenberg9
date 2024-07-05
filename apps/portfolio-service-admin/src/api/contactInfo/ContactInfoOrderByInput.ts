import { SortOrder } from "../../util/SortOrder";

export type ContactInfoOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
