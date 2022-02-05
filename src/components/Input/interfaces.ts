import { ChangeEventHandler } from 'react';

export interface InputProps {
  title: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
