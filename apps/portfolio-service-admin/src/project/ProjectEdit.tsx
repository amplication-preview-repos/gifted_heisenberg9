import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndDate" source="endDate" />
        <TextInput label="GithubLink" source="githubLink" />
        <TextInput label="LiveDemoLink" source="liveDemoLink" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="StartDate" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
