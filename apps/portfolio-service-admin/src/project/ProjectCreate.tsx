import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndDate" source="endDate" />
        <TextInput label="GithubLink" source="githubLink" />
        <TextInput label="LiveDemoLink" source="liveDemoLink" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="StartDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
