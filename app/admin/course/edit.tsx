import { Edit, SimpleForm, TextInput } from "react-admin";

export const CourseEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id" />
        <TextInput source="imageSrc" label="Image" />
        <TextInput source="title" label="Title" />
      </SimpleForm>
    </Edit>
  );
};
