import {
  Create,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="text" label="text" validate={[required()]} />

        <TextInput source="imageSrc" label="Image URL" />
        <TextInput source="audioSrc" label="Audio URL" />
        <BooleanInput source="correct" label="correct option" />
      </SimpleForm>
    </Create>
  );
};
