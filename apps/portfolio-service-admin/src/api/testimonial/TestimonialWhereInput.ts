import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TestimonialWhereInput = {
  authorName?: StringNullableFilter;
  content?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};
