import { useState } from "react";

const CardEditForm = () => {
  const [selectCard, setSelectCard] = useState({ id: 0, name: "Visa" });
  const [openCardList, setOpenCardList] = useState(false);

  const cards = [
    { id: 0, name: "Visa" },
    { id: 0, name: "Mastercard" },
    { id: 0, name: "Mestro" },
    { id: 0, name: "Amrican Express" },
  ];
  return (
    <>
      <div id="edit-popup" className="">
        <h2>Edit Card Details</h2>
        <form>
          <div className="form-row">
            <label htmlFor="cardnum">Card Number*</label>
            <input
              type="text"
              name="credit-card-edit"
              id="cardnum"
              defaultValue="1234 5678 9012 3456"
              required=""
            />
          </div>
          <div className="form-row">
            <label htmlFor="expdate">Expiry Date*</label>
            <input
              type="text"
              name="credit-card-edit"
              id="expdate"
              defaultValue="05/36"
              required=""
            />
          </div>
          <div className="form-row">
            <label htmlFor="cardholder">Card Holder*</label>
            <input
              type="text"
              name="credit-card-edit"
              id="cardholder"
              defaultValue="Ronal M. Griffim"
              required=""
            />
          </div>
          <div className="form-row">
            <label htmlFor="country*">Credit Card Type*</label>
            <select
              className="credit-card-type"
              name="credit-card-edit"
              id="country*"
              required=""
              style={{ display: "none" }}
            >
              {cards &&
                Array.isArray(cards) &&
                [...cards].map((data, index) => {
                  return (
                    <option key={index} value={data.id}>
                      {data.name}
                    </option>
                  );
                })}
            </select>
            <div
              className={`nice-select credit-card-type ${
                openCardList ? "open" : "false"
              }`}
              tabIndex="0"
              onClick={() => setOpenCardList((e) => !e)}
            >
              <span className="current">{selectCard?.name}</span>
              <ul className="list">
                {[
                  { id: 0, name: "Visa" },
                  { id: 0, name: "Mastercard" },
                  { id: 0, name: "Mestro" },
                  { id: 0, name: "Amrican Express" },
                ].map((data, index) => {
                  return (
                    <li
                      key={index}
                      
                      className={`option ${
                        data.name === selectCard.name ? "selected focus" : ""
                      } `}
                      onClick={() => setSelectCard(data)}
                    >
                      {data.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <input name="credit-card-edit" type="submit" defaultValue="Save" />
        </form>
      </div>
    </>
  );
};

export default CardEditForm;
