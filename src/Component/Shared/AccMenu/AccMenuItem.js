import React, { useEffect, useRef, useState } from "react";
import AccMenuButton from "./AccMenuButton";

const AccMenuItem = ({ children, activeClass, as }) => {
  const [active, setActive] = useState(false);

  // ---------------------------------------------
  // AccordionMenu Configuration Area
  // ---------------------------------------------

  const AsItem = as ? as : "div";
  const AsButton = children[0].props.as ? children[0].props.as : "div";
  const AsBody = children[1].props.as ? children[1].props.as : "div";

  const btnClassName = children[0].props.className
    ? children[0].props.className
    : "";
  const bodyClassName = children[1].props.className
    ? children[1].props.className
    : "";

  // ---------------------------------------------
  // AccordionMenu Event Area
  // ---------------------------------------------

  const accItem = useRef();
  const accButton = useRef();
  const accBody = useRef();
  const AccActiveClass = "Active_Acc_Menu_Item";

  useEffect(() => {
    // get Height
    if (accButton.current) {
      const accBtnHeight = accButton.current.clientHeight;
      accItem.current.style.height = `${accBtnHeight ? accBtnHeight + 2 : 56 + 1}px`;
    }

    // set Acc item Height
  }, [accItem, accButton, accBody]);

  // Handle Toggle --------
  const handleToggle = (e) => {
    const accBody = e.currentTarget.nextElementSibling;
    const accItem = e.currentTarget.parentElement;
    const bodyHeight = accBody.clientHeight;
    const buttonHeight = e.currentTarget.clientHeight;

    if (active) {
      accItem.style.height = `${buttonHeight + 2}px`;
      accItem.classList.remove(AccActiveClass);
      setActive(false);
      handleParent({
        item: accItem,
        hValue: bodyHeight * -1,
      });
    } else {
      accItem.style.height = `${bodyHeight + buttonHeight}px`;
      accItem.classList.add(AccActiveClass);
      setActive(true);
      handleParent({
        item: accItem,
        hValue: bodyHeight,
      });
    }
  };

  // Handle parents Height
  const handleParent = ({ item, hValue }) => {
    const currentItem = item?.parentElement?.parentElement;
    if (currentItem?.classList.contains("Acc_Menu_Item")) {
      const currItemHeight = currentItem?.clientHeight;
      currentItem.style.height = `${currItemHeight + hValue}px`;
    }
  };

  return (
    <>
      <AsItem
        className={`${
          active ? `${activeClass} Active_Acc_Menu_Item` : ""
        } Acc_Menu_Item`}
        ref={accItem}
        style={{
          overflow: "hidden",
          transition: `all .3s ease-in-out`,
        }}
      >
        <AsButton
          ref={accButton}
          onClick={handleToggle}
          className={`${btnClassName} Acc_Menu_Button`}
        >
          {children[0]}
        </AsButton>
        <AsBody className={`${bodyClassName} Acc_Menu_Body`} ref={accBody}>
          {children[1]}
        </AsBody>
      </AsItem>
    </>
  );
};

export default AccMenuItem;
