"use client";

import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function StyledComponentsRegistry({ children }: Props) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const tags = sheet.getStyleElement();

    sheet.instance.clearTag();

    return <>{tags}</>;
  });

  return (
    <>
      {typeof window !== "undefined" ? (
        <>{children}</>
      ) : (
        <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
      )}
    </>
  );
}
