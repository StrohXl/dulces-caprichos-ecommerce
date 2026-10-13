"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Form, FormTorta } from "../types/form-arma-tu-torta.type";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

export default function FormArmaTuTorta() {
  const { handleSubmit, watch, setValue } = useForm<FormTorta>({
    defaultValues: {
      size: "mini-cake",
      sabor: "vainilla",
      diseno: "cremosa",
    },
  });
  const size = watch("size");
  const sabor = watch("sabor");
  const diseno = watch("diseno");

  const formSubmit: SubmitHandler<FormTorta> = (data) => {
    console.log(data);
  };

  const [position, setPosition] = useState(0);

  const form: Form = [
    {
      value: "Tamaño",
      label: "Tamaño",
      options: [
        { value: "mini-cake", label: "Mini Cake", cantidad: "1-2 porciones" },
        { value: "pequena", label: "Pequeña", cantidad: "5-6 porciones" },
        { value: "mediana", label: "Mediana", cantidad: "12-13 porciones" },
        { value: "grande", label: "Grande", cantidad: "18-20 porciones" },
        {
          value: "extra-grande",
          label: "Extra Grande",
          cantidad: "28-30 porciones",
        },
      ],
    },
    {
      value: "Sabor",
      label: "Sabor del Bizcocho",
      options: [
        { value: "vainilla", label: "Vainilla" },
        { value: "chocolate", label: "Chocolate" },
        { value: "fresa", label: "Fresa" },
        { value: "limon", label: "Limon" },
        { value: "tiramisu", label: "Tiramisu" },
      ],
    },
    {
      value: "Diseño",
      label: "Diseño y Cobertura",
      options: [
        {
          value: "cremosa",
          label: "Cremosa",
          description: "Cobertura de crema tradicional",
        },
        {
          value: "fondant",
          label: "Fondant",
          description: "Cobertura de fondant lisa",
        },
        {
          value: "ganache",
          label: "Ganache",
          description: "Cobertura de chocolate ganache",
        },
      ],
    },
    {
      value: "Relleno",
      label: "Rellenos (Selecciona hasta 4)",
      options: [
        { value: "chocolate", label: "Chocolate" },
        { value: "fresa", label: "Fresa" },
        { value: "limon", label: "Limon" },
        { value: "tiramisu", label: "Tiramisu" },
      ],
    },
  ];

  return (
    <form className="w-full" onSubmit={handleSubmit(formSubmit)}>
      <div>
        <div className="flex justify-between  px-16 py-8 pb-14! border-b-1 border-primary">
          {form.map((item, index) => {
            return (
              <div key={item.label} className="relative">
                <div
                  className={`h-[40px] w-[40px] duration-200 rounded-full  flex items-center justify-center text-sm text-xl font-bold ${position === index ? "bg-primary text-white" : "bg-gray-100"}`}
                >
                  {index + 1}
                </div>
                <span className={`absolute -bottom-8 left-[50%] translate-x-[-50%] font-medium ${position === index ? "text-primary" : ""}`}>
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
        <div className="container-form  px-14 py-8 border-gray-200">
          <h2 className="mb-8 font-dm-serif-display text-primary text-2xl text-center">
            {form[position].label}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {position == 0 &&
              form[0].options.map((option) => (
                <button
                  className={`p-3 outline-none py-4 border cursor-pointer border-gray-300 rounded-lg hover:bg-gray-100 text-start ${option.value === size ? "bg-primary! border-primary" : "bg-white"}`}
                  key={option.value}
                  data-value={option.value}
                  type="button"
                  onClick={() => setValue("size", option.value)}
                >
                  <div
                    className={`text-xl  ${option.value === size ? "text-white" : "text-primary"}`}
                  >
                    {option.label}
                  </div>
                  <div
                    className={`text-sm ${option.value === size ? "text-white" : "text-gray-600"}`}
                  >
                    {option.cantidad}
                  </div>
                </button>
              ))}
            {position == 1 &&
              form[1].options.map((option) => (
                <button
                  className={`p-3 outline-none py-4 border cursor-pointer border-gray-300 rounded-lg hover:bg-gray-100 text-center ${option.value === sabor ? "bg-primary! border-primary" : "bg-white"}`}
                  key={option.value}
                  data-value={option.value}
                  type="button"
                  onClick={() => setValue("sabor", option.value)}
                >
                  <div
                    className={`text-xl  ${option.value === sabor ? "text-white" : "text-primary"}`}
                  >
                    {option.label}
                  </div>
                </button>
              ))}
            {position == 2 &&
              form[2].options.map((option) => (
                <button
                  className={`p-3 outline-none py-4 border cursor-pointer border-gray-300 rounded-lg hover:bg-gray-100 text-start ${option.value === diseno ? "bg-primary! border-primary" : "bg-white"}`}
                  key={option.value}
                  data-value={option.value}
                  type="button"
                  onClick={() => setValue("diseno", option.value)}
                >
                  <div
                    className={`text-xl  ${option.value === diseno ? "text-white" : "text-primary"}`}
                  >
                    {option.label}
                  </div>
                  <div
                    className={`text-sm ${option.value === diseno ? "text-white" : "text-gray-600"}`}
                  >
                    {option.description}
                  </div>
                </button>
              ))}
          </div>
        </div>
        <div className="mt-12 pb-8 px-14 flex justify-between">
          <div>
            {position > 0 && (
              <button
                onClick={() => setPosition((prev) => prev - 1)}
                type="button"
                className="bg-primary cursor-pointer hover:bg-rose-400 duration-200 rounded-full  text-white font-dm-sans font-medium py-3 px-6 min-w-[150px] justify-center flex items-center gap-2"
              >
                <FaArrowLeft />
                Regresar
              </button>
            )}
          </div>
          <div>
            {position < 3 && (
              <button
                onClick={() => setPosition((prev) => prev + 1)}
                type="button"
                className="bg-primary cursor-pointer hover:bg-rose-400 duration-200 rounded-full  text-white font-dm-sans font-medium py-3 px-6 min-w-[150px] justify-center flex items-center gap-2"
              >
                Siguiente <FaArrowRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
