import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TestimonialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AuthorName" source="authorName" />
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="Date" source="date" />
      </SimpleForm>
    </Create>
  );
};
