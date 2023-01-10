import { useState } from 'react';
import { defaultFormData } from '../constants';
import { ShredForm } from '../types';

const ShredderFormInput = (props: any) => {
  const { label, value, onFormInputChange } = props;
  return (
    <div>
      <span>{label}:</span>
      <input 
        onChange={onFormInputChange}
        value={value}
      />
    </div>
  );
};

// TODO: once the api's are connected and a basic
// "Scoring" is captured, begin to refactor this as if it were
// as "select your character" screen
export const ShredderForm = (props: any) => {
  const { onSubmit } = props;
  const [formData, setFormData] = useState<ShredForm>(defaultFormData);

  const toOnFormInputChangeUsingKey = (formKey: string) => (event: any): void => { 
    const { target: { value } } = event;
    setFormData({ ... formData, [formKey]: value }); 
  };

  const onClear = () => {
    setFormData(defaultFormData);
  };


  return (
    <div>
      {
        Object.entries(formData).map(([skaterKey, skaterValue], index) => {
          return (
            <ShredderFormInput
              key={skaterKey}
              label={`Skater ${index + 1}`}
              value={skaterValue}
              onFormInputChange={toOnFormInputChangeUsingKey(skaterKey)}
            />
          );
        })
      }
      <div>
        <button onClick={onClear}>Clear</button>
        <button onClick={() => onSubmit(formData)}>Submit</button>
      </div>
    </div>
    
  );
};

export default ShredderForm;