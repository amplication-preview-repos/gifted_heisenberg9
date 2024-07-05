import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TestimonialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AuthorName" source="authorName" />
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="Date" source="date" />
      </SimpleForm>
    </Edit>
  );
};
