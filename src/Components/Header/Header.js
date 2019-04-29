import React from "react";
import style from "./Header.module.scss";

import HeaderSplit from "./HeaderSplit/HeaderSplit";
import HeaderTitleBox from "./HeaderTitleBox/HeaderTitleBox";
import HeaderRoundImg from "./HeaderRoundImg/HeaderRoundImg";

export default props => {
  return (
    <header style={style.header}>
      <HeaderSplit className={style.Right}>
        <HeaderTitleBox className={style.HeaderTitleBox} title={"Rasmivan"} />
      </HeaderSplit>

      <HeaderSplit className={style.Left}>
        <HeaderTitleBox
          className={style.HeaderTitleBox}
          title={"Ilangovan"}
          subtitle={"Full Stack Developer"}
          gitlink={"https://github.com/IRasmivan"}
          gitlinkText={"github"}
          inlink={"https://www.linkedin.com/in/rasmivan-ilangovan-a9853b70/"}
          inlinkText={"LinkedIn"}
          fblink={"https://www.facebook.com/rasmivan.ilangovan?ref=bookmarks"}
          fblinkText={"Facebook"}
        />
      </HeaderSplit>
      <HeaderRoundImg className={style.HeaderRoundImg} />
    </header>
  );
};
