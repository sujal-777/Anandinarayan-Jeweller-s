"use client";

import * as React from "react";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

// 2. Wrap NextUIProvider at the root of your app
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <NextUIProvider>{children}</NextUIProvider>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
