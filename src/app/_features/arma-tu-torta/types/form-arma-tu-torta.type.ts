type SizeValue =
  | "mini-cake"
  | "pequena"
  | "mediana"
  | "grande"
  | "extra-grande";

type SaborValue = "vainilla" | "chocolate" | "fresa" | "limon" | "tiramisu";

type DisenoValue = "cremosa" | "fondant" | "ganache";

export type FormTorta = {
  size: SizeValue;
  sabor: SaborValue;
  diseno: DisenoValue;
  relleno: { value: string; label: string }[];
};

export type Form = [
  {
    value: string;
    label: string;
    options: {
      value: SizeValue;
      label: string;
      cantidad: string;
    }[];
  },
  {
    value: string;
    label: string;
    options: {
      value: SaborValue;
      label: string;
    }[];
  },
  {
    value: string;
    label: string;
    options: {
      value: DisenoValue;
      label: string;
      description: string;
    }[];
  },
  {
    value: string;
    label: string;
    options: { value: string; label: string }[];
  },
];
