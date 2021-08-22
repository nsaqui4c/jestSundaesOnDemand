import React, { useState } from "react";
import Popover from "react-bootstrap/Popover";
import { OverlayTrigger } from "react-bootstrap";

export default function SummaryForm() {
  const [btnStatus, setBtnStatus] = useState(true);

  const btnStateHandler = () => {
    setBtnStatus(!btnStatus);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        no icecream will actually going to deliver
      </Popover.Content>
    </Popover>
  );

  return (
    <div>
      <button disabled={btnStatus}>Order</button>
      <input
        id="accept-checkbox"
        type="checkbox"
        defaultChecked={false}
        onClick={btnStateHandler}
      />
      <label htmlFor="accept-checkbox">
        I agree the
        <OverlayTrigger placement="right" overlay={popover}>
          <span>terms and conditions</span>
        </OverlayTrigger>
      </label>
    </div>
  );
}
