export { render };

import React from "react";
import { hydrateRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

async function render(pageContext) {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById("page-view")!,
    <HashRouter>
      <Page {...pageContext.pageProps} />
    </HashRouter>
  );
}
