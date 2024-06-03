import { Html, PropsWithChildren } from "@kitajs/html";

export function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Prioriza</title>

        <script src="https://unpkg.com/htmx.org@1.9.9" defer></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
        <link rel="stylesheet" href="https://unpkg.com/98.css"></link>
      </head>

      <body data-theme="dark" hx-boost="true">
        {children}
      </body>
    </html>
  );
}
