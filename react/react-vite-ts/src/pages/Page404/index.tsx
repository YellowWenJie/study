import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

function Page404() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary">
            <Link to="/">Back Home</Link>
          </Button>
        }
      />
    </>
  );
}
export default Page404;
