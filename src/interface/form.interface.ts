import { ReactElement } from "react";
import { FormType, LocationType } from "./types";

export interface ILocation {
  id: string;
  name: string;
  location: number[];
  type: LocationType;
  logo: any;
}

export interface IField {
  label: string;
  children: ReactElement;
}

export interface ISubmitButton {
  formType: FormType;
  handleSubmit: () => void;
}

export interface IButton {
  onClick: () => void;
}
