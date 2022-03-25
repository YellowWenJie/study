import React, { useState } from 'react';
import { getCustomer, patchCustomer } from '../../../services/API';
import { Link, useHistory, useParams } from 'react-router-dom';
import { BackLink, Hint, Label, Textarea, Button } from 'govuk-react-jsx';

export default function AddNote() {
  const history = useHistory();
  const { id, type } = useParams();

  const [textNote, setTextNote] = useState('');

  const saveNote = async () => {
    const addTime: string = new Date().toISOString();
    const customerNote: any = await getCustomer(id);

    const upDate = {
      title: 'Note Added',
      byline: customerNote.firstName + ' ' + customerNote.lastName,
      time: addTime,
      description: textNote,
    };
    const addCustomerNote = {
      notes: [upDate, ...customerNote.notes],
    };
    if (textNote) {
      await patchCustomer(id, addCustomerNote);

      localStorage.setItem('flag', '1');
      history.push(`/notes/${type}/${history.location.state}`);
    }
  };

  return (
    <div>
      <BackLink
        onClick={(event: any) => {
          event.preventDefault();
          history.goBack();
        }}
      >
        Back
      </BackLink>
      <Hint>New note</Hint>
      <Label className="govuk-label--xl" isPageHeading>
        Type new note below
      </Label>
      <Textarea
        id="more-detail"
        name="more-detail"
        onChange={(event: any) => {
          setTextNote(event.target.value);
        }}
      />
      <Button onClick={saveNote}>Save and continue</Button>
      <div>
        <Link
          to={''}
          className="govuk-link"
          onClick={(event: any) => {
            event.preventDefault();
            history.goBack();
          }}
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}
