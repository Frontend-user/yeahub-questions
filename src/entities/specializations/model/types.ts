export interface ISpecialization {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFormattedSpecialization extends ISpecialization {
  selected: boolean;
}

export interface ISpecializationsSliceInitialState {
  specializations: ISpecialization[];
  formattedSpecializations: IFormattedSpecialization[];
  status: string;
}
