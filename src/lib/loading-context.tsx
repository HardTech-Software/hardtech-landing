"use client";

import { createContext, useContext } from "react";

/**
 * True while the loading screen overlay is active.
 * Defaults to true so SSR/hydration starts in the "loading" state.
 */
export const LoadingContext = createContext<boolean>(true);

export const useIsLoading = () => useContext(LoadingContext);
