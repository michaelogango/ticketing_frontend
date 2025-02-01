import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = ({ initialValues, validationSchema, onSubmit, fields }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-6 bg-white shadow rounded-lg max-w-md mx-auto">
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          {formik.touched[field.name] && formik.errors[field.name] && (
            <p className="text-red-500 text-sm">{formik.errors[field.name]}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;