import CreateCSS from "./assets/Create.module.css";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";

import { ArticleSchema } from "../../../schemas/articleSchema";
import { useContext } from "react";
import { ArticleContext } from "../../../contexts/ArticleContext";
import { Toaster } from "react-hot-toast";

export const Create = () => {
  const { onCreateArticle } = useContext(ArticleContext);
  const onSubmit = () => {
    onCreateArticle(values);
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        model: "",
        price: "",
        bodyType: "",
        carImage: "",
        year: "",
        fuel: "",
        description: "",
      },
      validationSchema: ArticleSchema,
      onSubmit,
    });

  return (
    <section id={CreateCSS["create"]}>
      <div className={CreateCSS.container}>
        <form
          className={CreateCSS.wrapper}
          onSubmit={handleSubmit}
          method="POST"
          autoComplete="off"
        >
          <h3>Create your article</h3>
          <div className="row">
            <div className="col-6">
              <fieldset>
                <label htmlFor="model">Vehicle model:</label>
                <input
                  value={values.model}
                  className={
                    errors.model && touched.model
                      ? CreateCSS.inputerr
                      : CreateCSS.carField
                  }
                  onChange={handleChange("model")}
                  onBlur={handleBlur("model")}
                  placeholder="Skoda Superb"
                  id="model"
                  type="text"
                  name="model"
                />
                {errors.model && touched.model && <p>{errors.model}</p>}
              </fieldset>
              <fieldset>
                <label htmlFor="fuel">Engine type:</label>
                <select
                  value={values.fuel}
                  className={
                    errors.fuel && touched.fuel
                      ? CreateCSS.inputerr
                      : CreateCSS.carField
                  }
                  onChange={handleChange("fuel")}
                  onBlur={handleBlur("fuel")}
                  id="fuel"
                  type="text"
                  name="fuel"
                >
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="electric">Electric</option>
                </select>
                {errors.fuel && touched.fuel && <p>{errors.fuel}</p>}
              </fieldset>
              <fieldset>
                <label htmlFor="bodyType">Body type:</label>
                <select
                  value={values.bodyType}
                  className={
                    errors.bodyType && touched.bodyType
                      ? CreateCSS.inputerr
                      : CreateCSS.carField
                  }
                  onChange={handleChange("bodyType")}
                  onBlur={handleBlur("bodyType")}
                  id="bodyType"
                  type="text"
                  name="bodyType"
                >
                  <option value="sedan">Sedan</option>
                  <option value="estate">Estate</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="coupe">Coupe</option>
                  <option value="suv">SUV</option>
                </select>
                {errors.bodyType && touched.bodyType && (
                  <p>{errors.bodyType}</p>
                )}
              </fieldset>
            </div>
            <div className="col-6">
              <fieldset>
                <label htmlFor="year">Vehicle year of production:</label>
                <input
                  value={values.year}
                  className={
                    errors.year && touched.year
                      ? CreateCSS.inputerr
                      : CreateCSS.carField
                  }
                  onChange={handleChange("year")}
                  onBlur={handleBlur("year")}
                  id="year"
                  type="text"
                  name="year"
                />
                {errors.year && touched.year && <p>{errors.year}</p>}
              </fieldset>
              <fieldset>
                <label htmlFor="price">Rental price per day:[$/day]</label>
                <input
                  value={values.price}
                  className={
                    errors.price && touched.price
                      ? CreateCSS.inputerr
                      : CreateCSS.carField
                  }
                  onChange={handleChange("price")}
                  onBlur={handleBlur("price")}
                  id="price"
                  type="text"
                  name="price"
                />
                {errors.price && touched.price && <p>{errors.price}</p>}
              </fieldset>
              <fieldset>
                <label htmlFor="carImage">Vehicle image URL:</label>
                <input
                  value={values.carImage}
                  className={
                    errors.carImage && touched.carImage
                      ? CreateCSS.inputerr
                      : CreateCSS.carField
                  }
                  onChange={handleChange("carImage")}
                  onBlur={handleBlur("carImage")}
                  id="carImage"
                  type="text"
                  name="carImage"
                />
                {errors.carImage && touched.carImage && (
                  <p>{errors.carImage}</p>
                )}
              </fieldset>
            </div>
            <div className="col-12">
              <fieldset>
                <label htmlFor="description">"Why should I choose you:" </label>
                <textarea
                  value={values.description}
                  className={
                    errors.description && touched.description
                      ? CreateCSS.inputerr
                      : CreateCSS.carField
                  }
                  onChange={handleChange("description")}
                  onBlur={handleBlur("description")}
                  id="description"
                  type="text"
                  name="description"
                  cols="2"
                  rows="6"
                ></textarea>
                {errors.description && touched.description && (
                  <p>{errors.description}</p>
                )}
              </fieldset>
            </div>
            <Button className="btn submit" type="submit" value="Submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  );
};
