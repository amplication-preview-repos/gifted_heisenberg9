import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  githubLink?: StringNullableFilter;
  id?: StringFilter;
  liveDemoLink?: StringNullableFilter;
  name?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
