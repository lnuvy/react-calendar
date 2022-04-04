import React, { useState } from "react";
import { Button, Grid, Text } from "../elements";
import moment from "moment";

const Header = () => {
  const [current, setCurrent] = useState(moment());

  return (
    <>
      <Grid isFlex>
        <Button
          _onClick={() => {
            setCurrent(current.clone().subtract(1, "month"));
          }}
        >
          이전
        </Button>
        <Text bold>{current.format("YYYY년 MM월")}</Text>
        <Button _onClick={() => setCurrent(current.clone().add(1, "month"))}>
          다음
        </Button>
      </Grid>
    </>
  );
};

export default Header;
