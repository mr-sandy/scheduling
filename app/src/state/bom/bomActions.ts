import { Bom } from "../../../../common/types";

export enum BomActionType {
  INITIALISE_BOM = "INITIALISE_BOM",
  SET_PROPERTY = "SET_PROPERTY",
}

interface Property<T> {
  [key: string]: T;
}

interface InitialiseBomAction {
  type: BomActionType.INITIALISE_BOM;
}

interface SetPropertyAction<T> {
  type: BomActionType.SET_PROPERTY;
  property: Property<T>;
}

export function initialiseBom(): InitialiseBomAction {
  return {
    type: BomActionType.INITIALISE_BOM,
  };
}

export function setProperty<T>(property: Property<T>): SetPropertyAction<T> {
  return {
    type: BomActionType.SET_PROPERTY,
    property,
  };
}

export type BomAction =
  | InitialiseBomAction
  | SetPropertyAction<string>
  | SetPropertyAction<number>
  | SetPropertyAction<boolean>;
