import { FormType } from "./types";
import { Dispatch, SetStateAction } from "react";
import { ILocation } from "./form.interface";

export interface ILocationFormProps {
  formType: FormType;
  selectedLocation?: any;
  popupRef?: any;
}

export interface IShowMapButtonProps {
  showFullMap: boolean;
  setShowFullMap: Dispatch<SetStateAction<boolean>>;
}

export interface ITitleProps {
  text: string;
}
export interface ILocationDetailsProps {
  location: ILocation;
  handleEdit: () => void;
}
